import { useTranslation } from 'react-i18next'
import styles from './styles/PowerSource.module.css'

export function PowerSource() {
  const { t } = useTranslation()
  return (
    <div
      className={styles.source}
      aria-label={t('projectCircuitGame.powerSource')}
    >
      <span className={styles.icon} aria-hidden="true">
        ⚡
      </span>
      <span className={styles.label}>
        {t('projectCircuitGame.powerSource')}
      </span>
    </div>
  )
}
