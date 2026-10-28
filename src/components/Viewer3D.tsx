import '@liveroom-tech/react-immersive/styles.css'
import { useCallback, useRef } from 'react'
import { ModelViewer, type ViewerReadyState } from '@liveroom-tech/react-immersive'
import { Euler, MathUtils, Vector3 } from 'three'
import { PLACES } from '../data/sriLanka'
import { objectBindings } from '../data/viewer/objectBindings'
import { sceneConfig } from '../data/viewer/sceneConfig'

const MODEL_URL = '/models/sri-lanka.glb'
const licenseKey = import.meta.env.VITE_REACT_IMMERSIVE_LICENSE_KEY ?? ''

// Opening shot: the whole island, seen almost straight on with a slight tilt from
// the south. Given in the model's own frame (island flat: +y up, north = -z, east = +x)
// and turned with sceneConfig.model.rotation, like the tour views.
const modelRotation = new Euler(...sceneConfig.model.rotation.map((deg) => MathUtils.degToRad(deg)))
const toWorld = (v: [number, number, number]) => new Vector3(...v).applyEuler(modelRotation).toArray()
const START_TARGET = toWorld([-80, 0, -22])
const START_POSITION = toWorld([-80, 270, 75])

// Turns each annotation marker into a QR pin. The viewer gives every marker its
// annotation title as a `title` attribute, so each pin picks up its own QR image
// and English/Sinhala name from these per-title CSS variables.
const pinStyles = sceneConfig.annotations
  .map((a) => {
    const qr = a.images?.[0]?.src
    const pin = PLACES.find((p) => p.name === a.title)?.pin ?? { en: a.title, si: '' }
    const vars = [
      qr ? `--pin-qr: url(${JSON.stringify(qr)});` : '',
      `--pin-en: ${JSON.stringify(pin.en)};`,
      `--pin-si: ${JSON.stringify(pin.si)};`,
    ]
    return `.viewer .ri-annotationMarker[title=${JSON.stringify(a.title)}] { ${vars.join(' ')} }`
  })
  .join('\n')

export default function Viewer3D({ onBack }: { onBack: () => void }) {
  // onViewerReady fires again during tours and other state changes, so only
  // set the opening shot the first time or it would undo every tour move.
  const framed = useRef(false)
  const handleReady = useCallback((viewer: ViewerReadyState) => {
    if (framed.current) return
    framed.current = true
    viewer.raw.controls.setLookAt(...START_POSITION, ...START_TARGET, true)
  }, [])

  return (
    <section className="viewer">
      <style>{pinStyles}</style>
      {licenseKey ? (
        <ModelViewer
          modelUrl={MODEL_URL}
          licenseKey={licenseKey}
          objectBindings={objectBindings}
          sceneConfig={sceneConfig}
          showExplodeControls
          showMeasureTools
          enableXR
          loading="eager"
          onViewerReady={handleReady}
          onLoadError={(error) => console.error('3D model failed to load:', error)}
        />
      ) : null}

      <button className="viewer__back" onClick={onBack}>
        ← Back to map
      </button>
    </section>
  )
}
