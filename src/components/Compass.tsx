export function Compass({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="-60 -70 120 130" aria-hidden="true">
      <circle r="38" fill="none" stroke="currentColor" strokeWidth="0.75" />
      <circle r="32" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 3" />
      <path d="M0,-50 L7,0 L0,50 L-7,0 Z" fill="none" stroke="currentColor" strokeWidth="0.9" />
      <path d="M0,-50 L7,0 L-7,0 Z" fill="currentColor" />
      <path d="M-50,0 L0,-5 L50,0 L0,5 Z" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <text y="-56" textAnchor="middle" fontSize="12" fill="currentColor">
        N
      </text>
    </svg>
  )
}
