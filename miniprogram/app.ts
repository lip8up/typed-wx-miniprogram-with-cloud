// app.ts
App<IAppOption>({
  globalData: {},
  async onLaunch() {
    console.log('=> onLaunch')

    wx.cloud.init({
      env: 'airead-888',
      traceUser: true
    })

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    const res = await wx.login()
    console.log('wx.login success', res.code)
  }
})
