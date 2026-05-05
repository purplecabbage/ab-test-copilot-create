import React from 'react'

const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '92vh',
    padding: '5rem 2rem 4rem',
    background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 70%)'
  },
  eyebrow: {
    display: 'inline-block',
    marginBottom: '1.5rem',
    padding: '0.35rem 1rem',
    background: 'rgba(59,130,246,0.15)',
    border: '1px solid rgba(59,130,246,0.35)',
    borderRadius: '999px',
    fontSize: '0.8rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#60a5fa'
  },
  heading: {
    fontSize: 'clamp(2.5rem, 7vw, 5rem)',
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    maxWidth: '800px',
    marginBottom: '1rem'
  },
  tagline: {
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    fontWeight: 300,
    color: '#9ca3af',
    marginBottom: '2rem',
    fontStyle: 'italic'
  },
  description: {
    fontSize: '1.1rem',
    color: '#d1d5db',
    maxWidth: '650px',
    lineHeight: 1.75,
    marginBottom: '3rem'
  },
  ctaGroup: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  primaryBtn: {
    padding: '0.85rem 2rem',
    background: '#3b82f6',
    color: '#fff',
    borderRadius: '0.6rem',
    fontWeight: 700,
    fontSize: '1rem',
    transition: 'background 0.2s, transform 0.1s',
    cursor: 'pointer'
  },
  secondaryBtn: {
    padding: '0.85rem 2rem',
    background: 'transparent',
    color: '#f9fafb',
    border: '1px solid #374151',
    borderRadius: '0.6rem',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'border-color 0.2s'
  }
}

function Hero () {
  return (
    <section style={styles.section}>
      <span style={styles.eyebrow}>Revenue Operations Specialists</span>
      <h1 style={styles.heading}>
        Find Your <span style={{ color: '#3b82f6' }}>Focus</span>.<br />
        Close More Deals.
      </h1>
      <p style={styles.tagline}>"We sell certainty."</p>
      <p style={styles.description}>
        Focus Finder partners with growth-stage companies to sharpen their
        sales leadership, build winning strategy, and implement CRM systems
        that turn chaos into predictable revenue.
      </p>
      <div style={styles.ctaGroup}>
        <a
          href='#signup'
          style={styles.primaryBtn}
          onMouseEnter={e => (e.currentTarget.style.background = '#2563eb')}
          onMouseLeave={e => (e.currentTarget.style.background = '#3b82f6')}
        >
          Get Early Access
        </a>
        <a
          href='#services'
          style={styles.secondaryBtn}
          onMouseEnter={e => (e.currentTarget.style.borderColor = '#6b7280')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = '#374151')}
        >
          Learn More ↓
        </a>
      </div>
    </section>
  )
}

export default Hero
