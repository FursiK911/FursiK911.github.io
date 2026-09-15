import { cx, styles } from '@/shared/styles'
import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { workExperience, type WorkExperience } from '@/entities/work-experience'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { ExperienceDetailsModal } from '../ExperienceDetailsModal/ExperienceDetailsModal'
import { ExperienceTimeline } from '../ExperienceTimeline/ExperienceTimeline'
import '../styles/Experience.css'

export function Experience() {
  const { t } = useTranslation()
  const [selectedEntry, setSelectedEntry] = useState<WorkExperience | null>(
    null,
  )
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
        <h2>{t('experience.title')}</h2>
        <p>{t('experience.intro')}</p>
      </div>
      <ExperienceTimeline
        entries={workExperience}
        onEntrySelect={setSelectedEntry}
      />
      <ExperienceDetailsModal
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
      />
    </motion.section>
  )
}
