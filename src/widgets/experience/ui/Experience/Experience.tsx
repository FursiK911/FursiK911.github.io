import { cx, styles } from '@/shared/styles'
import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { workExperience } from '@/entities/work-experience'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { ExperienceDetails } from '../ExperienceDetails/ExperienceDetails'
import { ExperienceTimeline } from '../ExperienceTimeline/ExperienceTimeline'
import '../styles/Experience.module.css'

export function Experience() {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(false)
  const reducedMotion = useReducedMotion() ?? false

  return (
    <motion.section
      className={cx(styles.sectionShell, styles.experienceSection)}
      id="experience"
      initial={reducedMotion ? false : { opacity: 0 }}
      whileInView={reducedMotion ? undefined : { opacity: 1 }}
      viewport={reducedMotion ? undefined : { once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className={cx(styles.experienceHeadingReveal)}
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={reducedMotion ? undefined : { once: true }}
        transition={{ duration: 0.3 }}
      >
        <SectionHeading index="03" title={t('sections.experience')} />
      </motion.div>
      <div className={cx(styles.experienceIntro)}>
        <h2>{t('sections.experience')}</h2>
        <p>{t('experience.intro')}</p>
      </div>
      <ExperienceTimeline entries={workExperience} />
      <button
        className={cx(styles.experienceDetailsToggle)}
        type="button"
        aria-expanded={expanded}
        aria-controls="work-experience-details"
        onClick={() => setExpanded((value) => !value)}
      >
        {expanded ? t('experience.lessDetails') : t('experience.moreDetails')}
        <span aria-hidden="true">{expanded ? '↑' : '↓'}</span>
      </button>
      <ExperienceDetails
        entries={workExperience}
        expanded={expanded}
        reducedMotion={reducedMotion}
      />
    </motion.section>
  )
}
