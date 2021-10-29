// 替换返回值类型
type ReplaceReturnType<T extends (...args: any) => any, TNewReturn> = (...args: Parameters<T>) => TNewReturn

// 将返回值类型 Promise 化
type PromiseReturnType<T extends (...args: any) => any> = (...args: Parameters<T>) => ReturnType<T> extends Promise<infer U> ? ReturnType<T> : Promise<ReturnType<T>>

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}
