/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import cloud from 'wx-server-sdk'

export async function main(event: any, context: any) {
  return {
    event,
    context,
    wxContext: cloud.getWXContext(),
  }
}
