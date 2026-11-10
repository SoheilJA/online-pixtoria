# DEPLOYMENT — راهنمای کامل استقرار

سایت کاملاً استاتیک است: نه PHP می‌خواهد، نه دیتابیس، نه Node روی سرور. خروجی `dist/` را آپلود کنید و تمام.

## ۱. نصب روی سیستم خودتان

```bash
# پیش‌نیاز: Node.js 20+ و npm
npm install
```

## ۲. اجرای محیط توسعه

```bash
npm run dev
# http://localhost:5173 — تغییرات CSS/JS فوری؛ بعد از تغییر content/ دوباره اجرا کنید
```

## ۳. بیلد تولیدی

```bash
npm run build
# خروجی کامل در dist/ : HTML + CSS/JS بهینه + فونت + favicon + og + sitemap + robots + .htaccess
```

## ۴. خروجی کجاست؟

پوشه **`dist/`** — همه‌چیز آماده آپلود. (قبل از آپلود `npm run check` را ببینید.)

## ۵. آپلود روی cPanel (گام‌به‌گام)

1. وارد cPanel شوید → **File Manager** → پوشه `public_html` را باز کنید.
2. محتوای **داخلِ** `dist/` را (نه خود پوشه dist را) آپلود کنید — همه فایل‌ها و پوشه‌ها: `index.html`، پوشه‌های `about/ services/ blog/ …`، `assets/`، `fonts/`، `favicon/`، `og/`، `robots.txt`، `sitemap.xml`، `.htaccess`، `403/404/500.html`.
   - در File Manager اول روی Settings → «Show Hidden Files» بزنید تا `.htaccess` آپلود شود.
   - روش جایگزین: `pixoria-production.zip` را آپلود و داخل public_html دقیقاً همان‌جا Extract کنید.
3. DNS دامنه را به هاست اشاره دهید (اگر هنوز نه).
4. در cPanel → **SSL/TLS Status** → برای دامنه **AutoSSL** اجرا کنید (یا Let's Encrypt از بخش SSL/TLS).
5. سایت را باز کنید: `https://pixoria.ir` — منوها، فرم تماس و صفحات خطا را یک دور تست کنید.

نکته `.htaccess` داخل بسته است: ErrorDocument های ۴۰۳/۴۰۴/۵۰۰، ریدایرکت HTTPS، کشِ یک‌ساله برای asset های hash دار، فشرده‌سازی و هدرهای امنیتی سبک — همه از قبل تنظیم‌اند. اگر هاست شما LiteSpeed/Apache نیست (مثلاً nginx)، این فایل نادیده گرفته می‌شود؛ کارکرد اصلی سایت بدون آن هم سالم است و فقط خطای سفارشی/HTTPS/کشف را از کنترل‌پنل هاست تنظیم کنید.

## ۶. HTTPS و www

- HTTPS خودکار با `.htaccess` (ریدایرکت ۳۰۱) فعال می‌شود.
- ریدایرکت www→non-www در `.htaccess` موجود است ولی کامنت شده؛ اگر خواستید، کامنتش را بردارید.

## ۷. استقرار در زیرپوشه (مثلاً `/site`)

```bash
npm run build
node scripts/deploy-subfolder.mjs /site
# خروجی در dist-sub/ — محتوایش را در زیرپوشه site روی هاست آپلود کنید
```
این اسکریپت همه آدرس‌های نسبی و مطلق (canonical/OG/sitemap) را برای زیرپوشه بازمی‌نویسد.

## ۸. به‌روزرسانی سایت بعداً

1. متن/محتوا را در `content/` (یا مستقیم HTML ها) تغییر دهید.
2. اگر content تغییر کرد: `npm run generate && npm run sitemap && npx vite build` (یا همان `npm run build`).
3. فایل‌های تغییر کرده از `dist/` را دوباره آپلود کنید. فایل‌های asset اسم hash دار دارند؛ کش مرورگرها خودش باطل می‌شود.

## ۹. تست پس از استقرار

- چند لینک داخلی (خدمت، مقاله، پروژه) را باز کنید.
- صفحه ناموجود را باز کنید تا ۴۰۴ سفارشی بیاید.
- فرم تماس را پر و ارسال کنید تا برنامه ایمیل با متن آماده باز شود.
- `https://pixoria.ir/sitemap.xml` و `/robots.txt` را چک کنید.
- در SerpConsole سایت را ثبت کنید: `https://pixoria.ir/sitemap.xml` را Submit کنید.
