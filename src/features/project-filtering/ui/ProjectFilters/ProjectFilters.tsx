import { useTranslation } from 'react-i18next'
import { projectDirections } from '../../model/config/project-filtering.config'
import styles from './styles/ProjectFilters.module.css'
import type { ProjectFiltersProps } from './types/ProjectFilters.types'

export function ProjectFilters({
  direction,
  directionCounts,
  technologies,
  technology,
  onDirectionChange,
  onTechnologyChange,
}: ProjectFiltersProps) {
  const { t } = useTranslation()
  return (
    <div className={styles.filters}>
      <div
        className={styles.group}
        role="group"
        aria-label={t('projects.directions')}
      >
        <p className={styles.label}>{t('projects.directions')}</p>
        {projectDirections.map((item) => (
          <button
            type="button"
            aria-pressed={direction === item}
            className={
              direction === item
                ? `${styles.button} ${styles.selected}`
                : styles.button
            }
            onClick={() => onDirectionChange(item)}
            key={item}
          >
            {t(
              item === 'all'
                ? 'projects.all'
                : `projects.${item === 'games-apps' ? 'gamesApps' : item === 'vr-training' ? 'vrTraining' : 'webPlatforms'}`,
            )}
            <span className={styles.count}>{directionCounts[item]}</span>
          </button>
        ))}
      </div>
      <div
        className={styles.group}
        role="group"
        aria-label={t('projects.technologyFilters')}
      >
        <p className={styles.label}>{t('projects.technologyFilters')}</p>
        <button
          type="button"
          aria-pressed={technology === null}
          className={
            technology === null
              ? `${styles.button} ${styles.selected}`
              : styles.button
          }
          onClick={() => onTechnologyChange(null)}
        >
          {t('projects.allTechnologies')}
        </button>
        {technologies.map((item) => (
          <button
            type="button"
            aria-pressed={technology === item}
            className={
              technology === item
                ? `${styles.button} ${styles.selected}`
                : styles.button
            }
            onClick={() => onTechnologyChange(item)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}
