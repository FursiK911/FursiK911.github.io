import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { WorkExperience } from '../../data/workExperience'
import { ExperienceTimelineItem } from './ExperienceTimelineItem'
import { FutureExperienceItem } from './FutureExperienceItem'

export interface ExperienceTimelineProps {
  entries: WorkExperience[]
}

export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion() ?? false

  return (
    <div
      className="experience-timeline"
      aria-label={t('experience.timelineLabel')}
    >
      <motion.span
        className="experience-timeline-line"
        aria-hidden="true"
        initial={reducedMotion ? false : { scaleX: 0 }}
        whileInView={reducedMotion ? undefined : { scaleX: 1 }}
        viewport={reducedMotion ? undefined : { once: true }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      />
      <div className="experience-timeline-items">
        {entries.map((entry, index) => (
          <ExperienceTimelineItem
            entry={entry}
            index={index}
            reducedMotion={reducedMotion}
            key={entry.id}
          />
        ))}
        <FutureExperienceItem
          index={entries.length}
          reducedMotion={reducedMotion}
        />
      </div>
    </div>
  )
}
