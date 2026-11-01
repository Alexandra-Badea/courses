'use client'

import { useEffect, useState } from 'react'

/** One issued certificate: public/certificates/<code>.json (made by `npm run certificate`) */
export interface CertificateRecord {
  code: string
  name: string
  course: string
  start: string
  end: string
  issued: string
  hoursLive: number
  hoursPractice: number
  sample?: boolean
}

/** "cb-7k3m 9qx2" -> "CB-7K3M9QX2"; null when it can't be a code (also keeps it to a plain file name) */
export function normalizeCode(input: string): string | null {
  const code = input.trim().toUpperCase().replace(/\s+/g, '')
  return /^[A-Z0-9-]{4,32}$/.test(code) ? code : null
}

export type Lookup =
  | { state: 'idle' }
  | { state: 'loading'; code: string }
  | { state: 'found'; code: string; record: CertificateRecord }
  | { state: 'missing'; code: string }
  | { state: 'error'; code: string }

/** Looks a code up among the published certificates */
export function useCertificate(code: string | null): Lookup {
  const [result, setResult] = useState<Lookup>({ state: 'idle' })

  useEffect(() => {
    if (!code) return
    let alive = true
    // eslint-disable-next-line react-hooks/set-state-in-effect -- show "checking" while the file loads
    setResult({ state: 'loading', code })
    fetch(`/certificates/${encodeURIComponent(code)}.json`, { cache: 'no-store' })
      .then(async (res) => {
        if (!alive) return
        if (res.status === 404) return setResult({ state: 'missing', code })
        if (!res.ok) return setResult({ state: 'error', code })
        const record = (await res.json()) as CertificateRecord
        setResult(record.code === code ? { state: 'found', code, record } : { state: 'missing', code })
      })
      .catch(() => alive && setResult({ state: 'error', code }))
    return () => {
      alive = false
    }
  }, [code])

  return code ? result : { state: 'idle' }
}
