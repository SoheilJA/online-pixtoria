/**
 * PIXORIA — sub-folder deployment rewriter
 * Rebuild-time helper (no server needed). Usage:
 *   node scripts/deploy-subfolder.mjs /my-subfolder
 * Rewrites root-relative URLs inside dist/ (href, src, canonical/og URLs,
 * preloaded fonts, manifest/icons) and writes the result to dist-sub/,
 * ready for upload under https://your-domain/my-subfolder/
 */
import { readdir, readFile, writeFile, mkdir, cp, rm } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const sub = process.argv[2]
if (!sub || !sub.startsWith('/') || sub === '/') {
  console.error('Usage: node scripts/deploy-subfolder.mjs /your-subfolder')
  process.exit(1)
}

const SRC = join(ROOT, 'dist')
const OUT = join(ROOT, 'dist-sub')
const SITE_OLD = 'https://pixoria.ir'
const SITE_NEW = `https://pixoria.ir${sub}` // replace with your real domain if different

async function walk (dir, out = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) await walk(p, out)
    else out.push(p)
  }
  return out
}

await rm(OUT, { recursive: true, force: true })

const files = await walk(SRC)
for (const f of files) {
  const rel = f.replace(SRC, '')
  const target = join(OUT, rel)
  await mkdir(dirname(target), { recursive: true })
  if (/\.(html|xml|txt|webmanifest|json)$/.test(f)) {
    let text = await readFile(f, 'utf8')
    text = text
      .replaceAll(`href="/`, `href="${sub}/`)
      .replaceAll(`src="/`, `src="${sub}/`)
      .replaceAll(`url("/`, `url("${sub}/`)
      .replaceAll(`url('/`, `url('${sub}/`)
      .replaceAll(`"/fonts/`, `"${sub}/fonts/`)
      .replaceAll(`"/og/`, `"${sub}/og/`)
      .replaceAll(`"/favicon`, `"${sub}/favicon`)
      .replaceAll(`"/site.webmanifest`, `"${sub}/site.webmanifest`)
      .replaceAll(`"/search-index.json`, `"${sub}/search-index.json`)
      .replaceAll(`"/assets/`, `"${sub}/assets/`)
      .replaceAll(SITE_OLD, SITE_NEW)
      /* fix double-written sub in already-substituted URLs */
      .replaceAll(`${sub}${sub}/`, `${sub}/`)
      .replaceAll(SITE_NEW + sub + '/', SITE_NEW + '/')
    await writeFile(target, text)
  } else {
    await cp(f, target)
  }
}

console.log(`✔ sub-folder build written to dist-sub${sub} — upload its contents under your sub-folder`)
console.log('  (absolute URLs now point to ' + SITE_NEW + ' — edit SITE_NEW in this script for a custom domain)')
