/*
 * extension.ts
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

import { InputRule } from 'prosemirror-inputrules';
import { Schema } from 'prosemirror-model';
import { Plugin } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

import { ProsemirrorCommand } from './command';
import { PandocMark } from './mark';
import { PandocNode } from './node';
import { EditorMath, EditorUI } from './ui-types';
import { BaseKeyBinding } from './basekeys';
import { AppendTransactionHandler, AppendMarkTransactionHandler } from './transaction';
import { EditorOptions } from './options';
import { PandocExtensions } from './pandoc';
import { FixupFn } from './fixup';
import { EditorEvents } from './event-types';
import { PandocCapabilities } from './pandoc_capabilities';
import { EditorFormat } from './format';
import { MarkInputRuleFilter } from './input_rule';
import { CompletionHandler } from './completion';
import { EditorNavigation } from './navigation-types';
import { EditorServer } from 'editor-types';

export interface Extension {
  view?: (view: EditorView) => void;
  marks?: PandocMark[];
  nodes?: PandocNode[];
  baseKeys?: (schema: Schema) => readonly BaseKeyBinding[];
  inputRules?: (schema: Schema, markFilter: MarkInputRuleFilter) => readonly InputRule[];
  commands?: (schema: Schema) => readonly ProsemirrorCommand[];
  plugins?: (schema: Schema) => readonly Plugin[];
  appendTransaction?: (schema: Schema) => readonly AppendTransactionHandler[];
  appendMarkTransaction?: (schema: Schema) => readonly AppendMarkTransactionHandler[];
  fixups?: (schema: Schema, view: EditorView) => Readonly<FixupFn[]>;
  completionHandlers?: () => readonly CompletionHandler[];
}

export interface ExtensionContext {
  pandocExtensions: PandocExtensions;
  pandocCapabilities: PandocCapabilities;
  server: EditorServer;
  ui: EditorUI;
  math?: EditorMath;
  format: EditorFormat;
  options: EditorOptions;
  events: EditorEvents;
  navigation: EditorNavigation;
}

export type ExtensionFn = (context: ExtensionContext) => Extension | null;

// create an ExtensionFn for a given extension and format option that must be enabled
export function extensionIfEnabled(extension: Extension, name: string | string[]) {
  return (context: ExtensionContext) => {
    if (extensionEnabled(context.pandocExtensions, name)) {
      return extension;
    } else {
      return null;
    }
  };
}

export function extensionEnabled(pandocExtensions: PandocExtensions, name: string | string[]) {
  // match single extension name
  if (typeof name === 'string') {
    if (pandocExtensions[name]) {
      return true;
    }

    // match any one of several names
  } else if (Array.isArray(name)) {
    for (const nm of name) {
      if (pandocExtensions[nm]) {
        return true;
      }
    }
  }

  return false;
}
