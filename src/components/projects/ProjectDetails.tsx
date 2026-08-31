import { useEffect } from 'react'
import { Modal } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import type { Project } from '../../types/portfolio'
import { ActionLink } from '../ui/ActionLink'

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
  const points = t(`projects.${project.pointsKey}`, {
    returnObjects: true,
  }) as string[]
  useEffect(() => {
    return () => {
      returnFocus?.focus()
    }
  }, [onClose, returnFocus])
  return (
    <Modal.Root
      opened
      onClose={onClose}
      centered
      closeOnClickOutside
      closeOnEscape
      trapFocus
      lockScroll
      transitionProps={{ transition: 'fade-up', duration: 220 }}
      classNames={{
        root: 'project-modal-root',
        overlay: 'dialog-backdrop',
        content: 'project-dialog',
      }}
      returnFocus
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header className="project-dialog-header">
          <Modal.Title className="dialog-modal-title">
            {t(`projects.${project.titleKey}`)}
          </Modal.Title>
          <Modal.CloseButton
            className="dialog-close"
            aria-label={t('projects.close')}
            onClick={onClose}
          />
        </Modal.Header>
        <Modal.Body className="project-dialog-body">
          <div className="dialog-kicker">
            {t('projects.details')} // {project.id.toUpperCase()}
          </div>
          <h2>{t(`projects.${project.titleKey}`)}</h2>
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
                <ActionLink
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  key={link.href}
                  variant="inline"
                >
                  {link.label} ↗
                </ActionLink>
              ))}
            </div>
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}
