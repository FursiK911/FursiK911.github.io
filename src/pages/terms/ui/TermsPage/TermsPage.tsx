import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { useScrollReveal } from '@/shared/lib/useScrollReveal'
import { LegalContentSection, LegalPageLayout } from '@/widgets/site-layout'

export function TermsPage() {
  const { t } = useTranslation()
  const scrollReveal = useScrollReveal()
  return (
    <LegalPageLayout
      title={t('legal.terms.metaTitle')}
      description={t('legal.terms.metaDescription')}
      hudSectionLabel={t('legal.terms.title')}
    >
      <motion.article className={cx(styles.legalContent)} {...scrollReveal}>
        <p className={cx(styles.eyebrow)}>LEGAL / 02</p>
        <h1>{t('legal.terms.title')}</h1>
        <p className={cx(styles.legalUpdated)}>{t('legal.updated')}</p>
        <p className={cx(styles.legalLead)}>{t('legal.terms.intro')}</p>
        <LegalContentSection title={t('legal.terms.useTitle')}>
          <p>{t('legal.terms.use')}</p>
        </LegalContentSection>
        <LegalContentSection title={t('legal.terms.contentTitle')}>
          <p>{t('legal.terms.content')}</p>
        </LegalContentSection>
        <LegalContentSection title={t('legal.terms.externalTitle')}>
          <p>{t('legal.terms.external')}</p>
        </LegalContentSection>
        <LegalContentSection title={t('legal.terms.liabilityTitle')}>
          <p>{t('legal.terms.liability')}</p>
        </LegalContentSection>
        <LegalContentSection title={t('legal.terms.contactTitle')}>
          <p>{t('legal.terms.contact')}</p>
        </LegalContentSection>
      </motion.article>
    </LegalPageLayout>
  )
}
