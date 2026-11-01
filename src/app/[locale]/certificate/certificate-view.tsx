'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { CertificateWithQr } from '@/components/certificate-preview'
import { getCourse } from '@/content/courses'
import { getDictionary } from '@/content/dictionary'
import { normalizeCode, useCertificate } from '@/lib/certificates'
import { formatDate, href, type Locale } from '@/lib/i18n'

/** The printable certificate for ?code=…, in this page's language */
export function CertificateView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale)
  const code = normalizeCode(useSearchParams().get('code') ?? '')
  const lookup = useCertificate(code)

  if (!code) return <Message text={t.print.missing} locale={locale} />
  if (lookup.state === 'missing') return <Message text={t.verify.notFound(code)} locale={locale} />
  if (lookup.state === 'error') return <Message text={t.verify.error} locale={locale} />
  if (lookup.state !== 'found') return <p className="wrap py-20 text-ink-soft">{t.print.loading}</p>

  const r = lookup.record
  const course = getCourse(r.course)
  return (
    <div className="bg-paper-2 py-8 sm:py-12 print:bg-white print:p-0">
      <div className="wrap mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link href={`${href(locale, 'verify')}?code=${encodeURIComponent(r.code)}`} className="link">
          ← {t.verify.title}
        </Link>
        <button type="button" onClick={() => window.print()} className="btn btn-board">
          {t.print.print}
        </button>
      </div>
      {/* On screen: as wide as the page allows. Printed: exactly one A4 page in landscape. */}
      <div className="wrap max-w-5xl print:m-0 print:w-[297mm] print:max-w-none print:p-0">
        <div className="shadow-[0_20px_50px_-20px_rgb(0_0_0/0.35)] print:shadow-none">
          <CertificateWithQr
            locale={locale}
            data={{
              name: r.name,
              courseTitle: course ? course.title[locale] : r.course,
              start: formatDate(r.start, locale),
              end: formatDate(r.end, locale),
              issued: formatDate(r.issued, locale),
              hoursLive: r.hoursLive,
              hoursPractice: r.hoursPractice,
              skills: course ? course.skills[locale] : [],
              code: r.code,
              sample: r.sample,
            }}
          />
        </div>
      </div>
    </div>
  )
}

function Message({ text, locale }: { text: string; locale: Locale }) {
  const t = getDictionary(locale)
  return (
    <div className="wrap max-w-2xl py-20">
      <p className="text-lg">{text}</p>
      <Link href={href(locale, 'verify')} className="link mt-4 inline-block">
        {t.verify.title}
      </Link>
    </div>
  )
}
