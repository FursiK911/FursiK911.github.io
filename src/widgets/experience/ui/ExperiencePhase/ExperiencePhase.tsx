import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import { ActionLink } from '@/shared/ui/ActionLink'
import type { ExperiencePhaseProps } from './types/ExperiencePhase.types'

export function ExperiencePhase({ phase }: ExperiencePhaseProps) {
  const { t } = useTranslation()
  const achievements = t(phase.achievementsKey, {
    returnObjects: true,
  }) as unknown as string[]
  return (
    <section className={cx(styles.experiencePhase)}>
      <div className={cx(styles.experiencePhaseHeading)}>
        <div>
          <h4>{t(phase.roleKey)}</h4>
          <time dateTime={phase.period.to ?? phase.period.from}>
            {phase.period.from} — {phase.period.to ?? t('experience.present')}
          </time>
        </div>
        <p>{t(phase.summaryKey)}</p>
      </div>
      <div className={cx(styles.tagRow, styles.experienceTags)}>
        {phase.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
      <div className={cx(styles.experienceDetailBlock)}>
        <span className={cx(styles.experienceDetailLabel)}>
          {t('experience.achievementsLabel')}
        </span>
        <ul>
          {achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </div>
      <div className={cx(styles.experienceDetailBlock)}>
        <span className={cx(styles.experienceDetailLabel)}>
          {t('experience.projectsLabel')}
        </span>
        <div className={cx(styles.experienceProjectList)}>
          {phase.projects.map((project) => {
            const points = t(project.pointsKey, {
              returnObjects: true,
            }) as unknown as string[]
            return (
              <section
                className={cx(styles.experienceProject)}
                key={project.id}
              >
                <div className={cx(styles.experienceProjectHeading)}>
                  <h5>{t(project.titleKey)}</h5>
                  {project.url ? (
                    <ActionLink
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      variant="inline"
                    >
                      {project.linkLabel ?? t('projects.view')}{' '}
                      <span aria-hidden="true">↗</span>
                    </ActionLink>
                  ) : (
                    <span className={cx(styles.experienceProjectStatus)}>
                      {t('experience.privateProject')}
                    </span>
                  )}
                </div>
                <p>{t(project.descriptionKey)}</p>
                <ul>
                  {points.slice(0, 4).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      </div>
    </section>
  )
}
