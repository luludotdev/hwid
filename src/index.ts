import { ERR_UNKNOWN_PARSE } from './errors'
import { resolveID } from './resolve'
import { hash } from './utils'
import type { Algorithm } from './utils'

interface IOptions {
  /**
   * Whether or not to hash the HWID before returning
   *
   * Defaults to `false`
   */
  hash: boolean

  /**
   * Hashing algorithm to use if `hash` is `true`
   *
   * Defaults to `sha256`
   */
  algorithm: Algorithm

  /**
   * Convert HWID to UPPERCASE
   *
   * Defaults to `false`
   */
  upper: boolean
}

export const getHWID = async (options?: Partial<IOptions>) => {
  const hwid = await resolveID()
  if (hwid === '') throw ERR_UNKNOWN_PARSE

  const shouldHash = options?.hash ?? false
  const hashed = shouldHash ? hash(hwid, options?.algorithm ?? 'sha256') : hwid
  return options?.upper ?? false ? hashed.toUpperCase() : hashed.toLowerCase()
}

export { getHWID as default }
