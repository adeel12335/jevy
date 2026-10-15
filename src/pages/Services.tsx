import { countByCategory, services } from '../data'
import { metaFor } from '../routes'
import { PageHeader } from '../components/PageHeader'
import { CallToAction } from '../components/CallToAction'
import { Expertise } from '../components/Expertise'
import { Process } from '../components/Process'

export default function Services() {
  const meta = metaFor('/services')

  return <>
    <PageHeader
      eyebrow="Our services"
      title={['Practical expertise.', 'Careful execution.']}
      lede={<p>Three trades, built by the same team: {services.map(service => `${service.title.toLowerCase()} (${countByCategory(service.category)} photographs)`).join(', ')}. Open any one for the full scope and the work behind it.</p>}
      trail={meta.trail!}
      image="masonry"
      imageAlt="Concrete block wall under construction"
    />
    <Expertise heading={false} />
    <Process />
    <CallToAction
      eyebrow="Scope it with us"
      title={['Tell us what', 'the site needs.']}
    />
  </>
}
