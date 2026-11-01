import Link from 'next/link'
import site from '@/content/site.json'
import sample from '../../../public/certificates/CB-EXEMPLU.json'
import { courses, getCourse } from '@/content/courses'
import { getDictionary } from '@/content/dictionary'
import { CertificateWithQr } from '@/components/certificate-preview'
import { formatDate, href, isLocale, type Locale } from '@/lib/i18n'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params
  const locale = (isLocale(l) ? l : 'ro') as Locale
  const t = getDictionary(locale)
  const sampleCourse = getCourse(sample.course)!

  return (
    <>
      {/* Hero: the board, with the certificate you get at the end */}
      <section className="relative overflow-hidden bg-board text-chalk">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '22px 22px' }}
        />
        <div className="wrap relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-24">
          <div>
            <h1 className="text-[2.6rem] font-extrabold sm:text-6xl">{t.hero.title}</h1>
            <p className="mt-6 max-w-[34rem] text-lg text-chalk-soft sm:text-xl">{t.hero.lead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href={`${href(locale)}#courses`} className="btn btn-highlight text-base">
                {t.hero.primary}
              </Link>
              <Link href={`${href(locale)}#certificate`} className="btn-ghost-chalk font-semibold">
                {t.hero.secondary}
              </Link>
            </div>
            <ul className="mt-10 grid gap-3 text-[15px] sm:grid-cols-3 sm:gap-5">
              {t.hero.facts.map((f) => (
                <li key={f} className="flex items-start gap-2.5 border-t border-chalk/20 pt-3 text-chalk">
                  <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-highlight" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
            <div className="rotate-[1.5deg] rounded-md shadow-[0_30px_60px_-20px_rgb(0_0_0/0.55)] transition-transform duration-300 motion-safe:hover:rotate-0">
              <CertificateWithQr
                locale={locale}
                data={{
                  name: sample.name,
                  courseTitle: sampleCourse.title[locale],
                  start: formatDate(sample.start, locale),
                  end: formatDate(sample.end, locale),
                  issued: formatDate(sample.issued, locale),
                  hoursLive: sample.hoursLive,
                  hoursPractice: sample.hoursPractice,
                  skills: sampleCourse.skills[locale],
                  code: sample.code,
                  sample: true,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="wrap py-16 sm:py-20" aria-labelledby="who-title">
        <h2 id="who-title" className="h2">
          {t.who.title}
        </h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {t.who.items.map((w) => (
            <li key={w.title} className="border-l-4 border-board pl-5">
              <h3 className="text-xl font-bold">{w.title}</h3>
              <p className="mt-2 text-ink-soft">{w.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Courses */}
      <section id="courses" className="bg-paper-2 py-16 sm:py-20" aria-labelledby="courses-title">
        <div className="wrap">
          <h2 id="courses-title" className="h2">
            {t.courses.title}
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">{t.courses.lead}</p>
          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {courses.map((c) => (
              <li key={c.slug} className="card flex flex-col p-6 sm:p-7">
                <p className="text-sm font-semibold text-board">
                  {t.courses.for}: {c.audience[locale]}
                </p>
                <h3 className="mt-3 text-2xl font-bold">
                  <Link href={href(locale, `courses/${c.slug}`)} className="hover:underline hover:decoration-2 hover:underline-offset-4">
                    {c.title[locale]}
                  </Link>
                </h3>
                <p className="mt-3 text-ink-soft">{c.outcome[locale]}</p>
                <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-4 text-sm">
                  <div>
                    <dt className="text-ink-soft">{t.course.facts.format}</dt>
                    <dd className="font-semibold">{t.course.facts.formatValue(c.sessions, c.hoursPerSession)}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-soft">{t.course.facts.practice}</dt>
                    <dd className="font-semibold">{t.courses.hours(c.hoursPractice)}</dd>
                  </div>
                </dl>
                <div className="mt-auto pt-6">
                  <Link href={href(locale, `courses/${c.slug}`)} className="btn btn-board w-full sm:w-auto" aria-label={`${t.courses.details}: ${c.title[locale]}`}>
                    {t.courses.details}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works: a real sequence, so numbered */}
      <section className="wrap py-16 sm:py-20" aria-labelledby="steps-title">
        <h2 id="steps-title" className="h2">
          {t.steps.title}
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.items.map((s, i) => (
            <li key={s.title}>
              <span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-board font-display text-lg font-bold text-chalk">
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* The certificate: what it is and what it isn't */}
      <section id="certificate" className="bg-paper-2 py-16 sm:py-20" aria-labelledby="certificate-title">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="certificate-title" className="h2">
              {t.certificate.title}
            </h2>
            <p className="mt-4 text-lg">{t.certificate.lead}</p>
            <h3 className="mt-8 text-xl font-bold">{t.certificate.includesTitle}</h3>
            <ul className="mt-3 space-y-2">
              {t.certificate.includes.map((i) => (
                <li key={i} className="flex gap-3">
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 size-5 shrink-0 text-ok">
                    <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-ink-soft">{t.certificate.condition}</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <Link href={href(locale, 'verify')} className="link">
                {t.certificate.verify}
              </Link>
              <Link href={`${href(locale, 'certificate')}?code=${sample.code}`} className="link">
                {t.certificate.example}
              </Link>
            </div>
          </div>
          <aside className="self-start rounded-2xl border-2 border-dashed border-ink/25 p-6 sm:p-8">
            <h3 className="text-xl font-bold">{t.certificate.notTitle}</h3>
            <p className="mt-3 text-ink-soft">{t.certificate.not}</p>
          </aside>
        </div>
      </section>

      {/* About */}
      <section id="about" className="wrap py-16 sm:py-20" aria-labelledby="about-title">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <h2 id="about-title" className="h2">
              {t.about.title}
            </h2>
            {t.about.paragraphs.map((p) => (
              <p key={p} className="mt-4 max-w-2xl text-lg">
                {p}
              </p>
            ))}
          </div>
          <ul className="self-end space-y-3">
            {t.about.facts.map((f) => (
              <li key={f} className="card px-5 py-4 font-semibold">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-paper-2 py-16 sm:py-20" aria-labelledby="faq-title">
        <div className="wrap max-w-3xl">
          <h2 id="faq-title" className="h2">
            {t.faq.title}
          </h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {t.faq.items.map((f) => (
              <details key={f.q} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full border border-ink/25 text-lg leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-5 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-board text-chalk" aria-labelledby="contact-title">
        <div className="wrap flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20">
          <div>
            <h2 id="contact-title" className="h2">
              {t.contact.title}
            </h2>
            <p className="mt-3 max-w-xl text-lg text-chalk-soft">{t.contact.text}</p>
          </div>
          <a href={`mailto:${site.email}?subject=${encodeURIComponent(t.contact.subject)}`} className="btn btn-highlight shrink-0 text-base">
            {t.contact.button}
          </a>
        </div>
      </section>
    </>
  )
}

