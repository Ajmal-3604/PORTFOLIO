import { profile, stats } from '../data.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-blobs">
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
        <div className="blob b4"></div>
      </div>

      <div className="container">
        <div className="reveal">
          <span className="hero-badge">👋 Hello, I'm building my way into tech</span>
          <h1>
            {profile.name}
            <br />
            <span className="gradient-text">{profile.role}</span>
          </h1>
          <p className="hero-lede">
            Fresher with a builder's mindset — I turn ideas into working web apps using
            Python, Django/Flask and a clean front end. Sharpened my stack at
            Xplore IT Corp, Coimbatore, and ready for my first role.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Hire Me
            </a>
            <a className="btn btn-ghost" href="#projects">
              View Projects
            </a>
          </div>

          <div className="hero-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>

          <div className="stat-row">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="avatar-square-wrap">
            <span className="sparkle">✨</span>
            <div className="avatar-square">
              <img src={profile.photo} alt={profile.name} />
            </div>
            <span className="orbit-dot o1"></span>
            <span className="orbit-dot o2"></span>
            <span className="orbit-dot o3"></span>
          </div>

          <div className="terminal">
            <div className="terminal-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">ajmal@career:~</span>
            </div>
            <div className="terminal-body">
              <div className="line">
                <span className="prompt">$</span> whoami
              </div>
              <div className="line">{profile.name} — {profile.role}</div>
              <div className="line">
                <span className="prompt">$</span> status
                <span className="cursor"></span>
              </div>
              <div className="status-pill">
                <span className="dot green"></span> Open to work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}