import { useEffect } from 'react'
import { Modal } from '@mantine/core'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { ActionLink } from '@/shared/ui/ActionLink'
import { UnavailableAction } from '@/shared/ui/UnavailableAction'
import { ProjectMediaGallery } from '../ProjectMediaGallery/ProjectMediaGallery'
import styles from './styles/ProjectDetails.module.css'
import type { ProjectDetailsProps } from './types/ProjectDetails.types'

export function ProjectDetails({
  project,
  returnFocus,
  onClose,
}: ProjectDetailsProps) {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
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
      transitionProps={{
        transition: reducedMotion ? 'fade' : 'fade-up',
        duration: reducedMotion ? 0 : 260,
      }}
      size="70rem"
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
          <div className={styles.projectDetailsLayout}>
            <ProjectMediaGallery project={project} variant="preview" />
            <motion.div
              className={styles.projectDetailsContent}
              initial={reducedMotion ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: reducedMotion ? 0 : 0.35,
                delay: reducedMotion ? 0 : 0.08,
              }}
            >
              <p className={styles.projectDetailsKicker}>
                {t('projects.details')} // {project.id.toUpperCase()}
              </p>
              <h2 className={styles.projectDetailsTitle}>
                {t(`projects.${project.titleKey}`)}
              </h2>
              <p className={styles.projectDetailsDescription}>
                {t(`projects.${project.descriptionKey}`)}
              </p>
              <div className={styles.projectDetailsRole}>
                <span>{t('projects.role')}</span>
                <strong>
                  {project.roleKey ? t(`roles.${project.roleKey}`) : '—'}
                </strong>
              </div>
              <div className={styles.projectDetailsActions}>
                <ActionLink
                  href={`/projects/${project.id}`}
                  variant="primary"
                  onClick={onClose}
                >
                  {t('projects.viewDetails')}
                </ActionLink>
                {project.actions
                  ?.filter((action) => action.type !== 'external')
                  .map((action) => {
                    const label = t(`projects.actions.${action.type}`)
                    return action.unavailableReasonKey ? (
                      <UnavailableAction
                        key={action.href}
                        reason={t(action.unavailableReasonKey)}
                      >
                        {label}
                      </UnavailableAction>
                    ) : (
                      <ActionLink
                        href={action.href}
                        target="_blank"
                        rel="noreferrer"
                        key={action.href}
                        variant="secondary"
                      >
                        {label}
                      </ActionLink>
                    )
                  })}
              </div>
            </motion.div>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}
