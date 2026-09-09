import { motion, useReducedMotion } from 'motion/react'
import type { CaseSectionProps } from '../../model/types/projectCase.types'
import styles from './styles/CaseSection.module.css'
export function CaseSection({ id, number, title, children }: CaseSectionProps) {
  const reduced = useReducedMotion()
  return (
    <motion.section
      id={id}
      className={styles.caseSectionSection}
      initial={reduced ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55 }}
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
