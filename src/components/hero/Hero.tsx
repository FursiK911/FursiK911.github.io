import { useTranslation } from 'react-i18next'
import { cvUrl } from '../../data/portfolio'
import portrait from '../../assets/dmitry-fursov.webp'
import { TypingText } from '../layout/TypingText'

export interface HeroProps {
  typedRole: string
  reducedMotion: boolean
}

export function Hero({ typedRole, reducedMotion }: HeroProps) {
  const { t } = useTranslation()
  const stats = t('hero.stats', { returnObjects: true }) as string[]
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <span className="eyebrow">
          {t('hero.eyebrow')} <i>● ONLINE</i>
        </span>
        <h1>
          <span>{t('hero.hi')}</span>
          {t('hero.name')}
        </h1>
        <p className="hero-role">
          <TypingText text={typedRole} reducedMotion={reducedMotion} />
        </p>
        <p className="hero-body">{t('hero.body')}</p>
        <p className="terminal-line">
          <span>›_</span> {t('hero.terminal')}
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            {t('hero.projects')} <span>↘</span>
          </a>
          <a className="button" href={cvUrl} download>
            {t('hero.cv')} <span>↓</span>
          </a>
          <a className="text-link" href="#contact">
            {t('hero.contact')} ↗
          </a>
        </div>
      </div>
      <div className="hero-portrait">
        <div className="portrait-frame">
          <img src={portrait} alt={t('hero.portraitAlt')} />
          <span className="frame-label">PROFILE_IMAGE // 001</span>
        </div>
        <div className="portrait-note">
          ROSTOV-ON-DON
          <br />
          UNITY SYSTEMS
        </div>
      </div>
      <div className="hero-stats">
        {stats.map((stat, index) => (
          <div key={stat}>
            <b>0{index + 1}</b>
            <span>{stat}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
