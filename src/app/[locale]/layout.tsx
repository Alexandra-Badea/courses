import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import '../globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { getDictionary } from '@/content/dictionary'
import { isLocale, locales, type Locale } from '@/lib/i18n'

// Each language is its own root layout, so the HTML says lang="ro" or lang="en"
export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const t = getDictionary(locale)
  return {
    // Addresses below are on coursebug.com, whichever copy of the site serves the page, so search
    // engines treat coursebug.com as the one real site
    metadataBase: new URL('https://coursebug.com'),
    title: { default: t.meta.title, template: `%s | ${t.meta.title.split(':')[0]}` },
    description: t.meta.description,
    alternates: { canonical: `/${locale}/`, languages: { ro: '/ro/', en: '/en/', 'x-default': '/ro/' } },
    icons: { icon: '/icon.svg' },
  }
}

export const viewport: Viewport = { themeColor: '#1e4637' }

// courses-mu-eight.vercel.app is an older copy of this site. Vercel ignores redirect rules for this
// static export, so the page itself moves the visitor (and search engines) to coursebug.com.
const OLD_ADDRESS_REDIRECT = `if(location.hostname==='courses-mu-eight.vercel.app')location.replace('https://coursebug.com'+location.pathname+location.search+location.hash)`

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body className="flex min-h-dvh flex-col">
        {/* The old copy on Vercel sends visitors to the same page on coursebug.com */}
        <script dangerouslySetInnerHTML={{ __html: OLD_ADDRESS_REDIRECT }} />
        <Header locale={locale as Locale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale as Locale} />
      </body>
    </html>
  )
}
