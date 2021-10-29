import cloud from 'wx-server-sdk'

export default () => {
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
