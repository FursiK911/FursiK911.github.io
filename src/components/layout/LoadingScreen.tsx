import { AnimatePresence, motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { LoadingCandidate } from '../../data/loadingCandidates'
import type { LoadingPhase } from '../../hooks/useLoadingSequence'
import portrait from '../../assets/dmitry-fursov.webp'

export interface LoadingScreenProps {
  allReady: boolean
  buttonActive: boolean
  candidates: LoadingCandidate[]
  complete: () => void
  cursorClicked: boolean
  notifyVideo: (available: boolean) => void
  phase: LoadingPhase
  queryText: string
  resultVisible: boolean
  skip: () => void
  videoFallback: boolean
}

function phaseLabel(phase: LoadingPhase, translate: (key: string) => string) {
  if (phase === 'result') return translate('loader.status.match')
  if (phase === 'searching') return translate('loader.status.scanning')
  if (phase === 'exiting') return translate('loader.status.loaded')
  if (phase === 'typing') return translate('loader.status.query')
  return translate('loader.status.initializing')
}

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
  const visible = phase !== 'complete'
  const statusText = phaseLabel(phase, t)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={`loading-screen${videoFallback ? ' video-fallback' : ''}`}
          initial={{ y: 0 }}
          animate={{ y: phase === 'exiting' ? '-100%' : 0 }}
          transition={{ duration: phase === 'exiting' ? 0.82 : 0 }}
          onAnimationComplete={() => {
            if (phase === 'exiting') complete()
          }}
          aria-label={t('loader.ariaLabel')}
        >
          <video
            className="loading-video"
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
          <div className="loading-overlay" aria-hidden="true" />
          <div className="loading-noise" aria-hidden="true" />
          <div className="loading-terminal">
            <span className="sr-only" aria-live="polite">
              {statusText}
            </span>
            <header className="loading-terminal-header">
              <span>{t('loader.title')}</span>
              <span className="loading-terminal-code">NODE: EU-07</span>
            </header>
            <div className="loading-status-row">
              <span className="loading-status-dot" aria-hidden="true" />
              <span>{statusText}</span>
              <span className="loading-terminal-code">QUERY: #8F72C1</span>
            </div>
            <div className="loading-query-wrap">
              <label htmlFor="loading-query">{t('loader.queryLabel')}</label>
              <div className="loading-query-line">
                <input
                  id="loading-query"
                  value={queryText}
                  readOnly
                  tabIndex={-1}
                  aria-label={t('loader.queryLabel')}
                />
                <button
                  type="button"
                  className={buttonActive ? 'is-active' : ''}
                  disabled={!buttonActive}
                  tabIndex={-1}
                  aria-label={t('loader.find')}
                >
                  {t('loader.find')}
                </button>
                <span
                  className={`loading-fake-cursor${cursorClicked ? ' is-clicked' : ''}`}
                  aria-hidden="true"
                />
              </div>
            </div>
            <div
              className="loading-candidates"
              aria-label={t('loader.candidates')}
            >
              {candidates.map((candidate) => (
                <div
                  className={`loading-candidate is-${candidate.status}`}
                  key={candidate.id}
                >
                  <span className="loading-candidate-status" aria-hidden="true">
                    {candidate.status === 'searching'
                      ? '◌'
                      : candidate.status === 'matched'
                        ? '✓'
                        : '×'}
                  </span>
                  <span className="loading-candidate-id">{candidate.id}</span>
                  <span className="loading-candidate-name">
                    {candidate.name}
                  </span>
                  <span className="loading-candidate-result">
                    {candidate.status === 'searching'
                      ? t('loader.checking')
                      : candidate.status === 'matched'
                        ? t('loader.verified')
                        : t('loader.noMatch')}
                  </span>
                </div>
              ))}
            </div>
            {resultVisible && (
              <>
                <div className="loading-result-backdrop" aria-hidden="true" />
                <div className="loading-result" role="status">
                  <div className="loading-result-kicker">
                    {t('loader.result.kicker')}
                  </div>
                  <h1>{t('loader.result.title')}</h1>
                  <div className="loading-result-photo">
                    <img src={portrait} alt={t('hero.portraitAlt')} />
                    <span className="loading-scan-line" aria-hidden="true" />
                  </div>
                  <strong>{t('header.name').toUpperCase()}</strong>
                  <span>{t('loader.result.role')}</span>
                  <small>{t('loader.result.verified')}</small>
                </div>
              </>
            )}
            {allReady && phase !== 'exiting' && (
              <button className="loading-skip" type="button" onClick={skip}>
                {t('loader.skip')}
              </button>
            )}
          </div>
          <span
            className="loading-corner loading-corner-top"
            aria-hidden="true"
          />
          <span
            className="loading-corner loading-corner-bottom"
            aria-hidden="true"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
