import { cx, styles } from '@/shared/styles'
import { AnimatePresence, motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { ExperienceDetailsItem } from '../ExperienceDetailsItem/ExperienceDetailsItem'
import type { ExperienceDetailsProps } from './types/ExperienceDetails.types'

export function ExperienceDetails({
  entries,
  expanded,
  reducedMotion,
}: ExperienceDetailsProps) {
  const { t } = useTranslation()
  const orderedEntries = [...entries].reverse()

  return (
    <AnimatePresence initial={false}>
      {expanded && (
        <motion.div
          className={cx(styles.experienceDetails)}
          id="work-experience-details"
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: reducedMotion ? 0.12 : 0.28 }}
        >
          <div className={cx(styles.experienceDetailsHeading)}>
            <span className={cx(styles.experienceDetailLabel)}>
              {t('experience.detailsLabel')}
            </span>
            <span className={cx(styles.headingRule)} />
          </div>
          <div className={cx(styles.experienceDetailsList)}>
            {orderedEntries.map((entry) => (
              <ExperienceDetailsItem entry={entry} key={entry.id} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
