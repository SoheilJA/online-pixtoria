/**
 * PIXORIA — inline SVG icon system (stroke-based, geometric, technical)
 */

const I = (inner, vb = '0 0 24 24', cls = '') =>
  `<svg class="${cls}" viewBox="${vb}" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" aria-hidden="true">${inner}</svg>`

export const icons = {
  arrowLeft: I('<path d="M19 12H5m0 0 6-6m-6 6 6 6"/>'),
  arrowUp: I('<path d="M12 19V5m0 0-6 6m6-6 6 6"/>'),
  chevronDown: I('<path d="m6 9 6 6 6-6"/>'),
  chevronLeft: I('<path d="m15 6-6 6 6 6"/>'),
  search: I('<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>'),
  close: I('<path d="M6 6l12 12M18 6 6 18"/>'),
  mail: I('<rect x="3" y="5" width="18" height="14"/><path d="m3 7 9 6 9-6"/>'),
  phone: I('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>'),
  mapPin: I('<path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>'),
  clock: I('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>'),
  instagram: I('<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M17.2 6.8h.01"/>'),
  telegram: I('<path d="M21 4 3 11l5 2 2 6 3-4 5 4 3-15Z"/><path d="m8 13 9-6-6 8"/>'),
  whatsapp: I('<path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z"/><path d="M8.8 8.5c.3-1 1-1 1.4-.5l.7 1c.2.3.1.7-.1 1l-.5.6a6.5 6.5 0 0 0 3 3l.6-.5c.3-.2.7-.3 1-.1l1 .7c.5.4.5 1.1-.5 1.4-2 .7-6.7-1.8-7.6-5.6Z"/>'),
  copy: I('<rect x="9" y="9" width="11" height="11"/><path d="M5 15V4h11"/>'),
  external: I('<path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>'),
  check: I('<path d="m4 12 5 5L20 6"/>'),
  share: I('<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8 15.8 7.2M8.2 13.2l7.6 3.6"/>'),
  textSize: I('<path d="M4 7V5h16v2M12 5v14M9 19h6"/>'),
  minus: I('<path d="M5 12h14"/>'),
  eye: I('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>'),
  layers: I('<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/><path d="m3 17 9 5 9-5" opacity=".4"/>'),
  grid: I('<rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/>'),
  calendar: I('<rect x="3" y="5" width="18" height="16"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
  building: I('<rect x="5" y="3" width="14" height="18"/><path d="M9 7h2m4 0h-2M9 11h2m4 0h-2M9 15h2m4 0h-2M2 21h20"/>'),
  terminal: I('<rect x="3" y="4" width="18" height="16"/><path d="m7 9 3 3-3 3M13 15h4"/>'),
  trending: I('<path d="M3 17 9 11l4 4 8-8"/><path d="M15 7h6v6"/>'),
  network: I('<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5 6 16.7M12 7.5l6 9.2M7.5 19h9"/>'),
  pen: I('<path d="m12 19 7-7-4-4-7 7-1 5 5-1Z"/><path d="m14.5 6.5 3 3"/><circle cx="12" cy="12" r="9" opacity=".35"/>'),
  diamond: I('<path d="M12 3 21 12 12 21 3 12 12 3Z"/><path d="M12 8 16 12 12 16 8 12 12 8Z" opacity=".45"/>'),
  megaphone: I('<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z"/><path d="M15 8a5 5 0 0 1 0 8M18 5a9 9 0 0 1 0 14"/>'),
  cart: I('<path d="M4 5h2l2.2 11h9.6L20 8H7"/><circle cx="9.5" cy="19" r="1.6"/><circle cx="17" cy="19" r="1.6"/>'),
  spark: I('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>')
}

/** Map service slug -> icon id */
export const serviceIcons = {
  'web-design': 'grid',
  'ecommerce-website-design': 'cart',
  'service-website-design': 'calendar',
  'corporate-website-design': 'building',
  'portfolio-website-design': 'eye',
  'web-app-development': 'terminal',
  'seo': 'trending',
  'network-services': 'network',
  'graphic-design': 'pen',
  'logo-and-branding': 'diamond',
  'banner-and-ads': 'megaphone'
}

export function icon(name, cls = '') {
  const body = icons[name] || icons.spark
  return cls ? body.replace('class=""', `class="${cls}"`) : body
}

/** Logo pixel mark */
export function logoMark(size = 26) {
  return `<svg class="brand-mark" viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">
  <rect x="1" y="1" width="10" height="10" fill="#F2F0EB"/>
  <rect x="13" y="1" width="10" height="10" fill="#303030"/>
  <rect x="1" y="13" width="10" height="10" fill="#303030"/>
  <rect class="px-accent" x="13" y="13" width="10" height="10" fill="#FF5A00" style="transition:opacity .3s"/>
</svg>`
}
