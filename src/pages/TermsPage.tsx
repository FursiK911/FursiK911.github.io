import { useTranslation } from 'react-i18next'
import { LegalPageLayout } from '../components/layout/LegalPageLayout'

export function TermsPage() {
  const { t } = useTranslation()
  return (
    <LegalPageLayout
      title={t('legal.terms.metaTitle')}
      description={t('legal.terms.metaDescription')}
    >
      <article className="legal-content">
        <p className="eyebrow">LEGAL / 02</p>
        <h1>{t('legal.terms.title')}</h1>
        <p className="legal-updated">{t('legal.updated')}</p>
        <p className="legal-lead">{t('legal.terms.intro')}</p>
        <h2>{t('legal.terms.useTitle')}</h2>
        <p>{t('legal.terms.use')}</p>
        <h2>{t('legal.terms.contentTitle')}</h2>
        <p>{t('legal.terms.content')}</p>
        <h2>{t('legal.terms.externalTitle')}</h2>
        <p>{t('legal.terms.external')}</p>
        <h2>{t('legal.terms.liabilityTitle')}</h2>
        <p>{t('legal.terms.liability')}</p>
        <h2>{t('legal.terms.contactTitle')}</h2>
        <p>{t('legal.terms.contact')}</p>
      </article>
    </LegalPageLayout>
  )
}
