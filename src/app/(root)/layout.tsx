import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'CourseBug',
  icons: { icon: '/icon.svg' },
  robots: { index: false, follow: true },
}

/** Only for the bare address "/", which sends visitors to /ro/ or /en/ */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  )
}
