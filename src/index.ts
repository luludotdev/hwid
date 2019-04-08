import { createHash } from 'crypto'
import { ERR_UNKNOWN_PARSE, ERR_UNSUPPORTED_PLATFORM } from './errors'
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

interface IOptions {
  hash: boolean
  algorithm: Algorithm
  upper: boolean
}

export const getHWID = async (options?: Partial<IOptions>) => {
  const hwid = await resolveID()
  if (hwid === undefined) throw ERR_UNSUPPORTED_PLATFORM
  if (hwid === '') throw ERR_UNKNOWN_PARSE

  const shouldHash = options && options.hash
  const hashed = shouldHash ? hash(hwid, options && options.algorithm) : hwid
  return options && options.upper ? hashed.toUpperCase() : hashed.toLowerCase()
}

export { getHWID as default }
