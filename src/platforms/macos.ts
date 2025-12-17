import * as child_process from "node:child_process";
import * as util from "node:util";

const exec = util.promisify(child_process.exec);

export async function hwid(): Promise<string> {
  const { stdout } = await exec("ioreg -rd1 -c IOPlatformExpertDevice");
  const uuid = stdout
    .trim()
    .split("\n")
    .find((line) => line.includes("IOPlatformUUID"))
    ?.replaceAll(/=|\s+|"/gi, "")
    .replaceAll("IOPlatformUUID", "");

  if (!uuid) throw new Error("failed to find hwid");
  return uuid;
}
