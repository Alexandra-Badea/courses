import type { CSSProperties } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import site from '@/content/site.json'
import { courses, getCourse, hoursLive, type Course, type NoteColour } from '@/content/courses'
import { getDictionary } from '@/content/dictionary'
import { Ladybug } from '@/components/ladybug'
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

// Written out in full so Tailwind finds the classes
const noteBg: Record<NoteColour, string> = {
  yellow: 'bg-note-yellow',
  pink: 'bg-note-pink',
  mint: 'bg-note-mint',
  blue: 'bg-note-blue',
  peach: 'bg-note-peach',
  lilac: 'bg-note-lilac',
}
const toolId = (name: string) => `tool-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
const tilt = (deg: number) => ({ '--tilt': `${deg}deg` }) as CSSProperties

export default async function CoursePage({ params }: { params: Params }) {
  const { locale: l, slug } = await params
  const course = getCourse(slug)
  if (!course || !isLocale(l)) notFound()
  const locale = l as Locale
  const t = getDictionary(locale)
  const colour = noteBg[course.colour]
  const described = new Set(course.tools.map((tool) => tool.name))

  const facts = [
    { k: t.course.facts.audience, v: course.audience[locale] },
    { k: t.course.facts.format, v: t.course.facts.formatValue(course.sessions, course.hoursPerSession) },
    { k: t.course.facts.practice, v: t.course.facts.practiceValue(course.hoursPractice) },
    { k: t.course.facts.group, v: t.course.facts.groupValue },
    { k: t.course.facts.platform, v: site.platform },
  ]

  return (
    <>
      {/* The course's own sticky-note colour, with the flipchart grid over it */}
      <section className={`relative overflow-hidden ${colour}`}>
        <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0" />
        <div className="wrap relative py-12 sm:py-16">
          <Link href={`${href(locale)}#courses`} className="inline-flex items-center gap-2 text-sm font-semibold text-ink/75 hover:text-ink">
            <span aria-hidden="true">←</span> {t.course.back}
          </Link>
          <h1 className="mt-6 max-w-4xl text-[2.7rem] sm:text-[4.1rem]">{course.title[locale]}</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink/80 sm:text-xl">{course.outcome[locale]}</p>
          <ul aria-label={t.course.toolsLabel} className="mt-7 flex max-w-3xl flex-wrap gap-1.5">
            {course.tools.map((tool) => (
              <li key={tool.name} className="chip">
                {tool.name}
              </li>
            ))}
          </ul>
          <dl className="mt-10 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
            {facts.map((f) => (
              <div key={f.k} className="border-t border-ink/20 pt-3">
                <dt className="text-sm text-ink/75">{f.k}</dt>
                <dd className="mt-1 font-semibold">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="wrap grid gap-14 py-14 sm:py-20 lg:grid-cols-[1fr_21rem] lg:gap-14">
        <div className="min-w-0 space-y-20">
          <section aria-labelledby="program-title">
            <h2 id="program-title" className="text-[2.2rem] sm:text-[2.9rem]">
              {t.course.programTitle}
            </h2>
            <ol className="mt-8 space-y-6">
              {course.program.map((s, i) => (
                <li key={s.title.en} className="card overflow-hidden">
                  <div className="flex items-start gap-4 border-b border-line px-5 py-5 sm:px-7">
                    <span
                      aria-hidden="true"
                      className={`grid size-11 shrink-0 place-items-center rounded-full font-display text-lg font-extrabold shadow-[inset_0_-2px_0_rgb(0_0_0/0.1)] ${colour}`}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-soft">{t.course.session(i + 1)}</p>
                      <h3 className="mt-0.5 text-xl font-bold sm:text-2xl">{s.title[locale]}</h3>
                    </div>
                  </div>
                  <div className="grid gap-6 px-5 py-5 sm:px-7 sm:py-6 md:grid-cols-[1fr_11.5rem] md:gap-8">
                    <div>
                      <h4 className="font-semibold">{t.course.learnTitle}</h4>
                      <ul className="mt-2.5 space-y-2">
                        {s.learn[locale].map((item) => (
                          <li key={item} className="flex gap-3">
                            <span aria-hidden="true" className="dot mt-[0.45rem] size-2.5 bg-bug" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold">{t.course.toolsLabel}</h4>
                      <ul className="mt-2.5 flex flex-wrap gap-1.5">
                        {s.tools.map((tool) => (
                          <li key={tool}>
                            {described.has(tool) ? (
                              <a href={`#${toolId(tool)}`} className="chip bg-paper underline decoration-ink/25 underline-offset-2 hover:border-ink/40 hover:bg-white hover:decoration-bug">
                                {tool}
                              </a>
                            ) : (
                              <span className="chip bg-paper">{tool}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 px-5 py-4 sm:px-7 ${colour}`}>
                    <span className="hand text-[1.6rem]">{t.course.makeLabel}:</span>
                    <span className="font-semibold">{s.make[locale]}</span>
                  </p>
                </li>
              ))}
            </ol>
            <div className={`note note-${course.colour} mt-12 max-w-2xl px-6 pb-6 pt-9 sm:px-8`} style={tilt(-0.8)}>
              <span aria-hidden="true" className="tape" />
              <h3 className="text-2xl font-bold">{t.course.finalTitle}</h3>
              <p className="mt-2 text-lg text-ink/80">{course.finalTask[locale]}</p>
            </div>
          </section>

          <section aria-labelledby="tools-title">
            <h2 id="tools-title" className="text-[2.2rem] sm:text-[2.9rem]">
              {t.course.toolsTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-ink-soft">{course.toolsNote?.[locale] ?? t.course.toolsNote}</p>
            <dl className="mt-7 grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {course.tools.map((tool) => (
                <div key={tool.name} id={toolId(tool.name)} className="tool-entry border-t border-line pt-3">
                  <dt className="font-display text-lg font-bold">{tool.name}</dt>
                  <dd className="mt-1 text-ink-soft">{tool.use[locale]}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="skills-title">
            <h2 id="skills-title" className="text-[2.2rem] sm:text-[2.9rem]">
              {t.course.skillsTitle}
            </h2>
            <ul className="mt-6 space-y-3">
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

          <div className="grid gap-14 md:grid-cols-2 md:gap-10">
            <section aria-labelledby="needs-title">
              <h2 id="needs-title" className="text-[1.9rem] sm:text-[2.3rem]">
                {t.course.needsTitle}
              </h2>
              <ul className="mt-5 space-y-3">
                {course.needs[locale].map((n) => (
                  <li key={n} className="flex gap-3">
                    <span aria-hidden="true" className="dot mt-[0.45rem] size-2.5 bg-ink" />
                    {n}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="get-title">
              <h2 id="get-title" className="text-[1.9rem] sm:text-[2.3rem]">
                {t.course.getTitle}
              </h2>
              <ul className="mt-5 space-y-3">
                {t.course.get(course.sessions, course.hoursPerSession, course.hoursPractice).map((g) => (
                  <li key={g} className="flex gap-3">
                    <span aria-hidden="true" className="dot mt-[0.45rem] size-2.5 bg-bug" />
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
      <div className="relative">
        <Ladybug className="absolute -top-6 right-5 z-10 size-12 rotate-[20deg] drop-shadow-[0_2px_2px_rgb(23_37_31/0.3)]" />
        <div className="card overflow-hidden shadow-[0_18px_40px_-28px_rgb(23_37_31/0.5)]">
          <div className={`px-6 py-4 ${noteBg[course.colour]}`}>
            <h2 id="enrol-title" className="text-2xl">
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
                <a href={course.paymentLink} className="btn btn-bug w-full" rel="noopener noreferrer">
                  {t.enrol.pay}
                </a>
                <p className="mt-3 text-sm text-ink-soft">{t.enrol.payNote}</p>
              </>
            ) : (
              <>
                <a href={mailto} className="btn btn-bug w-full">
                  {t.enrol.request}
                </a>
                <p className="mt-3 text-sm text-ink-soft">{t.enrol.requestNote}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}
