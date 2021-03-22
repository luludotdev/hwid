import Registry from 'winreg'
import type { ResolverFn } from '../resolve'

export const win32HWID: ResolverFn = async () =>
  new Promise((resolve, reject) => {
    const regKey = new Registry({
      hive: Registry.HKLM,
      key: '\\SOFTWARE\\Microsoft\\Cryptography',
    })

    regKey.get('MachineGuid', (error, item) => {
      if (error) {
        reject(error)
        return
      }

      resolve(item.value.toLowerCase())
    })
  })
