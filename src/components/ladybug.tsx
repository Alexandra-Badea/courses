/**
 * The CourseBug ladybug seen from above, facing up. Its parts are separate so CSS can move them
 * (see "The ladybug" in globals.css): legs in two sets of three for walking, wing cases that
 * open, wings underneath that flap, antennae that twitch.
 */
const INK = '#17251f'
const RED = '#e2483d'

// Each leg starts under the shell. "a" and "b" step in turn, three legs at a time, like real insects.
const legs = [
  { set: 'leg-a', points: '25,27 18,24 14,18', origin: '25px 27px' },
  { set: 'leg-b', points: '21,36 13,35 9,38', origin: '21px 36px' },
  { set: 'leg-a', points: '24,45 17,49 14,56', origin: '24px 45px' },
  { set: 'leg-b', points: '39,27 46,24 50,18', origin: '39px 27px' },
  { set: 'leg-a', points: '43,36 51,35 55,38', origin: '43px 36px' },
  { set: 'leg-b', points: '40,45 47,49 50,56', origin: '40px 45px' },
]

export function Ladybug({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className={`bug ${className}`}>
      <g stroke={INK} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {legs.map((l) => (
          <polyline key={l.points} className={`leg ${l.set}`} points={l.points} style={{ transformOrigin: l.origin }} />
        ))}
      </g>

      <g className="antenna antenna-l" style={{ transformOrigin: '29px 18px' }}>
        <path d="M29 18C27.6 13 25.6 10.4 22.6 8.8" stroke={INK} strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <circle cx="22.4" cy="8.7" r="1.7" fill={INK} />
      </g>
      <g className="antenna antenna-r" style={{ transformOrigin: '35px 18px' }}>
        <path d="M35 18C36.4 13 38.4 10.4 41.4 8.8" stroke={INK} strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <circle cx="41.6" cy="8.7" r="1.7" fill={INK} />
      </g>

      <path
        className="wing wing-l"
        d="M31 27C20 28 10.5 40 13 53c2.6 5 10.6-.6 14-8.6 2-5.6 4-11.6 4-17.4Z"
        fill="rgb(236 243 250 / 0.8)"
        stroke={INK}
        strokeOpacity="0.35"
        strokeWidth="0.8"
        style={{ transformOrigin: '31px 27px' }}
      />
      <path
        className="wing wing-r"
        d="M33 27C44 28 53.5 40 51 53c-2.6 5-10.6-.6-14-8.6-2-5.6-4-11.6-4-17.4Z"
        fill="rgb(236 243 250 / 0.8)"
        stroke={INK}
        strokeOpacity="0.35"
        strokeWidth="0.8"
        style={{ transformOrigin: '33px 27px' }}
      />

      <g className="shell shell-l" style={{ transformOrigin: '32px 23px' }}>
        <path d="M32 22A14 14 0 0 0 32 50Z" fill={RED} />
        <circle cx="26" cy="30.5" r="2.7" fill={INK} />
        <circle cx="23.6" cy="39" r="2.3" fill={INK} />
        <circle cx="28.2" cy="45.2" r="1.8" fill={INK} />
        <path d="M23.4 27.6a10.6 10.6 0 0 1 4.6-3.8" stroke="#fff" strokeOpacity="0.5" strokeWidth="1.4" strokeLinecap="round" fill="none" />
        <path d="M32 22.5V50" stroke={INK} strokeWidth="1" />
      </g>
      <g className="shell shell-r" style={{ transformOrigin: '32px 23px' }}>
        <path d="M32 22A14 14 0 0 1 32 50Z" fill={RED} />
        <circle cx="38" cy="30.5" r="2.7" fill={INK} />
        <circle cx="40.4" cy="39" r="2.3" fill={INK} />
        <circle cx="35.8" cy="45.2" r="1.8" fill={INK} />
      </g>

      <path d="M22.6 24.6C23 18.6 27 15.6 32 15.6s9 3 9.4 9c-2.9-1.5-6.1-2.1-9.4-2.1s-6.5.6-9.4 2.1Z" fill={INK} />
      <circle cx="28.4" cy="19.4" r="1.5" fill="#fff" />
      <circle cx="35.6" cy="19.4" r="1.5" fill="#fff" />
    </svg>
  )
}
