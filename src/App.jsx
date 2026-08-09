import Cursor from './components/Cursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Journey from './components/Journey.jsx'
import Projects from './components/Projects.jsx'
import Strengths from './components/Strengths.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import useScrollReveal from './useScrollReveal.js'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Projects />
      <Strengths />
      <Contact />
      <Footer />
    </>
  )
}