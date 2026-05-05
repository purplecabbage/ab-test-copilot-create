import React from 'react'

const styles = {
  footer: {
    padding: '2.5rem 2rem',
    borderTop: '1px solid #1f2937',
    textAlign: 'center',
    color: '#4b5563',
    fontSize: '0.875rem'
  },
  logo: {
    fontWeight: 800,
    color: '#6b7280',
    letterSpacing: '-0.02em',
    marginBottom: '0.5rem'
  },
  accent: { color: '#3b82f6' }
}

function Footer () {
  const year = new Date().getFullYear()
  return (
    <footer style={styles.footer}>
      <p style={styles.logo}>
        Focus<span style={styles.accent}>Finder</span>
      </p>
      <p>© {year} Focus Finder. All rights reserved.</p>
    </footer>
  )
}

export default Footer
