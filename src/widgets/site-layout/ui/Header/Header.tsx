import { cx, styles } from '@/shared/styles'
import { useEffect, useState } from 'react'
import { Burger } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { ResumeDownload } from '@/features/resume-download'
import { TypingText } from '@/shared/ui/TypingText'
import '../styles/SiteLayout.css'
import { sectionIds } from './config/header.config'
import type { HeaderProps } from './types/Header.types'
import { headerEntranceVariants } from './config/headerEntranceVariants.config'

export function Header({
  active,
  onLanguage,
  typedRole,
  reducedMotion,
  entered = true,
}: HeaderProps) {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isHome = window.location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={
        scrolled
          ? cx(styles.siteHeader, styles.isScrolled)
          : cx(styles.siteHeader)
      }
      initial={reducedMotion || entered ? false : 'hidden'}
      animate={reducedMotion || entered ? 'visible' : 'hidden'}
      variants={headerEntranceVariants}
    >
      <div className={cx(styles.siteHeaderInner)}>
        <a
          className={cx(styles.brand)}
          href={isHome ? '#top' : '/'}
          aria-label={t('header.homeLabel')}
        >
          <small>{t('header.name')}</small>
          <TypingText text={typedRole} reducedMotion={reducedMotion} />
        </a>
        <nav
          id="primary-nav"
          className={
            open ? cx(styles.mainNav, styles.isOpen) : cx(styles.mainNav)
          }
          aria-label="Primary navigation"
        >
          {sectionIds.map((id, index) => (
            <a
              className={active === id ? cx(styles.active) : undefined}
              href={isHome ? `#${id}` : `/#${id}`}
              key={id}
              onClick={() => setOpen(false)}
            >
              <span>0{index + 1}</span>
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>
        <div className={cx(styles.headerActions)}>
          <ResumeDownload
            className={cx(styles.resumeLink)}
            label={t('header.resume')}
          />
          <button
            className={cx(styles.langToggle)}
            type="button"
            onClick={onLanguage}
            aria-label="Change language"
          >
            {i18n.language.startsWith('ru') ? 'EN' : 'RU'}
          </button>
          <Burger
            className={cx(styles.menuToggle)}
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
    </motion.header>
  )
}
