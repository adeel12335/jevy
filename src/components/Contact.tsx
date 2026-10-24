import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, Copy, Mail, MapPin, Phone } from 'lucide-react'
import { company, telephoneSentence } from '../site'
import { Lines, Modal, Reveal } from './ui'

type Inquiry = { name: string; email: string; location: string; message: string }
type Status = 'idle' | 'sending' | 'sent' | 'error'

/* With no endpoint configured the form stays useful without a backend: it
   drafts the message and hands it to the visitor's own email client, so
   nothing is silently lost. Set VITE_FORM_ENDPOINT (Formspree, Web3Forms,
   Netlify Forms or your own handler) and the same form posts instead. */
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

export function Contact({ heading = true }: { heading?: boolean }) {
  const [inquiry, setInquiry] = useState<Inquiry | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  const body = inquiry ? `Hello Jevvy Construction,\n\n${inquiry.message}\n\nProject location: ${inquiry.location}\n\nName: ${inquiry.name}\nEmail: ${inquiry.email}` : ''
  const mailto = `mailto:${company.email}?subject=${encodeURIComponent(`Project inquiry${inquiry ? ` — ${inquiry.location}` : ''}`)}&body=${encodeURIComponent(body)}`

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    for (const field of Array.from(form.elements)) {
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
        field.setCustomValidity(field.required && !field.value.trim() ? 'Please enter a value.' : '')
      }
    }
    if (!form.reportValidity()) return
    if (String(data.get('company') ?? '').trim()) return // honeypot: only a bot fills this in

    const value: Inquiry = {
      name: String(data.get('name')).trim(),
      email: String(data.get('email')).trim(),
      location: String(data.get('location')).trim(),
      message: String(data.get('message')).trim(),
    }

    setCopied(false)
    setCopyError(false)

    if (!ENDPOINT) { setInquiry(value); return }

    setStatus('sending')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...value, _subject: `Project inquiry — ${value.location}` }),
      })
      if (!response.ok) throw new Error(String(response.status))
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
      setInquiry(value)
    }
  }

  async function copyInquiry() {
    try { await navigator.clipboard.writeText(body); setCopied(true); setCopyError(false) } catch { setCopyError(true) }
  }

  return <>
    <section
      id="contact"
      className="section section--slab section-anchor"
      aria-labelledby={heading ? 'contact-title' : undefined}
      aria-label={heading ? undefined : 'Contact'}
    >
      <div className="container contact-grid">
        <Reveal className="contact-aside">
          {heading ? <>
            <p className="eyebrow">Let us talk</p>
            <h2 id="contact-title"><Lines text={['Start with a', 'conversation.']} /></h2>
          </> : null}
          <p className="lede">Tell us the site, the scope and the timeline. We will come back to you about the work.</p>
          <div className="contact-lines">
            <a href={`mailto:${company.email}`}><Mail size={20} strokeWidth={1.7} aria-hidden="true" />{company.email}</a>
            {company.telephones.map(line => <a key={line.href} href={line.href}><Phone size={20} strokeWidth={1.7} aria-hidden="true" />{line.number}</a>)}
            <address><MapPin size={20} strokeWidth={1.7} aria-hidden="true" />{company.street}, {company.locality}, {company.region} {company.postalCode}</address>
          </div>
        </Reveal>
        <Reveal className="contact-card" delay={0.1}>
          <h3>Start a project</h3>
          {status === 'sent' ? <div className="form-sent" role="status">
            <Check size={30} strokeWidth={1.6} aria-hidden="true" />
            <p><strong>Your inquiry is on its way.</strong></p>
            <p>We will come back to you at the address you gave us. For anything urgent, call the office on {telephoneSentence}.</p>
            <button type="button" className="button button-secondary" onClick={() => setStatus('idle')}>Send another inquiry</button>
          </div> : <form
            className="inquiry-form"
            onSubmit={handleSubmit}
            onInput={event => { const target = event.target; if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) target.setCustomValidity('') }}
          >
            <div className="form-row">
              <label>Full name<input name="name" autoComplete="name" required maxLength={100} /></label>
              <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={160} /></label>
            </div>
            <label>Project location<input name="location" autoComplete="street-address" required maxLength={180} /></label>
            <label>Tell us about your project<textarea name="message" rows={4} required maxLength={1500} /></label>
            <input className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" name="company" />
            <button className="button" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : <>Send Project Inquiry <ArrowRight size={18} aria-hidden="true" /></>}
            </button>
            <p className="form-note">
              {ENDPOINT
                ? 'We read every inquiry and reply to the address you give us.'
                : 'Review your inquiry, then send it through your email app.'}
            </p>
          </form>}
        </Reveal>
      </div>
    </section>

    <Modal
      open={inquiry !== null}
      onOpenChange={open => { if (!open) { setInquiry(null); if (status === 'error') setStatus('idle') } }}
      title={status === 'error' ? 'Send it by email instead' : 'Your project inquiry'}
      description={status === 'error'
        ? 'The inquiry could not be submitted just now. Your draft is kept here — open it in your email app and it reaches us the same way.'
        : 'Your draft is ready. Open it in your email app to review and send. Nothing has been sent yet.'}
      className="inquiry-dialog"
    >
      <p className="email-recipient"><span>To</span> {company.email}</p>
      <pre className="inquiry-preview">{body}</pre>
      <div className="dialog-actions">
        <a className="button" href={mailto}>Open Email App <ArrowRight size={18} /></a>
        <button className="button button-secondary" onClick={copyInquiry}>{copied ? <Check size={18} /> : <Copy size={18} />}{copied ? 'Copied' : 'Copy Inquiry'}</button>
      </div>
      <p className="form-note" role="status">
        {copyError ? 'Copy is unavailable in this browser. You can select the draft text above and copy it manually.'
          : copied ? 'Inquiry copied. You can paste it into an email to our team.'
            : 'No email app? Copy the inquiry into your preferred email service.'}
      </p>
    </Modal>
  </>
}
