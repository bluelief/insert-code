import * as vscode from 'vscode';

export function getEditor(): vscode.TextEditor {
  const editor = vscode.window.activeTextEditor;
  if (editor == null) {
    vscode.window.showInformationMessage('activeTextEditor is null currently.');
    throw new Error();
  }
  return editor;
}

export function currentCursorPosition(
  editor: vscode.TextEditor
): vscode.Position {
  return editor.selection.active;
}
