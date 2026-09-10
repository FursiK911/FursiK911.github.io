import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ProjectCardPreview } from '../ProjectCardPreview/ProjectCardPreview'
import styles from './styles/ProjectCard.module.css'
import type { ProjectCardProps } from './types/ProjectCard.types'

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const [isPreviewActive, setIsPreviewActive] = useState(false)
  const title = t(`projects.${project.titleKey}`)
  return (
    <motion.article
      className={styles.card}
      layout={!reducedMotion}
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={reducedMotion ? undefined : { opacity: 0, y: 16 }}
      transition={{ duration: reducedMotion ? 0 : 0.35 }}
      viewport={{ once: true }}
    >
      <a
        className={styles.link}
        href={`/projects/${project.id}`}
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') setIsPreviewActive(true)
        }}
        onPointerLeave={() => setIsPreviewActive(false)}
      >
        <ProjectCardPreview
          active={isPreviewActive}
          images={project.card.previewImages}
          key={isPreviewActive ? 'active-preview' : 'cover-preview'}
        />
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.teaser}>{t(project.card.teaserKey)}</p>
          <div
            className={styles.tagList}
            aria-label={`${t('projects.technologies')}: ${project.card.tags
              .slice(0, 4)
              .join(', ')}`}
          >
            {project.card.tags.slice(0, 4).map((tag) => (
              <span className={styles.tag} key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.article>
  )
}
