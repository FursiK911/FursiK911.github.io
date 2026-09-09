import { useTranslation } from 'react-i18next'
import type { ProjectContentProps } from '../../model/types/projectCase.types'
import styles from './styles/ProjectStack.module.css'
export function ProjectStack({ project }: ProjectContentProps) {
  const { t } = useTranslation()
  return (
    <div className={styles.projectStackStack}>
      <p>{t('projectCase.stackNote')}</p>
      <ul>
        {project.tech.map((tech) => (
          <li key={tech}>
            <span aria-hidden="true">+</span>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  )
}
