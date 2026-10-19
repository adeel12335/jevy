import { services } from '../data'
import { metaFor } from '../routes'
import { PageHeader } from '../components/PageHeader'
import { CallToAction } from '../components/CallToAction'
import { Expertise } from '../components/Expertise'
import { Capabilities } from '../components/Capabilities'
import { Process } from '../components/Process'

export default function Services() {
  const meta = metaFor('/services')

  return <>
    <PageHeader
      eyebrow="Our services"
      title={['Practical expertise.', 'Careful execution.']}
      lede={<p>Renovation and new construction for residential and commercial projects, from start to finish. {services.length} trades run by the same team, with union professionals on it. Open any one for the full scope.</p>}
      trail={meta.trail!}
      image="masonry"
      imageAlt="Concrete block wall under construction"
    />
    <Expertise heading={false} />
    <Capabilities />
    <Process />
    <CallToAction
      eyebrow="Scope it with us"
      title={['Tell us what', 'the site needs.']}
    />
  </>
}
