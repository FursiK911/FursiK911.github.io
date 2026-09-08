import { useEffect, useRef, useState } from 'react'
import { liveCamHudConfig } from '../../config/liveCamHud.config'
import {
  initialLiveCamTelemetry,
  initialLiveCamTracker,
  initialLiveCamWaveform,
  liveCamHudEvents,
} from '../../data/liveCamHud.data'
import type {
  LiveCamJournalEvent,
  LiveCamTelemetryState,
  LiveCamTrackerState,
  UseLiveCamHudArgs,
} from '../../types/LiveCamHud.types'

export function useLiveCamHud({
  isInViewport,
  reducedMotion,
  retryRemainingSeconds,
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
  const previousStatusRef = useRef(status)
  const streamTimeRef = useRef(streamOffset)
  const [streamTime, setStreamTime] = useState(streamOffset)
  const [telemetry, setTelemetry] = useState<LiveCamTelemetryState>(
    initialLiveCamTelemetry,
  )
  const [waveform, setWaveform] = useState(initialLiveCamWaveform)
  const [tracker, setTracker] = useState<LiveCamTrackerState>(
    initialLiveCamTracker,
  )
  const [events, setEvents] = useState<LiveCamJournalEvent[]>([])

  useEffect(() => {
    streamTimeRef.current = streamTime
  }, [streamTime])

  useEffect(() => {
    if (reducedMotion || !isInViewport) return

    const updateStreamTime = () => {
      setStreamTime(
        streamOffset + Math.floor((Date.now() - streamStartedAt) / 1000),
      )
    }

    updateStreamTime()
    const timer = window.setInterval(updateStreamTime, 1000)
    return () => window.clearInterval(timer)
  }, [isInViewport, reducedMotion, streamOffset, streamStartedAt])

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
    if (
      !isInViewport ||
      reducedMotion ||
      (status !== 'connecting' && status !== 'live')
    ) {
      return
    }

    const timer = window.setInterval(() => {
      setWaveform((current) =>
        current.map((height) => {
          const multiplier = status === 'connecting' ? 0.55 : 1
          return Math.round(
            Math.min(
              88,
              Math.max(12, height + (Math.random() * 2 - 1) * 24) * multiplier,
            ),
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

  useEffect(() => {
    if (reducedMotion) return

    const previousStatus = previousStatusRef.current
    previousStatusRef.current = status

    if (status === 'signal-lost') {
      setEvents([
        ...liveCamHudEvents.signalLost.map((event) => ({
          ...event,
          time: streamTimeRef.current,
        })),
        {
          code: 'RTRY-01',
          message: `RETRY IN ${retryRemainingSeconds ?? 0}S`,
          severity: 'warning',
          time: streamTimeRef.current,
        },
      ])
      return
    }

    if (!isInViewport || (status !== 'connecting' && status !== 'live')) return

    const source =
      status === 'connecting'
        ? liveCamHudEvents.connecting
        : [
            ...(previousStatus === 'signal-lost'
              ? liveCamHudEvents.restored
              : []),
            ...liveCamHudEvents.live,
          ]
    let eventIndex = 0
    setEvents(
      source.slice(0, 8).map((event) => ({
        ...event,
        time: streamTimeRef.current,
      })),
    )

    const timer = window.setInterval(() => {
      setEvents((current) => [
        ...current.slice(-7),
        {
          ...source[eventIndex++ % source.length],
          time: streamTimeRef.current,
        },
      ])
    }, liveCamHudConfig.eventIntervalMs)

    return () => window.clearInterval(timer)
  }, [isInViewport, reducedMotion, retryRemainingSeconds, status])

  return {
    events,
    streamTime,
    telemetry,
    tracker,
    waveform,
  }
}
