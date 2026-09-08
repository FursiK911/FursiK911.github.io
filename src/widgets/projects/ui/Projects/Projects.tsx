import { cx, styles } from '@/shared/styles'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { projects } from '@/entities/project'
import type { Project, ProjectCategory } from '@/entities/project'
import { ProjectCard } from '@/entities/project'
import { ProjectDetails } from '@/features/project-details'
import { ProjectFilters, filters } from '@/features/project-filtering'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import '../styles/Projects.module.css'

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
    <section
      className={cx(styles.sectionShell, styles.projectsSection)}
      id="projects"
    >
      <SectionHeading index="02" title={t('sections.projects')} />
      <div className={cx(styles.projectsIntro)}>
        <h2>{t('projects.title')}</h2>
        <p>{t('projects.intro')}</p>
      </div>
      <ProjectFilters active={filter} onChange={setFilter} />
      <motion.div className={cx(styles.projectGrid)} layout>
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
