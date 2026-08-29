import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { cvUrl } from '../../data/portfolio'
import portrait from '../../assets/dmitry-fursov.webp'
import { TypingText } from '../layout/TypingText'
import { GlitchPortrait } from './GlitchPortrait'

export interface HeroProps {
  typedRole: string
  reducedMotion: boolean
  entered?: boolean
}

export function Hero({ typedRole, reducedMotion, entered = true }: HeroProps) {
  const { t } = useTranslation()
  const stats = t('hero.stats', { returnObjects: true }) as string[]
  return (
    <motion.section
      className="hero section-shell"
      id="top"
      initial={entered ? false : 'hidden'}
      animate={entered ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
      }}
    >
      <motion.div className="hero-copy" variants={{ hidden: {}, visible: {} }}>
        <motion.span className="eyebrow" variants={heroItemVariants}>
          {t('hero.eyebrow')} <i>● ONLINE</i>
        </motion.span>
        <motion.h1 variants={heroItemVariants}>
          <span>{t('hero.hi')}</span>
          {t('hero.name')}
        </motion.h1>
        <motion.p className="hero-role" variants={heroItemVariants}>
          <TypingText text={typedRole} reducedMotion={reducedMotion} />
        </motion.p>
        <motion.p className="hero-body" variants={heroItemVariants}>
          {t('hero.body')}
        </motion.p>
        <motion.p className="terminal-line" variants={heroItemVariants}>
          <span>›_</span> {t('hero.terminal')}
        </motion.p>
        <motion.div className="hero-actions" variants={heroItemVariants}>
          <a className="button button-primary" href="#projects">
            {t('hero.projects')} <span>↘</span>
          </a>
          <a className="button" href={cvUrl} download>
            {t('hero.cv')} <span>↓</span>
          </a>
          <a className="text-link" href="#contact">
            {t('hero.contact')} ↗
          </a>
        </motion.div>
      </motion.div>
      <motion.div className="hero-portrait" variants={heroItemVariants}>
        <div className="portrait-frame">
          <GlitchPortrait
            src={portrait}
            alt={t('hero.portraitAlt')}
            active={entered}
            reducedMotion={reducedMotion}
          />
          <span className="frame-label">PROFILE_IMAGE // 001</span>
        </div>
        <div className="portrait-note">
          ROSTOV-ON-DON
          <br />
          UNITY SYSTEMS
        </div>
      </motion.div>
      <motion.div className="hero-stats" variants={heroItemVariants}>
        {stats.map((stat, index) => (
          <div key={stat}>
            <b>0{index + 1}</b>
            <span>{stat}</span>
          </div>
        ))}
      </motion.div>
    </motion.section>
  )
}

const heroItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}
