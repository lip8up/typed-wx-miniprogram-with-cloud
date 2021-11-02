import cloud from 'wx-server-sdk'
import { tryParseJson } from '../../lib/util'

export default async () => {
  // 获取基础信息
  const wxContext = cloud.getWXContext()

  const json = tryParseJson('{"a": 1, "b": 2, "c": 3}', { a: 8 })

  const number = await Promise.resolve(1)

  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    env: wxContext.ENV,
    wxContext,
    json,
    number
  }
}
