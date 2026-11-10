/**
 * PIXORIA — generate favicons & OG images (dev-time)
 * Uses sharp to rasterize branded SVGs. Persian text renders via local
 * fontconfig (assets-build/fonts, XDG_DATA_HOME — no system dirs touched).
 * Output: public/favicon/* + public/og/*.png
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

process.env.XDG_DATA_HOME = join(dirname(dirname(fileURLToPath(import.meta.url))), 'assets-build')
const sharp = (await import('sharp')).default
const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))

const O = '#FF5A00'
const INK = '#F2F0EB'
const GRID = `<g stroke="#1c1c1c" stroke-width="1">${Array.from({ length: 16 }, (_, i) => `<path d="M${i * 75} 0v630"/>`).join('')}${Array.from({ length: 9 }, (_, i) => `<path d="M0 ${i * 70}h1200"/>`).join('')}</g>`

/* pixel mark */
function pixelMark (x, y, s, o = O) {
  const g = s * 0.08
  return `<g>
    <rect x="${x}" y="${y}" width="${s / 2 - g}" height="${s / 2 - g}" fill="${INK}"/>
    <rect x="${x + s / 2 + g}" y="${y}" width="${s / 2 - g}" height="${s / 2 - g}" fill="#303030"/>
    <rect x="${x}" y="${y + s / 2 + g}" width="${s / 2 - g}" height="${s / 2 - g}" fill="#303030"/>
    <rect x="${x + s / 2 + g}" y="${y + s / 2 + g}" width="${s / 2 - g}" height="${s / 2 - g}" fill="${o}"/>
  </g>`
}

/* ---------------------------------------------------------------- favicon */
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">${pixelMark(1, 1, 30)}</svg>`

/* ---------------------------------------------------------------- OG images */
function og ({ title, sub, en, path }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0D0D0D"/>
  ${GRID}
  ${pixelMark(70, 70, 64)}
  <text x="70" y="190" font-family="monospace" font-size="26" fill="#A5A5A5" letter-spacing="6">PIXORIA® STUDIO</text>
  <text x="70" y="560" font-family="monospace" font-size="22" fill="#777">${en}</text>
  <text x="70" y="600" font-family="monospace" font-size="22" fill="#777">pixoria.ir${path}</text>
  <rect x="1080" y="70" width="630" height="8" fill="${O}" transform="rotate(90 1080 70)"/>
  <text x="1130" y="300" text-anchor="middle" font-family="Vazirmatn" font-size="84" font-weight="900" fill="${INK}" direction="rtl">${title}</text>
  <text x="1130" y="380" text-anchor="middle" font-family="Vazirmatn" font-size="34" fill="#A5A5A5" direction="rtl">${sub}</text>
  <text x="1130" y="470" text-anchor="middle" font-family="Vazirmatn" font-size="26" fill="${O}" direction="rtl" font-weight="700">پیکسوریا</text>
</svg>`
}

const OG_VARIANTS = {
  'default.png': og({ title: 'استودیوی طراحی و توسعه وب', sub: 'طراحی سایت، فروشگاه اینترنتی، سئو و هویت بصری', en: 'PIXORIA — DIGITAL STUDIO', path: '' }),
  'home.png': og({ title: 'وب‌سایت‌هایی که کار می‌کنند', sub: 'طراحی اختصاصی؛ سریع، فارسی و آماده رشد', en: 'PIXORIA — HOME', path: '' }),
  'service.png': og({ title: 'خدمات پیکسوریا', sub: 'طراحی سایت، فروشگاه، وب‌اپلیکیشن، سئو، شبکه و برندینگ', en: 'PIXORIA — SERVICES', path: '/services/' }),
  'article.png': og({ title: 'وبلاگ پیکسوریا', sub: 'راهنماهای کاربردی وب، سئو، برندینگ و تجربه کاربری', en: 'PIXORIA — JOURNAL', path: '/blog/' }),
  'project.png': og({ title: 'نمونه‌کارهای پیکسوریا', sub: 'وب‌سایت، وب‌اپلیکیشن، گرافیک و هویت بصری', en: 'PIXORIA — SELECTED WORK', path: '/portfolio/' })
}

/* ---------------------------------------------------------------- run */
await mkdir(join(ROOT, 'public/favicon'), { recursive: true })
await mkdir(join(ROOT, 'public/og'), { recursive: true })

/* favicon svg + pngs */
await writeFile(join(ROOT, 'public/favicon.svg'), faviconSvg)
for (const [size, name] of [[16, 'favicon-16.png'], [32, 'favicon-32.png'], [180, 'apple-touch-icon.png'], [192, 'favicon-192.png'], [512, 'favicon-512.png']]) {
  await sharp(Buffer.from(faviconSvg)).resize(size, size).png().toFile(join(ROOT, `public/favicon/${name}`))
}

/* og images */
for (const [name, svg] of Object.entries(OG_VARIANTS)) {
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(join(ROOT, `public/og/${name}`))
}

console.log('✔ favicons + 5 OG images generated in public/')
