import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { cx, styles } from '@/shared/styles'
import { liveCamConfig, liveCamStatusClassNames } from './config/liveCam.config'
import { useLiveCam } from './model/useLiveCam/useLiveCam'
import { useLiveCamHud } from './model/useLiveCamHud/useLiveCamHud'
import type {
  LiveCamTrackerStyle,
  LiveCamWaveStyle,
} from './types/LiveCamHud.types'
import type { LiveCamProps } from './types/LiveCam.types'
import { formatTimecode } from './utils/formatTimecode'
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
  const { events, streamTime, telemetry, tracker, waveform } = useLiveCamHud({
    isInViewport,
    reducedMotion,
    retryRemainingSeconds,
    status,
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

      <header className={cx(styles.liveCamHeader)}>
        <span className={cx(styles.liveCamLiveMark)}>
          <i aria-hidden="true" /> {t('hero.liveCam.live')}
        </span>
        <span>{t('hero.liveCam.channel')}</span>
        <span data-live-cam-stream-time>{formatTimecode(streamTime)}</span>
      </header>

      <div
        aria-hidden="true"
        className={cx(styles.liveCamJournal)}
        data-live-cam-journal
      >
        {events.map((event, index) => (
          <span
            className={cx(styles.liveCamJournalEntry)}
            data-journal-severity={event.severity}
            key={`${event.code}-${event.time}-${index}`}
          >
            <time>{formatTimecode(event.time)}</time>
            <b>{event.severity.toUpperCase()}</b>
            <i>{event.code}</i>
            <em>{event.message}</em>
          </span>
        ))}
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
          <b>
            {status === 'signal-lost' ? 'LOCK LOST' : `LOCK ${tracker.lock}%`}
          </b>
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

      <div className={cx(styles.liveCamStatus)} role="status">
        {status === 'connecting' && (
          <span>{t('hero.liveCam.status.connecting')}</span>
        )}
        {status === 'signal-lost' && (
          <span>{t('hero.liveCam.status.signalLost')}</span>
        )}
      </div>

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
