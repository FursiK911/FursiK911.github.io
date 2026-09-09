import { HomePage } from '@/pages/home'
import { PrivacyPage } from '@/pages/privacy'
import { ProjectPage } from '@/pages/project'
import { TermsPage } from '@/pages/terms'
import { DesktopGridScanBackground } from '@/widgets/site-layout'
import styles from './styles/AppRouter.module.css'

export function AppRouter() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const page = path.startsWith('/projects/') ? (
    <ProjectPage
      projectId={decodeURIComponent(path.slice('/projects/'.length))}
    />
  ) : path === '/privacy' ? (
    <PrivacyPage />
  ) : path === '/terms' ? (
    <TermsPage />
  ) : (
    <HomePage />
  )

  return (
    <div className={styles.appRouterRoot}>
      <DesktopGridScanBackground />
      <div
        className={styles.appRouterContent}
        data-testid="route-content-frame"
      >
        {page}
      </div>
    </div>
  )
}
