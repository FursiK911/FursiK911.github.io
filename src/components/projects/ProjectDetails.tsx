import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { Project } from '../../types/portfolio'

export interface ProjectDetailsProps {
  project: Project
  returnFocus: HTMLElement | null
  onClose: () => void
}

export function ProjectDetails({
  project,
  returnFocus,
  onClose,
}: ProjectDetailsProps) {
  const { t } = useTranslation()
  const dialogRef = useRef<HTMLDivElement>(null)
  const points = t(`projects.${project.pointsKey}`, {
    returnObjects: true,
  }) as string[]
  useEffect(() => {
    dialogRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      returnFocus?.focus()
    }
  }, [onClose, returnFocus])
  return (
    <motion.div
      className="dialog-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <motion.div
        className="project-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        tabIndex={-1}
        ref={dialogRef}
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <button
          className="dialog-close"
          type="button"
          onClick={onClose}
          aria-label={t('projects.close')}
        >
          ×
        </button>
        <div className="dialog-kicker">
          {t('projects.details')} // {project.id.toUpperCase()}
        </div>
        <h2 id="project-dialog-title">{t(`projects.${project.titleKey}`)}</h2>
        <p className="dialog-description">
          {t(`projects.${project.descriptionKey}`)}
        </p>
        <div className="dialog-facts">
          <div>
            <span>{t('projects.role')}</span>
            <strong>
              {project.roleKey ? t(`roles.${project.roleKey}`) : ''}
            </strong>
          </div>
          <div>
            <span>{t('projects.platform')}</span>
            <strong>{t(`platforms.${project.platformKey}`)}</strong>
          </div>
        </div>
        <div className="dialog-columns">
          <div>
            <span className="eyebrow">{t('projects.overview')}</span>
            <div className="dialog-tags">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
          <div>
            <span className="eyebrow">{t('projects.worked')}</span>
            <ul>
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        {project.links && (
          <div className="dialog-links">
            {project.links.map((link) => (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                key={link.href}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
