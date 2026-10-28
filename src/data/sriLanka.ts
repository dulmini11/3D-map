// Hand-traced, simplified outline of Sri Lanka for an illustrated map.
// Not survey-accurate; swap in Natural Earth / OSM GeoJSON for a precise coastline.

export type LonLat = [number, number]
export type Point = [number, number]

const BOUNDS = { west: 79.45, east: 82.05, north: 9.98, south: 5.78 }
const SCALE = 200 // SVG units per degree

export const VIEW_W = (BOUNDS.east - BOUNDS.west) * SCALE
export const VIEW_H = (BOUNDS.north - BOUNDS.south) * SCALE

export function project([lon, lat]: LonLat): Point {
  return [(lon - BOUNDS.west) * SCALE, (BOUNDS.north - lat) * SCALE]
}

// Clockwise from Point Pedro, down the east coast and back up the west.
const COASTLINE: LonLat[] = [
  [80.23, 9.83], [80.38, 9.72], [80.47, 9.6], [80.58, 9.45], [80.72, 9.33],
  [80.81, 9.26], [80.92, 9.08], [81.02, 8.92], [81.12, 8.78], [81.2, 8.62],
  [81.25, 8.52], [81.32, 8.42], [81.42, 8.25], [81.5, 8.1], [81.6, 7.92],
  [81.7, 7.74], [81.79, 7.52], [81.84, 7.3], [81.86, 7.05], [81.84, 6.86],
  [81.78, 6.72], [81.68, 6.52], [81.52, 6.36], [81.35, 6.22], [81.15, 6.12],
  [80.95, 6.05], [80.78, 6.0], [80.6, 5.93], [80.45, 5.96], [80.3, 5.99],
  [80.19, 6.05], [80.1, 6.15], [80.03, 6.3], [79.98, 6.45], [79.94, 6.62],
  [79.88, 6.8], [79.85, 6.98], [79.83, 7.2], [79.8, 7.45], [79.78, 7.7],
  [79.76, 7.95], [79.71, 8.22], [79.8, 8.3], [79.88, 8.48], [79.92, 8.7],
  [79.9, 8.88], [79.76, 9.04], [79.72, 9.11], [79.88, 9.08], [80.0, 9.18],
  [80.08, 9.35], [80.05, 9.5], [79.95, 9.62], [79.98, 9.72], [80.05, 9.81],
  [80.15, 9.84],
]

const MAHAWELI: LonLat[] = [
  [80.72, 6.92], [80.62, 7.12], [80.6, 7.28], [80.72, 7.4], [80.88, 7.5],
  [81.0, 7.72], [81.05, 7.98], [81.12, 8.22], [81.2, 8.42], [81.24, 8.5],
]

const KELANI: LonLat[] = [[80.45, 6.98], [80.25, 6.97], [80.05, 6.96], [79.87, 6.97]]

export type Place = {
  id: string
  name: string
  /** Short English and Sinhala names for the 3D map pins. */
  pin: { en: string; si: string }
  lonLat: LonLat
  region: string
  note: string
  label: 'left' | 'right'
}

