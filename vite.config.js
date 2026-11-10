import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { readdirSync, statSync } from 'node:fs'
import { join, relative, resolve, sep } from 'node:path'

const root = resolve(import.meta.dirname, '.')

/**
 * Auto-discover every HTML entry:
 *  - any `index.html` inside the project tree (pages live in folders for clean URLs)
 *  - root-level error pages (404.html / 403.html / 500.html)
 * New pages are picked up automatically — no config edit needed.
 */
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', 'public', 'scripts', 'templates', 'content', 'docs', 'src'])

function findHtmlInputs(dir, out = {}) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name) || name.startsWith('.')) continue
    const p = join(dir, name)
    if (statSync(p).isDirectory()) {
      findHtmlInputs(p, out)
    } else if (name === 'index.html' || ['404.html', '403.html', '500.html'].includes(name)) {
      const key = relative(root, p).split(sep).join('/')
      out[key] = p
    }
  }
  return out
}

const inputs = findHtmlInputs(root)

export default defineConfig({
  // Root-relative URLs. For sub-folder deployment run:
  //   node scripts/deploy-subfolder.mjs /your-subfolder
  // (see DEPLOYMENT.md) — no other change is required.
  base: '/',
  plugins: [tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: { input: inputs },
    target: 'es2020',
    cssCodeSplit: false, // one design-system stylesheet for every page (better caching)
    reportCompressedSize: false
  }
})
