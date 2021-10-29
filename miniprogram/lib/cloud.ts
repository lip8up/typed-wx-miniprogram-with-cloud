import { callFunction } from './util'
import type cloudGetOpenId from '@cloud/functions/getOpenId'
import type cloudSum from '@cloud/functions/sum'

export const getOpenId: typeof cloudGetOpenId = async () => {
  const res = await callFunction('getOpenId')
  return res.result as any
}

export const sum: typeof cloudSum = async (a, b) => {
  const res = await callFunction('sum', { a, b })
  return res.result as any
}
