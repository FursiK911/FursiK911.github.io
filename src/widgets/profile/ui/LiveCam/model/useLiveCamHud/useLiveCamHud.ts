import { useEffect, useState } from 'react'
import { liveCamHudConfig } from '../../config/liveCamHud.config'
import {
  initialLiveCamTelemetry,
  initialLiveCamTracker,
  initialLiveCamWaveform,
} from '../../data/liveCamHud.data'
import type {
  LiveCamTelemetryState,
  LiveCamTrackerState,
  UseLiveCamHudArgs,
} from '../../types/LiveCamHud.types'

export function useLiveCamHud({
  isInViewport,
  reducedMotion,
  status,
}: UseLiveCamHudArgs) {
  const [streamOffset] = useState(
    () =>
      liveCamHudConfig.streamOffsetMinimumSeconds +
      Math.floor(
        Math.random() *
          (liveCamHudConfig.streamOffsetMaximumSeconds -
            liveCamHudConfig.streamOffsetMinimumSeconds +
            1),
      ),
  )
  const [streamStartedAt] = useState(() => Date.now())
  const [streamTime, setStreamTime] = useState(streamOffset)
  const [telemetry, setTelemetry] = useState<LiveCamTelemetryState>(
    initialLiveCamTelemetry,
  )
  const [waveform, setWaveform] = useState(initialLiveCamWaveform)
  const [tracker, setTracker] = useState<LiveCamTrackerState>(
    initialLiveCamTracker,
  )
  const [isTrackerVisible, setIsTrackerVisible] = useState(false)
  useEffect(() => {
    if (reducedMotion || !isInViewport || status !== 'live') return

    const updateStreamTime = () => {
      setStreamTime(
        streamOffset + Math.floor((Date.now() - streamStartedAt) / 1000),
      )
    }

    updateStreamTime()
    const timer = window.setInterval(updateStreamTime, 1000)
    return () => window.clearInterval(timer)
  }, [isInViewport, reducedMotion, status, streamOffset, streamStartedAt])

  useEffect(() => {
    if (!isInViewport || reducedMotion || status !== 'live') return

    const timer = window.setInterval(() => {
      setTelemetry((current) => ({
        ...current,
        signal: Number(
          Math.min(
            liveCamHudConfig.signal.maximum,
            Math.max(
              liveCamHudConfig.signal.minimum,
              current.signal +
                (Math.random() * 2 - 1) * liveCamHudConfig.signal.step,
            ),
          ).toFixed(1),
        ),
      }))
    }, liveCamHudConfig.signal.intervalMs)

    return () => window.clearInterval(timer)
  }, [isInViewport, reducedMotion, status])

  useEffect(() => {
    if (!isInViewport || reducedMotion || status !== 'live') return

    let timer: number | undefined
    let isDisposed = false

    function getHiddenDuration() {
      return (
        liveCamHudConfig.trackerHiddenMinimumMs +
        Math.round(
          Math.random() *
            (liveCamHudConfig.trackerHiddenMaximumMs -
              liveCamHudConfig.trackerHiddenMinimumMs),
        )
      )
    }

    function scheduleAppearance(delay: number) {
      timer = window.setTimeout(() => {
        if (isDisposed) return

        setIsTrackerVisible(true)
        timer = window.setTimeout(() => {
          if (isDisposed) return

          setIsTrackerVisible(false)
          scheduleAppearance(
            liveCamHudConfig.trackerFadeDurationMs + getHiddenDuration(),
          )
        }, liveCamHudConfig.trackerVisibleDurationMs)
      }, delay)
    }

    scheduleAppearance(getHiddenDuration())

    return () => {
      isDisposed = true
      if (timer !== undefined) window.clearTimeout(timer)
      setIsTrackerVisible(false)
    }
  }, [isInViewport, reducedMotion, status])

  useEffect(() => {
    if (!isInViewport || reducedMotion || status !== 'live') return

    const timer = window.setInterval(() => {
      setTelemetry((current) => ({
        ...current,
        uplink: Number(
          Math.min(
            liveCamHudConfig.uplink.maximum,
            Math.max(
              liveCamHudConfig.uplink.minimum,
              current.uplink +
                (Math.random() * 2 - 1) * liveCamHudConfig.uplink.step,
            ),
          ).toFixed(1),
        ),
      }))
    }, liveCamHudConfig.uplink.intervalMs)

    return () => window.clearInterval(timer)
  }, [isInViewport, reducedMotion, status])

  useEffect(() => {
    if (!isInViewport || reducedMotion || status !== 'live') return

    const timer = window.setInterval(() => {
      setTelemetry((current) => ({
        ...current,
        latency: Math.round(
          Math.min(
            liveCamHudConfig.latency.maximum,
            Math.max(
              liveCamHudConfig.latency.minimum,
              current.latency +
                (Math.random() * 2 - 1) * liveCamHudConfig.latency.step,
            ),
          ),
        ),
      }))
    }, liveCamHudConfig.latency.intervalMs)

    return () => window.clearInterval(timer)
  }, [isInViewport, reducedMotion, status])

  useEffect(() => {
    if (!isInViewport || reducedMotion || status !== 'live') return

    const timer = window.setInterval(() => {
      setTelemetry((current) => ({
        ...current,
        fps: Number(
          Math.min(
            liveCamHudConfig.fps.maximum,
            Math.max(
              liveCamHudConfig.fps.minimum,
              current.fps + (Math.random() * 2 - 1) * liveCamHudConfig.fps.step,
            ),
          ).toFixed(1),
        ),
      }))
    }, liveCamHudConfig.fps.intervalMs)

    return () => window.clearInterval(timer)
  }, [isInViewport, reducedMotion, status])

  useEffect(() => {
    if (!isInViewport || reducedMotion || status !== 'live') return

    const timer = window.setInterval(() => {
      setWaveform((current) =>
        current.map((height) => {
          return Math.round(
            Math.min(88, Math.max(12, height + (Math.random() * 2 - 1) * 24)),
          )
        }),
      )
    }, liveCamHudConfig.waveformIntervalMs)

    return () => window.clearInterval(timer)
  }, [isInViewport, reducedMotion, status])

  useEffect(() => {
    if (!isInViewport || reducedMotion || status !== 'live') return

    const trackerTimer = window.setInterval(() => {
      setTracker((current) => ({
        ...current,
        lock: Number(
          Math.min(
            99.8,
            Math.max(82, current.lock + (Math.random() * 2 - 1) * 3),
          ).toFixed(1),
        ),
      }))
    }, liveCamHudConfig.trackerIntervalMs)
    const trackerPositionTimer = window.setInterval(() => {
      setTracker((current) => ({
        ...current,
        x: Math.round(18 + Math.random() * 38),
        y: Math.round(28 + Math.random() * 38),
      }))
    }, liveCamHudConfig.trackerPositionIntervalMs)

    return () => {
      window.clearInterval(trackerTimer)
      window.clearInterval(trackerPositionTimer)
    }
  }, [isInViewport, reducedMotion, status])

  return {
    streamTime,
    telemetry,
    tracker,
    isTrackerVisible,
    waveform,
  }
}
