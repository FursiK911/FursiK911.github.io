import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLoadingSequence } from '../hooks/useLoadingSequence'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { LoadingScreen } from '../components/layout/LoadingScreen'
import { Hero } from '../components/hero/Hero'
import { Projects } from '../components/projects/Projects'
import { About } from '../components/sections/About'
import { Experience } from '../components/sections/Experience'
import { Skills } from '../components/sections/Skills'
import { Contact } from '../components/sections/Contact'
import { Directions } from '../components/sections/Directions'
import { KonamiDebug } from '../components/debug/KonamiDebug'
import { LoadingAnimationDebug } from '../components/debug/LoadingAnimationDebug'
import { useTypingText } from '../hooks/useTypingText'
import '../App.css'

const sectionIds = ['projects', 'about', 'experience', 'stack', 'contact']

export default function App() {
  const { i18n } = useTranslation()
  const loader = useLoadingSequence(
    i18n.language.startsWith('ru')
      ? 'Найди лучшего разработчика для нашего проекта'
      : 'Find the best developer for our project',
  )
  const active = useActiveSection(sectionIds, 'projects')
  const roles = i18n.t('hero.roles', { returnObjects: true }) as string[]
  const { displayText, reducedMotion } = useTypingText(
    roles,
    i18n.language,
    loader.phase === 'complete',
  )
  const toggleLanguage = () => {
    void i18n.changeLanguage(i18n.language.startsWith('ru') ? 'en' : 'ru')
  }
  useEffect(() => {
    document.body.classList.toggle('is-loading', loader.phase !== 'complete')
    return () => document.body.classList.remove('is-loading')
  }, [loader.phase])

  return (
    <>
      <LoadingScreen
        allReady={loader.allReady}
        buttonActive={loader.buttonActive}
        candidates={loader.candidates}
        complete={loader.complete}
        cursorClicked={loader.cursorClicked}
        notifyVideo={loader.notifyVideo}
        phase={loader.phase}
        queryText={loader.queryText}
        resultVisible={loader.resultVisible}
        skip={loader.skip}
        videoFallback={loader.videoFallback}
      />
      <LoadingAnimationDebug visible={loader.phase !== 'complete'} />
      <div
        className="app-shell"
        aria-hidden={loader.phase !== 'complete'}
        inert={loader.phase !== 'complete'}
      >
        <Header
          active={active}
          onLanguage={toggleLanguage}
          typedRole={displayText}
          reducedMotion={reducedMotion}
        />
        <main>
          <Hero
            typedRole={displayText}
            reducedMotion={reducedMotion}
            entered={loader.phase === 'complete'}
          />
          <Directions />
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
