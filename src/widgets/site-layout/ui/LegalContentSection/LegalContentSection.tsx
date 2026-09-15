import { motion } from 'motion/react'
import { useScrollReveal } from '@/shared/lib/useScrollReveal'
import type { LegalContentSectionProps } from './types/LegalContentSection.types'

export function LegalContentSection({
  children,
  title,
}: LegalContentSectionProps) {
  const scrollReveal = useScrollReveal()

  return (
    <motion.section {...scrollReveal}>
      <h2>{title}</h2>
      {children}
    </motion.section>
  )
}
