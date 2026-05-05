/*
 * Focus Finder – add-email action
 * Validates an email address and appends it to the stored list in aio-lib-state.
 * This action is public (no Adobe auth required).
 */

const { Core, State } = require('@adobe/aio-sdk')

const EMAILS_KEY = 'focus-finder-emails'

/**
 * Simple email format validator.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail (email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

/**
 * Main action handler.
 * Expected params: { email: string }
 */
async function main (params) {
  const logger = Core.Logger('add-email', { level: params.LOG_LEVEL || 'info' })

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  }

  // Handle pre-flight
  if (params.__ow_method === 'options') {
    return { statusCode: 204, headers }
  }

  const email = (params.email || '').trim().toLowerCase()

  if (!isValidEmail(email)) {
    return {
      statusCode: 400,
      headers,
      body: { error: 'A valid email address is required.' }
    }
  }

  try {
    const state = await State.init()
    const existing = await state.get(EMAILS_KEY)
    const emails = existing && existing.value ? JSON.parse(existing.value) : []

    if (!emails.includes(email)) {
      emails.push(email)
      // ttl: -1 means "no expiry"
      await state.put(EMAILS_KEY, JSON.stringify(emails), { ttl: -1 })
      logger.info(`Added new email: ${email}`)
    } else {
      logger.info(`Email already registered: ${email}`)
    }

    return {
      statusCode: 200,
      headers,
      body: { message: 'You have been added to the list!', email }
    }
  } catch (err) {
    logger.error(err)
    return {
      statusCode: 500,
      headers,
      body: { error: 'An internal error occurred. Please try again later.' }
    }
  }
}

module.exports = { main }
