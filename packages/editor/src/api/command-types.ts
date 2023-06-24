/*
 * command-types.ts
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


export enum EditorCommandId {
  // text editing
  Undo = '201CA961-829E-4708-8FBC-8896FDE85A10',
  Redo = 'B6272475-04E0-48C0-86E3-DAFA763BDF7B',
  SelectAll = 'E42BF0DA-8A02-4FCE-A202-7EA8A4833FC5',
  ClearFormatting = 'C22D8CC4-0A9F-41D5-B540-7DAAAB80F344',
  PasteRaw = '228322A2-3679-401A-AC31-AC21540C72F3',

  // formatting
  Strong = '83B04020-1195-4A65-8A8E-7C173C87F439',
  Em = '9E1B73E4-8140-43C3-92E4-A5E2583F40E6',
  Code = '32621150-F829-4B8F-B5BD-627FABBBCF53',
  Strikeout = 'D5F0225B-EC73-4600-A1F3-01F418EE8CB4',
  Superscript = '0200D2FC-B5AF-423B-8B7A-4A7FC3DAA6AF',
  Subscript = '3150428F-E468-4E6E-BF53-A2713E59B4A0',
  Smallcaps = '41D8030F-5E8B-48F2-B1EE-6BC40FD502E4',
  Underline = '7F0E6AE2-08F4-4594-9BA2-E6B8B27FA8F7',
  Paragraph = '20EC2695-75CE-4DCD-A644-266E9F5F5913',
  Heading1 = '5B77642B-923D-4440-B85D-1A27C9CF9D77',
  Heading2 = '42985A4B-6BF2-4EEF-AA30-3E84A8B9111C',
  Heading3 = '3F84D9DF-5EF6-484C-8615-BAAE2AC9ECE2',
  Heading4 = 'DA76731D-1D84-4DBA-9BEF-A6F73536F0B9',
  Heading5 = '59E24247-A140-466A-BC96-3C8ADABB57A5',
  Heading6 = 'DB495DF5-8501-43C7-AE07-59CE9D9C373D',
  CodeBlock = '3BA12A49-3E29-4ABC-9A49-436A3B49B880',
  CodeBlockFormat = '07A6F2AA-01DC-41D7-9F01-AA91EAD856EE',
  Blockquote = 'AF0717E7-E4BA-4909-9F10-17EB757CDD0F',
  LineBlock = 'F401687C-B995-49AF-B2B0-59C158174FD5',
  AttrEdit = '0F8A254D-9272-46BF-904D-3A9D68B91032',
  Span = '852CF3E3-8A2B-420D-BD95-F79C54118E7E',
  Div = '15EDB8F1-6015-4DA9-AE50-5987B24C1D96',
  InsertDiv = 'ACA1521B-8875-4113-9D43-B47F0038B19F',

  // lists
  BulletList = 'D897FD2B-D6A4-44A7-A404-57B5251FBF64',
  OrderedList = '3B8B82D5-7B6C-4480-B7DD-CF79C6817980',
  TightList = 'A32B668F-74F3-43D7-8759-6576DDE1D603',
  ListItemSink = '7B503FA6-6576-4397-89EF-37887A1B2EED',
  ListItemLift = '53F89F57-22E2-4FCC-AF71-3E382EC10FC8',
  ListItemSplit = '19BBD87F-96D6-4276-B7B8-470652CF4106',
  ListItemCheck = '2F6DA9D8-EE57-418C-9459-50B6FD84137F',
  ListItemCheckToggle = '34D30F3D-8441-44AD-B75A-415DA8AC740B',
  EditListProperties = 'E006A68C-EA39-4954-91B9-DDB07D1CBDA2',

  // tables
  TableInsertTable = 'FBE39613-2DAA-445D-9E92-E1EABFB33E2C',
  TableToggleHeader = 'A5EDA226-A3CA-4C1B-8D4D-C2675EF51AFF',
  TableToggleCaption = 'C598D85C-E15C-4E10-9850-95882AEC7E60',
  TableNextCell = '14299819-3E19-4A27-8D0B-8035315CF0B4',
  TablePreviousCell = '0F041FB5-0203-4FF1-9D13-B16606A80F3E',
  TableAddColumnBefore = '2447B81F-E07A-4C7D-8026-F2B148D5FF4A',
  TableAddColumnAfter = 'ED86CFAF-D0B3-4B1F-9BB8-89987A939C8C',
  TableDeleteColumn = 'B3D077BC-DD51-4E3A-8AD4-DE5DE686F7C4',
  TableAddRowBefore = 'E97FB318-4052-41E5-A2F5-55B64E9826A5',
  TableAddRowAfter = '3F28FA24-4BDD-4C13-84FF-9C5E1D4B04D6',
  TableDeleteRow = '5F3B4DCD-5006-43A5-A069-405A946CAC68',
  TableDeleteTable = '116D1E68-9315-4FEB-B6A0-AD25B3B9C881',
  TableAlignColumnLeft = '0CD6A2A4-06F9-435D-B8C9-070B22B19D8',
  TableAlignColumnRight = '86D90C12-BB12-4A9D-802F-D00EB7CEF2C5',
  TableAlignColumnCenter = '63333996-2F65-4586-8494-EA9CAB5A7751',
  TableAlignColumnDefault = '7860A9C1-60AF-40AD-9EB8-A10F6ADF25C5',

  // insert
  OmniInsert = '12F96C13-38C1-4266-A0A1-E871D8C709FB',
  Table = 'CBD3ACC6-B2A3-457D-885C-EDA600F6FC67',
  Link = '842FCB9A-CA61-4C5F-A0A0-43507B4B3FA9',
  RemoveLink = '072D2084-218D-4A34-AF1F-7E196AF684B2',
  Image = '808220A3-2B83-4CB6-BCC1-46565D54FA47',
  Footnote = '1D1A73C0-F0E1-4A0F-BEBC-08398DE14A4D',
  ParagraphInsert = '4E68830A-3E68-450A-B3F3-2591F4EB6B9A',
  HorizontalRule = 'EAA7115B-181C-49EC-BDB1-F0FF10369278',
  YamlMetadata = '431B5A45-1B25-4A55-9BAF-C0FE95D9B2B6',
  Shortcode = '0FDDA7E8-419D-4A5D-A1F5-74061466655D',
  InlineMath = 'A35C562A-0BD6-4B14-93D5-6FF3BE1A0C8A',
  DisplayMath = '3E36BA99-2AE9-47C3-8C85-7CC5314A88DF',
  InlineRCode = 'E7F3B2ED-7C45-4B1F-A2C6-C549C2913025',
  Citation = 'EFFCFC81-F2E7-441E-B7FA-C693146B4185',
  CrossReference = '48CEED4F-1D18-4AF9-8686-9FEB5DF6BCC8',
  DefinitionList = 'CFAB8F4D-3350-4398-9754-8DE0FB95167B',
  DefinitionTerm = '204D1A8F-8EE6-424A-8E69-99768C85B39E',
  DefinitionDescription = 'F0738D83-8E11-4CB5-B958-390190A2D7DD',
  Symbol = '1419765F-6E4A-4A4C-8670-D9E8578EA996',
  Emoji = 'F73896A2-02CC-4E5D-A596-78444A1D2A37',
  EmDash = '5B0DD33B-6209-4713-B8BB-60B5CA0BC3B3',
  EnDash = 'C32AFE32-0E57-4A16-9C39-88EB1D82B8B4',
  NonBreakingSpace = 'CF6428AB-F36E-446C-8661-2781B2CD1169',
  HardLineBreak = '3606FF87-866C-4729-8F3F-D065388FC339',
  Tabset = '7327AF95-3EA7-42C8-8C42-D4CB0D15CAE4',
  Callout = 'DC86C28A-0140-4EB5-A745-2C1EFA55C94D',

  // raw
  TexInline = 'CFE8E9E5-93BA-4FFA-9A77-BA7EFC373864',
  TexBlock = 'BD11A6A7-E528-40A2-8139-3F8F5F556ED2',
  HTMLComment = 'F973CBA4-2882-4AC5-A642-47F4733EBDD4',
  HTMLInline = 'C682C6B5-E58D-498C-A38F-FB07BEC3A82D',
  HTMLBlock = '6F9F64AF-711F-4F91-8642-B51C41717F31',
  RawInline = '984167C8-8582-469C-97D8-42CB12773657',
  RawBlock = 'F5757992-4D33-45E6-86DC-F7D7B174B1EC',

  // user comments
  UserComment = '201FA139-4C86-4A5D-AF98-DE9EFB1A867C',

  // chunk
  RCodeChunk = 'EBFD21FF-4A6E-4D88-A2E0-B38470B00BB9',
  BashCodeChunk = '5FBB7283-E8AB-450C-9359-A4658CBCD136',
  D3CodeChunk = 'C73CA46C-B56F-40B6-AEFA-DDBB30CA8C08',
  PythonCodeChunk = '42A7A138-421A-4DCF-8A88-FE2F8EC5B8F6',
  JuliaCodeChunk = '84386434-EE31-4F0D-BBE9-55F5199FAF04',
  RcppCodeChunk = '6BD2810B-6B20-4358-8AA4-74BBFFC92AC3',
  SQLCodeChunk = '41D61FD2-B56B-48A7-99BC-2F60BC0D9F78',
  StanCodeChunk = '65D33344-CBE9-438C-B337-A538F8D7FCE5',
  MermaidCodeChunk = 'FCA99491-2FCA-44BC-8349-A9AE2AE940DE',
  GraphVizCodeChunk = '29970A38-2921-4F32-8363-F78CFE3FEBB4',
  ExecuteCurentRmdChunk = '31C799F3-EF18-4F3A-92E6-51F7A3193A1B',
  ExecuteCurrentPreviousRmdChunks = 'D3FDE96-0264-4364-ADFF-E87A75405B0B',
  ExpandChunk = '0226518C-559A-4BFC-A5BD-244BEE8175AA',
  CollapseChunk = '4AFBBC0C-A6DA-4019-B85F-374636E349C3',
  ExpandAllChunks = 'B217913B-67C9-457F-B766-7FCCB502F611',
  CollapseAllChunks = '9907A864-D707-4410-93A4-07871A8C43A6',

  // outline
  GoToNextSection = 'AE827BDA-96F8-4E84-8030-298D98386765',
  GoToPreviousSection = 'E6AA728C-2B75-4939-9123-0F082837ACDF',
  GoToNextChunk = '50DD6E51-13B5-4F1E-A46B-6A33EB1609D9',
  GoToPreviousChunk = '8D105D33-78FE-4A98-8195-6B71361424C5',

  // slides
  InsertSlidePause = 'FCA8BF2E-2668-4919-92FC-02083EB48246',
  InsertSlideNotes = '9C709915-02BE-4F4F-9CEB-50E17973C9BE',
  InsertSlideColumns = 'AE62D05F-1415-4E1F-84AE-753EE2393002'
}

export interface EditorCommand {
  readonly id: EditorCommandId;
  readonly keymap: readonly string[];
  readonly isEnabled: () => boolean;
  readonly isActive: () => boolean;
  readonly plural: () => number;
  readonly execute: () => void;
}
