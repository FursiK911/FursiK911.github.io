import { cx, styles } from '@/shared/styles'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { CSSProperties } from 'react'
import { ActionLink } from '@/shared/ui/ActionLink'
import type { FutureExperienceItemProps } from './types/FutureExperienceItem.types'

export function FutureExperienceItem({
  index,
  reducedMotion,
  axisPoint,
}: FutureExperienceItemProps) {
  const { t } = useTranslation()

  return (
    <article
      className={cx(styles.experienceTimelineItem, styles.experienceFutureItem)}
      style={
        {
          '--timeline-x': `${axisPoint.x}px`,
          '--timeline-y': `${axisPoint.y}px`,
        } as CSSProperties
      }
    >
      <span className={cx(styles.experienceMilestone)} aria-hidden="true" />
      <motion.div
        className={cx(styles.experienceTimelineCard)}
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={reducedMotion ? undefined : { once: true, amount: 0.35 }}
        transition={{ duration: 0.35, delay: reducedMotion ? 0 : index * 0.06 }}
      >
        <span className={cx(styles.experienceFutureIcon)} aria-hidden="true">
          <svg viewBox="0 0 32 32" focusable="false">
            <path d="M4 8h24v16H4zM8 5h16v3H8zM9 13h5v4H9zm9 0h5v4h-5zM12 21h8v3h-8z" />
          </svg>
        </span>
        <span className={cx(styles.experienceFutureLabel)}>
          {t('experience.nextLabel')}
        </span>
        <h3>{t('experience.nextTitle')}</h3>
        <ActionLink
          className={cx(styles.experienceFutureCta)}
          href="#contact"
          variant="inline"
        >
          {t('experience.nextCta')} <span aria-hidden="true">↗</span>
        </ActionLink>
      </motion.div>
    </article>
  )
}
