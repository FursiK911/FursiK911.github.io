import type { ProjectResultsProps } from '../../model/types/projectCase.types'
import styles from './styles/ProjectResults.module.css'
export function ProjectResults({ metrics }: ProjectResultsProps) {
  return (
    <dl className={styles.projectResultsResults}>
      {metrics.map((metric, index) => (
        <div className={styles.projectResultsMetric} key={metric.label}>
          <span aria-hidden="true" className={styles.projectResultsIndex}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <dd>{metric.value}</dd>
          <dt>{metric.label}</dt>
        </div>
      ))}
    </dl>
  )
}
