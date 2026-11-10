/**
 * PIXORIA — contact form:
 * validation (Persian digits OK), prefilled mailto/WhatsApp/Telegram handoff,
 * ?service=&plan= preselection. No backend, no fake success state.
 */
import { enDigits } from '../utils/fa.js'
import { toast } from '../components/toast.js'

const form = document.querySelector('[data-contact-form]')
if (form) {
  const fields = {
    name: form.querySelector('#f-name'),
    phone: form.querySelector('#f-phone'),
    email: form.querySelector('#f-email'),
    service: form.querySelector('#f-service'),
    plan: form.querySelector('#f-plan'),
    message: form.querySelector('#f-msg')
  }
  const planNote = form.querySelector('[data-plan-note]')
  const waBtn = form.querySelector('[data-wa-btn]')
  const tgBtn = form.querySelector('[data-tg-btn]')
  const mailBtn = form.querySelector('[data-submit-mail]')

  const SERVICE_TITLES = {}
  form.querySelectorAll('#f-service option').forEach(o => {
    SERVICE_TITLES[o.value] = o.textContent.replace(/^[^—]*—\s*/, '')
  })

  /* query-param preselection (?service=slug&plan=slug) */
  const qs = new URLSearchParams(location.search)
  const preSvc = qs.get('service')
  const prePlan = qs.get('plan')
  if (preSvc && fields.service) {
    if (fields.service.querySelector(`option[value="${CSS.escape(preSvc)}"]`)) {
      fields.service.value = preSvc
    }
  }
  if (prePlan && fields.plan) {
    if (fields.plan.querySelector(`option[value="${CSS.escape(prePlan)}"]`)) {
      fields.plan.value = prePlan
      if (planNote) {
        planNote.classList.remove('hidden')
        planNote.textContent = `پلن انتخابی شما: «${fields.plan.querySelector(`option[value="${CSS.escape(prePlan)}"]`).textContent}» برای خدمت «${SERVICE_TITLES[preSvc] || 'انتخاب‌شده'}» — در پیام پیش‌فرض گنجانده می‌شود.`
      }
    }
  }

  const setErr = (input, on) => {
    const wrap = input.closest('.field')
    if (wrap) wrap.classList.toggle('has-error', on)
    input.setAttribute('aria-invalid', on ? 'true' : 'false')
  }
  const valid = () => {
    let firstBad = null
    const bad = i => { setErr(i, true); if (!firstBad) firstBad = i }

    if (!fields.name.value.trim() || fields.name.value.trim().length < 2) bad(fields.name)
    else setErr(fields.name, false)

    const phone = enDigits(fields.phone.value).replace(/[\s\-()]/g, '')
    if (!/^(\+?98|0)?9\d{9}$/.test(phone)) bad(fields.phone)
    else setErr(fields.phone, false)

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.value.trim())) bad(fields.email)
    else setErr(fields.email, false)

    if (!fields.service.value) bad(fields.service)
    else setErr(fields.service, false)

    if (fields.message.value.trim().length < 10) bad(fields.message)
    else setErr(fields.message, false)

    if (firstBad) { firstBad.focus(); toast('فرم کامل نیست — موارد قرمز را بررسی کنید.'); return null }
    return { phone, email: fields.email.value.trim() }
  }

  const compose = () => {
    const svc = SERVICE_TITLES[fields.service.value] || fields.service.value
    const plan = fields.plan.value
      ? `پلن: ${fields.plan.querySelector(`option[value="${CSS.escape(fields.plan.value)}"]`)?.textContent || fields.plan.value}`
      : 'پلن: مشخص نشده'
    return [
      `سلام پیکسوریا؛`,
      `درخواست مشاوره پروژه دارم.`,
      ``,
      `نام: ${fields.name.value.trim()}`,
      `تلفن: ${phoneDisplay(fields.phone.value)}`,
      `ایمیل: ${fields.email.value.trim()}`,
      `خدمت: ${svc}`,
      plan,
      ``,
      `توضیحات پروژه:`,
      fields.message.value.trim()
    ].join('\n')
  }
  const phoneDisplay = v => v.trim()

  const showButtons = text => {
    const enc = encodeURIComponent(text)
    if (waBtn) {
      waBtn.href = `https://wa.me/989000000000?text=${enc}` // PLACEHOLDER — see site-config.js
      waBtn.classList.remove('hidden')
    }
    if (tgBtn) {
      tgBtn.href = `https://t.me/pixoria_studio?text=${enc}` // PLACEHOLDER
      tgBtn.classList.add('hidden') // t.me?text= is unreliable for usernames — keep hidden unless configured
    }
  }

  form.addEventListener('submit', e => {
    e.preventDefault()
    if (!valid()) return
    const text = compose()
    showButtons(text)

    /* primary action: open prefilled mailto */
    const subject = encodeURIComponent(`درخواست پروژه — ${SERVICE_TITLES[fields.service.value] || 'پیکسوریا'}`)
    const body = encodeURIComponent(text)
    const mailto = `mailto:info@pixoria.ir?subject=${subject}&body=${body}` // PLACEHOLDER
    mailBtn.querySelector('.arr')?.remove()
    toast('برنامه ایمیل شما باز می‌شود؛ پیام آماده است. برای واتساپ هم دکمه زیر فعال شد.')
    window.location.href = mailto
  })

  /* live error clearing */
  Object.values(fields).forEach(f => {
    if (f) f.addEventListener('input', () => setErr(f, false))
    if (f) f.addEventListener('change', () => setErr(f, false))
  })
}
