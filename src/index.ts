import { platform } from "node:process";
import * as linux from "./platforms/linux";
import * as macos from "./platforms/macos";
import * as windows from "./platforms/windows";

export async function hwid(): Promise<string> {
  if (platform === "win32") return windows.hwid();
  if (platform === "linux") return linux.hwid();
  if (platform === "darwin") return macos.hwid();

  throw new Error(`unsupported platform: ${platform}`);
}
