import type functionGetOpenId from '@cloud/functions/getOpenId'
import type functionSum from '@cloud/functions/sum'
import type functionFormat from '@cloud/functions/format'

const callFunction = async (functionName: string, args?: any) => {
  return wx.cloud.callFunction({
    name: 'airead',
    data: {
      functionName,
      ...args
    }
  })
}

export const cloudGetOpenId: PromiseReturnType<typeof functionGetOpenId> = async () => {
  const res = await callFunction('getOpenId')
  return res.result as any
}

export const cloudSum: PromiseReturnType<typeof functionSum>  = async (a, b) => {
  const res = await callFunction('sum', { a, b })
  return res.result as any
}

export const cloudFormat: PromiseReturnType<typeof functionFormat>  = async (object) => {
  const res = await callFunction('format', { object })
  return res.result as any
}

export default {
  getOpenId: cloudGetOpenId,
  sum: cloudSum,
  format: cloudFormat,
}
