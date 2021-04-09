import test from 'ava'
import { hash } from '../src/utils.js'

const enum TestData {
  Input = 'this is a test string',
  ResultMD5 = '486eb65274adb86441072afa1e2289f3',
  ResultSHA1 = '9a375f77abb15794900c2689812204273d757c9b',
  ResultSHA256 = 'f6774519d1c7a3389ef327e9c04766b999db8cdfb85d1346c471ee86d65885bc',
}

test('is a function', t => {
  t.is(typeof hash, 'function')
})

test('returns a string', t => {
  const result = hash(TestData.Input, 'sha1')
  t.is(typeof result, 'string')
})

test('correctly hashes using MD5', t => {
  const result = hash(TestData.Input, 'md5')
  t.is(result, TestData.ResultMD5)
})

test('correctly hashes using SHA1', t => {
  const result = hash(TestData.Input, 'sha1')
  t.is(result, TestData.ResultSHA1)
})

test('correctly hashes using SHA256', t => {
  const result = hash(TestData.Input, 'sha256')
  t.is(result, TestData.ResultSHA256)
})

test('only accepts valid algorithms', t => {
  t.notThrows(() => {
    void hash(TestData.Input, 'md5')
    void hash(TestData.Input, 'sha1')
    void hash(TestData.Input, 'sha256')
  })

  t.throws(
    () => {
      // @ts-expect-error
      void hash(TestData.Input, 'abc')
      // @ts-expect-error
      void hash(TestData.Input, 10)
      // @ts-expect-error
      void hash(TestData.Input, true)
    },
    { message: 'Digest method not supported' }
  )
})
