import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { projects } from '../../data/portfolio'
import type { Project } from '../../types/portfolio'
import { ActionButton } from '../ui/ActionButton'

export interface ProjectCardProps {
  project: Project
  onOpen: (project: Project, element: HTMLElement) => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { t } = useTranslation()
  const title = t(`projects.${project.titleKey}`)
  return (
    <motion.article
      className={project.featured ? 'project-card featured' : 'project-card'}
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 14 }}
      transition={{ duration: 0.28 }}
    >
      <button
        className="project-visual"
        type="button"
        onClick={(event) => onOpen(project, event.currentTarget)}
        aria-label={`${t('projects.view')} — ${title}`}
      >
        <span className="visual-grid" />
        <span className="visual-id">
          {project.id.toUpperCase()} // 0{projects.indexOf(project) + 1}
        </span>
        <span className="visual-mark">
          {project.category.includes('xr-ar')
            ? '◈'
            : project.category.includes('unigine')
              ? '◇'
              : project.category.includes('mobile')
                ? '▣'
                : project.category.includes('web')
                  ? '⌘'
                  : project.category.includes('multiplayer')
                    ? '◌'
                    : '◆'}
        </span>
        <span className="visual-platform">
          {t(`platforms.${project.platformKey}`)}
        </span>
      </button>
      <div className="project-meta">
        <div>
          <span className="project-category">
            {project.category
              .map((category) => t(`projects.${category}`))
              .join(' / ')}
          </span>
          <h3>{title}</h3>
        </div>
        <ActionButton
          type="button"
          onClick={(event) => onOpen(project, event.currentTarget)}
          variant="action"
        >
          {t('projects.view')} <span>↗</span>
        </ActionButton>
      </div>
      <div className="project-context">
        <span>{project.company}</span>
        <time dateTime={project.period.to ?? project.period.from}>
          {project.period.from} — {project.period.to ?? t('experience.present')}
        </time>
      </div>
      <p className="project-description">
        {t(`projects.${project.descriptionKey}`)}
      </p>
      <div className="tag-row">
        {project.tech.slice(0, 6).map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </motion.article>
  )
}
