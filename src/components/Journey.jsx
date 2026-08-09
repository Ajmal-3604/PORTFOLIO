import { journey } from '../data.js'
import { Blob, Squiggle, Dots } from './Doodles.jsx'

export default function Journey() {
  return (
    <section id="journey">
      <Blob variant={1} color="#8b5cf6" style={{ width: 240, height: 240, top: -80, right: -90, opacity: 0.14 }} />
      <Dots colors={['#ef4444', '#f97316', '#06b6d4', '#22c55e']} style={{ width: 90, bottom: 20, left: '6%', opacity: 0.5 }} />

      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">03 · Journey</span>
          <h2>Education & experience so far</h2>
          <Squiggle id="sq-journey" colors={['#8b5cf6', '#ec4899', '#f97316']} className="section-squiggle" />
        </div>

        <div className="timeline reveal-grid">
          {journey.map((item) => (
            <div className="timeline-item" key={item.title}>
              <div className="timeline-date">{item.date}</div>
              <h3>{item.title}</h3>
              <div className="timeline-org">{item.org}</div>
              {item.bullets.length > 0 && (
                <ul>
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}