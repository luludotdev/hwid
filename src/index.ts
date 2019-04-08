import { createHash } from 'crypto'
import { unixHWID } from './unix'
import { win32HWID } from './win32'
const { platform } = process

type Algorithm = 'md5' | 'sha1' | 'sha256'
const hash = (id: string, algo?: Algorithm) => {
  const h = createHash(algo || 'sha256')
  h.update(id)
  return h.digest('hex')
}

const resolveID = async () => {
  switch (platform) {
    case 'win32':
      return win32HWID()
    case 'darwin':
      return unixHWID()
    case 'linux':
      return unixHWID()
    default:
      return undefined
  }
}
