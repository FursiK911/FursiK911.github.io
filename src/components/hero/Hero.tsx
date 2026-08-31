import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { IconDownload } from '@tabler/icons-react'
import { cvUrl } from '../../data/portfolio'
import portrait from '../../assets/dmitry-fursov.webp'
import { TypingText } from '../layout/TypingText'
import { GlitchPortrait } from './GlitchPortrait'
import { ActionLink } from '../ui/ActionLink'

export interface HeroProps {
  typedRole: string
  reducedMotion: boolean
  entered?: boolean
}

export function Hero({ typedRole, reducedMotion, entered = true }: HeroProps) {
  const { t } = useTranslation()
  return (
    <motion.section
      className="hero section-shell"
      id="top"
      initial={reducedMotion || entered ? false : 'hidden'}
      animate={reducedMotion || entered ? 'visible' : 'hidden'}
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
        <motion.p className="terminal-line" variants={heroItemVariants}>
          <span>›_</span> {t('hero.terminal')}
        </motion.p>
        <motion.div className="hero-actions" variants={heroItemVariants}>
          <ActionLink variant="primary" href="#projects">
            {t('hero.projects')} <span>↘</span>
          </ActionLink>
          <ActionLink variant="secondary" href={cvUrl} download>
            {t('hero.cv')}
            <IconDownload aria-hidden="true" size={16} stroke={1.5} />
          </ActionLink>
          <ActionLink variant="text" href="#contact">
            {t('hero.contact')} ↗
          </ActionLink>
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
        <div className="portrait-note">SOFTWARE SYSTEMS</div>
      </motion.div>
    </motion.section>
  )
}

const heroItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}
