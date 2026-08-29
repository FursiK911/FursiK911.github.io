import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import {
  createLoadingCandidates,
  createMatchedCandidate,
  type LoadingCandidate,
} from '../data/loadingCandidates'

export type LoadingPhase =
  'initializing' | 'typing' | 'searching' | 'result' | 'exiting' | 'complete'

const INTRO_STORAGE_KEY = 'df-intro-seen'
const VIDEO_TIMEOUT = 3000
const SEARCH_QUERY_DURATION = 720

function hasSeenIntro() {
  return Boolean(sessionStorage.getItem(INTRO_STORAGE_KEY))
}

export function useLoadingSequence(query: string) {
  const systemReducedMotion = useReducedMotion()
  const reducedMotion =
    systemReducedMotion ??
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [phase, setPhase] = useState<LoadingPhase>(() =>
    hasSeenIntro() || reducedMotion ? 'complete' : 'initializing',
  )
  const [domReady, setDomReady] = useState(
    () => document.readyState === 'complete',
  )
  const [fontsReady, setFontsReady] = useState(() => !document.fonts)
  const [videoSettled, setVideoSettled] = useState(
    () => hasSeenIntro() || reducedMotion,
  )
  const [videoFallback, setVideoFallback] = useState(false)
  const [queryText, setQueryText] = useState('')
  const [buttonActive, setButtonActive] = useState(false)
  const [cursorClicked, setCursorClicked] = useState(false)
  const [resultVisible, setResultVisible] = useState(false)
  const [candidates, setCandidates] = useState<LoadingCandidate[]>([])
  const timers = useRef<number[]>([])
  const started = useRef(false)

  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => window.clearTimeout(timer))
    timers.current = []
  }, [])

  const schedule = useCallback((callback: () => void, delay: number) => {
    const timer = window.setTimeout(callback, delay)
    timers.current.push(timer)
    return timer
  }, [])

  useEffect(() => {
    if (domReady) return
    const onLoad = () => setDomReady(true)
    window.addEventListener('load', onLoad, { once: true })
    return () => window.removeEventListener('load', onLoad)
  }, [domReady])

  useEffect(() => {
    if (fontsReady) return
    const ready = document.fonts?.ready ?? Promise.resolve()
    let active = true
    void ready.then(() => {
      if (active) setFontsReady(true)
    })
    return () => {
      active = false
    }
  }, [fontsReady])

  useEffect(() => {
    if (videoSettled || hasSeenIntro() || reducedMotion) return
    const timer = window.setTimeout(() => {
      setVideoFallback(true)
      setVideoSettled(true)
    }, VIDEO_TIMEOUT)
    return () => window.clearTimeout(timer)
  }, [reducedMotion, videoSettled])

  const notifyVideo = useCallback((available: boolean) => {
    setVideoFallback(!available)
    setVideoSettled(true)
  }, [])

  const allReady = domReady && fontsReady && videoSettled

  useEffect(() => {
    if (!allReady || reducedMotion || started.current || hasSeenIntro()) return
    started.current = true
    const random = Math.random
    const generated = createLoadingCandidates(random)
    const matched = createMatchedCandidate(random)
    const randomDelay = (min: number, max: number) =>
      Math.round(min + random() * (max - min))

    schedule(() => {
      setPhase('typing')
      query.split('').forEach((_, index) => {
        schedule(
          () => setQueryText(query.slice(0, index + 1)),
          Math.round((SEARCH_QUERY_DURATION / query.length) * (index + 1)),
        )
      })
    }, 350)
    schedule(() => setButtonActive(true), 350 + SEARCH_QUERY_DURATION)
    schedule(() => setCursorClicked(true), 350 + SEARCH_QUERY_DURATION + 280)
    schedule(
      () => {
        setPhase('searching')
        let index = 0
        const spawn = () => {
          const candidate = generated[index]
          if (!candidate) {
            schedule(() => {
              setCandidates((current) => [...current, matched])
              setResultVisible(true)
              setPhase('result')
              schedule(() => setPhase('exiting'), 950)
            }, 950)
            return
          }
          setCandidates((current) => [...current, candidate])
          schedule(
            () =>
              setCandidates((current) =>
                current.map((item) =>
                  item.id === candidate.id
                    ? { ...item, status: 'rejected' }
                    : item,
                ),
              ),
            randomDelay(520, 900),
          )
          index += 1
          schedule(spawn, randomDelay(180, 300))
        }
        spawn()
      },
      350 + SEARCH_QUERY_DURATION + 660,
    )
    return clearTimers
  }, [allReady, clearTimers, query, reducedMotion, schedule])

  useEffect(() => {
    if (!allReady || phase === 'complete' || phase === 'exiting') return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Enter' && event.key !== ' ') return
      event.preventDefault()
      clearTimers()
      setPhase('exiting')
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [allReady, clearTimers, phase])

  const skip = useCallback(() => {
    if (!allReady || phase === 'complete' || phase === 'exiting') return
    clearTimers()
    setPhase('exiting')
  }, [allReady, clearTimers, phase])

  const complete = useCallback(() => {
    sessionStorage.setItem(INTRO_STORAGE_KEY, '1')
    setPhase('complete')
  }, [])

  useEffect(() => clearTimers, [clearTimers])

  return {
    allReady,
    buttonActive,
    candidates,
    complete,
    cursorClicked,
    notifyVideo,
    phase,
    queryText,
    resultVisible,
    reducedMotion,
    skip,
    videoFallback,
  }
}
