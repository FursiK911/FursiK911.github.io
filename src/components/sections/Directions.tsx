import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { directions } from '../../data/portfolio'
import { MetricCounter } from '../ui/MetricCounter'

export interface DirectionsProps {
  reducedMotion?: boolean
  entered?: boolean
  embedded?: boolean
}

export function Directions({
  reducedMotion = false,
  entered = true,
  embedded = false,
}: DirectionsProps) {
  const { t } = useTranslation()
  const [metricsStarted, setMetricsStarted] = useState(entered)

  return (
    <motion.section
      className={`directions-section${embedded ? ' directions-section--embedded' : ''}`}
      initial={reducedMotion || entered ? false : 'hidden'}
      animate={reducedMotion || entered ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, delay: 0.12 },
        },
      }}
      onAnimationStart={() => {
        if (!entered) setMetricsStarted(false)
      }}
      onAnimationComplete={() => {
        if (entered) setMetricsStarted(true)
      }}
    >
      <div className={embedded ? undefined : 'section-shell'}>
        <div className="directions-grid">
          {directions.map((direction) => (
            <article className="direction-card" key={direction.id}>
              <div className="direction-content">
                <h3>{t(`directions.${direction.titleKey}`)}</h3>
                {direction.qualifierKey && (
                  <span className="direction-qualifier">
                    {t(`directions.${direction.qualifierKey}`)}
                  </span>
                )}
                <ul className="direction-tools">
                  {direction.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
              <MetricCounter
                value={direction.metric}
                suffix="+"
                label={t(`directions.${direction.metricLabelKey}`)}
                active={entered && metricsStarted}
              />
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
