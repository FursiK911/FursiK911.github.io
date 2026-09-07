import { cx, styles } from '@/shared/styles'
import { Hero } from '../Hero/Hero'
import { Directions } from '../Directions/Directions'
import type { ProfileProps } from './types/Profile.types'

export function Profile({
  typedRole,
  reducedMotion,
  entered = true,
  onPortraitReady,
  portraitEffectsActive = true,
  portraitEffectsReady = true,
  portraitTargetRef,
  portraitVisible = true,
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
        onPortraitReady={onPortraitReady}
        portraitEffectsActive={portraitEffectsActive}
        portraitEffectsReady={portraitEffectsReady}
        portraitTargetRef={portraitTargetRef}
        portraitVisible={portraitVisible}
      />
      <Directions reducedMotion={reducedMotion} entered={entered} embedded />
    </section>
  )
}
