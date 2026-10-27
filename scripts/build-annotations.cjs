// Fills in each annotation in sceneConfig for the guided tour:
//   - cameraView: where the tour camera goes, turned with sceneConfig.model.rotation
//   - description, a website link, and a QR code image for that website
// Usage: npm run annotations   (re-run after pasting a fresh sceneConfig.ts from BindingBuilder)
//
// Annotation positions from BindingBuilder are in the model's own frame (island lying
// flat: +y up, north = -z, east = +x). Markers follow their anchor objects by themselves,
// so only the world-space camera views need the model rotation applied.
const fs = require('fs')
const path = require('path')
const QRCode = require('qrcode')

const CONFIG = path.join(__dirname, '../src/data/viewer/sceneConfig.ts')
const QR_DIR = path.join(__dirname, '../public/qr')

// d: camera distance from the marker, in scene units.
const STOPS = {
  'Lotus Tower - Colombo': {
    slug: 'lotus-tower',
    d: 95,
    url: 'https://en.wikipedia.org/wiki/Lotus_Tower',
    note: 'South Asia’s tallest tower, a lotus bud rising 350 m over the capital.',
  },
  'Yala National Park': {
    slug: 'yala',
    d: 95,
    url: 'https://en.wikipedia.org/wiki/Yala_National_Park',
    note: 'Scrub jungle and rock outcrops, home to one of the world’s densest leopard populations.',
  },
  'Southern Province': {
    slug: 'southern-province',
    d: 130,
    url: 'https://en.wikipedia.org/wiki/Southern_Province,_Sri_Lanka',
    note: 'Golden beaches, the Galle Fort ramparts and whale-watching off Mirissa.',
  },
  Anuradhapura: {
    slug: 'anuradhapura',
    d: 90,
    url: 'https://en.wikipedia.org/wiki/Anuradhapura',
    note: 'The first great capital, its giant dagobas rising over the dry-zone plains.',
  },
  Polonnaruwa: {
    slug: 'polonnaruwa',
    d: 85,
    url: 'https://en.wikipedia.org/wiki/Polonnaruwa',
    note: 'A medieval royal city of palaces, reservoirs and the carved Buddhas of Gal Vihara.',
  },
  'Point Pedro': {
    slug: 'point-pedro',
    d: 80,
    url: 'https://en.wikipedia.org/wiki/Point_Pedro',
    note: 'The northernmost tip of the island, marked by its lighthouse.',
  },
  Batticaloa: {
    slug: 'batticaloa',
    d: 90,
    url: 'https://en.wikipedia.org/wiki/Batticaloa',
    note: 'A lagoon town on the east coast, famous for its “singing fish”.',
  },
  'Northern Province': {
    slug: 'northern-province',
    d: 130,
    url: 'https://en.wikipedia.org/wiki/Northern_Province,_Sri_Lanka',
    note: 'Palmyra palms, Hindu kovils and the lagoons of the Jaffna peninsula.',
  },
  'Wilpattu National Park': {
    slug: 'wilpattu',
    d: 95,
    url: 'https://en.wikipedia.org/wiki/Wilpattu_National_Park',
    note: 'The island’s largest national park, dotted with natural lakes called “villus”.',
  },
}

// Camera direction in the model's frame: almost straight out of the island's
// surface (+y), tipped ~8° toward the south (+z) so landmarks keep a little depth.
const VIEW_DIR = [0, 0.99, 0.14]

// Same as three.js Euler 'XYZ' (the viewer's model rotation), applied to a vector.
function rotate([x, y, z], [rxDeg, ryDeg, rzDeg]) {
  const [a, b, c] = [rxDeg, ryDeg, rzDeg].map((d) => (d * Math.PI) / 180)
  const [ca, sa, cb, sb, cc, sc] = [Math.cos(a), Math.sin(a), Math.cos(b), Math.sin(b), Math.cos(c), Math.sin(c)]
  // Rz first, then Ry, then Rx.
  let [x1, y1, z1] = [x * cc - y * sc, x * sc + y * cc, z]
  ;[x1, z1] = [x1 * cb + z1 * sb, -x1 * sb + z1 * cb]
  ;[y1, z1] = [y1 * ca - z1 * sa, y1 * sa + z1 * ca]
  return [x1, y1, z1]
}

const round = (v) => v.map((n) => Math.round(n * 1000) / 1000)

async function main() {
  const src = fs.readFileSync(CONFIG, 'utf8')
  const start = src.indexOf('= {') + 2
  const end = src.lastIndexOf('};') + 1
  const cfg = JSON.parse(src.slice(start, end))
  const rotation = cfg.model.rotation

  fs.mkdirSync(QR_DIR, { recursive: true })

  const annotations = []
  for (const a of cfg.annotations) {
    const stop = STOPS[a.title]
    if (!stop) throw new Error(`No tour settings for "${a.title}" in scripts/build-annotations.cjs`)

    // Aim a little above the marker so standing landmarks sit mid-frame.
    const p = a.worldPosition
    const localTarget = [p[0], p[1] + stop.d * 0.08, p[2]]
    const localCamera = localTarget.map((t, i) => t + VIEW_DIR[i] * stop.d)

    const qrFile = `${stop.slug}.png`
    await QRCode.toFile(path.join(QR_DIR, qrFile), stop.url, {
      width: 360,
      margin: 2,
      color: { dark: '#3b2a20', light: '#fbf1dc' },
    })

    annotations.push({
      ...a,
      description: a.description || stop.note,
      cameraView: {
        position: round(rotate(localCamera, rotation)),
        target: round(rotate(localTarget, rotation)),
        fov: 50,
        zoom: 1,
      },
      images: [{ src: `/qr/${qrFile}`, alt: `QR code: scan to open ${a.title} on Wikipedia` }],
      links: [{ href: stop.url, label: 'Open website' }],
    })
  }
  cfg.annotations = annotations

  fs.writeFileSync(CONFIG, src.slice(0, start) + JSON.stringify(cfg, null, 2) + src.slice(end))
  console.log(`model.rotation = [${rotation}]`)
  for (const a of annotations) console.log(`${a.id} ${a.title}: cam ${a.cameraView.position} -> ${a.cameraView.target}  qr ${a.images[0].src}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
