import { exec } from 'child_process'
import { createHash } from 'crypto'
const { platform, arch } = process

const sha256 = (id: string) => {
  const hash = createHash('sha256')
  hash.update(id)
  return hash.digest('hex')
}
