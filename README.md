# PIXORIA (پیکسوریا)

وب‌سایت استاتیک چندصفحه‌ای فارسی RTL — HTML5 + Tailwind CSS v4 + JavaScript خالص (Vanilla). Vite فقط برای توسعه/بیلد است؛ **سرور به هیچ Node، دیتابیس یا build نیاز ندارد.**

- ۴۴ صفحه HTML واقعی (خانه، ۱۱ خدمت، ۱۲ مقاله، ۹ پروژه، درباره، تماس، حریم خصوصی/قوانین، ۳ صفحه خطا)
- فونت وزیرمتن self-host · کانواس تعاملی هیرو · جستجوی وبلاگ · فرم تماس mailto/واتساپ · SEO کامل + JSON-LD
- بدون فریمورک، بدون قالب آماده، بدون CDN خارجی — همه asset ها لوکال

## دستورها

```bash
npm install        # نصب وابستگی‌های توسعه
npm run dev        # تولید صفحات + سرور توسعه Vite
npm run build      # بیلد تولیدی کامل (صفحات + favicon/OG + sitemap + dist)
npm run preview    # پیش‌نمایش dist روی localhost
npm run check      # بررسی لینک‌ها + گزارش placeholder ها
npm run build:all  # build + check + بررسی dist
```

## ساختار (خلاصه)

```
content/    منبع محتوا (services · articles · projects · site)
templates/  قالب‌های تولید صفحات
scripts/    generate-pages · generate-assets · generate-sitemap · check-* · deploy-subfolder
src/        css (طراحی) + js (رفتار)
public/     فونت · favicon · og · robots · sitemap · .htaccess
dist/       خروجی نهایی برای آپلود
```

مستندات بیشتر: `PROJECT_MAP.md` (چه چیزی کجا ویرایش می‌شود) · `docs/DESIGN_SYSTEM.md` (هویت بصری) · `DEPLOYMENT.md` (آپلود روی cPanel) · `BUILD_PROGRESS.md` (تست‌ها و تصمیم‌ها).

> قبل از راه‌اندازی واقعی، فهرست «جایگزینی‌های ضروری» (اطلاعات تماس، آمار، نظرات، نمونه‌کارها) را از `PROJECT_MAP.md` انجام دهید و با `npm run check` وضعیت placeholder ها را ببینید.
