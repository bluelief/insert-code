import * as vscode from 'vscode';
import { highlightjs } from './cmd/highlightjs';
import { optionCmdA } from './cmd/optionCmdA';
import { optionCmdB } from './cmd/optionCmdB';

export function activate(context: vscode.ExtensionContext): void {
  const extentionHighlighjs = vscode.commands.registerCommand(
    'extension.highlightjs',
    () => {
      highlightjs();
    }
  );
  const extentionOptionCmdA = vscode.commands.registerCommand(
    'extension.optionCmdA',
    () => {
      optionCmdA();
    }
  );
  const extentionOptionCmdB = vscode.commands.registerCommand(
    'extension.optionCmdB',
    () => {
      optionCmdB();
    }
  );
  context.subscriptions.push(extentionHighlighjs);
  context.subscriptions.push(extentionOptionCmdA);
  context.subscriptions.push(extentionOptionCmdB);
}

export function deactivate(): void {
  vscode.window.showInformationMessage('deactivate.');
}
