/*
 * Focus Finder – get-emails action
 * Returns the current list of registered email addresses from aio-lib-state.
 * This action is public (no Adobe auth required).
 */

const { Core, State } = require('@adobe/aio-sdk')

const EMAILS_KEY = 'focus-finder-emails'

/**
 * Main action handler.
 */
async function main (params) {
  const logger = Core.Logger('get-emails', { level: params.LOG_LEVEL || 'info' })

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  }

  // Handle pre-flight
  if (params.__ow_method === 'options') {
    return { statusCode: 204, headers }
  }

  try {
    const state = await State.init()
    const existing = await state.get(EMAILS_KEY)
    const emails = existing && existing.value ? JSON.parse(existing.value) : []

    logger.info(`Returning ${emails.length} email(s)`)
    return {
      statusCode: 200,
      headers,
      body: { emails }
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
