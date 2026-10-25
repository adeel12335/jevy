import nodemailer from 'nodemailer'

/* Delivers the project inquiry form to the office inbox over Gmail SMTP.

   This runs on Vercel, not in the browser: SMTP needs a credential, and
   anything the browser holds is public. The page posts here, same-origin,
   which is why the content security policy needs no exception.

   Required environment variables (Vercel → Settings → Environment Variables):
     SMTP_USER  the Gmail address that sends the mail
     SMTP_PASS  a Google App Password for that account, not the login password
     CONTACT_TO where inquiries land; defaults to SMTP_USER

   If any of those are missing this answers 503, and the page falls back to
   drafting the message in the visitor's own email client — so an inquiry is
   never silently dropped, even when the mail route is misconfigured. */

const LIMITS = { name: 100, email: 160, location: 180, message: 1500 }

const clean = (value, max) => typeof value === 'string' ? value.trim().slice(0, max) : ''

/* Deliberately permissive: the address is for replying to a human, and a
   stricter pattern rejects valid addresses more often than it catches typos. */
const looksLikeEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const body = typeof request.body === 'string' ? safeParse(request.body) : request.body
  if (!body) return response.status(400).json({ error: 'Could not read the form' })

  /* The form carries a field no person can see. Anything in it is a bot, and
     it is answered with a success so the sender learns nothing. */
  if (clean(body.company, 50)) return response.status(200).json({ ok: true })

  const inquiry = {
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    location: clean(body.location, LIMITS.location),
    message: clean(body.message, LIMITS.message),
  }

  const missing = Object.entries(inquiry).filter(([, value]) => !value).map(([key]) => key)
  if (missing.length) return response.status(400).json({ error: `Missing: ${missing.join(', ')}` })
  if (!looksLikeEmail(inquiry.email)) return response.status(400).json({ error: 'That email address does not look right' })

  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  if (!user || !pass) {
    console.error('contact: SMTP_USER or SMTP_PASS is not set')
    return response.status(503).json({ error: 'Mail is not configured' })
  }

  try {
    const transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user, pass },
    })

    await transport.sendMail({
      /* The envelope sender has to be the authenticated account; Gmail
         rewrites anything else. The visitor's address goes in Reply-To, so
         hitting reply in the inbox answers them directly. */
      from: `"Jevvy Construction website" <${user}>`,
      to: process.env.CONTACT_TO || user,
      replyTo: `"${inquiry.name}" <${inquiry.email}>`,
      subject: `Project inquiry — ${inquiry.location}`,
      text: [
        inquiry.message,
        '',
        `Project location: ${inquiry.location}`,
        '',
        `Name:  ${inquiry.name}`,
        `Email: ${inquiry.email}`,
        '',
        'Sent from the inquiry form on jevvyconstruction.com',
      ].join('\n'),
    })

    return response.status(200).json({ ok: true })
  } catch (error) {
    /* Logged for the Vercel console, never returned: the message can name the
       account. The page falls back to the email draft on any failure. */
    console.error('contact: send failed', error?.message)
    return response.status(502).json({ error: 'Could not send just now' })
  }
}

function safeParse(value) {
  try { return JSON.parse(value) } catch { return null }
}
