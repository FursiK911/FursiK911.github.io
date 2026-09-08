import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { cx, styles } from '@/shared/styles'
import { liveCamConfig, liveCamStatusClassNames } from './config/liveCam.config'
import { useLiveCam } from './model/useLiveCam/useLiveCam'
import { useLiveCamHud } from './model/useLiveCamHud/useLiveCamHud'
import { useLiveCamTerminal } from './model/useLiveCamTerminal/useLiveCamTerminal'
import { useLiveCamTerminalScroll } from './model/useLiveCamTerminalScroll/useLiveCamTerminalScroll'
import type {
  LiveCamTrackerStyle,
  LiveCamWaveStyle,
} from './types/LiveCamHud.types'
import type { LiveCamProps } from './types/LiveCam.types'
import { formatTimecode } from './utils/formatTimecode'
import { sliceLiveCamTerminalTokens } from './utils/sliceLiveCamTerminalTokens'
import './styles/LiveCam.module.css'

export function LiveCam({ entered, reducedMotion }: LiveCamProps) {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const {
    attempt,
    isInViewport,
    onCanPlay,
    onError,
    retryRemainingSeconds,
    shouldLoadVideo,
    status,
  } = useLiveCam({ containerRef, entered, reducedMotion, videoRef })
  const isLive = status === 'live'
  const { streamTime, telemetry, tracker, waveform } = useLiveCamHud({
    isInViewport,
    reducedMotion,
    status,
  })
  const { activeLine, completedLines } = useLiveCamTerminal({
    isInViewport,
    isLive,
    reducedMotion,
  })
  const activeTerminalLineRef = useRef<HTMLSpanElement>(null)
  useLiveCamTerminalScroll({
    lineRef: activeTerminalLineRef,
    typedLength: activeLine.typedLength,
  })

  return (
    <section
      aria-label={t('hero.liveCam.ariaLabel')}
      className={cx(styles.liveCam, liveCamStatusClassNames[status])}
      data-live-cam-status={status}
      ref={containerRef}
    >
      <video
        aria-hidden="true"
        className={cx(styles.liveCamVideo)}
        controls={false}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        key={attempt}
        loop
        muted
        onCanPlay={onCanPlay}
        onContextMenu={(event) => event.preventDefault()}
        onError={onError}
        playsInline
        preload={shouldLoadVideo ? 'auto' : 'none'}
        ref={videoRef}
        src={shouldLoadVideo ? liveCamConfig.source : undefined}
        tabIndex={-1}
      />
      <div className={cx(styles.liveCamVideoShade)} aria-hidden="true" />
      <div className={cx(styles.liveCamNoise)} aria-hidden="true" />

      {isLive && (
        <>
          <header className={cx(styles.liveCamHeader)}>
            <span className={cx(styles.liveCamLiveMark)}>
              <i aria-hidden="true" /> {t('hero.liveCam.live')}
            </span>
            <span>{t('hero.liveCam.channel')}</span>
            <span data-live-cam-stream-time>{formatTimecode(streamTime)}</span>
          </header>

          <div
            aria-hidden="true"
            className={cx(styles.liveCamTerminal)}
            data-live-cam-terminal
          >
            {completedLines.map((line, lineIndex) => (
              <span
                className={cx(styles.liveCamTerminalEntry)}
                data-terminal-severity={line.entry.severity}
                key={`${line.entry.id}-${lineIndex}`}
              >
                {sliceLiveCamTerminalTokens(
                  line.entry.tokens,
                  line.typedLength,
                ).map((token, tokenIndex) => (
                  <i
                    data-terminal-tone={token.tone}
                    key={`${token.text}-${tokenIndex}`}
                  >
                    {token.text}
                  </i>
                ))}
              </span>
            ))}
            <span
              className={cx(
                styles.liveCamTerminalEntry,
                styles.liveCamTerminalEntryActive,
              )}
              data-terminal-active
              data-terminal-severity={activeLine.entry.severity}
              ref={activeTerminalLineRef}
            >
              <span>
                {sliceLiveCamTerminalTokens(
                  activeLine.entry.tokens,
                  activeLine.typedLength,
                ).map((token, tokenIndex) => (
                  <i
                    data-terminal-tone={token.tone}
                    key={`${token.text}-${tokenIndex}`}
                  >
                    {token.text}
                  </i>
                ))}
                <b className={cx(styles.liveCamTerminalCaret)}>|</b>
              </span>
            </span>
          </div>

          <div
            aria-hidden="true"
            className={cx(styles.liveCamTracker)}
            data-live-cam-tracker
          >
            <div
              className={cx(styles.liveCamTrackerFrame)}
              style={
                {
                  '--tracker-x': `${tracker.x}%`,
                  '--tracker-y': `${tracker.y}%`,
                } as LiveCamTrackerStyle
              }
            >
              <span>TRACK // TGT-07</span>
              <b>{`LOCK ${tracker.lock}%`}</b>
            </div>
          </div>

          <div
            aria-hidden="true"
            className={cx(styles.liveCamTelemetry)}
            data-live-cam-telemetry
          >
            <span className={cx(styles.liveCamMetric)}>
              <i>{t('hero.liveCam.telemetry.signal')}:</i>
              <b>{telemetry.signal}%</b>
            </span>
            <span className={cx(styles.liveCamMetric)}>
              <i>{t('hero.liveCam.telemetry.uplink')}:</i>
              <b>{telemetry.uplink} MB/S</b>
            </span>
            <span className={cx(styles.liveCamMetric)}>
              <i>{t('hero.liveCam.telemetry.latency')}:</i>
              <b>{telemetry.latency} MS</b>
            </span>
            <span className={cx(styles.liveCamMetric)}>
              <i>{t('hero.liveCam.telemetry.fps')}:</i>
              <b>{telemetry.fps}</b>
            </span>
          </div>

          <div className={cx(styles.liveCamWaveform)} aria-hidden="true">
            {waveform.map((height, index) => (
              <i
                key={`${height}-${index}`}
                style={{ '--wave-height': `${height}%` } as LiveCamWaveStyle}
              />
            ))}
          </div>
        </>
      )}

      {(status === 'connecting' || status === 'signal-lost') && (
        <div className={cx(styles.liveCamStatus)} role="status">
          {status === 'connecting' && (
            <span>{t('hero.liveCam.status.connecting')}</span>
          )}
          {status === 'signal-lost' && (
            <span>
              {t('hero.liveCam.status.signalLost')}
              {retryRemainingSeconds !== null &&
                ` // ${t('hero.liveCam.status.retry', {
                  seconds: retryRemainingSeconds,
                })}`}
            </span>
          )}
        </div>
      )}

      <span
        className={cx(styles.liveCamCorner, styles.liveCamCornerTopLeft)}
        aria-hidden="true"
      />
      <span
        className={cx(styles.liveCamCorner, styles.liveCamCornerTopRight)}
        aria-hidden="true"
      />
      <span
        className={cx(styles.liveCamCorner, styles.liveCamCornerBottomLeft)}
        aria-hidden="true"
      />
      <span
        className={cx(styles.liveCamCorner, styles.liveCamCornerBottomRight)}
        aria-hidden="true"
      />
    </section>
  )
}
