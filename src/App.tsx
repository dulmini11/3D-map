import { Suspense, lazy, useCallback, useState } from 'react'
import { Home } from './components/Home'
import { Landing } from './components/Landing'

// The 3D viewer (three.js + react-immersive) is only downloaded when opened.
const Viewer3D = lazy(() => import('./components/Viewer3D'))

type Page = 'landing' | 'home' | 'viewer'

export default function App() {
  const [page, setPage] = useState<Page>('landing')
  const enter = useCallback(() => setPage('home'), [])

  return (
    <main className="app">
      {page === 'landing' && <Landing onEnter={enter} />}
      {page === 'home' && <Home onView3D={() => setPage('viewer')} />}
      {page === 'viewer' && (
        <Suspense fallback={<p className="viewer__pending">Preparing the island…</p>}>
          <Viewer3D onBack={() => setPage('home')} />
        </Suspense>
      )}
    </main>
  )
}
