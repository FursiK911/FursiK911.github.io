import './Shared.module.css'
import '@/widgets/site-layout/ui/styles/SiteLayout.module.css'
import '@/widgets/profile/ui/styles/Profile.module.css'
import '@/widgets/projects/ui/styles/Projects.module.css'
import '@/widgets/experience/ui/styles/Experience.module.css'
import '@/widgets/education/ui/styles/Education.module.css'
import '@/widgets/contact/ui/styles/Contact.module.css'
import '@/features/loading/ui/styles/Loading.module.css'
import '@/features/konami-debug/ui/styles/KonamiDebug.module.css'
import { className } from './utils/className'
export { cx } from './utils/cx'

export const styles = new Proxy({} as Record<string, string>, {
  get: (_, key: string) => className(key),
})
