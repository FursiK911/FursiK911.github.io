import { motion } from 'motion/react'
import { cx, styles } from '@/shared/styles'
import { MetricCounter } from '@/shared/ui/MetricCounter'
import { useTranslation } from 'react-i18next'
import {
  DIRECTION_CARD_STAGGER_MS,
  DIRECTION_CONTENT_DELAY_MS,
} from '../../../../model/directions/config/directionsMotion.config'
import localStyles from './styles/DirectionCard.module.css'
import { useDirectionCardMotion } from './model/useDirectionCardMotion/useDirectionCardMotion'
import type { DirectionCardProps } from './types/DirectionCard.types'

export function DirectionCard({
  direction,
  hasEntered,
  index,
  reducedMotion,
  scanning,
}: DirectionCardProps) {
  const { t } = useTranslation()
  const {
    cardStyle,
    iconPointerStyle,
    isHovering,
    isIconAnimating,
    isMetricActive,
    isMetricLabelVisible,
    onPointerLeave,
    onPointerMove,
    pointerStyle,
  } = useDirectionCardMotion({
    hasEntered,
    index,
    reducedMotion,
    scanning,
  })
  const cardDelay = index * DIRECTION_CARD_STAGGER_MS
  const isStatic = reducedMotion || hasEntered

  return (
    <motion.article
      className={cx(styles.directionCard, localStyles.directionCard)}
      data-entrance={isStatic ? 'complete' : 'pending'}
      data-direction={direction.id}
      data-hovering={isHovering}
      data-icon-animating={isIconAnimating}
      data-scanning={scanning}
      initial={reducedMotion ? false : { opacity: 0, scale: 0.985 }}
      animate={
        isStatic ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.985 }
      }
      transition={{
        duration: 0.32,
        delay: reducedMotion ? 0 : cardDelay / 1000,
      }}
      onPointerLeave={onPointerLeave}
      onPointerMove={onPointerMove}
      style={{ ...cardStyle, ...pointerStyle }}
    >
      <span className={localStyles.directionPointerGlow} aria-hidden="true" />
      <span className={localStyles.directionBorderScan} aria-hidden="true" />
      <motion.div
        className={localStyles.directionIcon}
        aria-hidden="true"
        initial={reducedMotion ? false : { opacity: 0, y: 6 }}
        animate={isStatic ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        transition={{
          delay: reducedMotion
            ? 0
            : (cardDelay + DIRECTION_CONTENT_DELAY_MS) / 1000,
          duration: 0.22,
        }}
      >
        <motion.span className={localStyles.directionIconGlyph}>
          <motion.span
            className={localStyles.directionIconPointerGlyph}
            style={iconPointerStyle}
          >
            <direction.icon size={36} stroke={1.6} />
          </motion.span>
        </motion.span>
        <span className={localStyles.directionIconScan} />
      </motion.div>
      <motion.div
        className={cx(styles.directionContent, localStyles.directionContent)}
        initial={reducedMotion ? false : { opacity: 0, x: -8 }}
        animate={isStatic ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
        transition={{
          delay: reducedMotion
            ? 0
            : (cardDelay + DIRECTION_CONTENT_DELAY_MS) / 1000,
          duration: 0.24,
        }}
      >
        <h3>{t(`directions.${direction.titleKey}`)}</h3>
        {direction.qualifierKey && (
          <span
            className={cx(
              styles.directionQualifier,
              localStyles.directionDescription,
            )}
          >
            {t(`directions.${direction.qualifierKey}`)}
          </span>
        )}
      </motion.div>
      <motion.div
        className={localStyles.directionMetric}
        data-label-visible={isMetricLabelVisible}
        initial={reducedMotion ? false : { opacity: 0, y: 6 }}
        animate={isStatic ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
        transition={{
          delay: reducedMotion ? 0 : (cardDelay + 300) / 1000,
          duration: 0.2,
        }}
      >
        <MetricCounter
          active={isMetricActive}
          label={t(`directions.${direction.metricLabelKey}`)}
          suffix="+"
          value={direction.metric}
        />
      </motion.div>
    </motion.article>
  )
}
