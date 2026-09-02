import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconDownload,
} from '@tabler/icons-react'
import { cvUrl } from '@/entities/project'

const sectionIds = [
  'top',
  'projects',
  'experience',
  'stack',
  'education',
  'contact',
] as const

const socialLinks = [
  {
    label: 'Telegram',
    href: 'https://t.me/FursiK911',
    Icon: IconBrandTelegram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dmitry-fursov-251097213/',
    Icon: IconBrandLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/FursiK911',
    Icon: IconBrandGithub,
  },
]

export function Footer() {
  const { t } = useTranslation()
  const isHome = window.location.pathname === '/'
  return (
    <footer className={cx(styles.siteFooter)}>
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
          <a href={cvUrl} download>
            {t('footer.cv')}
            <IconDownload aria-hidden="true" size={16} stroke={1.5} />
          </a>
          <a href="/privacy/">{t('footer.privacy')}</a>
          <a href="/terms/">{t('footer.terms')}</a>
        </div>
      </div>
      <div className={cx(styles.siteFooterBottom)}>
        <small>
          © {new Date().getFullYear()} · {t('footer.tagline')}
        </small>
        <span>{t('footer.signature')}</span>
      </div>
    </footer>
  )
}
