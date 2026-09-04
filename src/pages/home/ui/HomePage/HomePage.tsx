import { cx, styles } from '@/shared/styles'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useActiveSection } from '../../model/useActiveSection/useActiveSection'
import { useLoadingSequence } from '@/features/loading'
import { Header, HudScrollIndicator } from '@/widgets/site-layout'
import { Footer } from '@/widgets/site-layout'
import { LoadingScreen } from '@/features/loading'
import { Projects } from '@/widgets/projects'
import { Profile } from '@/widgets/profile'
import { Experience } from '@/widgets/experience'
import { Skills } from '@/widgets/skills'
import { Education } from '@/widgets/education'
import { Contact } from '@/widgets/contact'
import { KonamiDebug } from '@/features/konami-debug'
import { useTypingText } from '@/shared/lib/useTypingText/useTypingText'
import { sectionIds } from '../../model/config/sectionIds.config'

export default function App() {
  const { i18n, t } = useTranslation()
  const loader = useLoadingSequence(
    i18n.language.startsWith('ru')
      ? 'Найди лучшего разработчика для нашего проекта'
      : 'Find the best developer for our project',
  )
  const active = useActiveSection(sectionIds, 'top')
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
      <div
        className={cx(styles.appShell)}
        aria-hidden={loader.phase !== 'complete'}
        inert={loader.phase !== 'complete'}
      >
        <Header
          active={active}
          onLanguage={toggleLanguage}
          typedRole={displayText}
          reducedMotion={reducedMotion}
        />
        <main id="page-content">
          <Profile
            typedRole={displayText}
            reducedMotion={reducedMotion}
            entered={loader.phase === 'complete'}
          />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
        <HudScrollIndicator
          enabled={loader.phase === 'complete'}
          sectionLabel={t(`nav.${active}`)}
        />
      </div>
      <KonamiDebug />
    </>
  )
}
