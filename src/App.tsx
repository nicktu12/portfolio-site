import SkipLink from './components/SkipLink/SkipLink'
import SiteHeader from './components/SiteHeader/SiteHeader'
import SiteFooter from './components/SiteFooter/SiteFooter'
import Hero from './sections/Hero/Hero'
import Skills from './sections/Skills/Skills'
import Work from './sections/Work/Work'
import CaseStudy from './sections/CaseStudy/CaseStudy'
import AiLeadership from './sections/AiLeadership/AiLeadership'
import Community from './sections/Community/Community'
import Talks from './sections/Talks/Talks'
import Contact from './sections/Contact/Contact'
import Projects from './sections/Projects/Projects'

function App() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main">
        <Hero />
        <Skills />
        <Work />
        <CaseStudy />
        <AiLeadership />
        <Community />
        <Talks />
        <Projects />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
