# Focus Finder

> **"We sell certainty."**

A portfolio site for Focus Finder built on [Adobe App Builder](https://developer.adobe.com/app-builder/docs/).  
We focus specifically on **sales leadership**, **strategy**, and **CRM implementation** to streamline revenue operations.

---

## Features

- ✅ Public-facing portfolio landing page (React + Vite)
- ✅ Email sign-up CTA with server-side persistence via **aio-lib-state**
- ✅ No authentication required (public web actions)
- ✅ Serverless backend on Adobe I/O Runtime

---

## Project Structure

```
├── app.config.yaml          # App Builder runtime manifest
├── package.json             # Root dependencies (action runtime)
├── .env.dist                # Environment variable template
├── actions/
│   ├── add-email/           # POST — validates & stores an email in aio-lib-state
│   │   └── index.js
│   └── get-emails/          # GET  — returns all stored emails
│       └── index.js
└── web-src/                 # React + Vite frontend
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── src/
        ├── index.jsx
        ├── App.jsx
        ├── index.css
        └── components/
            ├── Nav.jsx
            ├── Hero.jsx
            ├── Services.jsx
            ├── EmailSignup.jsx
            └── Footer.jsx
```

---

## Getting Started

### Prerequisites

- [Adobe Developer CLI](https://developer.adobe.com/runtime/docs/guides/tools/cli_install/) (`npm install -g @adobe/aio-cli`)
- An Adobe Developer Console project with App Builder enabled

### Setup

```bash
# 1. Copy the env template and fill in your credentials
cp .env.dist .env

# 2. Install root dependencies (for actions)
npm install

# 3. Install frontend dependencies
cd web-src && npm install
```

### Local development

```bash
aio app run
```

This starts a local development server for the frontend and proxies action calls to Adobe I/O Runtime.

### Deploy

```bash
aio app deploy
```

---

## Actions

| Action | Method | Path | Description |
|--------|--------|------|-------------|
| `add-email` | POST | `/api/v1/web/focus-finder/add-email` | Adds an email to the list stored in `aio-lib-state` |
| `get-emails` | GET  | `/api/v1/web/focus-finder/get-emails` | Returns all stored emails |

Both actions are public (`require-adobe-auth: false`).

### add-email payload

```json
{ "email": "you@company.com" }
```

### Email storage

Emails are stored as a JSON array under the key `focus-finder-emails` using `aio-lib-state` with no TTL (they persist indefinitely).
