import Link from 'next/link'
import { Logo } from './logo'
import { LanguageSwitch } from './language-switch'
import { getDictionary } from '@/content/dictionary'
import { href, type Locale } from '@/lib/i18n'

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const home = href(locale)
  const links = [
    { to: `${home}#courses`, label: t.nav.courses },
    { to: `${home}#certificate`, label: t.nav.certificate },
    { to: `${home}#about`, label: t.nav.about },
    { to: `${home}#faq`, label: t.nav.faq },
  ]

  return (
    <header className="sticky top-0 z-40 bg-board text-chalk print:hidden">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-highlight focus:px-4 focus:py-2 focus:text-highlight-ink">
        {t.nav.skip}
      </a>
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link href={home} className="shrink-0 rounded-lg">
          <Logo />
        </Link>
        <nav aria-label={t.nav.menu} className="hidden md:block">
          <ul className="flex items-center gap-6 text-[15px] font-semibold">
            {links.map((l) => (
              <li key={l.to}>
                <Link href={l.to} className="text-chalk-soft transition-colors hover:text-chalk">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch locale={locale} label={t.lang.label} />
          <Link href={`${home}#courses`} className="btn btn-highlight px-3.5 py-2.5 text-sm sm:px-4">
            {t.nav.enrol}
          </Link>
        </div>
      </div>
    </header>
  )
}
