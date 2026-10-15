import { AboutIntro, Hero } from '../components/Introduction'
import { Expertise } from '../components/Expertise'
import { Process } from '../components/Process'
import { FeaturedWork } from '../components/Projects'
import { Archive } from '../components/Gallery'
import { Qualifications } from '../components/Qualifications'
import { Contact } from '../components/Contact'

export default function Home() {
  return <>
    <Hero />
    <AboutIntro />
    <Expertise />
    <Process />
    <FeaturedWork />
    <Archive />
    <Qualifications />
    <Contact />
  </>
}
