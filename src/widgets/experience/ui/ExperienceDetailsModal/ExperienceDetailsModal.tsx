import { Modal } from '@mantine/core'
import { useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { ExperienceDetailsItem } from '../ExperienceDetailsItem/ExperienceDetailsItem'
import styles from './styles/ExperienceDetailsModal.module.css'
import type { ExperienceDetailsModalProps } from './types/ExperienceDetailsModal.types'

export function ExperienceDetailsModal({
  entry,
  onClose,
}: ExperienceDetailsModalProps) {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion() ?? false
  const period = entry
    ? `${entry.period.from} — ${entry.period.to ?? t('experience.present')}`
    : ''

  return (
    <Modal.Root
      opened={entry !== null}
      onClose={onClose}
      centered
      closeOnClickOutside
      closeOnEscape
      trapFocus
      lockScroll
      returnFocus
      transitionProps={{
        transition: reducedMotion ? 'fade' : 'fade-up',
        duration: reducedMotion ? 0 : 260,
      }}
      size="68rem"
      classNames={{
        root: styles.root,
        overlay: styles.backdrop,
        content: styles.dialog,
        header: styles.header,
        body: styles.body,
        close: styles.close,
      }}
    >
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title className={styles.srOnly}>
            {entry
              ? t('experience.detailsTitle', {
                  company: entry.company,
                  period,
                })
              : ''}
          </Modal.Title>
          <Modal.CloseButton aria-label={t('experience.closeDetails')} />
        </Modal.Header>
        <Modal.Body>
          {entry && (
            <div className={styles.content}>
              <p className={styles.kicker}>{t('experience.detailsLabel')}</p>
              <ExperienceDetailsItem entry={entry} />
            </div>
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}
