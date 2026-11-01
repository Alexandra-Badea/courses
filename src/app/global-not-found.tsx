import Link from 'next/link'
import type { Metadata } from 'next'
import './globals.css'
import { Logo } from '@/components/logo'
import { Ladybug } from '@/components/ladybug'
import { getDictionary } from '@/content/dictionary'

export const metadata: Metadata = { title: '404 | CourseBug', icons: { icon: '/icon.svg' } }

/** One 404 page for every address that doesn't exist, in both languages */
export default function GlobalNotFound() {
  const ro = getDictionary('ro').notFound
  const en = getDictionary('en').notFound
  return (
    <html lang="ro">
      <body className="grid-paper grid min-h-dvh place-items-center px-4 text-ink">
        <main className="max-w-xl py-16">
          <Logo />
          <Ladybug className="mt-12 size-20 -rotate-12" />
          <h1 className="mt-6 text-5xl">{ro.title}</h1>
          <p className="mt-3 text-lg text-ink-soft">{ro.text}</p>
          <p lang="en" className="mt-8 font-display text-2xl font-bold">
            {en.title}
          </p>
          <p lang="en" className="mt-2 text-ink-soft">
            {en.text}
          </p>
          <p className="mt-10 flex flex-wrap gap-3">
            <Link href="/ro/" className="btn btn-bug">
              {ro.home}
            </Link>
            <Link href="/en/" lang="en" className="btn btn-ink">
              {en.home}
            </Link>
          </p>
        </main>
      </body>
    </html>
  )
}
