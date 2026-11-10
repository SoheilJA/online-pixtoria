/**
 * PIXORIA — internal link & SEO sanity checker
 * Usage: node scripts/check-links.mjs [--dist]
 *  --dist : verify the production build in dist/ instead of the source tree
 */
import { readdir, readFile, stat } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { existsSync, statSync } from 'node:fs'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const IN_DIST = process.argv.includes('--dist')
const BASE = IN_DIST ? join(ROOT, 'dist') : ROOT

async function walk (dir, out = []) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    if (['node_modules', '.git', 'public', 'scripts', 'templates', 'content', 'docs', 'src', 'assets-build', 'dist', 'dist-sub'].includes(e.name)) continue
    const p = join(dir, e.name)
    if (e.isDirectory()) await walk(p, out)
    else if (e.name.endsWith('.html')) out.push(p)
  }
  return out
}

const files = await walk(BASE)
const errors = []
const warnings = []
const titles = {}
const descriptions = {}
const h1s = {}

const checkPath = p => {
  try {
    const st = statSync(p)
    if (st.isDirectory()) return existsSync(join(p, 'index.html'))
    return st.isFile()
  } catch { return false }
}
const fileExists = urlPath => {
  if (!urlPath.startsWith('/')) return true // relative or external
  const clean = urlPath.split('#')[0].split('?')[0]
  if (clean === '/' || clean === '') return existsSync(join(BASE, 'index.html'))
  const rel = clean.replace(/^\/+/, '')
  return checkPath(join(BASE, rel)) || checkPath(join(BASE, 'public', rel))
}

for (const f of files) {
  const html = await readFile(f, 'utf8')
  const rel = f.replace(BASE, '').replace(/^[\\/]/, '')

  /* links & assets */
  const refs = [
    ...html.matchAll(/<a\s[^>]*href="([^"]+)"/g),
    ...html.matchAll(/<link\s[^>]*href="([^"]+)"/g),
    ...html.matchAll(/<script\s[^>]*src="([^"]+)"/g),
    ...html.matchAll(/<img\s[^>]*src="([^"]+)"/g)
  ]
  for (const m of refs) {
    const href = m[1]
    if (/^(https?:|mailto:|tel:|wa\.me|t\.me)/.test(href)) continue
    if (href === '#' || href === '') { errors.push(`${rel}: empty href="#" placeholder`); continue }
    if (href.startsWith('#')) {
      const id = href.slice(1)
      if (id && !html.includes(`id="${id}"`)) errors.push(`${rel}: broken anchor ${href}`)
      continue
    }
    if (!fileExists(href)) errors.push(`${rel}: missing target ${href}`)
  }

  /* bare href="#" anywhere in onclick-ish attrs */
  if (/href="#"/.test(html)) errors.push(`${rel}: literal href="#" found`)

  /* single h1 */
  const h1Count = (html.match(/<h1[\s>]/g) || []).length
  if (h1Count !== 1) h1s[rel] = h1Count

  /* unique title/desc */
  const t = html.match(/<title>([^<]*)<\/title>/)
  const d = html.match(/<meta name="description" content="([^"]*)"/)
  if (t) {
    if (titles[t[1]]) errors.push(`duplicate <title>: "${t[1]}" (${rel} & ${titles[t[1]]})`)
    titles[t[1]] = rel
    if (t[1].length > 65) warnings.push(`${rel}: title longer than 65 chars (${t[1].length})`)
  } else errors.push(`${rel}: missing <title>`)
  if (d) {
    if (descriptions[d[1]]) errors.push(`duplicate meta description (${rel} & ${descriptions[d[1]]})`)
    descriptions[d[1]] = rel
  } else errors.push(`${rel}: missing meta description`)

  /* JSON-LD well-formed */
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]) } catch (e) { errors.push(`${rel}: invalid JSON-LD (${e.message})`) }
  }

  /* leftover junk */
  for (const bad of ['TODO', 'Lorem ipsum', 'XXX', 'undefined', 'NaN']) {
    if (html.includes(`>${bad}<`) || html.includes(`="${bad}"`)) warnings.push(`${rel}: leftover "${bad}"`)
  }
}

/* report */
console.log(`\nChecked ${files.length} HTML files (${IN_DIST ? 'dist' : 'source'})`)
if (Object.keys(h1s).length) for (const [f, n] of Object.entries(h1s)) errors.push(`${f}: h1 count = ${n} (must be 1)`)
if (errors.length) {
  console.log(`\n❌ ${errors.length} ERROR(S):`)
  errors.forEach(e => console.log('  - ' + e))
  process.exit(1)
}
if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} warning(s):`)
  warnings.forEach(w => console.log('  - ' + w))
}
console.log('\n✔ all internal links resolve, all pages have title/description, JSON-LD valid')
