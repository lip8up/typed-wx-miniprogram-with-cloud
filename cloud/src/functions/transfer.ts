import { fetchHtml } from '@/lib/fetch'
import cheerio from 'cheerio'

export default async (url: string) => {
  const html = url ? await fetchHtml(url) : ''
  const q = cheerio.load(html)
  const title = q('title').text()
  const description = q('meta[name="description"]').attr().content

  return {
    title,
    description
  }
}
