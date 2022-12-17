/*
 * context.ts
 *
 * Copyright (C) 2022 by Posit Software, PBC
 *
 * Unless you have received this program directly from Posit Software pursuant
 * to the terms of a commercial license agreement with Posit Software, then
 * this program is licensed to you under the terms of version 3 of the
 * GNU Affero General Public License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * AGPL (http://www.gnu.org/licenses/agpl-3.0.txt) for more details.
 *
 */


import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import * as semver from "semver";
import { ExecFileSyncOptions } from "child_process";
import { execProgram } from "core-node";

export interface QuartoContext {
  available: boolean;
  version: string;
  binPath: string;
  resourcePath: string;
  pandocPath: string;
  workspaceDir?: string;
  useCmd: boolean;
  runQuarto: (options: ExecFileSyncOptions, ...args: string[]) => string;
  runPandoc: (options: ExecFileSyncOptions, ...args: string[]) => string;
}

export function initQuartoContext(
  quartoPath?: string,
  workspaceFolder?: string,
  showWarning?: (msg: string) => void
) {
  // default warning to log
  showWarning = showWarning || console.log;

  // first look on the path
  let quartoInstall = detectQuarto("quarto");

  // if not found, look for a user specified quarto
  if (!quartoInstall) {
    // check for user setting (resolving workspace relative paths)
    if (quartoPath) {
      if (!path.isAbsolute(quartoPath) && workspaceFolder) {
        quartoPath = path.join(workspaceFolder, quartoPath);
      }
      quartoInstall = detectUserSpecifiedQuarto(quartoPath, showWarning);
    }
  }

  // if still not found, scan for versions of quarto in known locations
  if (!quartoInstall) {
    quartoInstall = scanForQuarto();
  }

  // return if we got them
  if (quartoInstall) {
    // use cmd suffix for older versions of quarto on windows
    const windows = os.platform() == "win32";
    const useCmd = windows && semver.lte(quartoInstall.version, "1.1.162");
    const pandocPath = path.join(quartoInstall!.binPath, "tools", "pandoc");
    return {
      available: true,
      ...quartoInstall,
      pandocPath,
      workspaceDir: workspaceFolder,
      useCmd,
      runQuarto: (options: ExecFileSyncOptions, ...args: string[]) =>
        execProgram(
          path.join(quartoInstall!.binPath, "quarto" + (useCmd ? ".cmd" : "")),
          args,
          options
        ),
      runPandoc: (options: ExecFileSyncOptions, ...args: string[]) =>
        execProgram(
          pandocPath,
          args,
          options
        ),
    };
  } else {
    return {
      available: false,
      version: "",
      binPath: "",
      resourcePath: "",
      pandocPath: "",
      useCmd: false,
      runQuarto: () => "",
      runPandoc: () => "",
    };
  }
}

type QuartoInstallation = {
  version: string;
  binPath: string;
  resourcePath: string;
};

function detectQuarto(quartoPath: string): QuartoInstallation | undefined {
  // detect version and paths (fall back to .cmd on windows if necessary)
  const windows = os.platform() == "win32";
  let version: string | undefined;
  let paths: string[] | undefined;
  const readQuartoInfo = (bin: string) => {
    version = execProgram(bin, ["--version"]);
    paths = execProgram(bin, ["--paths"]).split(/\r?\n/);
  };
  try {
    readQuartoInfo(quartoPath);
  } catch (e) {
    if (windows) {
      try {
        readQuartoInfo(quartoPath + ".cmd");
      } catch (e) { /* */ }
    }
  }
  // return version if we have it
  if (version && paths) {
    return {
      version,
      binPath: paths[0],
      resourcePath: paths[1],
    };
  } else {
    return undefined;
  }
}

function detectUserSpecifiedQuarto(
  quartoPath: string,
  showWarning: (msg: string) => void
): QuartoInstallation | undefined {
  // validate that it exists
  if (!fs.existsSync(quartoPath)) {
    showWarning(
      "Unable to find specified quarto executable: '" + quartoPath + "'"
    );
    return undefined;
  }

  // validate that it is a file
  if (!fs.statSync(quartoPath).isFile()) {
    showWarning(
      "Specified quarto executable is a directory not a file: '" +
        quartoPath +
        "'"
    );
    return undefined;
  }

  // detect
  return detectQuarto(quartoPath);
}

function scanForQuarto(): QuartoInstallation | undefined {
  const scanPaths: string[] = [];
  if (os.platform() === "win32") {
    scanPaths.push("C:\\Program Files\\Quarto\\bin");
    const localAppData = process.env["LOCALAPPDATA"];
    if (localAppData) {
      scanPaths.push(path.join(localAppData, "Programs", "Quarto", "bin"));
    }
    scanPaths.push("C:\\Program Files\\RStudio\\bin\\quarto\\bin");
  } else if (os.platform() === "darwin") {
    scanPaths.push("/Applications/quarto/bin/");
    const home = process.env.HOME;
    if (home) {
      scanPaths.push(path.join(home, "Applications", "quarto", "bin"));
    }
    scanPaths.push("/Applications/RStudio.app/Contents/MacOS/quarto/bin");
  } else if (os.platform() === "linux") {
    scanPaths.push("/opt/quarto/bin");
    scanPaths.push("/usr/lib/rstudio/bin/quarto/bin");
    scanPaths.push("/usr/lib/rstudio-server/bin/quarto/bin");
  }

  for (const scanPath of scanPaths.filter(fs.existsSync)) {
    const install = detectQuarto(path.join(scanPath, "quarto"));
    if (install) {
      return install;
    }
  }

  return undefined;
}
