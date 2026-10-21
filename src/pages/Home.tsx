import { AboutIntro, Hero } from '../components/Introduction'
import { WorkSequence } from '../components/WorkSequence'
import { Expertise } from '../components/Expertise'
import { Capabilities } from '../components/Capabilities'
import { Sectors } from '../components/Sectors'
import { Process } from '../components/Process'
import { BeforeAfter } from '../components/BeforeAfter'
import { SiteVideos } from '../components/Videos'
import { FeaturedWork } from '../components/Projects'
import { Archive } from '../components/Gallery'
import { Qualifications } from '../components/Qualifications'
import { Contact } from '../components/Contact'
import { FindUs } from '../components/FindUs'

export default function Home() {
  return <>
    <Hero />
    <WorkSequence />
    <AboutIntro />
    <Expertise />
    <Capabilities />
    <Sectors />
    <Process />
    <FeaturedWork />
    <SiteVideos />
    <Archive />
    <BeforeAfter />
    <Qualifications />
    <Contact />
    <FindUs />
  </>
}
