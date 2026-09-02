import { cx, styles } from '@/shared/styles'
import { useEffect, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

interface LegalPageLayoutProps {
  title: string
  description: string
  children: ReactNode
}

export function LegalPageLayout({
  title,
  description,
  children,
}: LegalPageLayoutProps) {
  const { i18n, t } = useTranslation()

  useEffect(() => {
    document.title = title
    document.documentElement.lang = i18n.language.startsWith('ru') ? 'ru' : 'en'
    const url = new URL(window.location.href)
    url.search = ''
    url.hash = ''
    const setMeta = (selector: string, attributes: Record<string, string>) => {
      let element = document.querySelector<HTMLMetaElement>(selector)
      if (!element) {
        element = document.createElement('meta')
        Object.entries(attributes).forEach(([key, value]) =>
          element?.setAttribute(key, value),
        )
        document.head.appendChild(element)
      }
      element.setAttribute('content', attributes.content)
    }
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url.toString()
    setMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })
    setMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    })
    setMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    setMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: url.toString(),
    })
  }, [description, i18n.language, title])

  return (
    <div className={cx(styles.appShell, styles.legalShell)}>
      <Header
        active=""
        onLanguage={() =>
          void i18n.changeLanguage(i18n.language.startsWith('ru') ? 'en' : 'ru')
        }
        typedRole={t('header.legalRole')}
        reducedMotion
      />
      <main className={cx(styles.legalPage, styles.sectionShell)}>
        <a className={cx(styles.legalBackLink)} href="/">
          ← {t('legal.back')}
        </a>
        {children}
      </main>
      <Footer />
    </div>
  )
}
