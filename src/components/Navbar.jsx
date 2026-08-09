import { useState } from 'react'
import { navLinks } from '../data.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container">
        <a href="#top" className="brand">
           <span>Ajmal.portfolio</span>
        </a>

        <button className="nav-toggle" onClick={() => setOpen(!open)}>
          {open ? 'close' : 'menu'}
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}