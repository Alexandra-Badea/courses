import site from '@/content/site.json'

/** A ladybird drawn as a few shapes, for the CourseBug name. Its antennae wiggle on hover (globals.css). */
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className={`logo-bug ${className}`}>
      <g className="antenna" style={{ transformBox: 'view-box', transformOrigin: '16px 7px' }} stroke="#17251f" strokeWidth="1.3" strokeLinecap="round" fill="none">
        <path d="M13.6 6.4C12.8 4.4 11.6 3 10 2.2" />
        <path d="M18.4 6.4C19.2 4.4 20.4 3 22 2.2" />
      </g>
      <circle cx="16" cy="17.5" r="12" fill="#e2483d" />
      <path d="M16 5.5v24" stroke="#17251f" strokeWidth="1.6" />
      <path d="M8.2 9.6a9.4 9.4 0 0 1 15.6 0Z" fill="#17251f" />
      <circle cx="10.5" cy="17" r="2.1" fill="#17251f" />
      <circle cx="21.5" cy="17" r="2.1" fill="#17251f" />
      <circle cx="12" cy="24" r="1.7" fill="#17251f" />
      <circle cx="20" cy="24" r="1.7" fill="#17251f" />
      <circle cx="13" cy="7.4" r="1" fill="#fff" />
      <circle cx="19" cy="7.4" r="1" fill="#fff" />
    </svg>
  )
}

export function Logo({ tone = 'ink' }: { tone?: 'chalk' | 'ink' }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display text-xl font-extrabold tracking-tight ${tone === 'chalk' ? 'text-chalk' : 'text-ink'}`}>
      <LogoMark className="size-7" />
      {site.brand}
    </span>
  )
}
