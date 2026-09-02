import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import { CopyButton } from '@mantine/core'
import { IconDownload } from '@tabler/icons-react'
import { cvUrl } from '@/entities/project'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { ActionLink } from '@/shared/ui/ActionLink'
import '../styles/Contact.module.css'

export function Contact() {
  const { t } = useTranslation()
  return (
    <section
      className={cx(styles.sectionShell, styles.contactSection)}
      id="contact"
    >
      <SectionHeading index="06" title={t('sections.contact')} />
      <div className={cx(styles.contactGrid)}>
        <div>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.body')}</p>
        </div>
        <div className={cx(styles.contactLinks)}>
          <div>
            <span>{t('contact.email')}</span>
            <a href="mailto:19fursik99@gmail.com">19fursik99@gmail.com ↗</a>
            <CopyButton value="19fursik99@gmail.com" timeout={2000}>
              {({ copied, copy }) => (
                <button type="button" onClick={copy}>
                  {copied ? t('contact.copied') : t('contact.copy')}
                </button>
              )}
            </CopyButton>
          </div>
          <div>
            <span>{t('contact.telegram')}</span>
            <a href="https://t.me/FursiK911" target="_blank" rel="noreferrer">
              @FursiK911 ↗
            </a>
          </div>
          <ActionLink variant="primary" href={cvUrl} download>
            {t('contact.cv')}
            <IconDownload aria-hidden="true" size={16} stroke={1.5} />
          </ActionLink>
        </div>
      </div>
    </section>
  )
}
