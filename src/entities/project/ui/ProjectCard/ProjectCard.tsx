import { cx, styles } from '@/shared/styles'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { projects } from '../../model/data/projects.data'
import { ActionButton } from '@/shared/ui/ActionButton'
import type { ProjectCardProps } from './types/ProjectCard.types'

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { t } = useTranslation()
  const title = t(`projects.${project.titleKey}`)
  return (
    <motion.article
      className={
        project.featured
          ? cx(styles.projectCard, styles.featured)
          : cx(styles.projectCard)
      }
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 14 }}
      transition={{ duration: 0.28 }}
    >
      <button
        className={cx(styles.projectVisual)}
        type="button"
        onClick={(event) => onOpen(project, event.currentTarget)}
        aria-label={`${t('projects.view')} — ${title}`}
      >
        <span className={cx(styles.visualGrid)} />
        <span className={cx(styles.visualId)}>
          {project.id.toUpperCase()} // 0{projects.indexOf(project) + 1}
        </span>
        <span className={cx(styles.visualMark)}>
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
        <span className={cx(styles.visualPlatform)}>
          {t(`platforms.${project.platformKey}`)}
        </span>
      </button>
      <div className={cx(styles.projectMeta)}>
        <div>
          <span className={cx(styles.projectCategory)}>
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
      <div className={cx(styles.projectContext)}>
        <span>{project.company}</span>
        <time dateTime={project.period.to ?? project.period.from}>
          {project.period.from} — {project.period.to ?? t('experience.present')}
        </time>
      </div>
      <p className={cx(styles.projectDescription)}>
        {t(`projects.${project.descriptionKey}`)}
      </p>
      <div className={cx(styles.tagRow)}>
        {project.tech.slice(0, 6).map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </motion.article>
  )
}
