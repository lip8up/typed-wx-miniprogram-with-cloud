import cloud, { cloudContext, cloudSum } from '../../lib/cloud'

// 获取应用实例
// const app = getApp<IAppOption>()

Page({
  data: {
    motto: 'Hi, 微信小程序😝',
    console: '',
    loading: false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  async callCloud() {
    this.setData({ loading: true })
    try {
      const startTime = Date.now()
      const context = await cloudContext()
      const sum = await cloudSum(0.1, 0.2)
      const baidu = await cloud.transfer('https://baidu.com')
      this.setData({
        console: await cloud.format(JSON.stringify({
          time: new Date(),
          timeUse: Date.now() - startTime,
          context,
          sum,
          baidu
        }))
      })
    } finally {
      this.setData({ loading: false })
    }
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
