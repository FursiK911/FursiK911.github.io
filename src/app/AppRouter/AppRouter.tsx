import { HomePage } from '@/pages/home'
import { PrivacyPage } from '@/pages/privacy'
import { TermsPage } from '@/pages/terms'

export function AppRouter() {
  switch (window.location.pathname.replace(/\/+$/, '') || '/') {
    case '/privacy':
      return <PrivacyPage />
    case '/terms':
      return <TermsPage />
    default:
      return <HomePage />
  }
}
