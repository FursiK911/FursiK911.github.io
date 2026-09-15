import { cx, styles } from '@/shared/styles'
import { motion } from 'motion/react'
import type { CSSProperties } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { ExperienceTimelineItemProps } from './types/ExperienceTimelineItem.types'
import { getCompanyInitials } from './utils/getCompanyInitials'
import { useScrollReveal } from '@/shared/lib/useScrollReveal'
import itemStyles from './styles/ExperienceTimelineItem.module.css'

export function ExperienceTimelineItem({
  entry,
  index,
  axisPoint,
  mobileOrder,
  mobileSide,
  onSelect,
}: ExperienceTimelineItemProps) {
  const { t } = useTranslation()
  const [logoFailed, setLogoFailed] = useState(false)
  const period = `${entry.period.from} — ${entry.period.to ?? t('experience.present')}`
  const scrollReveal = useScrollReveal({ amount: 0.35, delay: index * 0.06 })

  return (
    <article
      className={cx(styles.experienceTimelineItem)}
      data-current={entry.current ? 'true' : undefined}
      data-mobile-side={mobileSide}
      style={
        {
          '--timeline-x': `${axisPoint.x}px`,
          '--timeline-y': `${axisPoint.y}px`,
          '--mobile-timeline-order': mobileOrder,
        } as CSSProperties
      }
    >
      <span className={cx(styles.experienceMilestone)} aria-hidden="true" />
      <motion.div
        className={cx(styles.experienceTimelineCard)}
        {...scrollReveal}
      >
        <div
          className={cx(styles.experienceLogo)}
          aria-hidden={entry.logo ? undefined : true}
        >
          {entry.logo && !logoFailed ? (
            <img
              src={entry.logo}
              alt={`${entry.company} logo`}
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <span>{getCompanyInitials(entry.company)}</span>
          )}
        </div>
        <time dateTime={entry.period.to ?? entry.period.from}>{period}</time>
        <span className={cx(styles.experienceCompany)}>{entry.company}</span>
        <h3>{t(entry.timelineRoleKey)}</h3>
        <button
          className={itemStyles.trigger}
          type="button"
          aria-label={t('experience.openDetails', {
            company: entry.company,
            period,
          })}
          onClick={onSelect}
        />
      </motion.div>
    </article>
  )
}
