# Sri Lanka · Map Concept

An illustrated landing page for Sri Lanka built with React 19, Vite and TypeScript,
with an interactive 3D view of the island powered by `@liveroom-tech/react-immersive`
(three.js + React Three Fiber).

## Pages

1. **Landing** – cream paper intro with the island silhouette and an *Enter* button.
2. **Home** – hand-drawn SVG map of Sri Lanka with nine points of interest and a
   **View 3D** button.
3. **3D viewer** – the island model with clickable annotations, a guided tour, and a
   QR code + website link for each point.

## Run

```bash
npm install
npm run dev
```

`.npmrc` sets `legacy-peer-deps=true` because npm 10.8 fails to resolve this
dependency tree's peer dependencies.

## 3D viewer setup

1. Copy `.env.example` to `.env.local` and set `VITE_REACT_IMMERSIVE_LICENSE_KEY`.
2. Put the model at `public/models/sri-lanka.glb` (it is over GitHub's 100 MB limit,
   so it is not in the repository).
3. Restart `npm run dev`.

## Annotations, tour and QR codes

Annotation positions come from BindingBuilder (`src/data/viewer/sceneConfig.ts`).
After changing them, or the model rotation, run:

```bash
npm run annotations
```

This adds a tour camera view, description, website link and QR code image
(`public/qr/*.png`) to every annotation. Websites are set in
`scripts/build-annotations.cjs`.
