import { fetchHtml } from '@/lib/fetch'

export default async (url: string) => {
  const body = url ? await fetchHtml(url) : ''

  console.log(body)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*',
    },
    body: body || url,
  }
}
