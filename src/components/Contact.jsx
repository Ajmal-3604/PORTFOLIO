import { useState } from 'react'
import { profile } from '../data.js'
import { Blob, Squiggle, Star } from './Doodles.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact">
      <Blob variant={2} color="#22c55e" style={{ width: 260, height: 260, top: -90, right: -100, opacity: 0.15 }} />
      <Star color="#ef4444" style={{ width: 26, bottom: 80, left: '6%', opacity: 0.6 }} />

      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">06 · Let's talk</span>
          <h2>Ready to bring my stack to your team.</h2>
          <p>I'm actively looking for a Python Full Stack Developer role. Reach out — I reply fast and I'm ready to start.</p>
          <Squiggle id="sq-contact" colors={['#22c55e', '#eab308', '#ec4899']} className="section-squiggle" />
        </div>

        <div className="contact-grid reveal">
          <div>
            <div className="contact-info-item">📧 <a href={`mailto:${profile.email}`}>{profile.email}</a></div>
            <div className="contact-info-item">📞 <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></div>
            <div className="contact-info-item">📍 {profile.location}</div>
            <div className="badge-line">🏆 Full Stack Dev Course — Xplore IT Corp</div>
            <div className="badge-line">Reference — Rohith, Project Manager · +91 99169 71579</div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Your email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required />
            </div>
            <button className="btn btn-primary" type="submit">Send message</button>
            {sent && <div className="form-note">✓ Message captured — connect a backend to deliver it.</div>}
          </form>
        </div>
      </div>
    </section>
  )
}