import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { useScrollReveal } from '@/shared/lib/useScrollReveal'
import { LegalContentSection, LegalPageLayout } from '@/widgets/site-layout'

export function PrivacyPage() {
  const { t } = useTranslation()
  const scrollReveal = useScrollReveal()
  return (
    <LegalPageLayout
      title={t('legal.privacy.metaTitle')}
      description={t('legal.privacy.metaDescription')}
      hudSectionLabel={t('legal.privacy.title')}
    >
      <motion.article className={cx(styles.legalContent)} {...scrollReveal}>
        <p className={cx(styles.eyebrow)}>LEGAL / 01</p>
        <h1>{t('legal.privacy.title')}</h1>
        <p className={cx(styles.legalUpdated)}>{t('legal.updated')}</p>
        <p className={cx(styles.legalLead)}>{t('legal.privacy.intro')}</p>
        <LegalContentSection title={t('legal.privacy.collectionTitle')}>
          <p>{t('legal.privacy.collection')}</p>
        </LegalContentSection>
        <LegalContentSection title={t('legal.privacy.useTitle')}>
          <p>{t('legal.privacy.use')}</p>
        </LegalContentSection>
        <LegalContentSection title={t('legal.privacy.externalTitle')}>
          <p>{t('legal.privacy.external')}</p>
        </LegalContentSection>
        <LegalContentSection title={t('legal.privacy.contactTitle')}>
          <p>{t('legal.privacy.contact')}</p>
        </LegalContentSection>
      </motion.article>
    </LegalPageLayout>
  )
}
