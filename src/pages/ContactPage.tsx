import { company } from '../site'
import { metaFor } from '../routes'
import { PageHeader } from '../components/PageHeader'
import { Contact } from '../components/Contact'
import { FindUs } from '../components/FindUs'

export default function ContactPage() {
  const meta = metaFor('/contact')

  return <>
    <PageHeader
      eyebrow="Let us talk"
      title={['Start with a', 'conversation.']}
      lede={<p>The office is at {company.street}, {company.locality}, {company.region} {company.postalCode}. Call {company.telephone}, or send the scope through the form and we will come back to you about the work.</p>}
      trail={meta.trail!}
      compact
    />
    <Contact heading={false} />
    <FindUs />
  </>
}
