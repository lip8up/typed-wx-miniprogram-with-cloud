import { main as getOpenId } from './getOpenId/index'

export const main = async (event: { functionName: string }, context: any) => {
  switch (event.functionName) {
    case 'getOpenId':
      return await getOpenId(event, context)
  }
}
