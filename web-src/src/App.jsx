import React from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import EmailSignup from './components/EmailSignup.jsx'
import Footer from './components/Footer.jsx'

function App () {
  // Action URLs: the App Builder CLI injects REACT_APP_ACTION_* env vars at build time.
  // Fallback values point to the local dev proxy.
  const addEmailUrl =
    process.env.REACT_APP_ACTION_ADD_EMAIL ||
    '/api/v1/web/focus-finder/add-email'

  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <Services />
        <EmailSignup actionUrl={addEmailUrl} />
      </main>
      <Footer />
    </div>
  )
}

export default App
