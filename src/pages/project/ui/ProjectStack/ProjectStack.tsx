import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { useScrollReveal } from '@/shared/lib/useScrollReveal'
import type { ProjectContentProps } from '../../model/types/projectCase.types'
import styles from './styles/ProjectStack.module.css'
export function ProjectStack({ project }: ProjectContentProps) {
  const { t } = useTranslation()
  const scrollReveal = useScrollReveal()
  return (
    <motion.div className={styles.projectStackStack} {...scrollReveal}>
      <p>{t('projectCase.stackNote')}</p>
      <ul>
        {project.tech.map((tech) => (
          <li key={tech}>
            <span aria-hidden="true">+</span>
            {tech}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
