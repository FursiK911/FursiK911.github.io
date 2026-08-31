import App from './App'
import { PrivacyPage } from '../pages/PrivacyPage'
import { TermsPage } from '../pages/TermsPage'

export function AppRouter() {
  switch (window.location.pathname.replace(/\/+$/, '') || '/') {
    case '/privacy':
      return <PrivacyPage />
    case '/terms':
      return <TermsPage />
    default:
      return <App />
  }
}
