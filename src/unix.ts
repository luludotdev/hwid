import { exec } from 'child_process'
const { platform } = process

export const unixHWID: () => Promise<string> = () =>
  new Promise((resolve, reject) => {
    const command =
      platform === 'darwin'
        ? 'ioreg -rd1 -c IOPlatformExpertDevice'
        : 'cat /var/lib/dbus/machine-id /etc/machine-id 2> /dev/null'

    exec(command, (err, stdout) => {
      if (err) return reject(err)

      const parsed = parse(stdout)
      return resolve(parsed)
    })
  })

const parse = (stdout: string) => {
  switch (platform) {
    case 'darwin':
      return stdout
        .split('IOPlatformUUID')[1]
        .split('\n')[0]
        .replace(/\=|\s+|\"/gi, '')
        .toLowerCase()

    case 'linux':
      return stdout
        .toString()
        .replace(/\r+|\n+|\s+/gi, '')
        .toLowerCase()

    default:
      return ''
  }
}
