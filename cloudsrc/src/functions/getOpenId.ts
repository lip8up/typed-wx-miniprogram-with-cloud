import cloud from 'wx-server-sdk'

export default async () => {
  // 获取基础信息
  const wxContext = cloud.getWXContext()

  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
    env: wxContext.ENV,
    wxContext
  }
}
