import {
  ERR_INVALID_ALGORITHM,
  ERR_INVALID_HASH,
  ERR_INVALID_UPPER,
  ERR_UNKNOWN_PARSE,
} from './errors'
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
  if (options?.hash !== undefined && typeof options.hash !== 'boolean') {
    throw ERR_INVALID_HASH
  }

  if (
    options?.algorithm !== undefined &&
    typeof options.algorithm !== 'string'
  ) {
    throw ERR_INVALID_ALGORITHM
  }

  if (options?.upper !== undefined && typeof options.upper !== 'boolean') {
    throw ERR_INVALID_UPPER
  }

  const hwid = await resolveID()
  if (hwid === '') throw ERR_UNKNOWN_PARSE

  const shouldHash = options?.hash ?? false
  const hashed = shouldHash ? hash(hwid, options?.algorithm ?? 'sha256') : hwid
  return options?.upper ?? false ? hashed.toUpperCase() : hashed.toLowerCase()
}

export { getHWID as default }
