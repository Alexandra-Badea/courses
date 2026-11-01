'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { getCourse } from '@/content/courses'
import { getDictionary } from '@/content/dictionary'
import { normalizeCode, useCertificate, type CertificateRecord } from '@/lib/certificates'
import { formatDate, href, type Locale } from '@/lib/i18n'

export function VerifyForm({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const router = useRouter()
  const fromUrl = normalizeCode(useSearchParams().get('code') ?? '')
  const [input, setInput] = useState(fromUrl ?? '')
  const [invalid, setInvalid] = useState(false)
  const lookup = useCertificate(fromUrl)

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const code = normalizeCode(input)
    setInvalid(!code)
    if (code) router.replace(`${href(locale, 'verify')}?code=${encodeURIComponent(code)}`, { scroll: false })
  }

  return (
    <>
      <form onSubmit={submit} className="mt-8 flex flex-col gap-3 sm:flex-row" noValidate>
        <label htmlFor="code" className="sr-only">
          {t.verify.label}
        </label>
        <input
          id="code"
          name="code"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.verify.placeholder}
          autoComplete="off"
          autoCapitalize="characters"
          spellCheck={false}
          aria-invalid={invalid || undefined}
          className="h-13 w-full rounded-full border-2 border-line bg-card px-5 text-lg font-semibold tracking-wide uppercase placeholder:font-normal placeholder:normal-case placeholder:tracking-normal placeholder:text-ink-soft/70 focus:border-ink focus:outline-none"
        />
        <button type="submit" className="btn btn-ink h-13 shrink-0 px-7 text-base">
          {t.verify.button}
        </button>
      </form>

      <div aria-live="polite" className="mt-8">
        {lookup.state === 'loading' && <p className="text-ink-soft">{t.verify.checking}</p>}
        {lookup.state === 'missing' && (
          <p className="rounded-2xl border-2 border-warn/30 bg-[#fbf1e6] p-5 text-warn">{t.verify.notFound(lookup.code)}</p>
        )}
        {lookup.state === 'error' && <p className="rounded-2xl border-2 border-warn/30 bg-[#fbf1e6] p-5 text-warn">{t.verify.error}</p>}
        {lookup.state === 'found' && <Result locale={locale} record={lookup.record} />}
      </div>
    </>
  )
}

function Result({ locale, record }: { locale: Locale; record: CertificateRecord }) {
  const t = getDictionary(locale)
  const course = getCourse(record.course)
  const rows = [
    { k: t.verify.issuedTo, v: record.name },
    { k: t.verify.course, v: course ? course.title[locale] : record.course },
    { k: t.verify.period, v: `${formatDate(record.start, locale)} – ${formatDate(record.end, locale)}` },
    { k: t.verify.hours, v: t.verify.hoursValue(record.hoursLive, record.hoursPractice) },
    { k: t.verify.issuedBy, v: t.verify.issuedByValue },
    { k: t.verify.issuedOn, v: formatDate(record.issued, locale) },
  ]
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-3 bg-ok px-6 py-4 text-white">
        <svg aria-hidden="true" viewBox="0 0 20 20" className="size-6">
          <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="text-lg font-bold">
          {t.verify.valid}: <span className="tracking-wide">{record.code}</span>
        </p>
      </div>
      {record.sample && <p className="border-b border-line bg-highlight/40 px-6 py-3 text-sm font-semibold">{t.verify.example}</p>}
      <dl className="divide-y divide-line px-6">
        {rows.map((r) => (
          <div key={r.k} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr]">
            <dt className="text-ink-soft">{r.k}</dt>
            <dd className="font-semibold">{r.v}</dd>
          </div>
        ))}
      </dl>
      <div className="border-t border-line px-6 py-4">
        <Link href={`${href(locale, 'certificate')}?code=${encodeURIComponent(record.code)}`} className="link">
          {t.verify.view}
        </Link>
      </div>
    </div>
  )
}
