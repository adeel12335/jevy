import { agencyLine, certificationLine, registrationLine } from '../data'
import { company, telephoneSentence } from '../site'
import { metaFor } from '../routes'
import { PageHeader } from '../components/PageHeader'
import { CallToAction } from '../components/CallToAction'
import { Qualifications } from '../components/Qualifications'
import { Lines, Reveal } from '../components/ui'

export default function QualificationsPage() {
  const meta = metaFor('/qualifications')

  return <>
    <PageHeader
      eyebrow="Prequalifications"
      title={['Certified.', 'Credentialed.', 'Registered.']}
      lede={<p>{company.name} is certified {certificationLine}, holds credentials with {agencyLine}, and is a registered vendor with {registrationLine} — so our scope can count toward a participation goal on your project.</p>}
      trail={meta.trail!}
      compact
    />

    <Qualifications heading={false} />

    <section className="section section--slab" aria-labelledby="quals-note">
      <div className="container quals-note">
        <Reveal>
          <p className="eyebrow">What this means</p>
          <h2 id="quals-note"><Lines text={['Ready for the', 'bid list.']} /></h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="lede">A WOSB, WBE, MBE or MWBE certification is issued after a review of ownership, control and capacity. It is what lets a prime contractor count a subcontractor&rsquo;s scope toward the participation goals written into a public contract.</p>
          <p className="lede">The agency credentials and vendor registrations above are held directly with the agency named. If you need our certification numbers or a copy of a certificate for a bid package, ask and we will send them across.</p>
        </Reveal>
      </div>
    </section>

    <CallToAction
      eyebrow="For primes and agencies"
      title={['Ask for the', 'certificates.']}
      lede={`Email ${company.email} or call ${telephoneSentence} and we will send the documentation your bid package needs.`}
    />
  </>
}
