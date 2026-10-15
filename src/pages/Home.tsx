import { AboutIntro, Hero } from '../components/Introduction'
import { Expertise } from '../components/Expertise'
import { Sectors } from '../components/Sectors'
import { Process } from '../components/Process'
import { BeforeAfter } from '../components/BeforeAfter'
import { FeaturedWork } from '../components/Projects'
import { Archive } from '../components/Gallery'
import { Qualifications } from '../components/Qualifications'
import { Contact } from '../components/Contact'

export default function Home() {
  return <>
    <Hero />
    <AboutIntro />
    <Expertise />
    <Sectors />
    <Process />
    <FeaturedWork />
    <BeforeAfter />
    <Archive />
    <Qualifications />
    <Contact />
  </>
}
