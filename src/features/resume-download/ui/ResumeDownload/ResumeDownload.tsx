import { IconDownload } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'
import { ActionLink } from '@/shared/ui/ActionLink'
import { defaultResumeDocument } from '../../model/data/resume.data'
import { getResumeLanguage } from '../../model/utils/getResumeLanguage'
import type { ResumeDownloadProps } from './types/ResumeDownload.types'
import styles from './styles/ResumeDownload.module.css'

export function ResumeDownload({
  label,
  className,
  variant = 'primary',
}: ResumeDownloadProps) {
  const { t, i18n } = useTranslation()
  const language = getResumeLanguage(i18n.language)

  return (
    <ActionLink
      variant={variant}
      className={[variant === 'text' ? styles.resumeTextTrigger : '', className]
        .filter(Boolean)
        .join(' ')}
      href={defaultResumeDocument.files[language]}
      download
      aria-label={t('resumeDownload.download', {
        role: defaultResumeDocument.title,
      })}
    >
      {label}
      <IconDownload aria-hidden="true" size={16} stroke={1.5} />
    </ActionLink>
  )
}
