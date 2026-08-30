import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

export interface FutureExperienceItemProps {
  index: number
  reducedMotion: boolean
}

export function FutureExperienceItem({
  index,
  reducedMotion,
}: FutureExperienceItemProps) {
  const { t } = useTranslation()

  return (
    <motion.article
      className="experience-timeline-item experience-future-item"
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reducedMotion ? undefined : { once: true, amount: 0.35 }}
      transition={{ duration: 0.35, delay: reducedMotion ? 0 : index * 0.06 }}
    >
      <span className="experience-milestone" aria-hidden="true" />
      <div className="experience-timeline-card">
        <span className="experience-future-label">
          {t('experience.nextLabel')}
        </span>
        <h3>{t('experience.nextTitle')}</h3>
        <a className="experience-future-cta" href="#contact">
          {t('experience.nextCta')} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </motion.article>
  )
}
