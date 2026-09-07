import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { getProjectById } from '@/entities/project'
import type { ProjectMetric } from '@/entities/project'
import { ProjectMediaGallery } from '@/features/project-details'
import { ActionLink } from '@/shared/ui/ActionLink'
import { Footer, Header, HudScrollIndicator } from '@/widgets/site-layout'
import styles from './styles/ProjectPage.module.css'
import type { ProjectPageProps } from './types/ProjectPage.types'

export function ProjectPage({ projectId }: ProjectPageProps) {
  const { i18n, t } = useTranslation()
  const project = getProjectById(projectId)
  const title = project
    ? `${t(`projects.${project.titleKey}`)} — ${t('header.name')}`
    : t('projects.notFoundMetaTitle')
  const description = project
    ? t(`projects.${project.descriptionKey}`)
    : t('projects.notFoundDescription')

  useEffect(() => {
    document.title = title
    document.documentElement.lang = i18n.language.startsWith('ru') ? 'ru' : 'en'
    const url = new URL(window.location.href)
    url.search = ''
    url.hash = ''
    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute('content', description)
  }, [description, i18n.language, title])

  return (
    <div className={styles.shell}>
      <Header
        active=""
        onLanguage={() =>
          void i18n.changeLanguage(i18n.language.startsWith('ru') ? 'en' : 'ru')
        }
        typedRole={t('header.legalRole')}
        reducedMotion
      />
      <main id="page-content" className={styles.page}>
        {project ? (
          <article className={styles.project}>
            <a className={styles.backLink} href="/#projects">
              ← {t('projects.backToProjects')}
            </a>
            <div className={styles.hero}>
              <ProjectMediaGallery project={project} variant="detail" />
              <div className={styles.heroContent}>
                <p className={styles.kicker}>
                  {t('projects.details')} // {project.id.toUpperCase()}
                </p>
                <h1>{t(`projects.${project.titleKey}`)}</h1>
                <p>{t(`projects.${project.descriptionKey}`)}</p>
                <dl className={styles.facts}>
                  <div>
                    <dt>{t('projects.company')}</dt>
                    <dd>{project.company}</dd>
                  </div>
                  <div>
                    <dt>{t('projects.period')}</dt>
                    <dd>
                      {project.period.from} —{' '}
                      {project.period.to ?? t('experience.present')}
                    </dd>
                  </div>
                  <div>
                    <dt>{t('projects.role')}</dt>
                    <dd>
                      {project.roleKey ? t(`roles.${project.roleKey}`) : '—'}
                    </dd>
                  </div>
                  <div>
                    <dt>{t('projects.platform')}</dt>
                    <dd>{t(`platforms.${project.platformKey}`)}</dd>
                  </div>
                </dl>
                <div className={styles.actions}>
                  {project.actions?.map((action) => (
                    <ActionLink
                      href={action.href}
                      target="_blank"
                      rel="noreferrer"
                      key={action.href}
                      variant={action.type === 'live' ? 'primary' : 'secondary'}
                    >
                      {action.type === 'external'
                        ? `${action.label} ↗`
                        : `${t(`projects.actions.${action.type}`)} · ${action.label}`}
                    </ActionLink>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.details}>
              {project.metricsKey && (
                <section className={styles.metricsSection}>
                  <p className={styles.kicker}>
                    {t('projects.projectFootprint')}
                  </p>
                  <div className={styles.metrics}>
                    {(
                      t(`projects.${project.metricsKey}`, {
                        returnObjects: true,
                      }) as ProjectMetric[]
                    ).map((metric) => (
                      <div className={styles.metric} key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
              <section>
                <p className={styles.kicker}>{t('projects.overview')}</p>
                <h2>{t('projects.techStack')}</h2>
                <div className={styles.tags}>
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </section>
              <section>
                <p className={styles.kicker}>{t('projects.worked')}</p>
                <h2>{t('projects.contributions')}</h2>
                <ul>
                  {(
                    t(`projects.${project.pointsKey}`, {
                      returnObjects: true,
                    }) as string[]
                  ).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            </div>
          </article>
        ) : (
          <section className={styles.notFound}>
            <p className={styles.kicker}>404 // PROJECT</p>
            <h1>{t('projects.notFoundTitle')}</h1>
            <p>{t('projects.notFoundDescription')}</p>
            <ActionLink href="/#projects" variant="primary">
              {t('projects.backToProjects')}
            </ActionLink>
          </section>
        )}
      </main>
      <Footer />
      <HudScrollIndicator
        sectionLabel={
          project
            ? t(`projects.${project.titleKey}`)
            : t('projects.notFoundTitle')
        }
      />
    </div>
  )
}
