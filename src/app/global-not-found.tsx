import Link from 'next/link'
import type { Metadata } from 'next'
import './globals.css'
import { Logo } from '@/components/logo'
import { getDictionary } from '@/content/dictionary'

export const metadata: Metadata = { title: '404 | CourseBug', icons: { icon: '/icon.svg' } }

/** One 404 page for every address that doesn't exist, in both languages */
export default function GlobalNotFound() {
  const ro = getDictionary('ro').notFound
  const en = getDictionary('en').notFound
  return (
    <html lang="ro">
      <body className="grid min-h-dvh place-items-center bg-board px-4 text-chalk">
        <main className="max-w-xl py-16">
          <Logo />
          <h1 className="mt-10 text-4xl font-extrabold">{ro.title}</h1>
          <p className="mt-3 text-lg text-chalk-soft">{ro.text}</p>
          <p lang="en" className="mt-8 text-2xl font-bold">
            {en.title}
          </p>
          <p lang="en" className="mt-2 text-chalk-soft">
            {en.text}
          </p>
          <p className="mt-10 flex flex-wrap gap-3">
            <Link href="/ro/" className="btn btn-highlight">
              {ro.home}
            </Link>
            <Link href="/en/" lang="en" className="btn bg-chalk text-board">
              {en.home}
            </Link>
          </p>
        </main>
      </body>
    </html>
  )
}
