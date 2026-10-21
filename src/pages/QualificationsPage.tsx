import { agencyCount, certified } from '../data'
import { company } from '../site'
import { metaFor } from '../routes'
import { PageHeader } from '../components/PageHeader'
import { CallToAction } from '../components/CallToAction'
import { Qualifications } from '../components/Qualifications'
import { Lines, Reveal } from '../components/ui'

export default function QualificationsPage() {
  const meta = metaFor('/qualifications')
  const types = certified.map(group => group.type).join(', ')

  return <>
    <PageHeader
      eyebrow="Prequalifications"
      title={['Certified.', 'Registered.', 'On the list.']}
      lede={<p>{company.name} is prequalified {types} with {agencyCount} public agencies across New York and New Jersey, and registered with New York State OGS — so our scope can count toward a participation goal on your project.</p>}
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
          <p className="lede">A Minority-owned Business Enterprise (MWBE), Disadvantaged Business Enterprise (DBE) or Small Business Enterprise (SBE) certification is issued by the agency itself after it reviews ownership, control and capacity. It is what lets a prime contractor count a subcontractor&rsquo;s scope toward the participation goals written into a public contract.</p>
          <p className="lede">Each certification above is held directly with the agency named beside it. If you need our certification numbers or a copy of a certificate for a bid package, ask and we will send them across.</p>
        </Reveal>
      </div>
    </section>

    <CallToAction
      eyebrow="For primes and agencies"
      title={['Ask for the', 'certificates.']}
      lede={`Email ${company.email} or call ${company.telephone} and we will send the documentation your bid package needs.`}
    />
  </>
}
