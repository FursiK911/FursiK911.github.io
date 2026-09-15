import { motion } from 'motion/react'
import {
  scrollRevealConfig,
  useScrollReveal,
} from '@/shared/lib/useScrollReveal'
import type { ProjectResultsProps } from '../../model/types/projectCase.types'
import styles from './styles/ProjectResults.module.css'
export function ProjectResults({ metrics }: ProjectResultsProps) {
  const scrollReveal = useScrollReveal()

  return (
    <dl className={styles.projectResultsResults}>
      {metrics.map((metric, index) => (
        <motion.div
          className={styles.projectResultsMetric}
          key={metric.label}
          {...scrollReveal}
          transition={{
            ...scrollReveal.transition,
            delay: index * scrollRevealConfig.staggerDelay,
          }}
        >
          <span aria-hidden="true" className={styles.projectResultsIndex}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <dd>{metric.value}</dd>
          <dt>{metric.label}</dt>
        </motion.div>
      ))}
    </dl>
  )
}
