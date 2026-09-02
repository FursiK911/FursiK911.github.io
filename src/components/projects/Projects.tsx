import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { projects } from '../../data/portfolio'
import type { Project, ProjectCategory } from '../../types/portfolio'
import { ProjectCard } from './ProjectCard'
import { ProjectDetails } from './ProjectDetails'
import { ProjectFilters } from './ProjectFilters'
import { filters } from './project-filter-options'
import { SectionHeading } from '../layout/SectionHeading'

export function Projects() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<(typeof filters)[number]>('all')
  const [selected, setSelected] = useState<Project | null>(null)
  const [returnFocus, setReturnFocus] = useState<HTMLElement | null>(null)
  const visible = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((project) =>
            project.category.includes(filter as ProjectCategory),
          ),
    [filter],
  )
  const open = (project: Project, element: HTMLElement) => {
    setReturnFocus(element)
    setSelected(project)
  }
  return (
    <section className="section-shell projects-section" id="projects">
      <SectionHeading index="02" title={t('sections.projects')} />
      <div className="projects-intro">
        <h2>{t('sections.projects')}</h2>
        <p>{t('projects.intro')}</p>
      </div>
      <ProjectFilters active={filter} onChange={setFilter} />
      <motion.div className="project-grid" layout>
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={open} />
        ))}
      </motion.div>
      <AnimatePresence>
        {selected && (
          <ProjectDetails
            project={selected}
            returnFocus={returnFocus}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
