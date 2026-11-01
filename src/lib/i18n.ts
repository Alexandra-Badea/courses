export const locales = ['ro', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'ro'

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export const otherLocale = (locale: Locale): Locale => (locale === 'ro' ? 'en' : 'ro')

/** "/ro/courses/ai-teaching/" from ("ro", "courses/ai-teaching") */
export function href(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '')
  return clean ? `/${locale}/${clean}/` : `/${locale}/`
}

/** The same page in the other language: "/ro/verify/" -> "/en/verify/" */
export function switchLocalePath(pathname: string, to: Locale): string {
  const parts = pathname.split('/')
  if (parts.length > 1 && isLocale(parts[1])) parts[1] = to
  else return href(to)
  return parts.join('/') || href(to)
}

const dateFormats: Record<Locale, string> = { ro: 'ro-RO', en: 'en-GB' }

/** "1 decembrie 2026" / "1 December 2026"; dates are YYYY-MM-DD and shown as calendar dates */
export function formatDate(iso: string, locale: Locale): string {
  const [y, m, d] = iso.split('-').map(Number)
  return new Intl.DateTimeFormat(dateFormats[locale], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(Date.UTC(y, m - 1, d)))
}

export function formatPrice(amount: number, currency: string, locale: Locale): string {
  return new Intl.NumberFormat(dateFormats[locale], { style: 'currency', currency, maximumFractionDigits: 0 }).format(amount)
}

/** Romanian adds "de" from 20 up: "8 ore", "20 de persoane" */
export function ro(n: number, word: string): string {
  return `${n} ${n % 100 === 0 || n % 100 >= 20 ? 'de ' : ''}${word}`
}
