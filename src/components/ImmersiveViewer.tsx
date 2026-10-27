import { ModelViewer } from '@liveroom-tech/react-immersive'
import { SimpleModelViewer } from '@liveroom-tech/react-immersive/simple-model-viewer'

const licenseKey = import.meta.env.VITE_IMMERSIVE_LICENSE_KEY ?? ''
const modelUrl = import.meta.env.VITE_MODEL_URL || '/model.glb'

export function ImmersiveViewer() {
  // The full ModelViewer needs a license key; without one, fall back to the
  // free SimpleModelViewer in upload mode so any local GLB/GLTF/OBJ/FBX can be inspected.
  if (!licenseKey) {
    return (
      <SimpleModelViewer
        modelUrl={modelUrl}
        enableModelUpload
        showSceneObjectsPanel
        showSceneSettingsPanel
        onLoadError={(error) => console.warn('Model failed to load:', error)}
      />
    )
  }

  return (
    <ModelViewer
      modelUrl={modelUrl}
      licenseKey={licenseKey}
      shadows
      showSceneObjectsPanel
      onModelLoaded={(model) => console.log('Model loaded:', model)}
      onLoadError={(error) => console.warn('Model failed to load:', error)}
    />
  )
}
