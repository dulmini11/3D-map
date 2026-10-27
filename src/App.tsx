import { useState } from 'react'
import { FiberScene } from './components/FiberScene'
import { ImmersiveViewer } from './components/ImmersiveViewer'

type Tab = 'fiber' | 'immersive'

export default function App() {
  const [tab, setTab] = useState<Tab>('fiber')

  return (
    <div className="app">
      <header className="toolbar">
        <h1>map-react-immersive</h1>
        <nav>
          <button className={tab === 'fiber' ? 'active' : ''} onClick={() => setTab('fiber')}>
            React Three Fiber
          </button>
          <button className={tab === 'immersive' ? 'active' : ''} onClick={() => setTab('immersive')}>
            Immersive Viewer
          </button>
        </nav>
      </header>
      <main className="stage">{tab === 'fiber' ? <FiberScene /> : <ImmersiveViewer />}</main>
    </div>
  )
}
