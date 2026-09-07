import { cx, styles } from '@/shared/styles'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { directions } from '../../model/directions/data/directions.data'
import { MetricCounter } from '@/shared/ui/MetricCounter'
import type { DirectionsProps } from './types/Directions.types'

export function Directions({
  reducedMotion = false,
  entered = true,
  embedded = false,
}: DirectionsProps) {
  const { t } = useTranslation()
  const [metricsStarted, setMetricsStarted] = useState(entered)

  return (
    <motion.section
      className={cx(
        styles.directionsSection,
        embedded && styles.directionsSectionEmbedded,
      )}
      initial={reducedMotion || entered ? false : 'hidden'}
      animate={reducedMotion || entered ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, delay: embedded ? 0.57 : 0.12 },
        },
      }}
      onAnimationStart={() => {
        if (!entered) setMetricsStarted(false)
      }}
      onAnimationComplete={() => {
        if (entered) setMetricsStarted(true)
      }}
    >
      <div className={embedded ? undefined : cx(styles.sectionShell)}>
        <div className={cx(styles.directionsGrid)}>
          {directions.map((direction) => (
            <article className={cx(styles.directionCard)} key={direction.id}>
              <div className={cx(styles.directionContent)}>
                <h3>{t(`directions.${direction.titleKey}`)}</h3>
                {direction.qualifierKey && (
                  <span className={cx(styles.directionQualifier)}>
                    {t(`directions.${direction.qualifierKey}`)}
                  </span>
                )}
                <ul className={cx(styles.directionTools)}>
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
