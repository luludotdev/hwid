import { exec } from 'child_process'
import { createHash } from 'crypto'

export type Algorithm = 'md5' | 'sha1' | 'sha256'
export const hash = (id: string, algo: Algorithm) => {
  const h = createHash(algo)
  h.update(id)

  return h.digest('hex')
}

export type ParserFn = (raw: string) => string
export const execa: (command: string, parse: ParserFn) => Promise<string> =
  async (command, parse) =>
    new Promise((resolve, reject) => {
      exec(command, (error, stdout) => {
        if (error) {
          reject(error)
          return
        }

        const parsed = parse(stdout)
        resolve(parsed)
      })
    })
