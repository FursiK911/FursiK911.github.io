import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import {
  loadingAnimationConfig,
  scheduleLoadingAnimation,
} from '../config/loadingAnimation'
import {
  createLoadingCandidates,
  createMatchedCandidate,
  type LoadingCandidate,
} from '../data/loadingCandidates'

export type LoadingPhase =
  'initializing' | 'typing' | 'searching' | 'result' | 'exiting' | 'complete'

const INTRO_STORAGE_KEY = 'df-intro-seen'
// Temporary showcase mode: replay the intro on every page refresh and double its pace.
export const ALWAYS_REPLAY_INTRO = true

function hasSeenIntro() {
  return (
    !ALWAYS_REPLAY_INTRO && Boolean(sessionStorage.getItem(INTRO_STORAGE_KEY))
  )
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
  const timers = useRef<Array<() => void>>([])
  const started = useRef(false)

  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => timer())
    timers.current = []
  }, [])

  const schedule = useCallback((callback: () => void, delay: number) => {
    const timer = scheduleLoadingAnimation(callback, delay)
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
    }, loadingAnimationConfig.videoReadyTimeout)
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
          (loadingAnimationConfig.queryDuration / query.length) * (index + 1),
        )
      })
    }, loadingAnimationConfig.initialDelay)
    schedule(
      () => setButtonActive(true),
      loadingAnimationConfig.initialDelay +
        loadingAnimationConfig.queryDuration,
    )
    schedule(
      () => setCursorClicked(true),
      loadingAnimationConfig.initialDelay +
        loadingAnimationConfig.queryDuration +
        loadingAnimationConfig.cursorClickDelay,
    )
    schedule(
      () => {
        setPhase('searching')
        let index = 0
        const spawn = () => {
          const candidate = generated[index]
          if (!candidate) {
            schedule(
              () => {
                schedule(
                  () => {
                    setCandidates((current) =>
                      current.map((item) =>
                        item.id === matched.id
                          ? { ...item, status: 'matched' }
                          : item,
                      ),
                    )
                    schedule(() => {
                      setResultVisible(true)
                      setPhase('result')
                      schedule(
                        () => setPhase('exiting'),
                        loadingAnimationConfig.resultHold,
                      )
                    }, loadingAnimationConfig.matchedRevealDelay)
                  },
                  randomDelay(
                    loadingAnimationConfig.candidateCheckMin,
                    loadingAnimationConfig.candidateCheckMax,
                  ),
                )
                setCandidates((current) => [
                  ...current,
                  { ...matched, status: 'searching' },
                ])
              },
              randomDelay(
                loadingAnimationConfig.candidateSpawnMin,
                loadingAnimationConfig.candidateSpawnMax,
              ),
            )
            return
          }
          setCandidates((current) => [...current, candidate])
          schedule(
            () => {
              setCandidates((current) =>
                current.map((item) =>
                  item.id === candidate.id
                    ? { ...item, status: 'rejected' }
                    : item,
                ),
              )
              schedule(
                () =>
                  setCandidates((current) =>
                    current.map((item) =>
                      item.id === candidate.id
                        ? { ...item, dimmed: true }
                        : item,
                    ),
                  ),
                loadingAnimationConfig.candidateFadeDelay,
              )
            },
            randomDelay(
              loadingAnimationConfig.candidateCheckMin,
              loadingAnimationConfig.candidateCheckMax,
            ),
          )
          index += 1
          schedule(
            spawn,
            randomDelay(
              loadingAnimationConfig.candidateSpawnMin,
              loadingAnimationConfig.candidateSpawnMax,
            ),
          )
        }
        spawn()
      },
      loadingAnimationConfig.initialDelay +
        loadingAnimationConfig.queryDuration +
        loadingAnimationConfig.searchStartDelay,
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
