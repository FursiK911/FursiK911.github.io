import { useTranslation } from 'react-i18next'
import { motion, useReducedMotion } from 'motion/react'
import { useScrollReveal } from '@/shared/lib/useScrollReveal'
import { useCaseNavigation } from '../../model/useCaseNavigation/useCaseNavigation'
import type { CaseNavigationProps } from '../../model/types/projectCase.types'
import styles from './styles/CaseNavigation.module.css'
export function CaseNavigation({ sections }: CaseNavigationProps) {
  const { t } = useTranslation()
  const active = useCaseNavigation(sections)
  const reduced = useReducedMotion()
  const scrollReveal = useScrollReveal()
  return (
    <motion.nav
      className={styles.caseNavigationNavigation}
      aria-label={t('projectCase.navigation')}
      {...scrollReveal}
    >
      {sections.map((section, index) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-current={active === section.id ? 'location' : undefined}
          onClick={(event) => {
            event.preventDefault()
            document.getElementById(section.id)?.scrollIntoView({
              behavior: reduced ? 'instant' : 'smooth',
              block: 'start',
            })
          }}
        >
          <span aria-hidden="true">{String(index).padStart(2, '0')}</span>
          {section.label}
        </a>
      ))}
    </motion.nav>
  )
}
