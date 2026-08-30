import { AnimatePresence, motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { WorkExperience } from '../../data/workExperience'
import { ExperienceDetailsItem } from './ExperienceDetailsItem'

export interface ExperienceDetailsProps {
  entries: WorkExperience[]
  expanded: boolean
  reducedMotion: boolean
}

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
          className="experience-details"
          id="work-experience-details"
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: reducedMotion ? 0.12 : 0.28 }}
        >
          <div className="experience-details-heading">
            <span className="experience-detail-label">
              {t('experience.detailsLabel')}
            </span>
            <span className="heading-rule" />
          </div>
          <div className="experience-details-list">
            {orderedEntries.map((entry) => (
              <ExperienceDetailsItem entry={entry} key={entry.id} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
