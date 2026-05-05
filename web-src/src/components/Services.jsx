import React from 'react'

const SERVICES = [
  {
    icon: '🎯',
    title: 'Sales Leadership',
    description:
      'We embed seasoned sales leaders who build high-performance teams, instill winning cultures, and drive quota attainment quarter after quarter.'
  },
  {
    icon: '🗺️',
    title: 'Revenue Strategy',
    description:
      'From ICP definition to territory design and pricing models, we architect the go-to-market playbook that gives your sales motion certainty at every stage.'
  },
  {
    icon: '⚙️',
    title: 'CRM Implementation',
    description:
      'We design, build, and optimise CRM workflows that eliminate manual work, surface real-time pipeline health, and keep your reps focused on selling—not admin.'
  }
]

const styles = {
  section: {
    padding: '6rem 2rem',
    background: '#111827',
    borderTop: '1px solid #1f2937',
    borderBottom: '1px solid #1f2937'
  },
  inner: {
    maxWidth: '900px',
    margin: '0 auto'
  },
  sectionLabel: {
    textAlign: 'center',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#3b82f6',
    marginBottom: '0.75rem'
  },
  heading: {
    textAlign: 'center',
    fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    marginBottom: '3.5rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem'
  },
  card: {
    padding: '2rem',
    background: '#0a0f1e',
    border: '1px solid #1f2937',
    borderRadius: '0.75rem',
    transition: 'border-color 0.2s, transform 0.2s'
  },
  icon: {
    fontSize: '2rem',
    marginBottom: '1rem'
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: 700,
    marginBottom: '0.75rem'
  },
  cardText: {
    fontSize: '0.95rem',
    color: '#9ca3af',
    lineHeight: 1.7
  }
}

function Services () {
  return (
    <section id='services' style={styles.section}>
      <div style={styles.inner}>
        <p style={styles.sectionLabel}>What We Do</p>
        <h2 style={styles.heading}>Streamline Your Revenue Operations</h2>
        <div style={styles.grid}>
          {SERVICES.map(s => (
            <div
              key={s.title}
              style={styles.card}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#3b82f6'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1f2937'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={styles.icon}>{s.icon}</div>
              <h3 style={styles.cardTitle}>{s.title}</h3>
              <p style={styles.cardText}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
