import { cx, styles as sharedStyles } from '@/shared/styles'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import {
  scrollRevealConfig,
  useScrollReveal,
} from '@/shared/lib/useScrollReveal'
import { skillGroups } from './data/skill-groups.data'
import styles from './styles/Skills.module.css'

export function Skills() {
  const { t } = useTranslation()
  const [active, setActive] = useState<string | null>(null)
  const scrollReveal = useScrollReveal()
  return (
    <motion.section
      className={cx(sharedStyles.sectionShell, sharedStyles.skillsSection)}
      id="stack"
      {...scrollReveal}
    >
      <SectionHeading index="04" title={t('sections.stack')} />
      <div className={styles.skillsGrid}>
        {skillGroups.map((group, index) => (
          <motion.div
            className={styles.skillGroup}
            key={group.titleKey}
            {...scrollReveal}
            transition={{
              ...scrollReveal.transition,
              delay: index * scrollRevealConfig.staggerDelay,
            }}
          >
            <h3>{t(`skills.groups.${group.titleKey}`)}</h3>
            <div className={styles.skillList}>
              {group.skills.map((skill) => (
                <button
                  type="button"
                  className={active === skill ? styles.skillActive : undefined}
                  onMouseEnter={() => setActive(skill)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(skill)}
                  onBlur={() => setActive(null)}
                  key={skill}
                >
                  {skill}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
