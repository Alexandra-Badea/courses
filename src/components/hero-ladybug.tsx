'use client'

import { useCallback, useEffect, useRef } from 'react'
import { Ladybug } from './ladybug'

type Point = { x: number; y: number }

const REST_ANGLE = -28

/**
 * The ladybug in the hero. Once the certificate is in view it walks in from the bottom-left,
 * across the certificate, and settles on the tape at its top-right corner; pressing it makes it
 * fly a loop and land there again. With reduced motion it simply sits on the tape, and pressing it
 * opens its wings in place. It finds its spot through [data-perch] inside its parent, which must be
 * position: relative.
 */
export function HeroLadybug({ label }: { label: string }) {
  const button = useRef<HTMLButtonElement>(null)
  const bug = useRef<HTMLSpanElement>(null)
  const pos = useRef<Point & { angle: number; scale: number }>({ x: 0, y: 0, angle: REST_ANGLE, scale: 1 })
  const busy = useRef(false)
  // Set once the bug has reached the seal (by walking or flying), so the walk never starts again
  const arrived = useRef(false)
  const flights = useRef(0)

  const size = () => (button.current?.offsetWidth ?? 40)

  const place = useCallback((p: Point & { angle: number; scale?: number }) => {
    const el = button.current
    if (!el) return
    const s = size()
    el.style.transform = transform(p.x, p.y, p.angle, p.scale ?? 1, s)
    pos.current = { x: p.x, y: p.y, angle: p.angle, scale: p.scale ?? 1 }
  }, [])

  // Where the bug sits: on the piece of tape at the certificate's top-right corner
  const restPoint = useCallback((): Point | null => {
    const el = button.current
    const parent = el?.parentElement
    const perch = parent?.querySelector<HTMLElement>('[data-perch]')
    if (!el || !parent || !perch) return null
    const p = parent.getBoundingClientRect()
    const r = perch.getBoundingClientRect()
    return { x: r.left - p.left + r.width * 0.5, y: r.top - p.top + r.height * 0.3 }
  }, [])

  const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const el = button.current
    const parent = el?.parentElement
    if (!el || !parent) return
    let cancelled = false
    let timer: ReturnType<typeof setTimeout> | undefined

    const rest = restPoint()
    if (!rest) return

    if (reduced()) {
      place({ ...rest, angle: REST_ANGLE })
      arrived.current = true
      el.style.visibility = 'visible'
      return
    }

    // Start just outside the bottom-left corner of the certificate
    const box = parent.getBoundingClientRect()
    place({ x: -box.width * 0.04, y: box.height * 1.02, angle: -60 })
    el.style.visibility = 'visible'

    const walk = () => {
      if (cancelled || busy.current || arrived.current) return
      const end = restPoint()
      if (!end) return
      const { width: w, height: h } = parent.getBoundingClientRect()
      const start = { x: pos.current.x, y: pos.current.y }
      const points = bezier(start, { x: w * 0.38, y: h * 1.05 }, { x: w * 0.5, y: h * 0.2 }, end, 48)
      busy.current = true
      arrived.current = true
      bug.current?.classList.add('is-walking')
      const frames = framesAlong(points, size(), 1, pos.current.angle)
      const length = pathLength(points)
      const duration = Math.min(4200, Math.max(2400, (length / 170) * 1000))
      const anim = el.animate(frames.keyframes, { duration, easing: 'cubic-bezier(.35,.1,.45,1)', fill: 'forwards' })
      anim.onfinish = () => {
        bug.current?.classList.remove('is-walking')
        const last = frames.last
        // Turn in place to face up-left
        const turn = el.animate(
          [{ transform: transform(end.x, end.y, last, 1, size()) }, { transform: transform(end.x, end.y, unwrap(last, REST_ANGLE), 1, size()) }],
          { duration: 380, easing: 'ease-out', fill: 'forwards' },
        )
        turn.onfinish = () => {
          place({ ...end, angle: REST_ANGLE })
          anim.cancel()
          turn.cancel()
          busy.current = false
        }
      }
    }

    const seen = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          seen.disconnect()
          timer = setTimeout(walk, 700)
        }
      },
      { threshold: 0.45 },
    )
    seen.observe(parent)
    return () => {
      cancelled = true
      seen.disconnect()
      if (timer) clearTimeout(timer)
    }
  }, [place, restPoint])

  // Keep it on the seal when the layout changes
  useEffect(() => {
    const parent = button.current?.parentElement
    if (!parent || typeof ResizeObserver === 'undefined') return
    let first = true
    const ro = new ResizeObserver(() => {
      if (first) {
        first = false
        return
      }
      if (busy.current) return
      const rest = restPoint()
      if (rest && arrived.current) place({ ...rest, angle: REST_ANGLE })
    })
    ro.observe(parent)
    return () => ro.disconnect()
  }, [place, restPoint])

  const fly = () => {
    const el = button.current
    const parent = el?.parentElement
    const end = restPoint()
    if (!el || !parent || !end || busy.current) return

    if (reduced()) {
      bug.current?.classList.add('is-flying')
      setTimeout(() => bug.current?.classList.remove('is-flying'), 900)
      return
    }

    const box = parent.getBoundingClientRect()
    const w = box.width
    const h = box.height
    const side = flights.current++ % 2 === 0 ? -1 : 1
    const from = { x: pos.current.x, y: pos.current.y }
    const path = catmullRom(
      [
        from,
        { x: from.x + side * w * 0.12, y: from.y - h * 0.32 },
        { x: w * (side < 0 ? 0.18 : 0.82), y: h * 0.12 },
        { x: w * 0.5, y: h * 0.55 },
        { x: end.x + w * 0.16 * -side, y: end.y - h * 0.22 },
        end,
      ],
      14,
    )
    busy.current = true
    arrived.current = true
    bug.current?.classList.add('is-flying')
    const frames = framesAlong(path, size(), 1.45, pos.current.angle)
    const anim = el.animate(frames.keyframes, { duration: 2600, easing: 'cubic-bezier(.4,0,.3,1)', fill: 'forwards' })
    anim.onfinish = () => {
      bug.current?.classList.remove('is-flying')
      const turn = el.animate(
        [{ transform: transform(end.x, end.y, frames.last, 1, size()) }, { transform: transform(end.x, end.y, unwrap(frames.last, REST_ANGLE), 1, size()) }],
        { duration: 320, easing: 'ease-out', fill: 'forwards' },
      )
      turn.onfinish = () => {
        place({ ...end, angle: REST_ANGLE })
        anim.cancel()
        turn.cancel()
        busy.current = false
      }
    }
  }

  return (
    <button
      ref={button}
      type="button"
      onClick={fly}
      aria-label={label}
      title={label}
      className="absolute left-0 top-0 z-20 size-[clamp(2.7rem,4.2vw,3.5rem)] cursor-pointer rounded-full p-0 drop-shadow-[0_3px_3px_rgb(23_37_31/0.35)] [-webkit-tap-highlight-color:transparent]"
      style={{ visibility: 'hidden' }}
    >
      <span ref={bug} className="bug block size-full">
        <Ladybug className="block size-full overflow-visible" />
      </span>
    </button>
  )
}

