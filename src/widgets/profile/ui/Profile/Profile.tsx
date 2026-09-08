import { cx, styles } from '@/shared/styles'
import { Hero } from '../Hero/Hero'
import { Directions } from '../Directions/Directions'
import type { ProfileProps } from './types/Profile.types'

export function Profile({
  typedRole,
  reducedMotion,
  entered = true,
}: ProfileProps) {
  return (
    <section
      className={cx(styles.sectionShell, styles.profileSection)}
      id="top"
    >
      <Hero
        typedRole={typedRole}
        reducedMotion={reducedMotion}
        entered={entered}
      />
      <Directions reducedMotion={reducedMotion} entered={entered} embedded />
    </section>
  )
}
