import cloud from 'wx-server-sdk'

cloud.init({
  // @ts-ignore
  env: cloud.DYNAMIC_CURRENT_ENV
})

export const main = async (event: any, context: any) => {
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