function transform(x: number, y: number, angle: number, scale: number, size: number) {
  return `translate(${(x - size / 2).toFixed(1)}px, ${(y - size / 2).toFixed(1)}px) rotate(${angle.toFixed(1)}deg) scale(${scale.toFixed(3)})`
}

/** The same angle as `to`, moved by whole turns to be as close as possible to `from` */
function unwrap(from: number, to: number) {
  let a = to
  while (a - from > 180) a -= 360
  while (a - from < -180) a += 360
  return a
}

function pathLength(points: Point[]) {
  let total = 0
  for (let i = 1; i < points.length; i++) total += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y)
  return total
}

/** Keyframes that move along the points, facing the way of travel (the bug is drawn facing up) */
function framesAlong(points: Point[], size: number, peakScale: number, startAngle: number) {
  const total = pathLength(points) || 1
  const keyframes: Keyframe[] = []
  let travelled = 0
  let angle = startAngle
  for (let i = 0; i < points.length; i++) {
    const a = points[Math.max(0, i - 1)]
    const b = points[Math.min(points.length - 1, i + 1)]
    if (i > 0) travelled += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y)
    if (Math.hypot(b.x - a.x, b.y - a.y) > 0.01) {
      const heading = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI + 90
      angle = unwrap(angle, heading)
    }
    const t = travelled / total
    const scale = 1 + (peakScale - 1) * Math.sin(Math.PI * t)
    keyframes.push({ offset: Math.min(1, t), transform: transform(points[i].x, points[i].y, angle, scale, size) })
  }
  keyframes[0].offset = 0
  keyframes[keyframes.length - 1].offset = 1
  return { keyframes, last: angle }
}

function bezier(p0: Point, p1: Point, p2: Point, p3: Point, steps: number): Point[] {
  const out: Point[] = []
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const u = 1 - t
    out.push({
      x: u * u * u * p0.x + 3 * u * u * t * p1.x + 3 * u * t * t * p2.x + t * t * t * p3.x,
      y: u * u * u * p0.y + 3 * u * u * t * p1.y + 3 * u * t * t * p2.y + t * t * t * p3.y,
    })
  }
  return out
}

/** A smooth curve through all the points */
function catmullRom(points: Point[], stepsPerSegment: number): Point[] {
  const out: Point[] = []
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[Math.min(points.length - 1, i + 2)]
    for (let s = 0; s < stepsPerSegment; s++) {
      const t = s / stepsPerSegment
      const t2 = t * t
      const t3 = t2 * t
      out.push({
        x: 0.5 * (2 * p1.x + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
        y: 0.5 * (2 * p1.y + (-p0.y + p2.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3),
      })
    }
  }
  out.push(points[points.length - 1])
  return out
}