// The same nine points as the annotations in the 3D scene (src/data/viewer/sceneConfig.ts).
export const PLACES: Place[] = [
  { id: 'lotus-tower', name: 'Lotus Tower - Colombo', pin: { en: 'Lotus Tower', si: 'නෙළුම් කුළුණ' }, lonLat: [79.86, 6.93], region: 'Western', label: 'right', note: 'South Asia’s tallest tower, a lotus bud rising 350 m over the capital.' },
  { id: 'yala', name: 'Yala National Park', pin: { en: 'Yala', si: 'යාල' }, lonLat: [81.4, 6.37], region: 'Southern', label: 'left', note: 'Scrub jungle and rock outcrops, home to one of the world’s densest leopard populations.' },
  { id: 'southern', name: 'Southern Province', pin: { en: 'Southern Province', si: 'දකුණු පළාත' }, lonLat: [80.62, 6.2], region: 'Southern', label: 'left', note: 'Golden beaches, the Galle Fort ramparts and whale-watching off Mirissa.' },
  { id: 'anuradhapura', name: 'Anuradhapura', pin: { en: 'Anuradhapura', si: 'අනුරාධපුරය' }, lonLat: [80.41, 8.31], region: 'North Central', label: 'right', note: 'The first great capital, its giant dagobas rising over the dry-zone plains.' },
  { id: 'polonnaruwa', name: 'Polonnaruwa', pin: { en: 'Polonnaruwa', si: 'පොළොන්නරුව' }, lonLat: [81.0, 7.94], region: 'North Central', label: 'right', note: 'A medieval royal city of palaces, reservoirs and the carved Buddhas of Gal Vihara.' },
  { id: 'point-pedro', name: 'Point Pedro', pin: { en: 'Point Pedro', si: 'පේදුරුතුඩුව' }, lonLat: [80.23, 9.83], region: 'Northern', label: 'right', note: 'The northernmost tip of the island, marked by its lighthouse.' },
  { id: 'batticaloa', name: 'Batticaloa', pin: { en: 'Batticaloa', si: 'මඩකලපුව' }, lonLat: [81.7, 7.73], region: 'Eastern', label: 'left', note: 'A lagoon town on the east coast, famous for its “singing fish”.' },
  { id: 'northern', name: 'Northern Province', pin: { en: 'Northern Province', si: 'උතුරු පළාත' }, lonLat: [80.4, 9.1], region: 'Northern', label: 'right', note: 'Palmyra palms, Hindu kovils and the lagoons of the Jaffna peninsula.' },
  { id: 'wilpattu', name: 'Wilpattu National Park', pin: { en: 'Wilpattu', si: 'විල්පත්තුව' }, lonLat: [80.02, 8.45], region: 'North Western', label: 'left', note: 'The island’s largest national park, dotted with natural lakes called “villus”.' },
]

export const WATER_LABELS: { text: string; lonLat: LonLat; size: number; rotate?: number }[] = [
  { text: 'Bay of Bengal', lonLat: [81.55, 9.45], size: 15 },
  { text: 'Indian Ocean', lonLat: [81.35, 5.86], size: 17 },
  { text: 'Gulf of Mannar', lonLat: [79.58, 8.55], size: 12, rotate: -90 },
  { text: 'Palk Strait', lonLat: [79.62, 9.6], size: 11, rotate: -35 },
]

// Catmull-Rom spline through the points, emitted as cubic Béziers.
function spline(points: Point[], closed: boolean, tension = 0.5): string {
  const n = points.length
  const at = (i: number) => (closed ? points[(i + n) % n] : points[Math.max(0, Math.min(n - 1, i))])
  const f = (p: Point) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`
  let d = `M${f(points[0])}`
  const segments = closed ? n : n - 1
  for (let i = 0; i < segments; i++) {
    const [p0, p1, p2, p3] = [at(i - 1), at(i), at(i + 1), at(i + 2)]
    const c1: Point = [p1[0] + ((p2[0] - p0[0]) * tension) / 3, p1[1] + ((p2[1] - p0[1]) * tension) / 3]
    const c2: Point = [p2[0] - ((p3[0] - p1[0]) * tension) / 3, p2[1] - ((p3[1] - p1[1]) * tension) / 3]
    d += ` C${f(c1)} ${f(c2)} ${f(p2)}`
  }
  return closed ? `${d} Z` : d
}

export const ISLAND_PATH = spline(COASTLINE.map(project), true)
export const RIVER_PATHS = [MAHAWELI, KELANI].map((r) => spline(r.map(project), false))

// Small hill strokes scattered (deterministically) over the central highlands.
export const HILLS: Point[] = (() => {
  const out: Point[] = []
  let seed = 7
  const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
  for (let lat = 6.55; lat <= 7.55; lat += 0.12) {
    for (let lon = 80.35; lon <= 81.15; lon += 0.13) {
      const dx = (lon - 80.75) / 0.42
      const dy = (lat - 7.02) / 0.5
      if (dx * dx + dy * dy > 1 || rand() < 0.3) continue
      out.push(project([lon + (rand() - 0.5) * 0.06, lat + (rand() - 0.5) * 0.04]))
    }
  }
  return out
})()
