import localStyles from './styles/Directions.module.css'
import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { directions } from '../../model/directions/data/directions.data'
import { useDirectionsMotion } from '../../model/directions/model/useDirectionsMotion/useDirectionsMotion'
import { DirectionCard } from './ui/DirectionCard/DirectionCard'
import type { DirectionsProps } from './types/Directions.types'

export function Directions({
  reducedMotion = false,
  entered = true,
  embedded = false,
}: DirectionsProps) {
  const { i18n } = useTranslation()
  const { hasEntered, scanningCardIndex, sectionRef } = useDirectionsMotion({
    cardCount: directions.length,
    entered,
    reducedMotion,
  })

  return (
    <motion.section
      ref={sectionRef}
      className={cx(
        styles.directionsSection,
        embedded && styles.directionsSectionEmbedded,
      )}
    >
      <div className={embedded ? undefined : cx(styles.sectionShell)}>
        <div className={cx(styles.directionsGrid, localStyles.directionsGrid)}>
          {directions.map((direction, index) => (
            <DirectionCard
              direction={direction}
              hasEntered={hasEntered}
              index={index}
              key={`${i18n.language}-${direction.id}`}
              reducedMotion={reducedMotion}
              scanning={scanningCardIndex === index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
