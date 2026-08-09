import { Blob, Squiggle, Dots } from './Doodles.jsx'

export default function About() {
  return (
    <section id="about">
      <Blob variant={1} color="#ef4444" style={{ width: 220, height: 220, top: -60, right: -60, opacity: 0.16 }} />
      <Dots colors={['#06b6d4', '#eab308', '#8b5cf6', '#ec4899']} style={{ width: 100, bottom: 30, right: '18%', opacity: 0.5 }} />

      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">01 · Objective</span>
          <h2>What I'm building toward</h2>
          <Squiggle id="sq-about" colors={['#ef4444', '#f97316', '#eab308']} className="section-squiggle" />
        </div>

        <div className="about-grid reveal-grid">
          <p className="quote-block">
            "Motivated and detail-oriented, with a strong passion for Python development
            and building meaningful web applications. I enjoy solving real-world problems
            through clean, efficient code."
          </p>

          <p>
            My objective is simple: land my first role as a{' '}
            <strong style={{ color: 'var(--ink)' }}>Python Full Stack Developer</strong>,
            contribute to real products from day one, and keep growing through the kind of
            projects that make me a stronger engineer every sprint. I'm currently deepening
            my full-stack skills through the{' '}
            <strong style={{ color: 'var(--ink)' }}>Python Full Stack Development</strong>{' '}
            program at Xplore IT Corp, Coimbatore — closing the gap between what I've
            learned and what production teams actually need.
          </p>
        </div>
      </div>
    </section>
  )
}