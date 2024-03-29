import { platform } from 'node:process'
import { darwinHWID } from './platforms/darwin.js'
import { linuxHWID } from './platforms/linux.js'
import { win32HWID } from './platforms/win32.js'

export type ResolverFn = () => Promise<string>

export const resolveID: ResolverFn = async () => {
  switch (platform) {
    case 'win32':
      return win32HWID()

    case 'darwin':
      return darwinHWID()

    case 'linux':
      return linuxHWID()

    default:
      throw new Error('unsupported platform')
  }
}
