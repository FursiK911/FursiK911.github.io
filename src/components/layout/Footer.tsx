import { useTranslation } from 'react-i18next'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconDownload,
} from '@tabler/icons-react'
import { cvUrl } from '../../data/portfolio'

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
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-brand">
          <a className="site-footer-name" href={isHome ? '#top' : '/'}>
            DMITRY_FURSOV
          </a>
          <span>{t('footer.role')}</span>
          <a className="site-footer-email" href="mailto:19fursik99@gmail.com">
            19fursik99@gmail.com ↗
          </a>
        </div>
        <div className="site-footer-column">
          <span className="site-footer-label">{t('footer.connect')}</span>
          <div className="site-footer-socials">
            {socialLinks.map(({ label, href, Icon }) => (
              <a href={href} target="_blank" rel="noreferrer" key={label}>
                <Icon aria-hidden="true" size={17} stroke={1.5} />
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="site-footer-column">
          <span className="site-footer-label">{t('footer.explore')}</span>
          <nav className="site-footer-nav" aria-label={t('footer.explore')}>
            {sectionIds.map((id, index) => (
              <a href={isHome ? `#${id}` : `/#${id}`} key={id}>
                <span>0{index + 1}</span>
                {t(`nav.${id}`)}
              </a>
            ))}
          </nav>
        </div>
        <div className="site-footer-column site-footer-actions">
          <a href={cvUrl} download>
            {t('footer.cv')}
            <IconDownload aria-hidden="true" size={16} stroke={1.5} />
          </a>
          <a href="/privacy/">{t('footer.privacy')}</a>
          <a href="/terms/">{t('footer.terms')}</a>
        </div>
      </div>
      <div className="site-footer-bottom">
        <small>
          © {new Date().getFullYear()} · {t('footer.tagline')}
        </small>
        <span>{t('footer.signature')}</span>
      </div>
    </footer>
  )
}
