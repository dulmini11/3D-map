import { useState } from 'react'
import { PLACES } from '../data/sriLanka'
import { Compass } from './Compass'
import { SriLankaMap } from './SriLankaMap'

export function Home({ onView3D }: { onView3D: () => void }) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = PLACES.find((p) => p.id === activeId) ?? null

  return (
    <section className="home">
      <div className="home__intro">
        <p className="home__eyebrow">The Pearl of the Indian Ocean</p>
        <h1 className="home__title">
          Sri <em>Lanka</em>
        </h1>
        <p className="home__lede">
          A teardrop-shaped island off the southern tip of India, home to 22 million people. Ancient cities, misty
          tea country, wild national parks and 1,300 km of coastline lie within a few hours of each other.
        </p>

        <ol className="home__places">
          {PLACES.map((p, i) => (
            <li key={p.id} style={{ animationDelay: `${0.9 + i * 0.06}s` }}>
              <button
                className={activeId === p.id ? 'is-active' : ''}
                onMouseEnter={() => setActiveId(p.id)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(p.id)}
                onBlur={() => setActiveId(null)}
              >
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                {p.name}
              </button>
            </li>
          ))}
        </ol>

        <div className="home__note" aria-live="polite">
          {active ? (
            <>
              <p className="home__note-region">{active.region} Province</p>
              <p className="home__note-text">{active.note}</p>
            </>
          ) : (
            <p className="home__note-hint">Nine points · one island</p>
          )}
        </div>

        <button className="home__view3d" onClick={onView3D}>
          <span>View 3D</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3L18.7 8 12 11.7 5.3 8 12 4.3ZM5 9.7l6 3.3v6.6l-6-3.3V9.7Zm8 9.9V13l6-3.3v6.6l-6 3.3Z" />
          </svg>
        </button>
      </div>

      <div className="home__map">
        <SriLankaMap activeId={activeId} onActivate={setActiveId} />
      </div>

      <Compass className="home__compass" />
    </section>
  )
}
