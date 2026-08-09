import { strengths } from '../data.js'

function handleSpot(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

export default function Strengths() {
  return (
    <section id="extra">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">05 · Beyond the Code</span>
          <h2>What I bring to a team</h2>
          <p>The traits I'm deliberately building alongside my technical stack.</p>
        </div>

        <div className="strength-grid reveal-grid">
          {strengths.map((s) => (
            <div className="spot-card strength-card" onMouseMove={handleSpot} key={s.title}>
              <div className="strength-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}