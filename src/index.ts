import { ERR_UNKNOWN_PARSE } from './errors'
import { resolveID } from './resolve'
import { hash } from './utils'
import type { Algorithm } from './utils'

interface IOptions {
  hash: boolean
  algorithm: Algorithm
  upper: boolean
}

export const getHWID = async (options?: Partial<IOptions>) => {
  const hwid = await resolveID()
  if (hwid === '') throw ERR_UNKNOWN_PARSE

  const shouldHash = options?.hash ?? false
  const hashed = shouldHash ? hash(hwid, options?.algorithm) : hwid
  return options?.upper ?? false ? hashed.toUpperCase() : hashed.toLowerCase()
}

export { getHWID as default }
