import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import site from '@/content/site.json'
import { courses, getCourse, hoursLive, type Course } from '@/content/courses'
import { getDictionary } from '@/content/dictionary'
import { formatDate, formatPrice, href, isLocale, type Locale } from '@/lib/i18n'

export const dynamicParams = false

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }))
}

type Params = Promise<{ locale: string; slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params
  const course = getCourse(slug)
  if (!course || !isLocale(locale)) return {}
  return { title: course.title[locale], description: course.outcome[locale] }
}

export default async function CoursePage({ params }: { params: Params }) {
  const { locale: l, slug } = await params
  const course = getCourse(slug)
  if (!course || !isLocale(l)) notFound()
  const locale = l as Locale
  const t = getDictionary(locale)

  const facts = [
    { k: t.course.facts.audience, v: course.audience[locale] },
    { k: t.course.facts.format, v: t.course.facts.formatValue(course.sessions, course.hoursPerSession) },
    { k: t.course.facts.practice, v: t.course.facts.practiceValue(course.hoursPractice) },
    { k: t.course.facts.group, v: t.course.facts.groupValue },
    { k: t.course.facts.platform, v: site.platform },
  ]

  return (
    <>
      <section className="bg-board text-chalk">
        <div className="wrap py-12 sm:py-16">
          <Link href={`${href(locale)}#courses`} className="inline-flex items-center gap-2 text-sm font-semibold text-chalk-soft hover:text-chalk">
            <span aria-hidden="true">←</span> {t.course.back}
          </Link>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold sm:text-5xl">{course.title[locale]}</h1>
          <p className="mt-5 max-w-2xl text-lg text-chalk-soft sm:text-xl">{course.outcome[locale]}</p>
          <dl className="mt-10 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
            {facts.map((f) => (
              <div key={f.k} className="border-t border-chalk/20 pt-3">
                <dt className="text-sm text-chalk-soft">{f.k}</dt>
                <dd className="mt-1 font-semibold">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="wrap grid gap-12 py-14 sm:py-16 lg:grid-cols-[1fr_22rem] lg:gap-16">
        <div className="space-y-12">
          <section aria-labelledby="skills-title">
            <h2 id="skills-title" className="text-2xl font-bold sm:text-3xl">
              {t.course.skillsTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {course.skills[locale].map((s) => (
                <li key={s} className="flex gap-3 text-lg">
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1.5 size-5 shrink-0 text-ok">
                    <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="program-title">
            <h2 id="program-title" className="text-2xl font-bold sm:text-3xl">
              {t.course.programTitle}
            </h2>
            <ol className="mt-5 space-y-3">
              {course.sessionTopics[locale].map((topic, i) => (
                <li key={topic} className="card flex gap-4 p-4 sm:p-5">
                  <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-full bg-board font-display font-bold text-chalk">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-board">{t.course.session(i + 1)}</p>
                    <p className="mt-0.5 font-semibold">{topic}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-5 rounded-2xl bg-paper-2 p-5">
              <h3 className="font-bold">{t.course.finalTitle}</h3>
              <p className="mt-1 text-ink-soft">{course.finalTask[locale]}</p>
            </div>
          </section>

          <section aria-labelledby="get-title">
            <h2 id="get-title" className="text-2xl font-bold sm:text-3xl">
              {t.course.getTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {t.course.get(course.sessions, course.hoursPerSession, course.hoursPractice).map((g) => (
                <li key={g} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 size-2 shrink-0 rounded-full bg-board" />
                  {g}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-ink-soft">
              {t.certificate.condition}{' '}
              <Link href={`${href(locale)}#certificate`} className="link">
                {t.hero.secondary}
              </Link>
            </p>
          </section>
        </div>

        <EnrolBox course={course} locale={locale} />
      </div>
    </>
  )
}

function EnrolBox({ course, locale }: { course: Course; locale: Locale }) {
  const t = getDictionary(locale)
  const title = course.title[locale]
  const group = course.nextGroup
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(t.enrol.subject(title))}&body=${encodeURIComponent(t.enrol.body(title))}`

  return (
    <aside aria-labelledby="enrol-title" className="lg:sticky lg:top-24 lg:self-start">
      <div className="card overflow-hidden">
        <div className="bg-paper-2 px-6 py-4">
          <h2 id="enrol-title" className="text-xl font-bold">
            {t.enrol.title}
          </h2>
        </div>
        <dl className="space-y-4 px-6 py-5">
          <div>
            <dt className="text-sm text-ink-soft">{t.enrol.nextGroup}</dt>
            <dd className="mt-0.5 font-semibold">
              {group ? `${formatDate(group.start, locale)} – ${formatDate(group.end, locale)}` : <span className="font-normal">{t.enrol.noGroup}</span>}
            </dd>
          </div>
          {group && (
            <div>
              <dt className="text-sm text-ink-soft">{t.enrol.schedule}</dt>
              <dd className="mt-0.5 font-semibold">{group.schedule[locale]}</dd>
            </div>
          )}
          <div>
            <dt className="text-sm text-ink-soft">{t.enrol.price}</dt>
            <dd className="mt-0.5 font-semibold">
              {course.price ? formatPrice(course.price.amount, course.price.currency, locale) : <span className="font-normal">{t.enrol.noPrice}</span>}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-ink-soft">{t.verify.hours}</dt>
            <dd className="mt-0.5 font-semibold">{t.verify.hoursValue(hoursLive(course), course.hoursPractice)}</dd>
          </div>
        </dl>
        <div className="border-t border-line px-6 py-5">
          {course.paymentLink ? (
            <>
              <a href={course.paymentLink} className="btn btn-board w-full" rel="noopener noreferrer">
                {t.enrol.pay}
              </a>
              <p className="mt-3 text-sm text-ink-soft">{t.enrol.payNote}</p>
            </>
          ) : (
            <>
              <a href={mailto} className="btn btn-board w-full">
                {t.enrol.request}
              </a>
              <p className="mt-3 text-sm text-ink-soft">{t.enrol.requestNote}</p>
            </>
          )}
        </div>
      </div>
    </aside>
  )
}
