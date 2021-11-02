/**
 * 解析 json，不抛出异常，若发生异常，返回 defaultValue。
 *
 * @param json json 字符串
 * @param defaultValue 发生错误时，返回的默认值，默认 undefined
 */
export function tryParseJson<T = any>(json: string): T | undefined
export function tryParseJson<T = any>(json: string, defaultValue: T): T
export function tryParseJson<T = any>(json: string, defaultValue?: T) {
  try {
    return JSON.parse(json) as T
  } catch {
    return defaultValue
  }
}
