import test from 'ava'
import {
  ERR_INVALID_ALGORITHM,
  ERR_INVALID_HASH,
  ERR_INVALID_UPPER,
} from '../src/errors.js'
import { getHWID } from '../src/index.js'

test('is a function', t => {
  t.is(typeof getHWID, 'function')
})

test('accepts no input', async t => {
  await t.notThrowsAsync(async () => {
    await getHWID()
  })
})

test('accepts empty input', async t => {
  await t.notThrowsAsync(async () => {
    await getHWID({})
  })
})

test('accepts partial valid input', async t => {
  await t.notThrowsAsync(async () => {
    await getHWID({ hash: true })
  })
})

test('accepts full valid input', async t => {
  await t.notThrowsAsync(async () => {
    await getHWID({ hash: true, algorithm: 'md5', upper: true })
  })
})

test('does not accept invalid hash', async t => {
  const is = ERR_INVALID_HASH

  await t.throwsAsync(
    async () => {
      // @ts-expect-error
      await getHWID({ hash: 'yes' })
    },
    { is }
  )

  await t.throwsAsync(
    async () => {
      // @ts-expect-error
      await getHWID({ hash: 1 })
    },
    { is }
  )

  await t.throwsAsync(
    async () => {
      // @ts-expect-error
      await getHWID({ hash: [] })
    },
    { is }
  )

  await t.throwsAsync(
    async () => {
      // @ts-expect-error
      await getHWID({ hash: {} })
    },
    { is }
  )
})

test('does not accept invalid algo', async t => {
  const is = ERR_INVALID_ALGORITHM

  await t.throwsAsync(
    async () => {
      // @ts-expect-error
      await getHWID({ algorithm: true })
    },
    { is }
  )

  await t.throwsAsync(
    async () => {
      // @ts-expect-error
      await getHWID({ algorithm: 1 })
    },
    { is }
  )

  await t.throwsAsync(
    async () => {
      // @ts-expect-error
      await getHWID({ algorithm: [] })
    },
    { is }
  )

  await t.throwsAsync(
    async () => {
      // @ts-expect-error
      await getHWID({ algorithm: {} })
    },
    { is }
  )
})

test('does not accept invalid upper', async t => {
  const is = ERR_INVALID_UPPER

  await t.throwsAsync(
    async () => {
      // @ts-expect-error
      await getHWID({ upper: 'yes' })
    },
    { is }
  )

  await t.throwsAsync(
    async () => {
      // @ts-expect-error
      await getHWID({ upper: 1 })
    },
    { is }
  )

  await t.throwsAsync(
    async () => {
      // @ts-expect-error
      await getHWID({ upper: [] })
    },
    { is }
  )

  await t.throwsAsync(
    async () => {
      // @ts-expect-error
      await getHWID({ upper: {} })
    },
    { is }
  )
})
