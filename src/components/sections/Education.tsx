import { useTranslation } from 'react-i18next'
import { SectionHeading } from '../layout/SectionHeading'
import { EducationTimeline } from './EducationTimeline'

export function Education() {
  const { t } = useTranslation()

  return (
    <section className="section-shell education-section" id="education">
      <SectionHeading index="05" title={t('sections.education')} />
      <div className="education-intro">
        <h2>{t('education.title')}</h2>
        <p>{t('education.intro')}</p>
      </div>
      <EducationTimeline />
    </section>
  )
}
