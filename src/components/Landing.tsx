import { useEffect, useState, type CSSProperties } from 'react'
import { Emblem } from './Emblem'

const STATEMENT = 'I . STEP . ONTO . THE . ISLAND . OF . SERENDIB . AND . FOLLOW . ITS . MAP . WHEREVER . IT . LEADS .'

const LEAVE_MS = 1400

export function Landing({ onEnter }: { onEnter: () => void }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!leaving) return
    const t = window.setTimeout(onEnter, LEAVE_MS)
    return () => window.clearTimeout(t)
  }, [leaving, onEnter])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter') setLeaving(true)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const words = STATEMENT.split(' . ')

  return (
    <section className={`landing${leaving ? ' is-leaving' : ''}`}>
      <Emblem className="landing__emblem" />

      <div className="landing__center">
        <p className="landing__eyebrow">Sri Lanka · A map concept</p>
        <p className="landing__statement">
          {words.map((w, i) => (
            <span key={i} style={{ '--i': i } as CSSProperties}>
              {w.replace(/ \.$/, '')} .{' '}
            </span>
          ))}
        </p>
        <button className="landing__enter" onClick={() => setLeaving(true)} disabled={leaving}>
          Enter
        </button>
      </div>

      <p className="landing__coords">7°52′ N &nbsp;·&nbsp; 80°46′ E</p>
    </section>
  )
}
