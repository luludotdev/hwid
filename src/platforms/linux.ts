import type { ResolverFn } from '../resolve'
import { execa } from '../utils'
import type { ParserFn } from '../utils'

const SHELL_COMMAND =
  'cat /var/lib/dbus/machine-id /etc/machine-id 2> /dev/null'

const parse: ParserFn = raw =>
  raw
    .toString()
    .replace(/\r+|\n+|\s+/gi, '')
    .toLowerCase()

export const linuxHWID: ResolverFn = async () => execa(SHELL_COMMAND, parse)