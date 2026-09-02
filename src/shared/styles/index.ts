import './Shared.module.css'
import '@/widgets/site-layout/ui/SiteLayout.module.css'
import '@/widgets/profile/ui/Profile.module.css'
import '@/widgets/projects/ui/Projects.module.css'
import '@/widgets/experience/ui/Experience.module.css'
import '@/widgets/education/ui/Education.module.css'
import '@/widgets/skills/ui/Skills.module.css'
import '@/widgets/contact/ui/Contact.module.css'
import '@/features/loading/ui/Loading.module.css'
import '@/features/konami-debug/ui/KonamiDebug.module.css'

const className = (key: string) =>
  key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)

export const styles = new Proxy({} as Record<string, string>, {
  get: (_, key: string) => className(key),
})

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}
