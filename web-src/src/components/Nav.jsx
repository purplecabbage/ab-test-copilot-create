import React from 'react'

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    background: 'rgba(10, 15, 30, 0.85)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #1f2937'
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: '#f9fafb'
  },
  accent: { color: '#3b82f6' },
  cta: {
    padding: '0.5rem 1.25rem',
    background: '#3b82f6',
    color: '#fff',
    borderRadius: '0.5rem',
    fontWeight: 600,
    fontSize: '0.9rem',
    transition: 'background 0.2s'
  }
}

function Nav () {
  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>
        Focus<span style={styles.accent}>Finder</span>
      </span>
      <a
        href='#signup'
        style={styles.cta}
        onMouseEnter={e => (e.target.style.background = '#2563eb')}
        onMouseLeave={e => (e.target.style.background = '#3b82f6')}
      >
        Join the List
      </a>
    </nav>
  )
}

export default Nav
