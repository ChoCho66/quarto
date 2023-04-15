/*
 * index.ts
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

import React from "react";
import { createRoot } from 'react-dom/client';

import Preview from "./Preview";

import { handleIFrameClicks } from "./iframe";

import "./styles.scss"

export interface Options {
  origin: string | null,
  search: string | null,
  inputFile: string | null,
  isPresentation: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function init(options: Options) {
  try {

    // handle iframe clicks
    if (options.origin && options.search) {
      handleIFrameClicks(options.origin, options.search);
    }

    const previewEl = document.createElement("div");
    document.body.appendChild(previewEl);
    const root = createRoot(previewEl);
    root.render(<Preview />);
  } catch (error) {
    console.error(error);
  }
}




