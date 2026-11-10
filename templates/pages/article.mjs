/**
 * PIXORIA — Blog article page template
 */
import { esc } from '../layout.mjs'
import { icon } from '../icons.mjs'
import { crumbs, crumbsJsonld, ctaFinal, relatedPosts } from '../components.mjs'
import { postCover } from '../covers.mjs'
import { SITE } from '../../content/site.mjs'

const faDigits = n => String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])

export function articleMain ({ a, related }) {
  const shareUrl = `${SITE.url}/blog/articles/${a.slug}/`
  const shareText = encodeURIComponent(`${a.title} — پیکسوریا`)
  return `
  <div class="read-progress" data-read-progress aria-hidden="true"><div class="bar"></div></div>

  <div class="wrap"><div class="pt-2">${crumbs([
    { label: 'وبلاگ', href: '/blog/' },
    { label: a.title, href: `/blog/articles/${a.slug}/` }
  ])}</div></div>

  <article class="page-hero !pb-10">
    <div class="wrap">
      <p class="ph-kicker"><span class="num">[JNL]</span> — ${esc(a.categoryName)}</p>
      <h1>${esc(a.title)}</h1>
      <div class="ph-meta !mt-8">
        <span><span class="k">AUTHOR</span> تیم پیکسوریا</span>
        <span><span class="k">DATE</span> ${a.jalaliDate}</span>
        <span><span class="k">READ</span> ${a.readingTimeFa} دقیقه مطالعه</span>
        <span class="flex items-center gap-2"><span class="k">SHARE</span>
          <a href="https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${shareText}" target="_blank" rel="noopener" aria-label="اشتراک در تلگرام" class="hover:text-[color:var(--color-accent)]">${icon('telegram')}</a>
          <a href="https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}" target="_blank" rel="noopener" aria-label="اشتراک در واتساپ" class="hover:text-[color:var(--color-accent)]">${icon('whatsapp')}</a>
          <button type="button" data-copy-link="${shareUrl}" aria-label="کپی لینک مقاله" class="hover:text-[color:var(--color-accent)] cursor-pointer">${icon('copy')}</button>
        </span>
      </div>
    </div>
    <div class="wrap mt-8" data-reveal="mask">
      <div class="border border-[color:var(--color-line2)]">${postCover(a)}</div>
    </div>
  </article>

  <section class="section" aria-label="متن مقاله">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-12">
      <div class="grid gap-12 lg:grid-cols-[260px_1fr]">
        <!-- sidebar: toc + font size -->
        <aside class="hidden lg:block">
          <div class="toc" data-toc aria-label="فهرست مطالب">
            <p class="toc-title">ON THIS PAGE</p>
            <ol data-toc-list><!-- generated from headings by JS --></ol>
          </div>
          <div class="mt-4">
            <p class="kicker mb-2">TEXT SIZE</p>
            <div class="font-controls" role="group" aria-label="تنظیم اندازه متن">
              <button type="button" data-fs="sm" aria-pressed="false" aria-label="متن کوچک">${icon('minus')}</button>
              <button type="button" data-fs="md" aria-pressed="true" aria-label="متن معمولی">${icon('textSize')}</button>
              <button type="button" data-fs="lg" aria-pressed="false" aria-label="متن بزرگ">${icon('plus')}</button>
            </div>
          </div>
        </aside>
        <!-- body -->
        <div>
          <div class="lg:hidden mb-6">
            <div class="font-controls" role="group" aria-label="تنظیم اندازه متن">
              <button type="button" data-fs="sm" aria-pressed="false" aria-label="متن کوچک">${icon('minus')}</button>
              <button type="button" data-fs="md" aria-pressed="true" aria-label="متن معمولی">${icon('textSize')}</button>
              <button type="button" data-fs="lg" aria-pressed="false" aria-label="متن بزرگ">${icon('plus')}</button>
            </div>
          </div>
          <div class="prose-fa" data-article-body data-fs="md">
            ${a.body}
          </div>
          <div class="mt-12 pt-8 border-t border-[color:var(--color-line2)] flex flex-wrap items-center gap-4">
            <span class="kicker">TAGS</span>
            ${a.tags.map(t => `<span class="chip" style="cursor:default">${esc(t)}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- related -->
  <section class="section" aria-label="مقالات مرتبط">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-14">
      <div class="sec-label mb-8" data-reveal>
        <span class="num">[→]</span><span class="tick" data-line-grow></span><span>مقالات مرتبط</span>
        <span class="mono-ltr" style="color:var(--color-ink3)">READ NEXT</span>
      </div>
      ${relatedPosts(related)}
    </div>
  </section>

  ${ctaFinal({
    num: 'END',
    title: 'این مطلب برایتان مفید بود؟',
    text: 'در پیکسوریا همین دانش را در خدمت کسب‌وکار شما قرار می‌دهیم. اگر برای وب‌سایت‌تان برنامه‌ای دارید، صحبت‌مان را شروع کنیم.',
    primaryLabel: 'شروع پروژه',
    secondaryHref: '/services/',
    secondaryLabel: 'دیدن خدمات'
  })}
`
}

export function articleJsonld (a) {
  const path = `/blog/articles/${a.slug}/`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: a.title,
      description: a.excerpt,
      inLanguage: 'fa-IR',
      author: { '@type': 'Organization', name: 'تیم پیکسوریا', url: `${SITE.url}/about/` },
      publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/favicon.svg` } },
      datePublished: a.date,
      dateModified: a.date,
      mainEntityOfPage: `${SITE.url}${path}`,
      image: `${SITE.url}/og/article.png`,
      articleSection: a.categoryName,
      keywords: a.tags.join(', '),
      wordCount: a.wordCount
    },
    crumbsJsonld([
      { label: 'وبلاگ', href: '/blog/' },
      { label: a.title, href: path }
    ], path)
  ]
}
