import * as vscode from 'vscode';

export function getConfig(dataElement: string): string[] {
  const userConfig: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration(
    'insertcode'
  );
  return userConfig[dataElement];
}

export function mergeConfig(config: string[]): string {
  let result = '';
  const endspace = '\n';
  for (let i = 0; i < config.length; i++) {
    result += config[i] + endspace;
  }
  result += endspace;
  return `${result}`;
}
