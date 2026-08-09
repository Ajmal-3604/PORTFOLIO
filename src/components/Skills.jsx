import { toolbox } from '../data.js'
import { Blob, Squiggle, Star } from './Doodles.jsx'

function handleSpot(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

export default function Skills() {
  return (
    <section id="skills">
      <Blob variant={2} color="#06b6d4" style={{ width: 260, height: 260, bottom: -100, left: -100, opacity: 0.15 }} />
      <Star color="#eab308" style={{ width: 34, top: 40, right: '10%', opacity: 0.7 }} />
      <Star color="#ec4899" style={{ width: 22, bottom: 60, right: '4%', opacity: 0.6 }} />

      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">02 · Toolbox</span>
          <h2>My stack, top to bottom</h2>
          <Squiggle id="sq-skills" colors={['#06b6d4', '#22c55e', '#eab308']} className="section-squiggle" />
        </div>

        <div className="skills-grid reveal-grid">
          {toolbox.map((group) => (
            <div className="spot-card skill-card" onMouseMove={handleSpot} key={group.title}>
              <h3>{group.title}</h3>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}