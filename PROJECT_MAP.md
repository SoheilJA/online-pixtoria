# PROJECT MAP — Pixoria (پیکسوریا)

نقشه کامل پروژه برای شما (مالک سایت): چه چیزی کجاست و چه جایی را باید ویرایش کنید.

## نمای کلی معماری

```
pixoria/
├── index.html  about/  contact/  privacy/  terms/          ← صفحات تولیدشده (استاتیک معمولی)
├── services/   ├── index.html
│               └── <۱۱ پوشه خدمت>/index.html
├── portfolio/  ├── index.html
│               └── projects/<۹ پروژه>/index.html
├── blog/       ├── index.html  page/2/index.html
│               └── articles/<۱۲ مقاله>/index.html
├── 404.html  403.html  500.html
│
├── src/
│   ├── css/    app.css (توکن‌ها+پایه) · components.css (کامپوننت‌ها) · animations.css
│   └── js/     main.js (ورودی) · navigation.js · components/* · pages/* · config/site-config.js
├── assets-build/fonts/      (TTF برای رندر OG — فقط dev)
├── public/     fonts/ · favicon/ · og/ · robots.txt · sitemap.xml · .htaccess · site.webmanifest · search-index.json
├── content/    site.mjs (داده مشترک) · services/*.mjs · articles/*.mjs · projects/*.mjs   ← «منبع محتوا»
├── templates/  layout · components · covers · illustrations · icons · pages/*            ← «قالب‌های تولید»
├── scripts/     generate-pages · generate-assets · generate-sitemap · check-links · check-placeholders · deploy-subfolder
├── dist/       خروجی نهایی برای آپلود
└── docs/DESIGN_SYSTEM.md · README.md · DEPLOYMENT.md · BUILD_PROGRESS.md
```

## چرخه کار محتوا (مهم)

- محتوای واقعی در `content/*.mjs` (داده) نگه‌داری می‌شود؛ اجرای `npm run generate` صفحات HTML را **بازمی‌سازد**.
- HTMLهای تولیدشده «استاتیک معمولی»اند: می‌توانید مستقیم همان‌ها را ویرایش کنید، اما دفعه بعدِ generate بازنویسی می‌شوند — برای تغییرات همیشگی، منبع را عوض کنید.
- در سرور هیچ Node و هیچ فرآیندی اجرا نمی‌شود؛ generate فقط روی سیستم خودتان انجام می‌شود.

## راهنمای ویرایش سریع

| چه می‌خواهید عوض کنید؟ | کجا؟ |
|---|---|
| متن/پلن‌ها/FAQ هر خدمت | `content/services/<slug>.mjs` بعد `npm run generate` |
| مقاله جدید | یک فایل مثل `content/articles/why-your-business-needs-a-website.mjs` بسازید (اسکیمای همان فایل) + `npm run generate` + `npm run sitemap` |
| پروژه جدید | فایلی مثل `content/projects/artish-store.mjs` + generate |
| اطلاعات تماس | `src/js/config/site-config.js` **و** `content/site.mjs` (هر دو) + جایگزینی سراسری در HTML تولیدی + `scripts/check-placeholders.mjs` |
| آمار صفحه اصلی/درباره | `content/site.mjs` → `STATS` |
| نظرات نمایشی | `content/site.mjs` → `TESTIMONIALS` |
| فرآیند ۶ مرحله‌ای | `content/site.mjs` → `PROCESS` |
| رنگ‌ها/فونت/شعاع گوشه | `src/css/app.css` → بلوک `@theme` |
| هدر/فوتر/منو | `templates/layout.mjs` |
| لوگو | `templates/icons.mjs` → `logoMark()` + `public/favicon.svg` |
| تصویرسازی خدمت | `templates/illustrations.mjs` |
| کاور مقالات | `templates/covers.mjs` → `postCover()` |
| انیمیشن‌ها | `src/css/animations.css` و `src/js/components/reveal.js` |
| قیمت‌ها (وقتی آماده بود) | `templates/components.mjs` → `planCards()` — تگ `.plan-price` را با عدد جایگزین کنید |

### افزودن قیمت عددی به پلن‌ها

در `templates/components.mjs` تابع `planCards()` این بلوک را دارد:

```html
<p class="plan-price">
  قیمت بر اساس پروژه
  <span class="hint">برای دریافت قیمت دقیق، مشاوره رایگان بگیرید</span>
</p>
```

به این شکل تغییر دهید (و در `content/services/*.mjs` فیلد `price` به پلن‌ها اضافه کنید):

```html
<p class="plan-price">
  <span>از ۱۲٫۰۰۰٫۰۰۰ تومان</span>
  <span class="hint">قیمت نهایی پس از مشاوره</span>
</p>
```

## ⚠️ قبل از راه‌اندازی جایگزین کنید (Replace before launch)

اسکریپت `npm run check` (بخش placeholders) فهرست فایل‌های درگیر را چاپ می‌کند:

1. **ایمیل:** `info@pixoria.ir` → ایمیل واقعی (در `content/site.mjs`، `src/js/config/site-config.js`، و متن فرم/فوتر)
2. **تلفن:** `+989000000000` / نمایش `+98 900 000 0000` → شماره واقعی
3. **واتساپ:** `989000000000` (در `data-wa-btn` در `templates/pages/generic.mjs` و `src/js/pages/contact-form.js` و `content/site.mjs`)
4. **تلگرام:** `pixoria_studio` → یوزرنیم واقعی (در فوتر، `content/site.mjs`، `contact-form.js`؛ دکمه تلگرامِ فرم بعد از تنظیم واقعی، فعالش کنید — خط مربوطه در `contact-form.js` کامنت دارد)
5. **اینستاگرام:** `pixoria.studio`
6. **آدرس/ساعات کاری:** «تهران، ایران» و «شنبه تا پنجشنبه — ۹ تا ۱۸»
7. **آمار صفحه اصلی و درباره** (`STATS`): مقادیر placeholder هستند (۴۰+، ۳+، ۳۰+) — با اعداد واقعی جایگزین کنید یا حذفشان کنید
8. **نظرات مشتریان** (`TESTIMONIALS`): نمایشی‌اند — با نظرات واقعی (با اجازه افراد) عوض کنید یا کل سکشن را بردارید
9. **همه ۹ پروژه نمونه‌کار** و نام برندهای ساختگی (آرتیش، آرمان، تسک‌یار، رُست، نور، سلامت‌گستر، نگاه، هور، متریک) — با پروژه‌های واقعی و اجازه انتشار
10. **دامنه:** `https://pixoria.ir` در `content/site.mjs` (SITE.url) — canonical/OG/sitemap به آن وصل‌اند؛ دامنه واقعی را یک‌جا عوض کنید و دوباره `npm run build` بگیرید
11. آمار `۲۴ ساعت پاسخ‌گویی` و مشابه آن، ادعاهای قابل تنظیم شما هستند

## یادآوری صداقت محتوایی

- جاهایی که محتوا نمایشی است (نظرات، نمونه‌کارها) روی خود صفحه هم با نشان «نمونه‌کار نمایشی» برچسب خورده‌اند — با جایگزینی واقعی، این برچسب‌ها را هم بردارید.
- آمار فقط با «+» و به‌صورت قابل ویرایش آمده؛ به‌عنوان «آمار تأییدشده» عرضه نشود مگر واقعی باشد.
