import './Shared.css'
import '@/widgets/site-layout/ui/styles/SiteLayout.css'
import '@/widgets/profile/ui/styles/Profile.css'
import '@/widgets/projects/ui/styles/Projects.css'
import '@/widgets/experience/ui/styles/Experience.css'
import '@/widgets/education/ui/styles/Education.css'
import '@/widgets/contact/ui/styles/Contact.css'
import '@/features/loading/ui/styles/Loading.css'
import '@/features/konami-debug/ui/styles/KonamiDebug.css'
import { className } from './utils/className'
export { cx } from './utils/cx'

export const styles = new Proxy({} as Record<string, string>, {
  get: (_, key: string) => className(key),
})
