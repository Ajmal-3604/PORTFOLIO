import { projects } from '../data.js'
import { Blob, Squiggle, Star } from './Doodles.jsx'

function handleSpot(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
}

export default function Projects() {
  return (
    <section id="projects">
      <Blob variant={2} color="#ec4899" style={{ width: 250, height: 250, bottom: -90, right: -90, opacity: 0.15 }} />
      <Star color="#22c55e" style={{ width: 28, top: 50, left: '8%', opacity: 0.65 }} />

      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">04 · Projects</span>
          <h2>Things I've shipped</h2>
          <Squiggle id="sq-projects" colors={['#ec4899', '#8b5cf6', '#06b6d4']} className="section-squiggle" />
        </div>

        <div className="project-grid reveal-grid">
          {projects.map((p) => (
            <div className="spot-card project-card" onMouseMove={handleSpot} key={p.title}>
              <div className="project-file">{p.file}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
              <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                View code ↗
              </a>
            </div>
          ))}

          <div className="project-card next">
            <div className="next-icon">＋</div>
            <h3>Next up</h3>
            <p>A full-stack Django/Flask app with a real database — currently in the works as part of my course.</p>
          </div>
        </div>
      </div>
    </section>
  )
}