import type { ReactNode } from 'react'
import site from '@/content/site.json'
import { LogoMark } from './logo'
import type { Dict } from '@/content/dictionary'

export interface SheetData {
  name: string
  courseTitle: string
  /** Already formatted dates */
  start: string
  end: string
  issued: string
  hoursLive: number
  hoursPractice: number
  skills: string[]
  code: string
  verifyUrl: string
  sample?: boolean
}

/**
 * The certificate of participation, A4 landscape. Everything is sized in container units (cqw),
 * so the same sheet works as a small preview on the home page and as the full printed page.
 */
export function CertificateSheet({ data, t, qr }: { data: SheetData; t: Dict['print']; qr: ReactNode }) {
  const total = data.hoursLive + data.hoursPractice
  return (
    <div className="@container w-full">
      <article
        className="relative aspect-[297/210] w-full overflow-hidden bg-white text-ink"
        style={{ fontSize: '1.45cqw' }}
        aria-label={`${t.heading}: ${data.name}`}
      >
        {/* Frame: two board-green rules */}
        <div className="absolute inset-[2.2cqw] rounded-[0.6cqw] border-[0.25cqw] border-board" />
        <div className="absolute inset-[3cqw] rounded-[0.3cqw] border-[0.08cqw] border-board/50" />

        {data.sample && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid place-items-center font-display font-extrabold text-board/[0.06]"
            style={{ fontSize: '16cqw', transform: 'rotate(-14deg)' }}
          >
            {t.sample}
          </div>
        )}

        <div className="absolute inset-[5.5cqw] flex flex-col">
          <header className="flex items-start justify-between">
            <div className="flex items-center gap-[0.8cqw] font-display font-bold" style={{ fontSize: '1.9cqw' }}>
              <LogoMark className="size-[3cqw]" />
              {site.brand}
            </div>
            <div className="grid size-[9.5cqw] place-items-center rounded-full bg-highlight text-center font-display font-bold leading-none text-highlight-ink">
              <span>
                <span className="block" style={{ fontSize: '3.4cqw' }}>
                  {total}
                </span>
                <span className="mt-[0.3cqw] block" style={{ fontSize: '1.25cqw' }}>
                  {t.unit(total)}
                </span>
              </span>
            </div>
          </header>

          <div className="-mt-[3cqw]">
            <p className="font-display font-semibold uppercase text-board" style={{ fontSize: '1.3cqw', letterSpacing: '0.18em' }}>
              {t.heading}
            </p>
            <p className="mt-[1.6cqw] text-ink-soft">{t.confirms}</p>
            <p className="mt-[0.4cqw] font-display font-bold leading-none" style={{ fontSize: '4.4cqw' }}>
              {data.name}
            </p>
            <p className="mt-[1.4cqw] text-ink-soft">{t.tookPart}</p>
            <p className="mt-[0.3cqw] max-w-[78%] font-display font-bold leading-tight text-board" style={{ fontSize: '2.2cqw' }}>
              {data.courseTitle}
            </p>
            <p className="mt-[0.8cqw] max-w-[80%] text-ink-soft">{t.held(data.start, data.end, total, data.hoursLive, data.hoursPractice)}</p>
          </div>

          <div className="mt-[1.6cqw]">
            <p className="font-semibold" style={{ fontSize: '1.2cqw' }}>
              {t.skills}
            </p>
            <ul className="mt-[0.4cqw] grid grid-cols-2 gap-x-[2.5cqw] gap-y-[0.3cqw] text-ink-soft" style={{ fontSize: '1.15cqw' }}>
              {data.skills.map((s) => (
                <li key={s} className="flex gap-[0.6cqw]">
                  <span aria-hidden="true" className="mt-[0.55cqw] size-[0.5cqw] shrink-0 rounded-full bg-board" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <footer className="mt-auto flex items-end justify-between gap-[3cqw]">
            <div className="flex items-end gap-[4cqw]">
              <div>
                <p className="font-display font-bold" style={{ fontSize: '1.7cqw' }}>
                  {site.trainer}
                </p>
                <div className="mt-[0.3cqw] h-[0.1cqw] w-[18cqw] bg-ink/40" />
                <p className="mt-[0.4cqw] text-ink-soft" style={{ fontSize: '1.1cqw' }}>
                  {t.trainer}
                </p>
              </div>
              <div>
                <p className="font-semibold">{data.issued}</p>
                <div className="mt-[0.3cqw] h-[0.1cqw] w-[14cqw] bg-ink/40" />
                <p className="mt-[0.4cqw] text-ink-soft" style={{ fontSize: '1.1cqw' }}>
                  {t.issuedOn}
                </p>
              </div>
            </div>
            <div className="flex items-end gap-[1.2cqw] text-right" style={{ fontSize: '1.05cqw' }}>
              <div>
                <p className="text-ink-soft">{t.code}</p>
                <p className="font-display font-bold tracking-wide" style={{ fontSize: '1.5cqw' }}>
                  {data.code}
                </p>
                <p className="mt-[0.3cqw] text-ink-soft">
                  {t.checkAt}: {data.verifyUrl.replace(/^https?:\/\//, '').split('?')[0]}
                </p>
              </div>
              <div className="size-[9.5cqw] shrink-0">{qr}</div>
            </div>
          </footer>
          <p className="mt-[1.2cqw] text-ink-soft/80" style={{ fontSize: '0.95cqw' }}>
            {t.disclaimer}
          </p>
        </div>
      </article>
    </div>
  )
}
