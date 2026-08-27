import { useTranslation } from 'react-i18next'
import { experiences } from '../../data/portfolio'
import { SectionHeading } from '../layout/SectionHeading'

export function Experience() {
  const { t } = useTranslation()
  return (
    <section className="section-shell experience-section" id="experience">
      <SectionHeading index="03" title={t('sections.experience')} />
      <div className="timeline">
        {experiences.map((entry) => (
          <article
            className="timeline-entry"
            key={`${entry.company}-${entry.period}`}
          >
            <time>{entry.period}</time>
            <div>
              <span className="company">{entry.company}</span>
              <h3>{t(`experience.${entry.roleKey}`)}</h3>
              <p>{t(`experience.${entry.projectKey}`)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
