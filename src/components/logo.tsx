import site from '@/content/site.json'

/** A ladybird drawn as a few shapes, for the CourseBug name */
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
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

export function Logo({ tone = 'chalk' }: { tone?: 'chalk' | 'ink' }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display text-xl font-bold ${tone === 'chalk' ? 'text-chalk' : 'text-ink'}`}>
      <LogoMark className="size-7" />
      {site.brand}
    </span>
  )
}
