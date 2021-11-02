import format from '@/functions/format'

test('format', () => {
  expect(format({a: 1, b: 2})).toEqual('{ a: 1, b: 2 }')
  expect(format([1, 2, 3])).toEqual('[ 1, 2, 3 ]')
})
