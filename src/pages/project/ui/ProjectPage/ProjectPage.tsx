import { useTranslation } from 'react-i18next'
import { IconArrowUpLeft } from '@tabler/icons-react'
import { getProjectById } from '@/entities/project'
import type { ProjectMetric } from '@/entities/project'
import { ActionLink } from '@/shared/ui/ActionLink'
import { useScrollReveal } from '@/shared/lib/useScrollReveal'
import { motion } from 'motion/react'
import { usePageMetadata } from '@/shared/lib/usePageMetadata/usePageMetadata'
import { Footer, Header, HudScrollIndicator } from '@/widgets/site-layout'
import { partitionMetrics } from '../../model/utils/partitionMetrics'
import { canReturnWithinSite } from '../../model/utils/canReturnWithinSite'
import { CaseAtmosphere } from '../CaseAtmosphere/CaseAtmosphere'
import { CaseNavigation } from '../CaseNavigation/CaseNavigation'
import { CaseSection } from '../CaseSection/CaseSection'
import { ProjectIntro } from '../ProjectIntro/ProjectIntro'
import { ProjectGallery } from '../ProjectGallery/ProjectGallery'
import { ProjectResults } from '../ProjectResults/ProjectResults'
import { ProjectContribution } from '../ProjectContribution/ProjectContribution'
import { ProjectStack } from '../ProjectStack/ProjectStack'
import styles from './styles/ProjectPage.module.css'
import type { ProjectPageProps } from './types/ProjectPage.types'

export function ProjectPage({ projectId }: ProjectPageProps) {
  const { i18n, t } = useTranslation()
  const scrollReveal = useScrollReveal()
  const project = getProjectById(projectId)
  const title = project
    ? `${t(`projects.${project.titleKey}`)} — ${t('header.name')}`
    : t('projects.notFoundMetaTitle')
  const description = project
    ? t(`projects.${project.descriptionKey}`)
    : t('projects.notFoundDescription')
  const metrics = partitionMetrics(
    project?.metricsKey,
    project?.metricsKey
      ? (t(`projects.${project.metricsKey}`, {
          returnObjects: true,
        }) as ProjectMetric[])
      : [],
  )
  const hasMedia = Boolean(project?.media?.length)
  const hasPoints = project
    ? (t(`projects.${project.pointsKey}`, { returnObjects: true }) as string[])
        .length > 0
    : false
  const sections = [
    { id: 'overview', label: t('projectCase.overview') },
    ...(hasMedia ? [{ id: 'media', label: t('projectCase.media') }] : []),
    ...(metrics.achievements.length
      ? [{ id: 'achievements', label: t('projectCase.achievements') }]
      : []),
    ...(hasPoints
      ? [{ id: 'contribution', label: t('projectCase.contribution') }]
      : []),
    ...(project?.tech.length
      ? [{ id: 'stack', label: t('projectCase.stack') }]
      : []),
  ]
  usePageMetadata({ title, description, language: i18n.language })
  return (
    <div className={styles.projectPageShell}>
      <CaseAtmosphere />
      <Header
        active=""
        onLanguage={() =>
          void i18n.changeLanguage(i18n.language.startsWith('ru') ? 'en' : 'ru')
        }
        typedRole={t('header.legalRole')}
        reducedMotion
      />
      <main id="page-content" className={styles.projectPagePage}>
        {project ? (
          <article>
            <motion.a
              className={styles.projectPageBackLink}
              href="/#projects"
              {...scrollReveal}
              onClick={(event) => {
                if (
                  canReturnWithinSite(
                    document.referrer,
                    window.location.origin,
                    window.history.length,
                  )
                ) {
                  event.preventDefault()
                  window.history.back()
                }
              }}
            >
              <IconArrowUpLeft aria-hidden="true" />
              {t('projectCase.back')}
            </motion.a>
            <ProjectIntro project={project} facts={metrics.facts} />
            <CaseNavigation sections={sections} />
            {hasMedia ? (
              <CaseSection
                id="media"
                number="01"
                title={t('projectCase.media')}
              >
                <ProjectGallery key={project.id} project={project} />
              </CaseSection>
            ) : (
              <div className={styles.projectPageCover}>
                <ProjectGallery key={project.id} project={project} />
              </div>
            )}
            {metrics.achievements.length > 0 && (
              <CaseSection
                id="achievements"
                number={String(
                  sections.findIndex(
                    (section) => section.id === 'achievements',
                  ),
                ).padStart(2, '0')}
                title={t('projectCase.achievements')}
              >
                <ProjectResults metrics={metrics.achievements} />
              </CaseSection>
            )}
            {hasPoints && (
              <CaseSection
                id="contribution"
                number={String(
                  sections.findIndex(
                    (section) => section.id === 'contribution',
                  ),
                ).padStart(2, '0')}
                title={t('projects.contributions')}
              >
                <ProjectContribution project={project} />
              </CaseSection>
            )}
            {project.tech.length > 0 && (
              <CaseSection
                id="stack"
                number={String(
                  sections.findIndex((section) => section.id === 'stack'),
                ).padStart(2, '0')}
                title={t('projects.techStack')}
              >
                <ProjectStack project={project} />
              </CaseSection>
            )}
          </article>
        ) : (
          <motion.section
            className={styles.projectPageNotFound}
            {...scrollReveal}
          >
            <p>404 // PROJECT</p>
            <h1>{t('projects.notFoundTitle')}</h1>
            <p>{t('projects.notFoundDescription')}</p>
            <ActionLink href="/#projects" variant="primary">
              {t('projects.backToProjects')}
            </ActionLink>
          </motion.section>
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
