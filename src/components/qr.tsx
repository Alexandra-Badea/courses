'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import QRCode from 'qrcode'

/**
 * A QR code for a path on this site (e.g. "/ro/verify/?code=…"). It's drawn in the browser, so it
 * points to wherever the site is actually running: the Vercel address now, your own domain later.
 */
export function Qr({ path, label }: { path: string; label: string }) {
  const [svg, setSvg] = useState<string | null>(null)

  useEffect(() => {
    let alive = true
    QRCode.toString(new URL(path, window.location.origin).toString(), {
      type: 'svg',
      margin: 0,
      errorCorrectionLevel: 'M',
      color: { dark: '#17251f', light: '#ffffff' },
    }).then((s) => alive && setSvg(s))
    return () => {
      alive = false
    }
  }, [path])

  if (!svg) return <div className="size-full rounded bg-paper-2" aria-hidden="true" />
  return <div role="img" aria-label={label} className="size-full [&>svg]:size-full" dangerouslySetInnerHTML={{ __html: svg }} />
}

const noSubscribe = () => () => {}

/** The full address of a path on this site: the path itself on the server, the full URL in the browser */
export function useSiteUrl(path: string): string {
  return useSyncExternalStore(
    noSubscribe,
    () => new URL(path, window.location.origin).toString(),
    () => path,
  )
}
