import { agencyLine, certificationLine, certifications, registrationLine } from '../data'
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
          <h2 id="qualifications-title"><Lines text={['Certified.', 'Credentialed.', 'Registered.']} /></h2>
        </> : null}
        <p className="lede">Our business certifications and agency credentials include {certificationLine}, {agencyLine}. We are also registered vendors with {registrationLine}.</p>
        <div className="cert-types">{certifications.flatMap(group => group.agencies).map(entry => <span key={entry.code}>{entry.code}</span>)}</div>
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
