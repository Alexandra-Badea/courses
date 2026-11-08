import type { Metadata } from 'next'
import { Suspense } from 'react'
import { getDictionary } from '@/content/dictionary'
import { isLocale, type Locale } from '@/lib/i18n'
import { VerifyForm } from './verify-form'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  return {
    title: getDictionary(locale).verify.title,
    alternates: { canonical: `/${locale}/verify/`, languages: { ro: '/ro/verify/', en: '/en/verify/' } },
  }
}

export default async function VerifyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params
  const locale = (isLocale(l) ? l : 'ro') as Locale
  const t = getDictionary(locale)
  return (
    <div className="wrap max-w-2xl py-14 sm:py-20">
      <h1 className="text-4xl font-extrabold sm:text-5xl">{t.verify.title}</h1>
      <p className="mt-4 text-lg text-ink-soft">{t.verify.lead}</p>
      {/* The code comes from the address (?code=…), which is only read in the browser */}
      <Suspense fallback={null}>
        <VerifyForm locale={locale} />
      </Suspense>
    </div>
  )
}
