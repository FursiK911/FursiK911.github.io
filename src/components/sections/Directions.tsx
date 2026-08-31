import { useTranslation } from 'react-i18next'
import { directions } from '../../data/portfolio'

export function Directions() {
  const { t } = useTranslation()
  return (
    <section className="directions-section" aria-labelledby="directions-title">
      <div className="section-shell">
        <div className="directions-heading">
          <span className="eyebrow">{t('directions.eyebrow')}</span>
          <h2 id="directions-title">{t('directions.title')}</h2>
          <p>{t('directions.intro')}</p>
        </div>
        <div className="directions-grid">
          {directions.map((direction, index) => (
            <article className="direction-card" key={direction.id}>
              <span className="direction-index">0{index + 1}</span>
              <h3>{t(`directions.${direction.titleKey}`)}</h3>
              <p>{t(`directions.${direction.descriptionKey}`)}</p>
              <span className="direction-proof">
                {t(`directions.${direction.proofKey}`)}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
