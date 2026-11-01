import type { Metadata } from 'next'
import { Suspense } from 'react'
import { getDictionary } from '@/content/dictionary'
import { isLocale, type Locale } from '@/lib/i18n'
import { CertificateView } from './certificate-view'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  // A person's certificate: don't list it in search engines
  return { title: getDictionary(locale).print.heading, robots: { index: false, follow: false } }
}

export default async function CertificatePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params
  const locale = (isLocale(l) ? l : 'ro') as Locale
  return (
    <Suspense fallback={null}>
      <CertificateView locale={locale} />
    </Suspense>
  )
}
