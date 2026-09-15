import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { IconBriefcase, IconMessageCircle } from '@tabler/icons-react'
import { ResumeDownload } from '@/features/resume-download'
import { TypingText } from '@/shared/ui/TypingText'
import { LiveCam } from '../LiveCam/LiveCam'
import { ActionLink } from '@/shared/ui/ActionLink'
import '../styles/Profile.module.css'
import type { HeroProps } from './types/Hero.types'
import { heroItemVariants } from './config/heroItemVariants.config'

export function Hero({ typedRole, reducedMotion, entered = true }: HeroProps) {
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
        <div className={cx(styles.heroSummary)}>
          <motion.h1 variants={heroItemVariants}>
            <span>{t('hero.hi')}</span>
            {t('hero.name')}
          </motion.h1>
          <motion.p className={cx(styles.heroRole)} variants={heroItemVariants}>
            <TypingText text={typedRole} reducedMotion={reducedMotion} />
          </motion.p>
          <motion.p
            className={cx(styles.heroLanguages)}
            variants={heroItemVariants}
          >
            {t('hero.languages')}
          </motion.p>
        </div>
        <motion.div
          className={cx(styles.heroActions)}
          variants={heroItemVariants}
        >
          <ResumeDownload label={t('hero.cv')} />
          <ActionLink variant="secondary" href="#projects">
            {t('hero.projects')}
            <IconBriefcase aria-hidden="true" size={16} stroke={1.5} />
          </ActionLink>
          <ActionLink variant="text" href="#contact">
            {t('hero.contact')}
            <IconMessageCircle aria-hidden="true" size={16} stroke={1.5} />
          </ActionLink>
        </motion.div>
      </motion.div>
      <motion.div
        className={cx(styles.heroBroadcast)}
        variants={heroItemVariants}
      >
        <LiveCam entered={entered} reducedMotion={reducedMotion} />
      </motion.div>
    </motion.div>
  )
}
