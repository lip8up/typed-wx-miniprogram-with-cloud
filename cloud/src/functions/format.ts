import { formatWithOptions } from 'util'
import { tryParseJson } from '@/lib/util'

export default (json: string) => {
  // 使用 json 能保证 key 的顺序
  const object = tryParseJson(json, {})
  return formatWithOptions({ depth: 6 }, object)
}
