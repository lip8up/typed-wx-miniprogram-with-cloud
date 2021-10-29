/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import cloud from 'wx-server-sdk'
import getOpenId from './functions/getOpenId'
import sum from './functions/sum'

cloud.init({
  // @ts-ignore
  env: cloud.DYNAMIC_CURRENT_ENV
})

export const main = async (event: any, context: any) => {
  switch (event.functionName) {
    case 'getOpenId':
      return await getOpenId()
    case 'sum':
      return await sum(event.a, event.b)
    default:
      throw new Error(`no such function ${event.functionName}`)
  }
}
