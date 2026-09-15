import { motion } from 'motion/react'
import { useScrollReveal } from '@/shared/lib/useScrollReveal'
import type { CaseSectionProps } from '../../model/types/projectCase.types'
import styles from './styles/CaseSection.module.css'
export function CaseSection({ id, number, title, children }: CaseSectionProps) {
  const scrollReveal = useScrollReveal({ amount: 0.08 })
  return (
    <motion.section
      id={id}
      className={styles.caseSectionSection}
      {...scrollReveal}
    >
      <div className={styles.caseSectionHeading}>
        <span aria-hidden="true">{number} /</span>
        <h2>{title}</h2>
        <i aria-hidden="true" />
      </div>
      {children}
    </motion.section>
  )
}
