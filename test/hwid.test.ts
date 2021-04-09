import test from 'ava'
import { getHWID } from '../src/index.js'

test('returns a string with length > 0', async t => {
  await t.notThrowsAsync(async () => {
    const hwid = await getHWID()
    t.is(typeof hwid, 'string')
    t.assert(hwid.length > 0)
  })
})
