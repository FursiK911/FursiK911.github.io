import { cx, styles } from '@/shared/styles'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { projects } from '@/entities/project'
import type { ProjectCardTag, ProjectDirection } from '@/entities/project'
import { ProjectCard } from '@/entities/project'
import {
  ProjectFilters,
  projectDirections,
  projectTechnologyOrder,
} from '@/features/project-filtering'
import { ProjectCircuitGame } from '@/features/project-circuit-game'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { projectCircuitGameEnabled } from '../../model/config/projects.config'
import cardStyles from './styles/Projects.module.css'
import '../styles/Projects.module.css'

export function Projects() {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const [direction, setDirection] = useState<'all' | ProjectDirection>('all')
  const [technology, setTechnology] = useState<ProjectCardTag | null>(null)
  const directionCounts = useMemo(
    () =>
      projectDirections.reduce(
        (counts, item) => ({
          ...counts,
          [item]:
            item === 'all'
              ? projects.length
              : projects.filter((project) => project.card.direction === item)
                  .length,
        }),
        {} as Record<'all' | ProjectDirection, number>,
      ),
    [],
  )
  const projectsInDirection = useMemo(
    () =>
      direction === 'all'
        ? projects
        : projects.filter((project) => project.card.direction === direction),
    [direction],
  )
  const technologies = useMemo(
    () =>
      projectTechnologyOrder.filter((item) =>
        projectsInDirection.some((project) => project.card.tags.includes(item)),
      ),
    [projectsInDirection],
  )
  const visible = useMemo(
    () =>
      technology === null
        ? projectsInDirection
        : projectsInDirection.filter((project) =>
            project.card.tags.includes(technology),
          ),
    [projectsInDirection, technology],
  )
  const changeDirection = (nextDirection: 'all' | ProjectDirection) => {
    setDirection(nextDirection)
    setTechnology(null)
  }
  return (
    <section
      className={cx(styles.sectionShell, styles.projectsSection)}
      id="projects"
    >
      <SectionHeading index="02" title={t('sections.projects')} />
      <div className={cx(styles.projectsIntro)}>
        <h2>{t('projects.title')}</h2>
        {projectCircuitGameEnabled ? (
          <ProjectCircuitGame />
        ) : (
          <p>{t('projects.intro')}</p>
        )}
      </div>
      <ProjectFilters
        direction={direction}
        directionCounts={directionCounts}
        technologies={technologies}
        technology={technology}
        onDirectionChange={changeDirection}
        onTechnologyChange={setTechnology}
      />
      {visible.length ? (
        <motion.div className={cardStyles.grid} layout={!reducedMotion}>
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className={cardStyles.empty} role="status">
          <span>{t('projects.noMatchingProjects')}</span>
          <button
            className={cardStyles.reset}
            type="button"
            onClick={() => changeDirection('all')}
          >
            {t('projects.resetFilters')}
          </button>
        </div>
      )}
    </section>
  )
}
