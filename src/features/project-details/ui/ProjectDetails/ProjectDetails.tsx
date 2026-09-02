import { cx, styles } from '@/shared/styles'
import { useEffect } from 'react'
import { Modal } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { ActionLink } from '@/shared/ui/ActionLink'
import type { ProjectDetailsProps } from './types/ProjectDetails.types'

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
        <Modal.Header className={cx(styles.projectDialogHeader)}>
          <Modal.Title className={cx(styles.dialogModalTitle)}>
            {t(`projects.${project.titleKey}`)}
          </Modal.Title>
          <Modal.CloseButton
            className={cx(styles.dialogClose)}
            aria-label={t('projects.close')}
            onClick={onClose}
          />
        </Modal.Header>
        <Modal.Body className={cx(styles.projectDialogBody)}>
          <div className={cx(styles.dialogKicker)}>
            {t('projects.details')} // {project.id.toUpperCase()}
          </div>
          <h2>{t(`projects.${project.titleKey}`)}</h2>
          <p className={cx(styles.dialogDescription)}>
            {t(`projects.${project.descriptionKey}`)}
          </p>
          <div className={cx(styles.dialogFacts)}>
            <div>
              <span>{t('projects.company')}</span>
              <strong>{project.company}</strong>
            </div>
            <div>
              <span>{t('projects.period')}</span>
              <strong>
                {project.period.from} —{' '}
                {project.period.to ?? t('experience.present')}
              </strong>
            </div>
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
          <div className={cx(styles.dialogColumns)}>
            <div>
              <span className={cx(styles.eyebrow)}>
                {t('projects.overview')}
              </span>
              <div className={cx(styles.dialogTags)}>
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <span className={cx(styles.eyebrow)}>{t('projects.worked')}</span>
              <ul>
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          {project.links && (
            <div className={cx(styles.dialogLinks)}>
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
