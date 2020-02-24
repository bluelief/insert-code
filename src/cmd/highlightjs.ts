import * as vscode from 'vscode';
import * as config from '../utils/config';
import { getEditor, currentCursorPosition } from '../utils/editor';

export function highlightjs(): void {
  const myconfig: string[] = config.getConfig('highlightjs');

  const editor = getEditor();
  const f = function(editBuilder: vscode.TextEditorEdit): void {
    editBuilder.insert(
      currentCursorPosition(editor),
      config.mergeConfig(myconfig)
    );
  };
  const AfterInsert = editor.edit(f);
  AfterInsert.then((isSuccessEditing: boolean) => {
    if (!isSuccessEditing) {
      vscode.window.showErrorMessage('Can not insert code.');
    }
    const currentPosition = currentCursorPosition(editor);
    const translatePosition = currentPosition.translate(-4, 13);
    const newSelection = new vscode.Selection(
      translatePosition,
      translatePosition
    );
    editor.selection = newSelection;
  });
}
