import { formatWithOptions } from 'util'
import { tryParseJson } from '@/lib/util'

export default (object: any) => {
  const json = tryParseJson('{"a": 1, "b": 2}', { a: 8 })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return formatWithOptions({ depth: 6 }, { object, json })
}
