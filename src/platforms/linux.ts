import * as child_process from "node:child_process";
import * as util from "node:util";

const exec = util.promisify(child_process.exec);

export async function hwid(): Promise<string> {
  const { stdout } = await exec(
    "cat /var/lib/dbus/machine-id /etc/machine-id 2> /dev/null || true"
  );

  const array = stdout.trim().split("\n");
  const first = array[0];
  if (!first) throw new Error("failed to find hwid");

  return first;
}
