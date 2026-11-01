import Link from 'next/link'
import { Logo } from '@/components/logo'

// Picks the language for the bare address: the one chosen last time, else the browser's, else Romanian
const pickLanguage = `(function(){try{var s=localStorage.getItem('lang');var l=(s==='ro'||s==='en')?s:((navigator.language||'').toLowerCase().indexOf('ro')===0?'ro':(navigator.languages||[]).some(function(x){return x.toLowerCase().indexOf('ro')===0})?'ro':'en');location.replace('/'+l+'/'+location.hash)}catch(e){location.replace('/ro/')}})()`

export default function LanguageRedirect() {
  return (
    <main className="grid-paper grid min-h-dvh place-items-center px-4 text-ink">
      <script dangerouslySetInnerHTML={{ __html: pickLanguage }} />
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/ro/" />
      </noscript>
      <div className="text-center">
        <Logo />
        <p className="mt-6 flex justify-center gap-3">
          <Link href="/ro/" lang="ro" className="btn btn-bug">
            Română
          </Link>
          <Link href="/en/" lang="en" className="btn btn-ink">
            English
          </Link>
        </p>
      </div>
    </main>
  )
}
