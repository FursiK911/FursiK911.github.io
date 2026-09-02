import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import { LegalPageLayout } from '@/widgets/site-layout'

export function PrivacyPage() {
  const { t } = useTranslation()
  return (
    <LegalPageLayout
      title={t('legal.privacy.metaTitle')}
      description={t('legal.privacy.metaDescription')}
    >
      <article className={cx(styles.legalContent)}>
        <p className={cx(styles.eyebrow)}>LEGAL / 01</p>
        <h1>{t('legal.privacy.title')}</h1>
        <p className={cx(styles.legalUpdated)}>{t('legal.updated')}</p>
        <p className={cx(styles.legalLead)}>{t('legal.privacy.intro')}</p>
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
