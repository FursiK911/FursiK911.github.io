import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import { CopyButton } from '@mantine/core'
import { IconBrandTelegram, IconMail } from '@tabler/icons-react'
import { ResumeDownload } from '@/features/resume-download'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { ContactPortrait } from '../ContactPortrait/ContactPortrait'
import '../styles/Contact.module.css'
import type { ContactProps } from './types/Contact.types'

export function Contact({ reducedMotion, entered = true }: ContactProps) {
  const { t } = useTranslation()
  return (
    <section
      className={cx(styles.sectionShell, styles.contactSection)}
      id="contact"
    >
      <SectionHeading index="06" title={t('sections.contact')} />
      <div className={cx(styles.contactGrid)}>
        <ContactPortrait entered={entered} reducedMotion={reducedMotion} />
        <div className={cx(styles.contactLinks)}>
          <div>
            <span>{t('contact.email')}</span>
            <a href="mailto:19fursik99@gmail.com">
              19fursik99@gmail.com
              <IconMail aria-hidden="true" size={16} stroke={1.5} />
            </a>
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
              @FursiK911
              <IconBrandTelegram aria-hidden="true" size={16} stroke={1.5} />
            </a>
          </div>
          <ResumeDownload label={t('contact.cv')} />
        </div>
      </div>
    </section>
  )
}
