import { HomePage } from '@/pages/home'
import { PrivacyPage } from '@/pages/privacy'
import { ProjectPage } from '@/pages/project'
import { TermsPage } from '@/pages/terms'

export function AppRouter() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path.startsWith('/projects/')) {
    return (
      <ProjectPage
        projectId={decodeURIComponent(path.slice('/projects/'.length))}
      />
    )
  }
  switch (path) {
    case '/privacy':
      return <PrivacyPage />
    case '/terms':
      return <TermsPage />
    default:
      return <HomePage />
  }
}
