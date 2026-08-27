import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const sectionIds = ['projects', 'about', 'experience', 'stack', 'contact']

export interface HeaderProps {
  active: string
  onLanguage: () => void
}

export function Header({ active, onLanguage }: HeaderProps) {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Dmitry Fursov home">
        <span>DF</span>
        <small>Dmitry Fursov</small>
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
        <button
          className="menu-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
