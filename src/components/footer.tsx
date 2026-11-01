import Link from 'next/link'
import site from '@/content/site.json'
import { Logo } from './logo'
import { LanguageSwitch } from './language-switch'
import { getDictionary } from '@/content/dictionary'
import { href, type Locale } from '@/lib/i18n'

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  return (
    <footer className="border-t border-line bg-paper print:hidden">
      <div className="wrap flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Logo tone="ink" />
          <p className="text-sm text-ink-soft">
            © {site.year} {site.trainer}. {t.footer.rights}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <Link href={href(locale, 'verify')} className="link">
            {t.footer.verify}
          </Link>
          <a href={`mailto:${site.email}`} className="link">
            {site.email}
          </a>
          <LanguageSwitch locale={locale} label={t.lang.label} tone="ink" />
        </div>
      </div>
    </footer>
  )
}
