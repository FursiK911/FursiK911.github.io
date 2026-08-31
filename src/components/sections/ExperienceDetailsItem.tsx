import { useTranslation } from 'react-i18next'
import type {
  ExperienceRolePhase,
  WorkExperience,
} from '../../data/workExperience'
import { ActionLink } from '../ui/ActionLink'

export interface ExperienceDetailsItemProps {
  entry: WorkExperience
}

function Phase({ phase }: { phase: ExperienceRolePhase }) {
  const { t } = useTranslation()
  const achievements = t(phase.achievementsKey, {
    returnObjects: true,
  }) as unknown as string[]
  return (
    <section className="experience-phase">
      <div className="experience-phase-heading">
        <div>
          <h4>{t(phase.roleKey)}</h4>
          <time dateTime={phase.period.to ?? phase.period.from}>
            {phase.period.from} — {phase.period.to ?? t('experience.present')}
          </time>
        </div>
        <p>{t(phase.summaryKey)}</p>
      </div>
      <div className="tag-row experience-tags">
        {phase.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
      <div className="experience-detail-block">
        <span className="experience-detail-label">
          {t('experience.achievementsLabel')}
        </span>
        <ul>
          {achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </div>
      <div className="experience-detail-block">
        <span className="experience-detail-label">
          {t('experience.projectsLabel')}
        </span>
        <div className="experience-project-list">
          {phase.projects.map((project) => {
            const points = t(project.pointsKey, {
              returnObjects: true,
            }) as unknown as string[]
            return (
              <section className="experience-project" key={project.id}>
                <div className="experience-project-heading">
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
                    <span className="experience-project-status">
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

export function ExperienceDetailsItem({ entry }: ExperienceDetailsItemProps) {
  const { t } = useTranslation()
  const period = `${entry.period.from} — ${entry.period.to ?? t('experience.present')}`
  return (
    <article className="experience-details-item">
      <div className="experience-details-header">
        <div
          className="experience-logo experience-details-logo"
          aria-hidden="true"
        >
          <span>{entry.company.replace(/\s+/g, '').slice(0, 2)}</span>
        </div>
        <div>
          <span className="experience-company">{entry.company}</span>
          <h3>{t(entry.roleKey)}</h3>
          <time dateTime={entry.period.to ?? entry.period.from}>{period}</time>
        </div>
      </div>
      <div className="experience-phases">
        {entry.phases.map((phase) => (
          <Phase phase={phase} key={`${entry.id}-${phase.period.from}`} />
        ))}
      </div>
    </article>
  )
}
