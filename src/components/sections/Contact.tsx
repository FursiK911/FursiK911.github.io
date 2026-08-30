import { useTranslation } from 'react-i18next'
import { CopyButton } from '@mantine/core'
import { IconDownload } from '@tabler/icons-react'
import { cvUrl } from '../../data/portfolio'
import { SectionHeading } from '../layout/SectionHeading'

export function Contact() {
  const { t } = useTranslation()
  return (
    <section className="section-shell contact-section" id="contact">
      <SectionHeading index="05" title={t('sections.contact')} />
      <div className="contact-grid">
        <div>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.body')}</p>
        </div>
        <div className="contact-links">
          <div>
            <span>{t('contact.email')}</span>
            <a href="mailto:fursik911@yandex.com">fursik911@yandex.com ↗</a>
            <CopyButton value="fursik911@yandex.com" timeout={2000}>
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
          <a className="button button-primary" href={cvUrl} download>
            {t('contact.cv')}
            <IconDownload aria-hidden="true" size={16} stroke={1.5} />
          </a>
        </div>
      </div>
    </section>
  )
}
