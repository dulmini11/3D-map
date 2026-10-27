import { HILLS, ISLAND_PATH, PLACES, RIVER_PATHS, VIEW_H, VIEW_W, WATER_LABELS, project } from '../data/sriLanka'

type Props = {
  activeId: string | null
  onActivate: (id: string | null) => void
}

const PAD = 70
// Contour rings around the coast, drawn largest first: a red stroke, then a
// slightly thinner paper stroke on top, leaving a thin offset line.
const RINGS = [64, 48, 34, 22, 12]

export function SriLankaMap({ activeId, onActivate }: Props) {
  return (
    <svg
      className="map"
      viewBox={`${-PAD} ${-PAD} ${VIEW_W + PAD * 2} ${VIEW_H + PAD * 2}`}
      role="img"
      aria-label="Illustrated map of Sri Lanka"
    >
      <defs>
        <filter id="paint" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="4" />
          <feDisplacementMap in="SourceGraphic" scale="6" />
        </filter>
        <pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="var(--red)" strokeWidth="0.6" strokeOpacity="0.25" />
        </pattern>
      </defs>

      <g className="map__rings">
        {RINGS.map((w, i) => (
          <g key={w} style={{ opacity: 0.18 + i * 0.1 }}>
            <path d={ISLAND_PATH} fill="none" stroke="var(--red)" strokeWidth={w * 2 + 1.2} strokeLinejoin="round" />
            <path d={ISLAND_PATH} fill="none" stroke="var(--paper)" strokeWidth={w * 2} strokeLinejoin="round" />
          </g>
        ))}
      </g>

      <g filter="url(#paint)">
        <path d={ISLAND_PATH} className="map__land" />
        <path d={ISLAND_PATH} fill="url(#hatch)" />
      </g>
      <path d={ISLAND_PATH} className="map__coast" pathLength={1} />

      <g className="map__hills">
        {HILLS.map(([x, y], i) => (
          <path key={i} d={`M${x - 7},${y + 3} Q${x},${y - 9} ${x + 7},${y + 3}`} />
        ))}
      </g>

      <g className="map__rivers">
        {RIVER_PATHS.map((d, i) => (
          <path key={i} d={d} pathLength={1} />
        ))}
      </g>

      <g className="map__water">
        {WATER_LABELS.map(({ text, lonLat, size, rotate }) => {
          const [x, y] = project(lonLat)
          return (
            <text key={text} x={x} y={y} fontSize={size} transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}>
              {text}
            </text>
          )
        })}
      </g>

      <g className="map__places">
        {PLACES.map((p, i) => {
          const [x, y] = project(p.lonLat)
          const right = p.label === 'right'
          return (
            <g
              key={p.id}
              className={`place${activeId === p.id ? ' is-active' : ''}`}
              style={{ animationDelay: `${1.6 + i * 0.08}s` }}
              transform={`translate(${x} ${y})`}
              tabIndex={0}
              role="button"
              aria-label={p.name}
              onMouseEnter={() => onActivate(p.id)}
              onMouseLeave={() => onActivate(null)}
              onFocus={() => onActivate(p.id)}
              onBlur={() => onActivate(null)}
            >
              <circle className="place__halo" r="14" />
              <circle className="place__dot" r="4" />
              <text x={right ? 10 : -10} y="5" textAnchor={right ? 'start' : 'end'}>
                {p.name}
              </text>
            </g>
          )
        })}
      </g>
    </svg>
  )
}
