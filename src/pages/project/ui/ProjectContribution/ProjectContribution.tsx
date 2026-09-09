import { useTranslation } from 'react-i18next'
import type { ProjectContentProps } from '../../model/types/projectCase.types'
import styles from './styles/ProjectContribution.module.css'
export function ProjectContribution({ project }: ProjectContentProps) {
  const { t } = useTranslation()
  const points = t(`projects.${project.pointsKey}`, {
    returnObjects: true,
  }) as string[]
  return (
    <div className={styles.projectContributionContent}>
      <p>{t('projectCase.contributionNote')}</p>
      <ol>
        {points.map((point, index) => (
          <li key={point}>
            <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <p>{point}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
