import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { useScrollReveal } from '@/shared/lib/useScrollReveal'
import type { ProjectContentProps } from '../../model/types/projectCase.types'
import styles from './styles/ProjectContribution.module.css'
export function ProjectContribution({ project }: ProjectContentProps) {
  const { t } = useTranslation()
  const points = t(`projects.${project.pointsKey}`, {
    returnObjects: true,
  }) as string[]
  const scrollReveal = useScrollReveal()
  return (
    <motion.div className={styles.projectContributionContent} {...scrollReveal}>
      <p>{t('projectCase.contributionNote')}</p>
      <ol>
        {points.map((point, index) => (
          <li key={point}>
            <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <p>{point}</p>
          </li>
        ))}
      </ol>
    </motion.div>
  )
}
