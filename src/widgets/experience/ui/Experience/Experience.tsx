import { cx, styles } from '@/shared/styles'
import { motion } from 'motion/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { workExperience, type WorkExperience } from '@/entities/work-experience'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { useScrollReveal } from '@/shared/lib/useScrollReveal'
import { ExperienceDetailsModal } from '../ExperienceDetailsModal/ExperienceDetailsModal'
import { ExperienceTimeline } from '../ExperienceTimeline/ExperienceTimeline'
import '../styles/Experience.css'

export function Experience() {
  const { t } = useTranslation()
  const [selectedEntry, setSelectedEntry] = useState<WorkExperience | null>(
    null,
  )
  const scrollReveal = useScrollReveal()

  return (
    <motion.section
      className={cx(styles.sectionShell, styles.experienceSection)}
      id="experience"
      {...scrollReveal}
    >
      <div className={cx(styles.experienceHeadingReveal)}>
        <SectionHeading index="03" title={t('sections.experience')} />
      </div>
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
