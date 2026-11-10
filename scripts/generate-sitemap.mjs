/**
 * PIXORIA — sitemap generator (dev-time)
 * Reads generated routes + file mtimes → public/sitemap.xml
 */
import { readFile, writeFile, stat } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { existsSync } from 'node:fs'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const SITE = 'https://pixoria.ir'

const routes = JSON.parse(await readFile(join(ROOT, '.routes.json'), 'utf8'))

const PRIORITY = {
  '': 1.0,
  '/services': 0.9,
  '/portfolio': 0.9,
  '/blog': 0.9,
  '/contact': 0.9,
  '/about': 0.8
}

const escapeXml = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const urls = []
for (const r of routes) {
  const isFile = existsSync(join(ROOT, r + '.html')) // error pages
  const htmlPath = isFile ? join(ROOT, r + '.html') : join(ROOT, r === '' ? 'index.html' : r + '/index.html')
  let lastmod = new Date().toISOString().split('T')[0]
  try {
    const st = await stat(htmlPath)
    lastmod = st.mtime.toISOString().split('T')[0]
  } catch { /* keep today */ }
  const prio = PRIORITY[r] ?? (r.startsWith('/services/') ? 0.8 : r.startsWith('/blog/articles') ? 0.7 : 0.6)
  urls.push(`  <url>\n    <loc>${SITE}${r === '' ? '/' : r + '/'}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r === '' ? 'weekly' : 'monthly'}</changefreq>\n    <priority>${prio}</priority>\n  </url>`)
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`

await writeFile(join(ROOT, 'public', 'sitemap.xml'), xml)
console.log(`✔ sitemap.xml written with ${urls.length} URLs`)
