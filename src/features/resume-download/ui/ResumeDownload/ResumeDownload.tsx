import { useId, useState } from 'react'
import { Modal } from '@mantine/core'
import { IconDownload } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'
import { useReducedMotion } from 'motion/react'
import { ActionButton } from '@/shared/ui/ActionButton'
import { resumeDocuments } from '../../model/data/resume.data'
import { getResumeLanguage } from '../../model/utils/getResumeLanguage'
import type { ResumeDownloadProps } from './types/ResumeDownload.types'
import styles from './styles/ResumeDownload.module.css'

export function ResumeDownload({
  label,
  className,
  variant = 'primary',
}: ResumeDownloadProps) {
  const [opened, setOpened] = useState(false)
  const id = useId()
  const { t, i18n } = useTranslation()
  const reducedMotion = useReducedMotion()
  const language = getResumeLanguage(i18n.language)

  return (
    <>
      <ActionButton
        type="button"
        variant={variant}
        className={[variant === 'text' ? styles.textTrigger : '', className]
          .filter(Boolean)
          .join(' ')}
        aria-haspopup="dialog"
        aria-expanded={opened}
        aria-controls={opened ? `${id}-body` : undefined}
        onClick={() => setOpened(true)}
      >
        {label}
        <IconDownload aria-hidden="true" size={16} stroke={1.5} />
      </ActionButton>
      <Modal
        id={id}
        opened={opened}
        onClose={() => setOpened(false)}
        title={t('resumeDownload.title')}
        centered
        size="sm"
        returnFocus
        closeButtonProps={{ 'aria-label': t('resumeDownload.close') }}
        transitionProps={{ duration: reducedMotion ? 0 : 150 }}
        classNames={{
          content: styles.content,
          header: styles.header,
          title: styles.title,
        }}
      >
        <p className={styles.description}>{t('resumeDownload.description')}</p>
        <div className={styles.documents}>
          {resumeDocuments.map((document) => (
            <a
              key={document.id}
              className={styles.document}
              href={document.files[language]}
              download
              aria-label={t('resumeDownload.download', {
                role: document.title,
              })}
            >
              <span>
                <strong>{document.title}</strong>
                <small>{t('resumeDownload.format')}</small>
              </span>
              <IconDownload aria-hidden="true" size={20} stroke={1.5} />
            </a>
          ))}
        </div>
      </Modal>
    </>
  )
}
