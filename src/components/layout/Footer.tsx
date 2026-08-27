import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="site-footer">
      <span>DMITRY_FURSOV</span>
      <span>UNITY / XR DEVELOPER</span>
      <small>
        © {new Date().getFullYear()} · {t('footer')}
      </small>
    </footer>
  )
}
