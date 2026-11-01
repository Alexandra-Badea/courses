'use client'

import { useEffect, type MouseEvent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, switchLocalePath, type Locale } from '@/lib/i18n'

const names: Record<Locale, string> = { ro: 'Română', en: 'English' }
const KEY = 'lang-place'

/**
 * Where the reader is: which section of the page sits under the header, and how far into it.
 * Both languages have the same sections in the same order, so this finds the same place in the other one.
 */
function readPlace() {
  if (window.scrollY < 8) return { index: -1, ratio: 0 }
  const top = document.querySelector('header')?.getBoundingClientRect().bottom ?? 0
  const sections = [...document.querySelectorAll('main section')]
  const index = sections.findIndex((s) => s.getBoundingClientRect().bottom > top + 1)
  if (index < 0) return { index: -1, ratio: 0 }
  const r = sections[index].getBoundingClientRect()
  return { index, ratio: Math.min(1, Math.max(0, (top - r.top) / r.height)) }
}

function restorePlace(place: { index: number; ratio: number }) {
  if (place.index < 0) {
    window.scrollTo({ top: 0, behavior: 'instant' })
    return
  }
  const section = document.querySelectorAll('main section')[place.index]
  if (!section) return
  const top = document.querySelector('header')?.getBoundingClientRect().bottom ?? 0
  const r = section.getBoundingClientRect()
  window.scrollTo({ top: window.scrollY + r.top + r.height * place.ratio - top, behavior: 'instant' })
}

/** RO / EN: links to the same page in each language, keeping the query (a certificate code) and your place on the page */
export function LanguageSwitch({ locale, label, tone = 'chalk' }: { locale: Locale; label: string; tone?: 'chalk' | 'ink' }) {
  const pathname = usePathname() || `/${locale}/`

  // After switching, put the reader back where they were
  useEffect(() => {
    let saved: string | null = null
    try {
      saved = sessionStorage.getItem(KEY)
      sessionStorage.removeItem(KEY)
    } catch {}
    if (!saved) return
    try {
      const place = JSON.parse(saved) as { path: string; index: number; ratio: number }
      if (place.path !== window.location.pathname) return
      requestAnimationFrame(() => restorePlace(place))
    } catch {}
  }, [pathname])

  // Remember the choice for the next visit to the home address, and the place on the page.
  // With a query (a certificate code) the other language's page is loaded in full, query included.
  const go = (event: MouseEvent<HTMLAnchorElement>, to: Locale, target: string) => {
    if (to === locale) return
    try {
      localStorage.setItem('lang', to)
      sessionStorage.setItem(KEY, JSON.stringify({ path: target, ...readPlace() }))
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
            scroll={false}
            hrefLang={l}
            lang={l}
            aria-current={active ? 'true' : undefined}
            aria-label={names[l]}
            onClick={(event) => go(event, l, target)}
            className={`rounded-full px-2.5 py-1.5 uppercase tracking-wide transition-colors ${
              active
                ? tone === 'chalk'
                  ? 'bg-chalk text-board'
                  : 'bg-ink text-paper'
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
