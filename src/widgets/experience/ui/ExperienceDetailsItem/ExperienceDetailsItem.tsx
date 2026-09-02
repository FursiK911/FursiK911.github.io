import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import type { ExperienceDetailsItemProps } from './types/ExperienceDetailsItem.types'
import { ExperiencePhase } from '../ExperiencePhase/ExperiencePhase'

export function ExperienceDetailsItem({ entry }: ExperienceDetailsItemProps) {
  const { t } = useTranslation()
  const period = `${entry.period.from} — ${entry.period.to ?? t('experience.present')}`
  return (
    <article className={cx(styles.experienceDetailsItem)}>
      <div className={cx(styles.experienceDetailsHeader)}>
        <div
          className={cx(styles.experienceLogo, styles.experienceDetailsLogo)}
          aria-hidden="true"
        >
          <span>{entry.company.replace(/\s+/g, '').slice(0, 2)}</span>
        </div>
        <div>
          <span className={cx(styles.experienceCompany)}>{entry.company}</span>
          <h3>{t(entry.roleKey)}</h3>
          <time dateTime={entry.period.to ?? entry.period.from}>{period}</time>
        </div>
      </div>
      <div className={cx(styles.experiencePhases)}>
        {entry.phases.map((phase) => (
          <ExperiencePhase
            phase={phase}
            key={`${entry.id}-${phase.period.from}`}
          />
        ))}
      </div>
    </article>
  )
}
