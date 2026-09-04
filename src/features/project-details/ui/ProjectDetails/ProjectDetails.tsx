import { useEffect } from 'react'
import { Modal } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { ActionLink } from '@/shared/ui/ActionLink'
import { ProjectMediaGallery } from '../ProjectMediaGallery/ProjectMediaGallery'
import styles from './styles/ProjectDetails.module.css'
import type { ProjectDetailsProps } from './types/ProjectDetails.types'

export function ProjectDetails({
  project,
  returnFocus,
  onClose,
}: ProjectDetailsProps) {
  const { t } = useTranslation()
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
      size="60rem"
      classNames={{
        root: styles.root,
        overlay: styles.backdrop,
        content: `${styles.dialog} project-dialog`,
        header: styles.header,
        body: styles.body,
        close: styles.close,
      }}
      returnFocus
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title className={styles.srOnly}>
            {t(`projects.${project.titleKey}`)}
          </Modal.Title>
          <Modal.CloseButton
            aria-label={t('projects.close')}
            onClick={onClose}
          />
        </Modal.Header>
        <Modal.Body>
          <div className={styles.layout}>
            <ProjectMediaGallery project={project} variant="preview" />
            <div className={styles.content}>
              <p className={styles.kicker}>
                {t('projects.details')} // {project.id.toUpperCase()}
              </p>
              <h2>{t(`projects.${project.titleKey}`)}</h2>
              <p className={styles.description}>
                {t(`projects.${project.descriptionKey}`)}
              </p>
              <dl className={styles.facts}>
                <div>
                  <dt>{t('projects.company')}</dt>
                  <dd>{project.company}</dd>
                </div>
                <div>
                  <dt>{t('projects.period')}</dt>
                  <dd>
                    {project.period.from} —{' '}
                    {project.period.to ?? t('experience.present')}
                  </dd>
                </div>
                <div>
                  <dt>{t('projects.role')}</dt>
                  <dd>
                    {project.roleKey ? t(`roles.${project.roleKey}`) : '—'}
                  </dd>
                </div>
              </dl>
              <div className={styles.actions}>
                <ActionLink
                  href={`/projects/${project.id}`}
                  variant="primary"
                  onClick={onClose}
                >
                  {t('projects.viewDetails')}
                </ActionLink>
                {project.actions
                  ?.filter((action) => action.type !== 'external')
                  .map((action) => (
                    <ActionLink
                      href={action.href}
                      target="_blank"
                      rel="noreferrer"
                      key={action.href}
                      variant="secondary"
                    >
                      {t(`projects.actions.${action.type}`)}
                    </ActionLink>
                  ))}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}
