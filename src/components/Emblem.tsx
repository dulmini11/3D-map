import { ISLAND_PATH, VIEW_H, VIEW_W } from '../data/sriLanka'

// The island silhouette, used as the landing mark.
export function Emblem({ className }: { className?: string }) {
  const pad = 6
  return (
    <svg className={className} viewBox={`${-pad} ${-pad} ${VIEW_W + pad * 2} ${VIEW_H + pad * 2}`} aria-hidden="true">
      <path d={ISLAND_PATH} fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="3" />
    </svg>
  )
}
