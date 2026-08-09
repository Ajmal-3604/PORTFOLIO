export function Blob({ variant = 1, color = '#8b5cf6', className = '', style = {} }) {
  const paths = {
    1: 'M45.3,-58.4C58.4,-49.5,68.5,-34.7,72.7,-18.2C76.9,-1.7,75.2,16.5,66.9,30.8C58.6,45.1,43.7,55.5,27.4,62.6C11.1,69.7,-6.6,73.5,-23.1,69.7C-39.6,65.9,-54.9,54.5,-64.1,39.6C-73.3,24.7,-76.4,6.3,-73.1,-10.7C-69.8,-27.7,-60.1,-43.3,-46.6,-52.3C-33.1,-61.3,-16.6,-63.7,0.6,-64.5C17.7,-65.3,35.5,-64.5,45.3,-58.4Z',
    2: 'M39.5,-51.6C50.9,-43.6,59.6,-31.2,64.6,-16.9C69.6,-2.6,70.9,13.6,65.4,27.6C59.9,41.6,47.6,53.4,33.2,60.7C18.8,68,2.3,70.8,-14.6,68.9C-31.5,67,-48.8,60.4,-59.6,47.9C-70.4,35.4,-74.7,17,-72.9,-0.4C-71.1,-17.8,-63.2,-34.4,-50.9,-42.6C-38.6,-50.8,-19.3,-50.6,-2.1,-47.9C15.1,-45.2,28.1,-59.6,39.5,-51.6Z',
  }
  return (
    <svg viewBox="0 0 200 200" className={`doodle doodle-float ${className}`} style={style} aria-hidden="true">
      <path fill={color} d={paths[variant]} transform="translate(100 100)" />
    </svg>
  )
}

export function Squiggle({ id, colors = ['#ef4444', '#8b5cf6', '#06b6d4'], className = '', style = {} }) {
  return (
    <svg viewBox="0 0 220 24" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
          {colors.map((c, i) => (
            <stop key={c} offset={`${(i / (colors.length - 1)) * 100}%`} stopColor={c} />
          ))}
        </linearGradient>
      </defs>
      <path
        d="M4 16 C 30 2, 50 24, 76 12 C 100 2, 122 22, 148 10 C 172 0, 196 20, 216 8"
        stroke={`url(#${id})`}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

export function Star({ color = '#eab308', className = '', style = {} }) {
  return (
    <svg viewBox="0 0 40 40" className={`doodle doodle-float ${className}`} style={style} aria-hidden="true">
      <path
        fill={color}
        d="M20 0 L24 15 L40 20 L24 25 L20 40 L16 25 L0 20 L16 15 Z"
      />
    </svg>
  )
}

export function Dots({ colors = ['#ef4444', '#06b6d4', '#eab308', '#8b5cf6'], className = '', style = {} }) {
  return (
    <svg viewBox="0 0 120 60" className={`doodle ${className}`} style={style} aria-hidden="true">
      <circle cx="10" cy="10" r="6" fill={colors[0]} />
      <circle cx="40" cy="30" r="9" fill={colors[1]} />
      <circle cx="75" cy="8" r="5" fill={colors[2]} />
      <circle cx="100" cy="40" r="7" fill={colors[3]} />
      <circle cx="60" cy="50" r="4" fill={colors[0]} />
    </svg>
  )
}