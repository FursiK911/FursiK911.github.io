import { useTranslation } from 'react-i18next'
import { SectionHeading } from '../layout/SectionHeading'

export function About() {
  const { t } = useTranslation()
  const facts = t('about.facts', { returnObjects: true }) as string[][]
  return (
    <section className="section-shell about-section" id="about">
      <SectionHeading index="02" title={t('sections.about')} />
      <div className="about-grid">
        <div>
          <h2>{t('about.lead')}</h2>
          <p>{t('about.body')}</p>
        </div>
        <div className="fact-list">
          {facts.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
