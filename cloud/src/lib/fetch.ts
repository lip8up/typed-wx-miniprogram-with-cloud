import got from 'got'
import iconv from 'iconv-lite'

const regexpCharset = /<meta[^>]*content[^>]*=[^>]*charset[^>]*=([\w-]+)|<meta[^>]*charset[^>]*=['"]?([\w-]+)/mi

const getCharset = (text: string) => {
  const [ , g1, g2 ] = text.match(regexpCharset) || []
  return (g1 || g2 || 'utf8').trim().toLowerCase()
}

export async function fetchHtml(url: string) {
  const buffer = got(url).buffer()
  const text = await buffer.text()
  const charset = getCharset(text)
  const html = charset != 'utf8' && charset != 'utf-8'
    ? iconv.decode(await buffer, charset)
    : text

  return html
}
