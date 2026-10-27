# map-react-immersive

React 19 + Vite + TypeScript with three.js, React Three Fiber, drei and
`@liveroom-tech/react-immersive@5.2.0`.

## Run

```bash
npm install
npm run dev
```

`.npmrc` sets `legacy-peer-deps=true` because npm 10.8 crashes resolving this
dependency tree's peer deps.

## Tabs

- **React Three Fiber**: a plain R3F scene (`src/components/FiberScene.tsx`).
- **Immersive Viewer** (`src/components/ImmersiveViewer.tsx`):
  - No license key: `SimpleModelViewer` in upload mode. Drag in any GLB/GLTF/OBJ/FBX/USDZ/STL/PLY.
  - With a license key: the full `ModelViewer` with shadows and the scene objects panel.

## Using the full ModelViewer

1. Copy `.env.example` to `.env.local`.
2. Set `VITE_IMMERSIVE_LICENSE_KEY` to your Liveroom key.
3. Put your model at `public/model.glb`, or set `VITE_MODEL_URL`.
4. Restart `npm run dev`.

To control which objects are interactive, generate `objectBindings.json` with
`BindingBuilder` (`@liveroom-tech/react-immersive/binding-builder`) and pass it
as `objectBindings`.
