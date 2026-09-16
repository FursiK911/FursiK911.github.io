import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { HudScrollIndicator } from '../HudScrollIndicator/HudScrollIndicator'
import type { LegalPageLayoutProps } from './types/LegalPageLayout.types'
import { usePageMetadata } from '@/shared/lib/usePageMetadata/usePageMetadata'

export function LegalPageLayout({
  title,
  description,
  hudSectionLabel,
  children,
}: LegalPageLayoutProps) {
  const { i18n, t } = useTranslation()

  usePageMetadata({ title, description, language: i18n.language })

  return (
    <div className={cx(styles.appShell, styles.legalShell)}>
      <Header
        active=""
        onLanguage={() =>
          void i18n.changeLanguage(i18n.language.startsWith('ru') ? 'en' : 'ru')
        }
        typedRole={t('header.legalRole')}
        reducedMotion
      />
      <main
        id="page-content"
        className={cx(styles.legalPage, styles.sectionShell)}
      >
        <a className={cx(styles.legalBackLink)} href="/">
          ← {t('legal.back')}
        </a>
        {children}
      </main>
      <Footer />
      <HudScrollIndicator sectionLabel={hudSectionLabel} />
    </div>
  )
}
