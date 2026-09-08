import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { IconDownload } from '@tabler/icons-react'
import { cvUrl } from '@/entities/project'
import portrait from '@/shared/assets/dmitry-fursov.webp'
import { TypingText } from '@/shared/ui/TypingText'
import { GlitchPortrait } from '../GlitchPortrait/GlitchPortrait'
import { LiveCam } from '../LiveCam/LiveCam'
import { ActionLink } from '@/shared/ui/ActionLink'
import '../styles/Profile.module.css'
import type { HeroProps } from './types/Hero.types'
import { heroItemVariants } from './config/heroItemVariants.config'

export function Hero({
  typedRole,
  reducedMotion,
  entered = true,
  onPortraitReady,
  portraitEffectsActive = true,
  portraitEffectsReady = true,
  portraitTargetRef,
  portraitVisible = true,
}: HeroProps) {
  const { t } = useTranslation()
  return (
    <motion.div
      className={cx(styles.hero)}
      initial={reducedMotion || entered ? false : 'hidden'}
      animate={reducedMotion || entered ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
      }}
    >
      <motion.div
        className={cx(styles.heroCopy)}
        variants={{ hidden: {}, visible: {} }}
      >
        <motion.span className={cx(styles.eyebrow)} variants={heroItemVariants}>
          {t('hero.eyebrow')} <i>● ONLINE</i>
        </motion.span>
        <motion.h1 variants={heroItemVariants}>
          <span>{t('hero.hi')}</span>
          {t('hero.name')}
        </motion.h1>
        <motion.p className={cx(styles.heroRole)} variants={heroItemVariants}>
          <TypingText text={typedRole} reducedMotion={reducedMotion} />
        </motion.p>
        <motion.div variants={heroItemVariants}>
          <LiveCam entered={entered} reducedMotion={reducedMotion} />
        </motion.div>
        <motion.div
          className={cx(styles.heroActions)}
          variants={heroItemVariants}
        >
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
      <div className={cx(styles.heroPortrait)}>
        <div
          className={cx(
            styles.portraitFrame,
            !portraitEffectsReady && styles.isPortraitPending,
            portraitVisible && styles.isBasePortraitVisible,
            !portraitEffectsReady && styles.isPortraitHandoff,
          )}
        >
          <GlitchPortrait
            src={portrait}
            alt={t('hero.portraitAlt')}
            active={entered && portraitEffectsActive}
            imageRef={portraitTargetRef}
            onPortraitReady={onPortraitReady}
            portraitVisible={portraitVisible}
            reducedMotion={reducedMotion}
          />
          <span className={cx(styles.frameLabel)}>PROFILE_IMAGE // 001</span>
        </div>
        <div className={cx(styles.portraitNote)}>{t('hero.languages')}</div>
      </div>
    </motion.div>
  )
}
