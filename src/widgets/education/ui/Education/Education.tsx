import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { useScrollReveal } from '@/shared/lib/useScrollReveal'
import { EducationTimeline } from '../EducationTimeline/EducationTimeline'
import '../styles/Education.css'

export function Education() {
  const { t } = useTranslation()
  const scrollReveal = useScrollReveal()

  return (
    <motion.section
      className={cx(styles.sectionShell, styles.educationSection)}
      id="education"
      {...scrollReveal}
    >
      <SectionHeading index="05" title={t('sections.education')} />
      <div className={cx(styles.educationIntro)}>
        <h2>{t('education.title')}</h2>
        <p>{t('education.intro')}</p>
      </div>
      <EducationTimeline />
    </motion.section>
  )
}
