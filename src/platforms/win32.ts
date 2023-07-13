import { promisify } from 'node:util'
import Registry from 'winreg'
import type { ResolverFn } from '../resolve.js'

export const win32HWID: ResolverFn = async () => {
  const regKey = new Registry({
    hive: Registry.HKLM,
    key: '\\SOFTWARE\\Microsoft\\Cryptography',
  })

  const getKey = promisify(regKey.get.bind(regKey))
  const key = await getKey('MachineGuid')

  return key.value.toLowerCase()
}
