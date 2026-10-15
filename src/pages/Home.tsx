import { AboutIntro, Hero } from '../components/Introduction'
import { Expertise } from '../components/Expertise'
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
    <AboutIntro />
    <Expertise />
    <Sectors />
    <Process />
    <FeaturedWork />
    <BeforeAfter />
    <SiteVideos />
    <Archive />
    <Qualifications />
    <Contact />
    <FindUs />
  </>
}
