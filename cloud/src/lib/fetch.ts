import fetchLib from 'node-fetch'
import iconv  from 'iconv-lite'
import AbortController from 'abort-controller'

const fetch = async (url: string) => {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 3000)
  try {
    return await fetchLib(url, { signal: controller.signal })
  } catch (ex) {
    console.error(ex)
    throw ex
  } finally {
    clearTimeout(timer)
  }
}

const regexpCharset = /<meta[^>]*content[^>]*=[^>]*charset[^>]*=([\w-]+)|<meta[^>]*charset[^>]*=['"]?([\w-]+)/mi

const getCharset = (text: string) => {
  const [ , g1, g2 ] = text.match(regexpCharset) || []
  return (g1 || g2 || 'utf8').trim().toLowerCase()
}

export async function fetchHtml(url: string) {
  const res = await fetch(url)

  const buffer = await res.buffer()
  const text = buffer.toString()
  const charset = getCharset(text)
  const html = charset != 'utf8' && charset != 'utf-8'
    ? iconv.decode(buffer, charset)
    : text

  return html
}
