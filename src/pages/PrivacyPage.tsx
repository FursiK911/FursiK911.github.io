import { useTranslation } from 'react-i18next'
import { LegalPageLayout } from '../components/layout/LegalPageLayout'

export function PrivacyPage() {
  const { t } = useTranslation()
  return (
    <LegalPageLayout
      title={t('legal.privacy.metaTitle')}
      description={t('legal.privacy.metaDescription')}
    >
      <article className="legal-content">
        <p className="eyebrow">LEGAL / 01</p>
        <h1>{t('legal.privacy.title')}</h1>
        <p className="legal-updated">{t('legal.updated')}</p>
        <p className="legal-lead">{t('legal.privacy.intro')}</p>
        <h2>{t('legal.privacy.collectionTitle')}</h2>
        <p>{t('legal.privacy.collection')}</p>
        <h2>{t('legal.privacy.useTitle')}</h2>
        <p>{t('legal.privacy.use')}</p>
        <h2>{t('legal.privacy.externalTitle')}</h2>
        <p>{t('legal.privacy.external')}</p>
        <h2>{t('legal.privacy.contactTitle')}</h2>
        <p>{t('legal.privacy.contact')}</p>
      </article>
    </LegalPageLayout>
  )
}
