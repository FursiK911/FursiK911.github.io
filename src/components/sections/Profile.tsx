import { Hero } from '../hero/Hero'
import { Directions } from './Directions'

export interface ProfileProps {
  typedRole: string
  reducedMotion: boolean
  entered?: boolean
}

export function Profile({
  typedRole,
  reducedMotion,
  entered = true,
}: ProfileProps) {
  return (
    <section className="section-shell profile-section" id="top">
      <Hero
        typedRole={typedRole}
        reducedMotion={reducedMotion}
        entered={entered}
      />
      <Directions reducedMotion={reducedMotion} entered={entered} embedded />
    </section>
  )
}
