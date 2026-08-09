import { useEffect, useRef } from 'react'

const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#8b5cf6']

export default function Cursor() {
  const dotsRef = useRef([])

  useEffect(() => {
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    const positions = COLORS.map(() => ({ x: mouseX, y: mouseY }))

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onOver = (e) => {
      const interactive = e.target.closest('a, button, .spot-card, input, textarea')
      dotsRef.current.forEach((d) => d && d.classList.toggle('cursor-active', !!interactive))
    }

    let rafId
    const raf = () => {
      let targetX = mouseX
      let targetY = mouseY
      positions.forEach((p, i) => {
        p.x += (targetX - p.x) * 0.35
        p.y += (targetY - p.y) * 0.35
        targetX = p.x
        targetY = p.y
        const el = dotsRef.current[i]
        if (el) {
          el.style.left = `${p.x}px`
          el.style.top = `${p.y}px`
        }
      })
      rafId = requestAnimationFrame(raf)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', onOver)
    rafId = requestAnimationFrame(raf)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      {COLORS.map((color, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="cursor-dot-trail"
          style={{
            background: color,
            width: `${18 - i * 2}px`,
            height: `${18 - i * 2}px`,
            opacity: 1 - i * 0.12,
          }}
        />
      ))}
    </>
  )
}