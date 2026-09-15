import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { EducationTimeline } from '../EducationTimeline/EducationTimeline'
import '../styles/Education.css'

export function Education() {
  const { t } = useTranslation()

  return (
    <section
      className={cx(styles.sectionShell, styles.educationSection)}
      id="education"
    >
      <SectionHeading index="05" title={t('sections.education')} />
      <div className={cx(styles.educationIntro)}>
        <h2>{t('education.title')}</h2>
        <p>{t('education.intro')}</p>
      </div>
      <EducationTimeline />
    </section>
  )
}
