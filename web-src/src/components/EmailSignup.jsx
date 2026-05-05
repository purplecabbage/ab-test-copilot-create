import React, { useState } from 'react'

const styles = {
  section: {
    padding: '7rem 2rem',
    background: 'radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.12) 0%, transparent 70%)'
  },
  inner: {
    maxWidth: '580px',
    margin: '0 auto',
    textAlign: 'center'
  },
  eyebrow: {
    display: 'inline-block',
    marginBottom: '1rem',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#3b82f6'
  },
  heading: {
    fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    marginBottom: '1rem'
  },
  subtext: {
    color: '#9ca3af',
    marginBottom: '2.5rem',
    fontSize: '1rem',
    lineHeight: 1.7
  },
  form: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  input: {
    flex: '1 1 260px',
    padding: '0.85rem 1.25rem',
    background: '#111827',
    border: '1px solid #374151',
    borderRadius: '0.6rem',
    color: '#f9fafb',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s'
  },
  button: {
    padding: '0.85rem 1.75rem',
    background: '#3b82f6',
    color: '#fff',
    border: 'none',
    borderRadius: '0.6rem',
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.2s',
    whiteSpace: 'nowrap'
  },
  buttonDisabled: {
    background: '#374151',
    cursor: 'not-allowed'
  },
  message: {
    marginTop: '1.25rem',
    padding: '0.85rem 1.25rem',
    borderRadius: '0.6rem',
    fontWeight: 600,
    fontSize: '0.95rem'
  },
  success: {
    background: 'rgba(16,185,129,0.15)',
    border: '1px solid rgba(16,185,129,0.4)',
    color: '#6ee7b7'
  },
  error: {
    background: 'rgba(239,68,68,0.15)',
    border: '1px solid rgba(239,68,68,0.4)',
    color: '#fca5a5'
  },
  privacy: {
    marginTop: '1rem',
    fontSize: '0.8rem',
    color: '#6b7280'
  }
}

function EmailSignup ({ actionUrl }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [message, setMessage] = useState('')

  async function handleSubmit (e) {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch(actionUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage(data.message || 'You have been added to the list!')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  const isLoading = status === 'loading'

  return (
    <section id='signup' style={styles.section}>
      <div style={styles.inner}>
        <span style={styles.eyebrow}>Stay in the Loop</span>
        <h2 style={styles.heading}>Ready to find your focus?</h2>
        <p style={styles.subtext}>
          Join our early-access list and be the first to hear when we open
          new client engagements. No spam—ever.
        </p>

        <form style={styles.form} onSubmit={handleSubmit} noValidate>
          <input
            type='email'
            placeholder='you@company.com'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            disabled={isLoading}
            style={styles.input}
            onFocus={e => (e.target.style.borderColor = '#3b82f6')}
            onBlur={e => (e.target.style.borderColor = '#374151')}
            aria-label='Email address'
          />
          <button
            type='submit'
            disabled={isLoading}
            style={{ ...styles.button, ...(isLoading ? styles.buttonDisabled : {}) }}
            onMouseEnter={e => { if (!isLoading) e.currentTarget.style.background = '#2563eb' }}
            onMouseLeave={e => { if (!isLoading) e.currentTarget.style.background = '#3b82f6' }}
          >
            {isLoading ? 'Sending…' : 'Get Access'}
          </button>
        </form>

        {message && (
          <div
            role='alert'
            style={{
              ...styles.message,
              ...(status === 'success' ? styles.success : styles.error)
            }}
          >
            {message}
          </div>
        )}

        <p style={styles.privacy}>🔒 Your email stays private. Unsubscribe any time.</p>
      </div>
    </section>
  )
}

export default EmailSignup
