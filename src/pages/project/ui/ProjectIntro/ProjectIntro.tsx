import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { ActionLink } from '@/shared/ui/ActionLink'
import { useScrollReveal } from '@/shared/lib/useScrollReveal'
import { UnavailableAction } from '@/shared/ui/UnavailableAction'
import type { ProjectIntroProps } from '../../model/types/projectCase.types'
import styles from './styles/ProjectIntro.module.css'
export function ProjectIntro({ project, facts }: ProjectIntroProps) {
  const { t } = useTranslation()
  const scrollReveal = useScrollReveal()
  return (
    <motion.header
      className={styles.projectIntroIntro}
      id="overview"
      {...scrollReveal}
    >
      <div className={styles.projectIntroEyebrow}>
        <span>{t('projectCase.caseLabel')}</span>
        <span>{project.id}</span>
      </div>
      <h1>{t(`projects.${project.titleKey}`)}</h1>
      <p className={styles.projectIntroDescription}>
        {t(`projects.${project.descriptionKey}`)}
      </p>
      <dl className={styles.projectIntroFacts}>
        <div>
          <dt>{t('projects.company')}</dt>
          <dd>{project.company}</dd>
        </div>
        <div>
          <dt>{t('projects.role')}</dt>
          <dd>{project.roleKey ? t(`roles.${project.roleKey}`) : '—'}</dd>
        </div>
        <div>
          <dt>{t('projects.period')}</dt>
          <dd>
            {project.period.to === project.period.from
              ? project.period.from
              : `${project.period.from} — ${project.period.to ?? t('experience.present')}`}
          </dd>
        </div>
        <div>
          <dt>{t('projects.platform')}</dt>
          <dd>{t(`platforms.${project.platformKey}`)}</dd>
        </div>
      </dl>
      {facts.length > 0 && (
        <details className={styles.projectIntroAdditional}>
          <summary>
            {t('projectCase.details')} <span aria-hidden="true">+</span>
          </summary>
          <dl>
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </details>
      )}
      <div className={styles.projectIntroActions}>
        {project.actions?.map((action) => {
          const actionLabel = action.labelKey
            ? t(action.labelKey)
            : action.label
          const label =
            action.type === 'external'
              ? `${actionLabel} ↗`
              : `${t(`projects.actions.${action.type}`)} · ${actionLabel}`
          return action.unavailableReasonKey ? (
            <UnavailableAction
              key={action.href}
              reason={t(action.unavailableReasonKey)}
              variant={action.type === 'live' ? 'primary' : 'secondary'}
            >
              {label}
            </UnavailableAction>
          ) : (
            <ActionLink
              key={action.href}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              variant={action.type === 'live' ? 'primary' : 'secondary'}
            >
              {label}
            </ActionLink>
          )
        })}
      </div>
    </motion.header>
  )
}
