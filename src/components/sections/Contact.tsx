import { useTranslation } from 'react-i18next'
import { cvUrl } from '../../data/portfolio'
import { useClipboard } from '../../hooks/useClipboard'
import { SectionHeading } from '../layout/SectionHeading'

export function Contact() {
  const { t } = useTranslation()
  const { copied, copy } = useClipboard()
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
            <button
              type="button"
              onClick={() => void copy('fursik911@yandex.com')}
            >
              {copied ? t('contact.copied') : t('contact.copy')}
            </button>
          </div>
          <div>
            <span>{t('contact.telegram')}</span>
            <a href="https://t.me/FursiK911" target="_blank" rel="noreferrer">
              @FursiK911 ↗
            </a>
          </div>
          <a className="button button-primary" href={cvUrl} download>
            {t('contact.cv')} ↓
          </a>
        </div>
      </div>
    </section>
  )
}
