import { useTranslation } from 'react-i18next'
import { useActiveSection } from '../hooks/useActiveSection'
import { useIntro } from '../hooks/useIntro'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { LoadingScreen } from '../components/layout/LoadingScreen'
import { Hero } from '../components/hero/Hero'
import { Projects } from '../components/projects/Projects'
import { About } from '../components/sections/About'
import { Experience } from '../components/sections/Experience'
import { Skills } from '../components/sections/Skills'
import { Contact } from '../components/sections/Contact'
import { KonamiDebug } from '../components/debug/KonamiDebug'
import { useTypingText } from '../hooks/useTypingText'
import '../App.css'

const sectionIds = ['projects', 'about', 'experience', 'stack', 'contact']

export default function App() {
  const { i18n } = useTranslation()
  const ready = useIntro()
  const active = useActiveSection(sectionIds, 'projects')
  const roles = i18n.t('hero.roles', { returnObjects: true }) as string[]
  const { displayText, reducedMotion } = useTypingText(roles, i18n.language)
  const toggleLanguage = () => {
    void i18n.changeLanguage(i18n.language.startsWith('ru') ? 'en' : 'ru')
  }
  return (
    <>
      <LoadingScreen
        done={ready}
        lines={i18n.t('intro', { returnObjects: true }) as string[]}
      />
      <div className="app-shell">
        <Header
          active={active}
          onLanguage={toggleLanguage}
          typedRole={displayText}
          reducedMotion={reducedMotion}
        />
        <main>
          <Hero typedRole={displayText} reducedMotion={reducedMotion} />
          <Projects />
          <About />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
      <KonamiDebug />
    </>
  )
}
