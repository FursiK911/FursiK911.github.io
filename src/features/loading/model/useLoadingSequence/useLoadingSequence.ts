import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { createLoadingCandidates } from '../utils/createLoadingCandidates'
import { createMatchedCandidate } from '../utils/createMatchedCandidate'
import { loadingAnimationConfig } from '../config/loading-animation.config'
import { scheduleLoadingAnimation } from '../scheduleLoadingAnimation/scheduleLoadingAnimation'
import { hasSeenIntro } from '../utils/hasSeenIntro'
import { INTRO_STORAGE_KEY } from '../config/intro.config'
import type { LoadingPhase } from './types/useLoadingSequence.types'
import type { LoadingCandidate } from '../types/loading-candidate.types'

export function useLoadingSequence(query: string) {
  const systemReducedMotion = useReducedMotion()
  const reducedMotion =
    systemReducedMotion ||
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
      // Ensure the final glyph is committed even when per-character timers
      // are rounded by the global animation scheduler.
      schedule(() => setQueryText(query), loadingAnimationConfig.queryDuration)
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
                        () => setPhase('fading'),
                        (loadingAnimationConfig.css.photoDelay +
                          loadingAnimationConfig.css.scan) *
                          1000 +
                          loadingAnimationConfig.postScanHold,
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

  const complete = useCallback(() => {
    sessionStorage.setItem(INTRO_STORAGE_KEY, '1')
    setPhase('complete')
  }, [])

  useEffect(() => {
    if (!allReady || phase === 'complete' || phase === 'skipping') return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Enter' && event.key !== ' ') return
      event.preventDefault()
      clearTimers()
      if (reducedMotion || systemReducedMotion !== false) complete()
      else setPhase('skipping')
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [
    allReady,
    clearTimers,
    complete,
    phase,
    reducedMotion,
    systemReducedMotion,
  ])

  const skip = useCallback(() => {
    if (!allReady || phase === 'complete' || phase === 'skipping') return
    clearTimers()
    if (reducedMotion || systemReducedMotion !== false) complete()
    else setPhase('skipping')
  }, [
    allReady,
    clearTimers,
    complete,
    phase,
    reducedMotion,
    systemReducedMotion,
  ])

  const finishFade = useCallback(() => {
    if (phase === 'fading') setPhase('revealing')
  }, [phase])

  const finishSkip = useCallback(() => {
    if (phase === 'skipping') complete()
  }, [complete, phase])

  useEffect(() => {
    if (phase !== 'skipping') return
    if (reducedMotion || systemReducedMotion !== false) {
      const timer = window.setTimeout(finishSkip, 0)
      return () => window.clearTimeout(timer)
    }
    const scheduledFinish = schedule(
      finishSkip,
      loadingAnimationConfig.skipFadeDuration * 1000,
    )
    const safetyFinish = window.setTimeout(
      finishSkip,
      loadingAnimationConfig.skipFadeDuration * 1000,
    )
    return () => {
      scheduledFinish()
      window.clearTimeout(safetyFinish)
    }
  }, [finishSkip, phase, reducedMotion, schedule, systemReducedMotion])

  useEffect(() => {
    if (phase !== 'revealing') return
    return schedule(complete, loadingAnimationConfig.pageRevealDuration * 1000)
  }, [complete, phase, schedule])

  useEffect(() => clearTimers, [clearTimers])

  return {
    allReady,
    buttonActive,
    candidates,
    complete,
    cursorClicked,
    finishFade,
    finishSkip,
    notifyVideo,
    phase,
    queryText,
    resultVisible,
    reducedMotion,
    skip,
    videoFallback,
  }
}
