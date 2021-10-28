import { tryParseJson } from '@/lib/util'

test('check config', () => {
  expect(tryParseJson('{"a":1, "b":2}')).toEqual({ a: 1, b: 2 })
  expect(tryParseJson('{"a":1, "b":}', { x: 1 })).toEqual({ x: 1 })
})
