'use client'

import type { MouseEvent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, switchLocalePath, type Locale } from '@/lib/i18n'

const names: Record<Locale, string> = { ro: 'Română', en: 'English' }

/** RO / EN: links to the same page in each language, keeping the query (e.g. a certificate code) */
export function LanguageSwitch({ locale, label, tone = 'chalk' }: { locale: Locale; label: string; tone?: 'chalk' | 'ink' }) {
  const pathname = usePathname() || `/${locale}/`

  // Remember the choice for the next visit to the home address, and keep the query (a certificate
  // code) when switching. Switching language loads the other language's page in full anyway.
  const go = (event: MouseEvent<HTMLAnchorElement>, to: Locale, target: string) => {
    try {
      localStorage.setItem('lang', to)
    } catch {}
    if (window.location.search) {
      event.preventDefault()
      window.location.assign(target + window.location.search)
    }
  }

  return (
    <nav aria-label={label} className="flex items-center gap-1 text-sm font-semibold">
      {locales.map((l) => {
        const active = l === locale
        const target = switchLocalePath(pathname, l)
        return (
          <Link
            key={l}
            href={target}
            hrefLang={l}
            lang={l}
            aria-current={active ? 'true' : undefined}
            aria-label={names[l]}
            onClick={(event) => go(event, l, target)}
            className={`rounded-full px-2.5 py-1.5 uppercase tracking-wide transition-colors ${
              active
                ? tone === 'chalk'
                  ? 'bg-chalk text-board'
                  : 'bg-board text-chalk'
                : tone === 'chalk'
                  ? 'text-chalk-soft hover:text-chalk'
                  : 'text-ink-soft hover:text-ink'
            }`}
          >
            {l}
          </Link>
        )
      })}
    </nav>
  )
}
