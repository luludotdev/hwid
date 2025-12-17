import * as util from "node:util";
import Registry from "winreg";

export async function hwid(): Promise<string> {
  const regKey = new Registry({
    hive: Registry.HKLM,
    key: "\\SOFTWARE\\Microsoft\\Cryptography",
  });

  const getKey = util.promisify(regKey.get.bind(regKey));
  const key = await getKey("MachineGuid");

  return key.value.toLowerCase();
}
