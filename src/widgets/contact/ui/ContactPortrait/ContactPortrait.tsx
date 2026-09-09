import { Blockquote } from '@mantine/core'
import { useInViewport } from '@mantine/hooks'
import { useTranslation } from 'react-i18next'
import { cx, styles } from '@/shared/styles'
import portrait from '@/shared/assets/dmitry-fursov.webp'
import { GlitchPortrait } from '../GlitchPortrait/GlitchPortrait'
import type { ContactPortraitProps } from './types/ContactPortrait.types'

export function ContactPortrait({
  entered,
  reducedMotion,
}: ContactPortraitProps) {
  const { t } = useTranslation()
  const { inViewport, ref } = useInViewport<HTMLElement>()

  return (
    <figure className={cx(styles.contactPortrait)} ref={ref}>
      <div className={cx(styles.portraitFrame)}>
        <GlitchPortrait
          active={entered && inViewport}
          alt={t('hero.portraitAlt')}
          reducedMotion={reducedMotion}
          src={portrait}
        />
        <Blockquote className={cx(styles.contactQuote)} icon={null} unstyled>
          {t('contact.title')}
        </Blockquote>
        <span className={cx(styles.frameLabel)}>PROFILE_IMAGE // 001</span>
      </div>
    </figure>
  )
}
