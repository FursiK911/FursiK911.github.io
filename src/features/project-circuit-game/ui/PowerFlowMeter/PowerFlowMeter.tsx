import { useTranslation } from 'react-i18next'
import styles from './styles/PowerFlowMeter.module.css'
import type { PowerFlowMeterProps } from './types/PowerFlowMeter.types'

export function PowerFlowMeter({ value }: PowerFlowMeterProps) {
  const { t } = useTranslation()
  const blocks = Math.round(value / 10)
  return (
    <div className={styles.meter}>
      <span className={styles.label}>{t('projectCircuitGame.powerFlow')}</span>
      <span className={styles.bar} aria-hidden="true">
        {'█'.repeat(blocks)}
        {'░'.repeat(10 - blocks)}
      </span>
      <span
        className={styles.value}
        role="progressbar"
        aria-label={t('projectCircuitGame.powerFlow')}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
      >
        {value} / 100
      </span>
    </div>
  )
}
