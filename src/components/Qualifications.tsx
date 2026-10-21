import { agencyCount, certifications } from '../data'
import { Lines, Reveal, Setout, TextLink } from './ui'

/* Shown whole on the home page; on /qualifications the page header already
   carries the h1, so the aside drops its heading and keeps the summary. */
export function Qualifications({ heading = true }: { heading?: boolean }) {
  return <section
    id="qualifications"
    className="section section--navy section-anchor"
    aria-labelledby={heading ? 'qualifications-title' : undefined}
    aria-label={heading ? undefined : 'Prequalifications'}
  >
    <Setout />
    <div className="container cert-grid">
      <Reveal className="cert-aside">
        {heading ? <>
          <p className="eyebrow">Prequalifications</p>
          <h2 id="qualifications-title"><Lines text={['Certified.', 'Registered.', 'On the list.']} /></h2>
        </> : null}
        <p className="lede">Jevvy Construction Inc is certified as a Minority-owned, Small and Disadvantaged Business Enterprise with {agencyCount} public agencies across New York and New Jersey, and is a registered vendor with the New York State Office of General Services.</p>
        <div className="cert-types"><span>MWBE</span><span>SBE</span><span>DBE</span><span>OGS registered</span></div>
        <TextLink to="/contact" className="cert-link">Discuss a project</TextLink>
      </Reveal>
      <Reveal delay={0.1}>
        {certifications.map(group => <div className="cert-group" key={group.type}>
          <div className="cert-head"><b>{group.type}</b><span>{group.label}</span></div>
          <dl className="cert-rows">
            {group.agencies.map(agency => <div className="cert-row" key={agency.code}>
              <dt className="cert-code">{agency.code}</dt>
              <dd className="cert-name">{agency.name}</dd>
            </div>)}
          </dl>
        </div>)}
      </Reveal>
    </div>
  </section>
}
