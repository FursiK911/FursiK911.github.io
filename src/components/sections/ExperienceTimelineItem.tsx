import { motion } from 'motion/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { WorkExperience } from '../../data/workExperience'

export interface ExperienceTimelineItemProps {
  entry: WorkExperience
  index: number
  reducedMotion: boolean
}

function initials(company: string) {
  return company
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
}

export function ExperienceTimelineItem({
  entry,
  index,
  reducedMotion,
}: ExperienceTimelineItemProps) {
  const { t } = useTranslation()
  const [logoFailed, setLogoFailed] = useState(false)
  const period = `${entry.period.from} — ${entry.period.to ?? t('experience.present')}`

  return (
    <motion.article
      className="experience-timeline-item"
      data-current={entry.current ? 'true' : undefined}
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reducedMotion ? undefined : { once: true, amount: 0.35 }}
      transition={{ duration: 0.35, delay: reducedMotion ? 0 : index * 0.06 }}
    >
      <span className="experience-milestone" aria-hidden="true" />
      <div className="experience-timeline-card">
        <div
          className="experience-logo"
          aria-hidden={entry.logo ? undefined : true}
        >
          {entry.logo && !logoFailed ? (
            <img
              src={entry.logo}
              alt={`${entry.company} logo`}
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <span>{initials(entry.company)}</span>
          )}
        </div>
        <time dateTime={entry.period.to ?? entry.period.from}>{period}</time>
        <span className="experience-company">{entry.company}</span>
        <h3>{t(entry.roleKey)}</h3>
        <p>{t(entry.summaryKey)}</p>
        <div className="tag-row experience-tags">
          {entry.technologies.slice(0, 6).map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
