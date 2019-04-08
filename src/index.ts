import { createHash } from 'crypto'

type Algorithm = 'md5' | 'sha1' | 'sha256'
const hash = (id: string, algo?: Algorithm) => {
  const h = createHash(algo || 'sha256')
  h.update(id)
  return h.digest('hex')
}
