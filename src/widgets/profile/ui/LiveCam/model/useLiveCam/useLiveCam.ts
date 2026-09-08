import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'
import { liveCamConfig } from '../../config/liveCam.config'
import type { LiveCamStatus } from '../../types/LiveCam.types'

interface UseLiveCamArgs {
  containerRef: RefObject<HTMLElement | null>
  entered: boolean
  reducedMotion: boolean
  videoRef: RefObject<HTMLVideoElement | null>
}

export function useLiveCam({
  containerRef,
  entered,
  reducedMotion,
  videoRef,
}: UseLiveCamArgs) {
  const [status, setStatus] = useState<LiveCamStatus>(
    reducedMotion ? 'signal-lost' : 'idle',
  )
  const [attempt, setAttempt] = useState(0)
  const [isInViewport, setIsInViewport] = useState(false)
  const [retryRemainingSeconds, setRetryRemainingSeconds] = useState<
    number | null
  >(null)
  const canPlayRef = useRef(false)
  const minimumLoadingCompleteRef = useRef(false)
  const statusRef = useRef(status)
  const viewportRef = useRef(isInViewport)

  useEffect(() => {
    statusRef.current = status
  }, [status])

  useEffect(() => {
    viewportRef.current = isInViewport
  }, [isInViewport])

  const showSignalLost = useCallback(() => {
    if (reducedMotion || statusRef.current === 'signal-lost') return

    videoRef.current?.pause()
    setStatus('signal-lost')
  }, [reducedMotion, videoRef])

  const beginPlayback = useCallback(() => {
    if (
      reducedMotion ||
      statusRef.current !== 'connecting' ||
      !canPlayRef.current ||
      !minimumLoadingCompleteRef.current ||
      !viewportRef.current
    ) {
      return
    }

    const video = videoRef.current
    if (!video) return

    try {
      const playback = video.play()
      void Promise.resolve(playback).then(
        () => {
          if (statusRef.current === 'connecting') setStatus('live')
        },
        () => showSignalLost(),
      )
    } catch {
      showSignalLost()
    }
  }, [reducedMotion, showSignalLost, videoRef])

  const onCanPlay = useCallback(() => {
    canPlayRef.current = true
    beginPlayback()
  }, [beginPlayback])

  const onError = useCallback(() => {
    showSignalLost()
  }, [showSignalLost])

  useEffect(() => {
    if (reducedMotion || !entered) return

    const container = containerRef.current
    const activate = () => {
      viewportRef.current = true
      setIsInViewport(true)
      if (statusRef.current === 'idle') setStatus('connecting')
    }

    if (!container || typeof IntersectionObserver === 'undefined') {
      const frame = window.requestAnimationFrame(activate)
      return () => window.cancelAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(([entry]) => {
      const visible = entry?.isIntersecting ?? false
      viewportRef.current = visible
      setIsInViewport(visible)
      if (visible && statusRef.current === 'idle') setStatus('connecting')
    })

    observer.observe(container)
    return () => observer.disconnect()
  }, [containerRef, entered, reducedMotion])

  useEffect(() => {
    if (status !== 'connecting') return

    canPlayRef.current = false
    minimumLoadingCompleteRef.current = false

    const timer = window.setTimeout(() => {
      minimumLoadingCompleteRef.current = true
      beginPlayback()
    }, liveCamConfig.minimumLoadingDurationMs)

    return () => window.clearTimeout(timer)
  }, [beginPlayback, status])

  useEffect(() => {
    if (status !== 'signal-lost' || reducedMotion || !isInViewport) return

    const delayIndex = Math.min(
      attempt,
      liveCamConfig.reconnectDelaysMs.length - 1,
    )
    const retryAt = Date.now() + liveCamConfig.reconnectDelaysMs[delayIndex]
    const updateRetryRemainingSeconds = () => {
      setRetryRemainingSeconds(
        Math.max(0, Math.ceil((retryAt - Date.now()) / 1000)),
      )
    }
    updateRetryRemainingSeconds()

    const countdown = window.setInterval(updateRetryRemainingSeconds, 1000)
    const timer = window.setTimeout(() => {
      window.clearInterval(countdown)
      setAttempt((currentAttempt) => currentAttempt + 1)
      setStatus('connecting')
    }, liveCamConfig.reconnectDelaysMs[delayIndex])

    return () => {
      window.clearInterval(countdown)
      window.clearTimeout(timer)
    }
  }, [attempt, isInViewport, reducedMotion, status])

  useEffect(() => {
    if (status !== 'live' || reducedMotion) return

    const video = videoRef.current
    if (!video) return

    if (!isInViewport) {
      video.pause()
      return
    }

    try {
      const playback = video.play()
      void Promise.resolve(playback).catch(showSignalLost)
    } catch {
      showSignalLost()
    }
  }, [isInViewport, reducedMotion, showSignalLost, status, videoRef])

  return {
    attempt,
    isInViewport,
    onCanPlay,
    onError,
    retryRemainingSeconds:
      status === 'signal-lost' ? retryRemainingSeconds : null,
    shouldLoadVideo:
      !reducedMotion && (status === 'connecting' || status === 'live'),
    status: reducedMotion ? 'signal-lost' : status,
  }
}
