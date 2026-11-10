/**
 * PIXORIA — static page generator
 * Dev-time script: reads content/*.mjs + templates/*.mjs and writes plain
 * static HTML files into the repo. Output is committed and hand-editable;
 * production needs no Node (see PROJECT_MAP.md).
 *
 * Run: npm run generate
 */
import { writeFile, mkdir, readdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))

import { page } from '../templates/layout.mjs'
import { homeMain, homeJsonld } from '../templates/pages/home.mjs'
import { serviceMain, serviceJsonld } from '../templates/pages/service.mjs'
import { articleMain, articleJsonld } from '../templates/pages/article.mjs'
import { projectMain, projectJsonld } from '../templates/pages/project.mjs'
import { servicesIndexMain, blogIndexMain, portfolioIndexMain } from '../templates/pages/listings.mjs'
import { aboutMain, contactMain, privacyMain, termsMain, errorMain } from '../templates/pages/generic.mjs'
import { SITE, SERVICES, BLOG_CATEGORIES, PORTFOLIO_CATEGORIES, TESTIMONIALS } from '../content/site.mjs'

const CAT_MAP = Object.fromEntries(BLOG_CATEGORIES.map(c => [c.slug, c.name]))
const PCAT_MAP = Object.fromEntries(PORTFOLIO_CATEGORIES.map(c => [c.slug, c.name]))

/* -------------------------------------------------------------- load content */
async function loadDir (dir) {
  const out = []
  const files = (await readdir(join(ROOT, dir))).filter(f => f.endsWith('.mjs')).sort()
  for (const f of files) {
    const mod = await import(`../${dir}/${f}`)
    out.push(mod.default)
  }
  return out
}

const servicesFull = await loadDir('content/services')
const rawArticles = await loadDir('content/articles')
const projects = (await loadDir('content/projects')).map(p => ({
  ...p,
  categoryName: PCAT_MAP[p.category] || p.category
}))

