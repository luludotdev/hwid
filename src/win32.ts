import Registry from 'winreg'

export const win32HWID: () => Promise<string> = () =>
  new Promise((resolve, reject) => {
    const regKey = new Registry({
      hive: Registry.HKLM,
      key: '\\SOFTWARE\\Microsoft\\Cryptography',
    })

    regKey.get('MachineGuid', (err, item) => {
      if (err) return reject(err)
      else return resolve(item.value.toLowerCase())
    })
  })
