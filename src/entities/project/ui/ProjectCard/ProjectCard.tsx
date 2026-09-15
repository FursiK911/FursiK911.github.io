import { motion, useReducedMotion } from 'motion/react'
import { useScrollReveal } from '@/shared/lib/useScrollReveal'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ProjectCardPreview } from '../ProjectCardPreview/ProjectCardPreview'
import styles from './styles/ProjectCard.module.css'
import type { ProjectCardProps } from './types/ProjectCard.types'

export function ProjectCard({ project, revealDelay }: ProjectCardProps) {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const scrollReveal = useScrollReveal({ delay: revealDelay })
  const [isPreviewActive, setIsPreviewActive] = useState(false)
  const title = t(`projects.${project.titleKey}`)
  return (
    <motion.article
      className={styles.card}
      layout={!reducedMotion}
      {...scrollReveal}
      exit={reducedMotion ? undefined : { opacity: 0, y: 16 }}
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