/* enrich articles */
const faDigits = n => String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])
const articles = rawArticles
  .map(a => {
    const plain = a.body.replace(/<[^>]+>/g, ' ')
    const words = plain.split(/\s+/).filter(Boolean).length
    const readingTime = Math.max(2, Math.round(words / 180))
    return {
      ...a,
      categoryName: CAT_MAP[a.category] || a.category,
      wordCount: words,
      readingTime,
      readingTimeFa: faDigits(readingTime)
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1)) // newest first

const svcBySlug = Object.fromEntries(servicesFull.map(s => [s.slug, s]))
const serviceMeta = SERVICES // registry with num/short/title

/* -------------------------------------------------------------- helpers */
async function writePage (relPath, html) {
  const abs = join(ROOT, relPath)
  await mkdir(dirname(abs), { recursive: true })
  await writeFile(abs, html)
  PAGES.push(relPath.replace(/index\.html$/, '').replace(/\.html$/, ''))
}

const PAGES = []
const POSTS_PER_PAGE = 6

/* SEO title helper: keep total ≤ ~64 chars, drop the suffix if needed */
const smartTitle = (base, suffix) =>
  base.length + suffix.length + 3 <= 64 ? `${base} | ${suffix}` : base

/* related pickers */
const relatedServices = slug => {
  const i = SERVICES.findIndex(s => s.slug === slug)
  const pick = []
  for (const off of [1, -1, 2, -2, 3]) {
    const c = SERVICES[(i + off + SERVICES.length) % SERVICES.length]
    if (c.slug !== slug && !pick.includes(c)) pick.push(c)
    if (pick.length === 3) break
  }
  return pick
}
const relatedProjectsForService = slug => {
  const own = projects.filter(p => p.serviceSlug === slug)
  const rest = projects.filter(p => p.serviceSlug !== slug)
  return [...own, ...rest].slice(0, 3)
}
const relatedProjectsForProject = p =>
  [...projects.filter(x => x.category === p.category && x.slug !== p.slug),
   ...projects.filter(x => x.category !== p.category && x.slug !== p.slug)].slice(0, 3)
const relatedArticles = a =>
  [...articles.filter(x => x.category === a.category && x.slug !== a.slug),
   ...articles.filter(x => x.category !== a.category && x.slug !== a.slug)].slice(0, 3)

/* -------------------------------------------------------------- HOME */
await writePage('index.html', page({
  title: `${SITE.name} | استودیوی طراحی و توسعه وب`,
  description: 'پیکسوریا استودیوی طراحی و توسعه وب در تهران است؛ طراحی سایت اختصاصی، فروشگاه اینترنتی، وب‌اپلیکیشن، سئو و هویت بصری — با مشاوره رایگان.',
  path: '/',
  ogImage: '/og/home.png',
  ogType: 'website',
  jsonld: homeJsonld(),
  main: homeMain({
    services: serviceMeta,
    featuredProjects: ['artish-store', 'taskyar-app', 'rust-cafe-brand'].map(s => projects.find(p => p.slug === s)).filter(Boolean),
    latestPosts: articles.slice(0, 3)
  })
}))

/* -------------------------------------------------------------- ABOUT / CONTACT / PRIVACY / TERMS */
await writePage('about/index.html', page({
  title: `درباره ${SITE.name} | استودیوی طراحی وب`,
  description: 'پیکسوریا استودیوی جوان و متمرکز طراحی و توسعه وب است؛ داستان ما، ارزش‌ها، فلسفه کار و جعبه‌ابزارمان را اینجا بخوانید.',
  path: '/about/',
  ogImage: '/og/default.png',
  main: aboutMain()
}))

await writePage('contact/index.html', page({
  title: `تماس با ${SITE.name} | شروع پروژه و مشاوره رایگان`,
  description: 'برای شروع پروژه یا مشاوره رایگان با پیکسوریا در تماس باشید: فرم درخواست، ایمیل، تلفن و پیام‌رسان‌ها — پاسخ در کمتر از ۲۴ ساعت کاری.',
  path: '/contact/',
  ogImage: '/og/default.png',
  bodyClass: 'page-contact',
  main: contactMain({ services: serviceMeta })
}))

await writePage('privacy/index.html', page({
  title: `حریم خصوصی | ${SITE.name}`,
  description: 'سیاست حریم خصوصی سایت پیکسوریا: چه داده‌ای دریافت می‌شود، کوکی‌ها چه هستند و حقوق شما چیست — به زبان ساده.',
  path: '/privacy/',
  ogImage: '/og/default.png',
  main: privacyMain()
}))

await writePage('terms/index.html', page({
  title: `قوانین و شرایط | ${SITE.name}`,
  description: 'چارچوب کلی همکاری با پیکسوریا: شروع پروژه، پرداخت، مالکیت کارها، پشتیبانی و مسئولیت‌ها — قبل از قرارداد بخوانید.',
  path: '/terms/',
  ogImage: '/og/default.png',
  main: termsMain()
}))

/* -------------------------------------------------------------- SERVICES */
await writePage('services/index.html', page({
  title: `خدمات | ${SITE.name} — ۱۱ خدمت تخصصی وب و برندینگ`,
  description: 'فهرست کامل خدمات پیکسوریا: طراحی سایت، فروشگاه اینترنتی، وب‌اپلیکیشن، سئو، شبکه، گرافیک، هویت بصری و بنر تبلیغاتی.',
  path: '/services/',
  ogImage: '/og/service.png',
  main: servicesIndexMain({ services: serviceMeta })
}))

for (const svc of servicesFull) {
  await writePage(`services/${svc.slug}/index.html`, page({
    title: svc.metaTitle,
    description: svc.metaDesc,
    path: `/services/${svc.slug}/`,
    ogImage: '/og/service.png',
    jsonld: serviceJsonld(svc),
    bodyClass: 'page-service',
    main: serviceMain({
      svc,
      relatedPrj: relatedProjectsForService(svc.slug),
      relatedSvcs: relatedServices(svc.slug)
    })
  }))
}

/* -------------------------------------------------------------- PORTFOLIO */
await writePage('portfolio/index.html', page({
  title: `نمونه‌کارها | ${SITE.name} — وب، اپلیکیشن، گرافیک و برندینگ`,
  description: 'نمونه‌کارهای نمایشی پیکسوریا در طراحی سایت، فروشگاه، وب‌اپلیکیشن، هویت بصری و گرافیک — با رویکرد طراحی اختصاصی.',
  path: '/portfolio/',
  ogImage: '/og/project.png',
  main: portfolioIndexMain({
    featured: projects.find(p => p.slug === 'artish-store'),
    projects,
    categories: PORTFOLIO_CATEGORIES
  })
}))

for (const p of projects) {
  await writePage(`portfolio/projects/${p.slug}/index.html`, page({
    title: smartTitle(`${p.title} — نمونه‌کار`, SITE.name),
    description: `${p.summary} — ${p.categoryName}، ${p.year}. پروژه نمایشی پیکسوریا.`,
    path: `/portfolio/projects/${p.slug}/`,
    ogImage: '/og/project.png',
    jsonld: projectJsonld(p),
    bodyClass: 'page-project',
    main: projectMain({
      p,
      related: relatedProjectsForProject(p),
      serviceName: (SERVICES.find(s => s.slug === p.serviceSlug) || {}).title || ''
    })
  }))
}

/* -------------------------------------------------------------- BLOG */
const totalPages = Math.ceil(articles.length / POSTS_PER_PAGE)
const allTags = [...new Set(articles.flatMap(a => a.tags))]

for (let pageNo = 1; pageNo <= totalPages; pageNo++) {
  const start = (pageNo - 1) * POSTS_PER_PAGE
  const pageArticles = articles.slice(start, start + POSTS_PER_PAGE)
  const featured = pageNo === 1 ? pageArticles[0] : null
  const gridPosts = featured ? pageArticles.slice(1) : pageArticles
  const path = pageNo === 1 ? '/blog/' : `/blog/page/${pageNo}/`
  const relPath = pageNo === 1 ? 'blog/index.html' : `blog/page/${pageNo}/index.html`
  const title = pageNo === 1
    ? `وبلاگ | ${SITE.name} — راهنماهای وب، سئو و برندینگ`
    : `وبلاگ — صفحه ${faDigits(pageNo)} | ${SITE.name}`

  await writePage(relPath, page({
    title,
    description: pageNo === 1
      ? 'مقالات آموزشی پیکسوریا درباره طراحی وب، سئو، تجربه کاربری، فروشگاه اینترنتی و برندینگ — کاربردی و به زبان ساده.'
      : 'ادامه مقالات آموزشی پیکسوریا: طراحی وب، سئو، کارایی و امنیت — صفحه دوم آرشیو وبلاگ، به زبان ساده و کاربردی.',
    path,
    ogImage: '/og/article.png',
    bodyClass: 'page-blog',
    main: blogIndexMain({
      featured,
      posts: gridPosts,
      page: pageNo,
      totalPages,
      categories: BLOG_CATEGORIES,
      allTags
    })
  }))
}

for (const a of articles) {
  await writePage(`blog/articles/${a.slug}/index.html`, page({
    title: smartTitle(a.title, `وبلاگ ${SITE.name}`),
    description: a.excerpt,
    path: `/blog/articles/${a.slug}/`,
    ogImage: '/og/article.png',
    ogType: 'article',
    jsonld: articleJsonld(a),
    bodyClass: 'page-article',
    main: articleMain({ a, related: relatedArticles(a) })
  }))
}

/* -------------------------------------------------------------- ERROR PAGES */
const ERRORS = [
  { code: '404', faTitle: 'این صفحه پیدا نشد', desc: 'آدرسی که دنبالش بودید یا جابه‌جا شده، یا اصلاً وجود نداشته. از اینجا ادامه بدهیم:', file: '404.html' },
  { code: '403', faTitle: 'دسترسی محدود است', desc: 'برای دیدن این بخش اجازه لازم است. اگر فکر می‌کنید اشتباهی رخ داده، با ما در تماس باشید:', file: '403.html' },
  { code: '500', faTitle: 'یک خطای فنی رخ داد', desc: 'مشکلی از سمت سرور پیش آمد — معمولاً موقتی. چند لحظه دیگر دوباره امتحان کنید یا از این مسیرها ادامه بدهید:', file: '500.html' }
]
for (const e of ERRORS) {
  await writeFile(join(ROOT, e.file), page({
    title: `خطای ${e.code} | ${SITE.name}`,
    description: e.desc,
    path: `/${e.file}`,
    ogImage: '/og/default.png',
    main: errorMain(e)
  }).replace('<meta name="description"', '<meta name="robots" content="noindex">\n  <meta name="description"'))
  PAGES.push(e.file.replace('.html', ''))
}

/* -------------------------------------------------------------- search index (dev-time, static) */
import { copyFile, mkdir as mk } from 'node:fs/promises'
const searchIndex = articles.map(a => ({
  slug: a.slug,
  title: a.title,
  category: a.category,
  categoryName: a.categoryName,
  tags: a.tags,
  date: a.date,
  jalaliDate: a.jalaliDate,
  readingTimeFa: a.readingTimeFa,
  excerpt: a.excerpt,
  url: `/blog/articles/${a.slug}/`
}))
await mk(join(ROOT, 'public'), { recursive: true })
await writeFile(join(ROOT, 'public', 'search-index.json'), JSON.stringify(searchIndex, null, 2))

/* -------------------------------------------------------------- report */
console.log(`✔ Generated ${PAGES.length} pages + search-index.json`)
console.log(`  - services: ${servicesFull.length}, articles: ${articles.length}, projects: ${projects.length}`)
const totalWords = articles.reduce((s, a) => s + a.wordCount, 0)
console.log(`  - article body words total: ${totalWords} (avg ${Math.round(totalWords / articles.length)})`)
await writeFile(join(ROOT, '.routes.json'), JSON.stringify(PAGES, null, 2))
