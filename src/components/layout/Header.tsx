import { useEffect, useState } from 'react'
import { Burger } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { TypingText } from './TypingText'

const sectionIds = ['projects', 'about', 'experience', 'stack', 'contact']

export interface HeaderProps {
  active: string
  onLanguage: () => void
  typedRole: string
  reducedMotion: boolean
}

export function Header({
  active,
  onLanguage,
  typedRole,
  reducedMotion,
}: HeaderProps) {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <div className="site-header-inner">
        <a className="brand" href="#top" aria-label={t('header.homeLabel')}>
          <small>{t('header.name')}</small>
          <TypingText text={typedRole} reducedMotion={reducedMotion} />
        </a>
        <nav
          id="primary-nav"
          className={open ? 'main-nav is-open' : 'main-nav'}
          aria-label="Primary navigation"
        >
          {sectionIds.map((id, index) => (
            <a
              className={active === id ? 'active' : ''}
              href={`#${id}`}
              key={id}
              onClick={() => setOpen(false)}
            >
              <span>0{index + 1}</span>
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            href="https://github.com/FursiK911"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>
          <a
            href="https://t.me/FursiK911"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
          >
            TG
          </a>
          <button
            className="lang-toggle"
            type="button"
            onClick={onLanguage}
            aria-label="Change language"
          >
            {i18n.language.startsWith('ru') ? 'EN' : 'RU'}
          </button>
          <Burger
            className="menu-toggle"
            size="sm"
            color="cyan"
            lineSize={1}
            opened={open}
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
            aria-controls="primary-nav"
          />
        </div>
      </div>
    </header>
  )
}
