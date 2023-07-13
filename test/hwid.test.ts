import { expect, test } from 'vitest'
import { getHWID } from '../src/index.js'

test('is a function', () => {
  expect(typeof getHWID).eq('function')
})

test('returns a string with length > 0', async () => {
  const hwid = await getHWID()
  expect(typeof hwid).eq('string')
  expect(hwid.length).greaterThan(0)
})
