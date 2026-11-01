'use client'

import { useState, type ReactNode } from 'react'
import { flushSync } from 'react-dom'

export type FilterKey = 'all' | 'everyone' | 'teachers' | 'youth'

interface Props {
  label: string
  /** `shown` is read out to screen readers when the filter changes, e.g. "3 courses shown" */
  options: { key: FilterKey; label: string; count: number; shown: string }[]
  children: ReactNode
}

/**
 * Buttons that show only the courses for one audience. The course notes are rendered on the server
 * with data-aud="everyone teachers …"; this sets data-show on their wrapper and CSS hides the rest.
 * Where the browser can, the notes slide to their new places (a view transition).
 */
export function CourseFilter({ label, options, children }: Props) {
  const [filter, setFilter] = useState<FilterKey>('all')
  const current = options.find((o) => o.key === filter)

  const choose = (key: FilterKey) => {
    if (key === filter) return
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!still && 'startViewTransition' in document) {
      document.startViewTransition(() => flushSync(() => setFilter(key)))
    } else {
      setFilter(key)
    }
  }

  return (
    <div>
      <div role="group" aria-label={label} className="mt-8 flex flex-wrap gap-2">
        {options.map((o) => {
          const active = o.key === filter
          return (
            <button
              key={o.key}
              type="button"
              aria-pressed={active}
              onClick={() => choose(o.key)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[15px] font-semibold transition-colors ${
                active ? 'border-ink bg-ink text-paper' : 'border-ink/20 bg-white/60 text-ink hover:border-ink/50 hover:bg-white'
              }`}
            >
              {o.label}
              <span aria-hidden="true" className={`rounded-full px-1.5 text-xs leading-5 ${active ? 'bg-paper/20' : 'bg-ink/10'}`}>
                {o.count}
              </span>
            </button>
          )
        })}
      </div>
      <p aria-live="polite" className="sr-only">
        {current?.shown}
      </p>
      <div className="course-board" data-show={filter}>
        {children}
      </div>
    </div>
  )
}
