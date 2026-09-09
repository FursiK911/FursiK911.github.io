import { useTranslation } from 'react-i18next'
import styles from './styles/ProjectCore.module.css'
import type { ProjectCoreProps } from './types/ProjectCore.types'

export function ProjectCore({ powered }: ProjectCoreProps) {
  const { t } = useTranslation()
  return (
    <div
      className={`${styles.core} ${powered ? styles.powered : ''}`}
      aria-label={t('projectCircuitGame.projectCore')}
    >
      <span className={styles.diamond} aria-hidden="true">
        ◇
      </span>
      <span className={styles.label}>
        {t('projectCircuitGame.projectCore')}
      </span>
    </div>
  )
}
