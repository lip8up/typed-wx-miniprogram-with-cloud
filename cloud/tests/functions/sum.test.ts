import sum from '@/functions/sum'

test('sum', () => {
  expect(sum(0.1, 0.2)).toEqual(0.1 + 0.2)
})
