import type { CSSProperties } from 'react'
import Link from 'next/link'
import site from '@/content/site.json'
import sample from '../../../public/certificates/CB-EXEMPLU.json'
import { courses, getCourse, type Audience } from '@/content/courses'
import { getDictionary } from '@/content/dictionary'
import { CertificateWithQr } from '@/components/certificate-preview'
import { HeroLadybug } from '@/components/hero-ladybug'
import { CourseFilter, type FilterKey } from '@/components/course-filter'
import { PromptBuilder } from '@/components/prompt-builder'
import { formatDate, href, isLocale, type Locale } from '@/lib/i18n'

const tilt = (deg: number) => ({ '--tilt': `${deg}deg` }) as CSSProperties
const tapeAt = (left: string, deg: number) => ({ left, '--tape-tilt': `${deg}deg` }) as CSSProperties

// Dot stickers for lists that aren't a sequence; numbered stickers for the steps, which are
const dots = ['bg-bug', 'bg-highlight', 'bg-note-mint ring-1 ring-ink/15', 'bg-note-blue ring-1 ring-ink/15']
const stepStickers = ['bg-bug-ink text-white', 'bg-highlight text-highlight-ink', 'bg-note-mint text-ink', 'bg-ink text-paper']
const noteTilts = [-1.6, 1.1, -0.7, 0.9, -1.2, 0.6]

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: l } = await params
  const locale = (isLocale(l) ? l : 'ro') as Locale
  const t = getDictionary(locale)
  const sampleCourse = getCourse(sample.course)!
  const prompting = getCourse('prompting')
  const countFor = (a: Audience) => courses.filter((c) => c.audiences.includes(a)).length
  const filterKeys: FilterKey[] = ['all', 'everyone', 'teachers', 'youth']
  const filterOptions = filterKeys.map((key) => {
    const count = key === 'all' ? courses.length : countFor(key)
    return { key, label: t.courses.filter[key], count, shown: t.courses.filter.shown(count) }
  })

  return (
    <>
      {/* Hero: flipchart paper, the headline in marker, and the certificate you get at the end */}
      <section className="grid-paper relative overflow-hidden border-b border-line">
        <div className="wrap relative grid items-center gap-12 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:grid-cols-[1.08fr_1fr] lg:gap-12 lg:pb-24 lg:pt-20">
          <div>
            <h1 className="text-[3.05rem] sm:text-[4.6rem] lg:text-[5.1rem]">{t.hero.title}</h1>
            <p className="mt-7 max-w-[34rem] text-lg text-ink-soft sm:text-xl">{t.hero.lead}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href={`${href(locale)}#courses`} className="btn btn-bug px-6 py-3.5 text-base">
                {t.hero.primary}
              </Link>
              <Link href={`${href(locale)}#certificate`} className="link">
                {t.hero.secondary}
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[15px] font-semibold">
              {t.hero.facts.map((f, i) => (
                <li key={f} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className={`dot ${dots[i % dots.length]}`} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-[34rem] pt-16 sm:pt-20 lg:max-w-none">
            <div aria-hidden="true" className="absolute left-1 top-0 flex items-start gap-1 sm:left-4">
              <span className="hand -rotate-3 text-[1.85rem] text-ink sm:text-[2.2rem]">{t.hero.note}</span>
              <svg viewBox="0 0 60 48" className="mt-3 h-11 w-14 text-ink sm:h-12 sm:w-16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8c18-6 38 0 46 30" />
                <path d="M40 31l9 8 4-11" />
              </svg>
            </div>
            <div className="relative rotate-[1.8deg] shadow-[0_26px_50px_-22px_rgb(23_37_31/0.55)]">
              <span aria-hidden="true" className="tape z-10" style={tapeAt('12%', -9)} />
              <span aria-hidden="true" data-perch className="tape z-10" style={tapeAt('88%', 8)} />
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
            <HeroLadybug label={t.hero.bug} />
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="wrap py-16 sm:py-24" aria-labelledby="who-title">
        <h2 id="who-title" className="h2 max-w-3xl">
          {t.who.title}
        </h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {t.who.items.map((w, i) => (
            <li key={w.title}>
              <span aria-hidden="true" className={`dot size-4 ${dots[i % dots.length]}`} />
              <h3 className="mt-4 text-[1.4rem] font-bold">{w.title}</h3>
              <p className="mt-2 text-ink-soft">{w.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Courses */}
      <section id="courses" className="bg-paper-2 py-16 sm:py-24" aria-labelledby="courses-title">
        <div className="wrap">
          <h2 id="courses-title" className="h2">
            {t.courses.title}
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">{t.courses.lead(courses.length)}</p>
          <CourseFilter label={t.courses.filter.label} options={filterOptions}>
            <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((c, i) => (
                <li
                  key={c.slug}
                  data-aud={c.audiences.join(' ')}
                  className={`note note-${c.colour} flex flex-col px-6 pb-7 pt-9 sm:px-7`}
                  style={{ ...tilt(noteTilts[i % noteTilts.length]), viewTransitionName: `note-${c.slug}` }}
                >
                  <span aria-hidden="true" className="tape" />
                  <p className="text-sm font-semibold text-ink/75">
                    {t.courses.for}: {c.audience[locale]}
                  </p>
                  <h3 className="mt-3 text-[1.7rem] font-extrabold leading-[1.05]" style={{ fontStretch: '85%' }}>
                    <Link href={href(locale, `courses/${c.slug}`)} className="hover:underline hover:decoration-2 hover:underline-offset-4">
                      {c.title[locale]}
                    </Link>
                  </h3>
                  <p className="mt-3 text-ink/80">{c.outcome[locale]}</p>
                  <p className="mt-5 text-sm font-semibold text-ink/75">{t.courses.tools}</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {c.tools.map((tool) => (
                      <li key={tool.name} className="chip">
                        {tool.name}
                      </li>
                    ))}
                  </ul>
                  <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-ink/15 pt-4 text-sm">
                    <div>
                      <dt className="text-ink/75">{t.course.facts.format}</dt>
                      <dd className="font-semibold">{t.course.facts.formatValue(c.sessions, c.hoursPerSession)}</dd>
                    </div>
                    <div>
                      <dt className="text-ink/75">{t.course.facts.practice}</dt>
                      <dd className="font-semibold">{t.courses.hours(c.hoursPractice)}</dd>
                    </div>
                  </dl>
                  <div className="mt-auto pt-7">
                    <Link href={href(locale, `courses/${c.slug}`)} className="btn btn-ink w-full sm:w-auto" aria-label={`${t.courses.details}: ${c.title[locale]}`}>
                      {t.courses.details}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </CourseFilter>
        </div>
      </section>

      {/* Try it: a small exercise from the prompting course */}
      <section id="try" className="grid-paper border-b border-line py-16 sm:py-24" aria-labelledby="try-title">
        <div className="wrap">
          <h2 id="try-title" className="h2 max-w-3xl">
            {t.tryIt.title}
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">{t.tryIt.lead}</p>
          <div className="mt-10">
            <PromptBuilder t={t.tryIt} />
          </div>
          {prompting && (
            <p className="mt-8 text-ink-soft">
              {t.tryIt.from}{' '}
              <Link href={href(locale, `courses/${prompting.slug}`)} className="link">
                {prompting.title[locale].split(':')[0]}
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      {/* How it works: a real sequence, so numbered */}
      <section className="wrap py-16 sm:py-24" aria-labelledby="steps-title">
        <h2 id="steps-title" className="h2">
          {t.steps.title}
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.items.map((s, i) => (
            <li key={s.title}>
              <span aria-hidden="true" className={`grid size-12 place-items-center rounded-full font-display text-xl font-extrabold shadow-[inset_0_-2px_0_rgb(0_0_0/0.12)] ${stepStickers[i % stepStickers.length]}`}>
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* The certificate: what it is and what it isn't */}
      <section id="certificate" className="bg-paper-2 py-16 sm:py-24" aria-labelledby="certificate-title">
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
      <section id="about" className="wrap py-16 sm:py-24" aria-labelledby="about-title">
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
      <section id="faq" className="bg-paper-2 py-16 sm:py-24" aria-labelledby="faq-title">
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
      <section id="contact" className="on-dark bg-board text-chalk" aria-labelledby="contact-title">
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

