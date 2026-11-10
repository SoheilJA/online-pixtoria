/**
 * PIXORIA — placeholder checker
 * Lists every file that still contains launch-blocking placeholder values.
 * Run before going live: npm run check
 */
import { readdir, readFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))

const PLACEHOLDERS = [
  'info@pixoria.ir',
  '+989000000000',
  '+98 900 000 0000',
  '989000000000',
  'pixoria_studio',
  'pixoria.studio'
]

async function walk (dir, out = []) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    if (['node_modules', '.git', 'dist', 'dist-sub', 'assets-build'].includes(e.name)) continue
    const p = join(dir, e.name)
    if (e.isDirectory()) await walk(p, out)
    else if (/\.(html|js|mjs|xml|txt|webmanifest|md)$/.test(e.name)) out.push(p)
  }
  return out
}

const files = await walk(ROOT)
let hits = 0
console.log('\n⚠ PLACEHOLDER REPORT — values the owner must replace before launch:')
for (const f of files) {
  const rel = f.replace(ROOT + '/', '')
  const text = await readFile(f, 'utf8')
  const found = PLACEHOLDERS.filter(p => text.includes(p))
  if (found.length) {
    hits += found.length
    console.log(`  ${rel}  →  ${[...new Set(found)].join(', ')}`)
  }
}
if (!hits) console.log('  (none found)')
console.log(`\nDocs: PROJECT_MAP.md → "Replace before launch"\n`)
