'use client'

import { useEffect, useRef, useState } from 'react'
import type { Dict } from '@/content/dictionary'

type Part = 'role' | 'context' | 'task' | 'format'
const PARTS: Part[] = ['role', 'context', 'task', 'format']

// Each part has its own marker colour, on its toggle and in the prompt
const marker: Record<Part, string> = {
  role: 'bg-note-blue',
  context: 'bg-note-mint',
  task: 'bg-note-yellow',
  format: 'bg-note-pink',
}

// Where each of the ladybug's four spots sits (one per part)
const spots: Record<Part, [number, number, number]> = {
  role: [25.5, 31, 3],
  context: [38.5, 31, 3],
  task: [24.5, 42.5, 2.6],
  format: [39.5, 42.5, 2.6],
}

/**
 * A small exercise from the prompting course: start from a vague request and add a role, context,
 * a clear task and a format. The prompt is rebuilt as you go, each part marked in its colour,
 * and the ladybug gains a spot per part.
 */
export function PromptBuilder({ t }: { t: Dict['tryIt'] }) {
  const [situation, setSituation] = useState(0)
  const [on, setOn] = useState<Record<Part, boolean>>({ role: false, context: false, task: false, format: false })
  const [copy, setCopy] = useState<'idle' | 'done' | 'failed'>('idle')
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])

  const s = t.situations[situation]
  const count = PARTS.filter((p) => on[p]).length
  const pieces: { part: Part | null; text: string }[] = [
    ...(on.role ? [{ part: 'role' as const, text: s.role }] : []),
    ...(on.context ? [{ part: 'context' as const, text: s.context }] : []),
    on.task ? { part: 'task' as const, text: s.task } : { part: null, text: s.base },
    ...(on.format ? [{ part: 'format' as const, text: s.format }] : []),
  ]
  const plain = pieces.map((p) => p.text).join(' ')

  const doCopy = async () => {
    clearTimeout(timer.current)
    try {
      await navigator.clipboard.writeText(plain)
      setCopy('done')
    } catch {
      setCopy('failed')
    }
    timer.current = setTimeout(() => setCopy('idle'), 2400)
  }

  return (
    // On a phone the prompt sits between the situation and the parts, so you see it change as you tap
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-8">
      <div className="order-1 lg:col-start-1 lg:row-start-1">
        <h3 className="text-lg font-bold">{t.situation}</h3>
        <div role="group" aria-label={t.situation} className="mt-3 flex flex-wrap gap-2">
          {t.situations.map((x, i) => (
            <button
              key={x.id}
              type="button"
              aria-pressed={i === situation}
              onClick={() => setSituation(i)}
              className={`rounded-full border px-4 py-2 text-[15px] font-semibold transition-colors ${
                i === situation ? 'border-ink bg-ink text-paper' : 'border-ink/20 bg-white/60 hover:border-ink/50 hover:bg-white'
              }`}
            >
              {x.label}
            </button>
          ))}
        </div>
      </div>

      <div className="order-3 lg:col-start-1 lg:row-start-2">
        <h3 className="text-lg font-bold">{t.parts}</h3>
        <div role="group" aria-label={t.parts} className="mt-3 grid grid-cols-2 gap-2.5">
          {PARTS.map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={on[p]}
              onClick={() => setOn((o) => ({ ...o, [p]: !o[p] }))}
              className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left font-semibold transition-colors ${
                on[p] ? `border-ink ${marker[p]}` : 'border-ink/15 bg-white/70 hover:border-ink/40'
              }`}
            >
              <span
                aria-hidden="true"
                className={`grid size-6 shrink-0 place-items-center rounded-md border-2 border-ink text-sm leading-none ${on[p] ? 'bg-ink text-paper' : 'bg-white'}`}
              >
                {on[p] ? '✓' : '+'}
              </span>
              {t.part[p]}
            </button>
          ))}
        </div>
      </div>

      <div className="relative order-2 self-start rounded-2xl border border-line bg-white p-5 shadow-[0_18px_40px_-28px_rgb(23_37_31/0.5)] sm:p-7 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-ink-soft">{t.prompt}</p>
            <p aria-live="polite" className="mt-1 font-display text-lg font-bold leading-snug">
              {t.score[count]}
            </p>
          </div>
          <SpotBug on={on} />
        </div>
        <p className="mt-5 min-h-32 rounded-xl bg-paper px-4 py-4 text-[1.05rem] leading-[1.85] sm:px-5">
          {pieces.map((p, i) => (
            <span key={`${p.part ?? 'base'}-${i}`}>
              {i > 0 && ' '}
              {p.part ? <mark className={`rounded-[3px] px-0.5 text-ink [box-decoration-break:clone] ${marker[p.part]}`}>{p.text}</mark> : <span className="text-ink-soft">{p.text}</span>}
            </span>
          ))}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <button type="button" onClick={doCopy} className="btn btn-ink">
            {copy === 'done' ? `${t.copied} ✓` : t.copy}
          </button>
          <span aria-live="polite" className="text-sm text-ink-soft">
            {copy === 'failed' ? t.copyFailed : ''}
          </span>
        </div>
      </div>
    </div>
  )
}

/** The ladybug with one spot per part of the prompt; spots pop in as parts are added */
function SpotBug({ on }: { on: Record<Part, boolean> }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="size-16 shrink-0 -rotate-12 sm:size-24">
      <g stroke="#17251f" strokeWidth="2.4" strokeLinecap="round" fill="none">
        <path d="M25 27l-7-3-4-6M21 36l-8-1-4 3M24 45l-7 4-3 7M39 27l7-3 4-6M43 36l8-1 4 3M40 45l7 4 3 7" />
        <path d="M29 18c-1.4-5-3.4-7.6-6.4-9.2M35 18c1.4-5 3.4-7.6 6.4-9.2" strokeWidth="1.8" />
      </g>
      <circle cx="32" cy="36" r="14" fill="#e2483d" />
      <path d="M32 22.5V50" stroke="#17251f" strokeWidth="1" />
      {PARTS.map((p) => {
        const [cx, cy, r] = spots[p]
        return (
          <circle
            key={p}
            cx={cx}
            cy={cy}
            r={r}
            fill="#17251f"
            className="transition-transform duration-300 ease-[cubic-bezier(.3,1.6,.5,1)] motion-reduce:transition-none"
            style={{ transformBox: 'view-box', transformOrigin: `${cx}px ${cy}px`, transform: on[p] ? 'scale(1)' : 'scale(0)' }}
          />
        )
      })}
      <path d="M22.6 24.6C23 18.6 27 15.6 32 15.6s9 3 9.4 9c-2.9-1.5-6.1-2.1-9.4-2.1s-6.5.6-9.4 2.1Z" fill="#17251f" />
      <circle cx="28.4" cy="19.4" r="1.5" fill="#fff" />
      <circle cx="35.6" cy="19.4" r="1.5" fill="#fff" />
    </svg>
  )
}
