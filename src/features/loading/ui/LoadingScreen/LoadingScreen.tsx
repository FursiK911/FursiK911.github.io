import { cx, styles } from '@/shared/styles'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, type CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import type { LoadingScreenProps } from './types/LoadingScreen.types'
import { loadingAnimationConfig } from '../../model/config/loading-animation.config'
import { useLoadingAnimationSpeed } from '../../model/useLoadingAnimationSpeed/useLoadingAnimationSpeed'
import portrait from '@/shared/assets/dmitry-fursov.webp'
import '../styles/Loading.module.css'

import { phaseLabel } from './utils/phaseLabel'

export function LoadingScreen({
  allReady,
  buttonActive,
  candidates,
  complete,
  cursorClicked,
  notifyVideo,
  phase,
  queryText,
  resultVisible,
  skip,
  videoFallback,
}: LoadingScreenProps) {
  const { t } = useTranslation()
  const animationSpeed = useLoadingAnimationSpeed()
  const animationFactor = Math.max(animationSpeed, 0.01)
  const visible = phase !== 'complete'
  const statusText = phaseLabel(phase, t)
  const candidatesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (candidates.length === 0 || typeof window === 'undefined') return

    const isMobile = window.matchMedia('(max-width: 560px)').matches
    if (!isMobile) return

    const lastCandidate = candidatesRef.current?.lastElementChild
    if (!(lastCandidate instanceof HTMLElement)) return

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    lastCandidate.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      block: 'nearest',
    })
  }, [candidates.length])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={cx(
            styles.loadingScreen,
            videoFallback && styles.videoFallback,
            animationSpeed === 0 && styles.isPaused,
          )}
          style={
            {
              '--loading-animation-speed': Math.max(animationSpeed, 0.01),
              '--loading-blink-duration': `${loadingAnimationConfig.css.blink / animationFactor}s`,
              '--loading-cursor-opacity-duration': `${loadingAnimationConfig.css.cursorOpacity / animationFactor}s`,
              '--loading-cursor-transform-duration': `${loadingAnimationConfig.css.cursorTransform / animationFactor}s`,
              '--loading-candidate-in-duration': `${loadingAnimationConfig.css.candidateIn / animationFactor}s`,
              '--loading-spinner-duration': `${loadingAnimationConfig.css.spinner / animationFactor}s`,
              '--loading-result-in-duration': `${loadingAnimationConfig.css.resultIn / animationFactor}s`,
              '--loading-photo-delay': `${loadingAnimationConfig.css.photoDelay / animationFactor}s`,
              '--loading-scan-duration': `${loadingAnimationConfig.css.scan / animationFactor}s`,
              '--loading-candidate-fade-delay': `${loadingAnimationConfig.candidateFadeDelay / animationFactor}ms`,
              '--loading-candidate-fade-duration': `${loadingAnimationConfig.candidateFadeDuration / animationFactor}ms`,
            } as CSSProperties
          }
          initial={{ y: 0 }}
          animate={{ y: phase === 'exiting' ? '-100%' : 0 }}
          transition={{
            duration:
              phase === 'exiting'
                ? loadingAnimationConfig.exitDuration /
                  Math.max(animationSpeed, 0.01)
                : 0,
          }}
          onAnimationComplete={() => {
            if (phase === 'exiting') complete()
          }}
          aria-label={t('loader.ariaLabel')}
        >
          <video
            className={cx(styles.loadingVideo)}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            onCanPlay={() => notifyVideo(true)}
            onError={() => notifyVideo(false)}
          >
            <source
              src="/videos/loading_background_v2.webm"
              type="video/webm"
            />
          </video>
          <div className={cx(styles.loadingOverlay)} aria-hidden="true" />
          <div className={cx(styles.loadingNoise)} aria-hidden="true" />
          <div className={cx(styles.loadingTerminal)}>
            <span className={cx(styles.srOnly)} aria-live="polite">
              {statusText}
            </span>
            <header className={cx(styles.loadingTerminalHeader)}>
              <span>{t('loader.title')}</span>
              <span className={cx(styles.loadingTerminalCode)}>
                NODE: EU-07
              </span>
            </header>
            <div className={cx(styles.loadingStatusRow)}>
              <span
                className={cx(styles.loadingStatusDot)}
                aria-hidden="true"
              />
              <span>{statusText}</span>
              <span className={cx(styles.loadingTerminalCode)}>
                QUERY: #8F72C1
              </span>
            </div>
            <div className={cx(styles.loadingQueryWrap)}>
              <label htmlFor="loading-query">{t('loader.queryLabel')}</label>
              <div className={cx(styles.loadingQueryLine)}>
                <input
                  id="loading-query"
                  value={queryText}
                  readOnly
                  tabIndex={-1}
                  aria-label={t('loader.queryLabel')}
                />
                <span
                  className={cx(styles.loadingQueryDisplay)}
                  aria-hidden="true"
                >
                  <span>{queryText}</span>
                  {phase !== 'initializing' && (
                    <span
                      className={cx(
                        styles.typingCursor,
                        styles.loadingQueryCursor,
                      )}
                    >
                      |
                    </span>
                  )}
                </span>
                <button
                  type="button"
                  className={buttonActive ? cx(styles.isActive) : undefined}
                  disabled={!buttonActive}
                  tabIndex={-1}
                  aria-label={t('loader.find')}
                >
                  {t('loader.find')}
                </button>
                <span
                  className={cx(
                    styles.loadingFakeCursor,
                    cursorClicked && styles.isClicked,
                  )}
                  aria-hidden="true"
                />
              </div>
            </div>
            <div
              className={cx(styles.loadingCandidates)}
              ref={candidatesRef}
              aria-label={t('loader.candidates')}
            >
              {candidates.map((candidate) => (
                <div
                  className={cx(
                    styles.loadingCandidate,
                    styles['is-' + candidate.status],
                    candidate.dimmed && styles.isDimmed,
                  )}
                  key={candidate.id}
                >
                  <span
                    className={cx(styles.loadingCandidateStatus)}
                    aria-hidden="true"
                  >
                    {candidate.status === 'searching'
                      ? '◌'
                      : candidate.status === 'matched'
                        ? '✓'
                        : '×'}
                  </span>
                  <span className={cx(styles.loadingCandidateId)}>
                    {candidate.id}
                  </span>
                  <span className={cx(styles.loadingCandidateName)}>
                    {candidate.name}
                  </span>
                  <span className={cx(styles.loadingCandidateResult)}>
                    {candidate.status === 'searching'
                      ? t('loader.checking')
                      : candidate.status === 'matched'
                        ? t('loader.verified')
                        : t('loader.noMatch')}
                  </span>
                </div>
              ))}
            </div>
            {phase === 'searching' && (
              <div
                className={cx(styles.loadingCandidatesScan)}
                aria-live="polite"
              >
                <span
                  className={cx(styles.loadingCandidatesScanIcon)}
                  aria-hidden="true"
                >
                  ◌
                </span>
                <span>{t('loader.status.scanning')}</span>
              </div>
            )}
            {resultVisible && (
              <>
                <div
                  className={cx(styles.loadingResultBackdrop)}
                  aria-hidden="true"
                />
                <div className={cx(styles.loadingResult)} role="status">
                  <div className={cx(styles.loadingResultKicker)}>
                    {t('loader.result.kicker')}
                  </div>
                  <h1>{t('loader.result.title')}</h1>
                  <div className={cx(styles.loadingResultPhoto)}>
                    <img src={portrait} alt={t('hero.portraitAlt')} />
                    <span
                      className={cx(styles.loadingScanLine)}
                      aria-hidden="true"
                    />
                  </div>
                  <strong>{t('header.name').toUpperCase()}</strong>
                  <span>{t('loader.result.role')}</span>
                  <small>{t('loader.result.verified')}</small>
                </div>
              </>
            )}
            {allReady && phase !== 'exiting' && (
              <button
                className={cx(styles.loadingSkip)}
                type="button"
                onClick={skip}
              >
                {t('loader.skip')}
              </button>
            )}
          </div>
          <span
            className={cx(styles.loadingCorner, styles.loadingCornerTop)}
            aria-hidden="true"
          />
          <span
            className={cx(styles.loadingCorner, styles.loadingCornerBottom)}
            aria-hidden="true"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
