import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import { ResumeDownload } from '@/features/resume-download'
import { motion } from 'motion/react'
import { useScrollReveal } from '@/shared/lib/useScrollReveal'
import { sectionIds, socialLinks } from './data/footer.data'

export function Footer() {
  const { t } = useTranslation()
  const isHome = window.location.pathname === '/'
  const scrollReveal = useScrollReveal()
  return (
    <motion.footer className={cx(styles.siteFooter)} {...scrollReveal}>
      <div className={cx(styles.siteFooterMain)}>
        <div className={cx(styles.siteFooterBrand)}>
          <a className={cx(styles.siteFooterName)} href={isHome ? '#top' : '/'}>
            DMITRY_FURSOV
          </a>
          <span>{t('footer.role')}</span>
          <a
            className={cx(styles.siteFooterEmail)}
            href="mailto:19fursik99@gmail.com"
          >
            19fursik99@gmail.com ↗
          </a>
        </div>
        <div className={cx(styles.siteFooterColumn)}>
          <span className={cx(styles.siteFooterLabel)}>
            {t('footer.connect')}
          </span>
          <div className={cx(styles.siteFooterSocials)}>
            {socialLinks.map(({ label, href, Icon }) => (
              <a href={href} target="_blank" rel="noreferrer" key={label}>
                <Icon aria-hidden="true" size={17} stroke={1.5} />
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className={cx(styles.siteFooterColumn)}>
          <span className={cx(styles.siteFooterLabel)}>
            {t('footer.explore')}
          </span>
          <nav
            className={cx(styles.siteFooterNav)}
            aria-label={t('footer.explore')}
          >
            {sectionIds.map((id, index) => (
              <a href={isHome ? `#${id}` : `/#${id}`} key={id}>
                <span>0{index + 1}</span>
                {t(`nav.${id}`)}
              </a>
            ))}
          </nav>
        </div>
        <div className={cx(styles.siteFooterColumn, styles.siteFooterActions)}>
          <ResumeDownload label={t('footer.cv')} variant="text" />
          <a href="/privacy/">{t('footer.privacy')}</a>
          <a href="/terms/">{t('footer.terms')}</a>
        </div>
      </div>
    </motion.footer>
  )
}
