'use client'

import { CertificateSheet, type SheetData } from './certificate-sheet'
import { Qr, useSiteUrl } from './qr'
import { getDictionary } from '@/content/dictionary'
import type { Locale } from '@/lib/i18n'

/** A certificate with its QR code and verification address, which are only known in the browser */
export function CertificateWithQr({ locale, data }: { locale: Locale; data: Omit<SheetData, 'verifyUrl'> }) {
  const t = getDictionary(locale)
  const path = `/${locale}/verify/?code=${encodeURIComponent(data.code)}`
  const verifyUrl = useSiteUrl(path)
  return <CertificateSheet data={{ ...data, verifyUrl }} t={t.print} qr={<Qr path={path} label={`${t.print.checkAt}: ${data.code}`} />} />
}
