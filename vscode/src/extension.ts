import * as vscode from "vscode";

import { processCmd, Command } from "./commands";
import { PgStorage } from "./utils";

export function activate(context: vscode.ExtensionContext) {
  // Get access to global state
  PgStorage.state = context.globalState;

  context.subscriptions.push(
    vscode.commands.registerCommand("solana-dev.address", () =>
      processCmd(Command.Address)
    ),
    vscode.commands.registerCommand("solana-dev.airdrop", () =>
      processCmd(Command.Airdrop)
    ),
    vscode.commands.registerCommand("solana-dev.balance", () =>
      processCmd(Command.Balance)
    ),
    vscode.commands.registerCommand("solana-dev.build", () =>
      processCmd(Command.Build)
    ),
    vscode.commands.registerCommand("solana-dev.connection", () =>
      processCmd(Command.Connection)
    ),
    vscode.commands.registerCommand("solana-dev.createAnchor", () =>
      processCmd(Command.CreateAnchor)
    ),
    vscode.commands.registerCommand("solana-dev.createNative", () =>
      processCmd(Command.CreateNative)
    ),
    vscode.commands.registerCommand("solana-dev.createSeahorse", () =>
      processCmd(Command.CreateSeahorse)
    ),
    vscode.commands.registerCommand("solana-dev.deploy", () =>
      processCmd(Command.Deploy)
    ),
    vscode.commands.registerCommand("solana-dev.share", () =>
      processCmd(Command.Share)
    )
  );
}

export function deactivate() {}
