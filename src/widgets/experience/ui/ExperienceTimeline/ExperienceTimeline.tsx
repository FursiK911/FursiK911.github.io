import { cx, styles } from '@/shared/styles'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { motion, useReducedMotion } from 'motion/react'
import { useLayoutEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { getEvenlySpacedX } from '../../model/experience-timeline-geometry/utils/experience-timeline-geometry'
import { ExperienceTimelineItem } from '../ExperienceTimelineItem/ExperienceTimelineItem'
import { FutureExperienceItem } from '../FutureExperienceItem/FutureExperienceItem'
import type {
  ExperienceTimelineProps,
  ScenePoint,
} from './types/ExperienceTimeline.types'
import {
  desktopPath,
  mobilePath,
  desktopTimelineQuery,
} from './config/experienceTimeline.config'
import { fallbackPoints } from './data/fallbackPoints.data'
import { pointToSceneAtX } from './utils/pointToSceneAtX'
import { getMobileTimelineSide } from './utils/getMobileTimelineSide'

gsap.registerPlugin(MotionPathPlugin)

export function ExperienceTimeline({
  entries,
  onEntrySelect,
  reducedMotion: reducedMotionOverride,
}: ExperienceTimelineProps) {
  const { t } = useTranslation()
  const prefersReducedMotion = useReducedMotion() ?? false
  const reducedMotion = reducedMotionOverride ?? prefersReducedMotion
  const sceneRef = useRef<HTMLDivElement>(null)
  const axisRef = useRef<SVGSVGElement>(null)
  const runnerRef = useRef<HTMLSpanElement>(null)
  const [axisPoints, setAxisPoints] = useState(fallbackPoints)

  useLayoutEffect(() => {
    const scene = sceneRef.current
    const runner = runnerRef.current
    const axis = axisRef.current
    const path = axis?.querySelector<SVGPathElement>(
      '#experience-timeline-wave-desktop',
    )
    if (!scene || !runner || !path || typeof path.getTotalLength !== 'function')
      return

    const desktopMedia = window.matchMedia(desktopTimelineQuery)
    let animationFrame: number | null = null
    let runnerTween: gsap.core.Tween | null = null
    let wasDesktop = false

    const stopRunner = () => {
      runnerTween?.kill()
      runnerTween = null
    }

    const createRunner = (progress: number) => {
      if (
        reducedMotion ||
        typeof path.getScreenCTM !== 'function' ||
        !path.getScreenCTM()
      )
        return

      gsap.set(runner, { x: 0, y: 0, autoAlpha: 1 })
      runnerTween = gsap.to(runner, {
        duration: 12,
        ease: 'none',
        repeat: -1,
        repeatDelay: 0,
        paused: true,
        motionPath: {
          path,
          align: path,
          alignOrigin: [0.5, 0.5],
          start: 0.03,
          end: 0.97,
        },
      })

      runnerTween.progress(progress).play()
    }

    const refreshTimeline = () => {
      animationFrame = null

      if (!desktopMedia.matches) {
        stopRunner()
        wasDesktop = false
        return
      }

      const sceneRect = scene.getBoundingClientRect()
      if (!sceneRect.width || !sceneRect.height) return

      const targetXs = getEvenlySpacedX(sceneRect.width, entries.length + 1)
      const points = targetXs.map((targetX) =>
        pointToSceneAtX(path, targetX, sceneRect),
      )

      if (points.every((point): point is ScenePoint => point !== null)) {
        setAxisPoints(points)
      }

      const progress = wasDesktop ? (runnerTween?.progress() ?? 0) : 0
      stopRunner()
      createRunner(progress)
      wasDesktop = true
    }

    const scheduleRefresh = () => {
      if (animationFrame !== null) cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(refreshTimeline)
    }

    if (!reducedMotion) gsap.set(runner, { autoAlpha: 0 })
    scheduleRefresh()

    const observer =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(scheduleRefresh)
    observer?.observe(scene)
    desktopMedia.addEventListener('change', scheduleRefresh)

    return () => {
      if (animationFrame !== null) cancelAnimationFrame(animationFrame)
      desktopMedia.removeEventListener('change', scheduleRefresh)
      observer?.disconnect()
      stopRunner()
    }
  }, [entries, reducedMotion])

  const futurePoint = axisPoints[entries.length] ?? fallbackPoints.at(-1)!

  return (
    <div
      ref={sceneRef}
      className={cx(styles.experienceTimeline)}
      aria-label={t('experience.timelineLabel')}
    >
      <svg
        ref={axisRef}
        className={cx(styles.experienceTimelineAxis)}
        viewBox="0 0 1200 420"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          id="experience-timeline-wave-desktop"
          className={cx(
            styles.experienceTimelineWavePath,
            styles.experienceTimelineWaveDesktop,
          )}
          d={desktopPath}
          strokeDasharray="5 7"
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 0.72 }}
          viewport={reducedMotion ? undefined : { once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
        <motion.path
          id="experience-timeline-wave-mobile"
          className={cx(
            styles.experienceTimelineWavePath,
            styles.experienceTimelineWaveMobile,
          )}
          d={mobilePath}
          strokeDasharray="5 7"
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 0.72 }}
          viewport={reducedMotion ? undefined : { once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      </svg>
      <span
        ref={runnerRef}
        className={cx(styles.experienceTimelineRunner)}
        data-reduced-motion={reducedMotion || undefined}
        style={
          (reducedMotion
            ? {
                '--runner-x': `${axisPoints[0]?.x ?? fallbackPoints[0].x}px`,
                '--runner-y': `${axisPoints[0]?.y ?? fallbackPoints[0].y}px`,
              }
            : undefined) as CSSProperties | undefined
        }
        aria-hidden="true"
      />
      <div className={cx(styles.experienceTimelineItems)}>
        {entries.map((entry, index) => (
          <ExperienceTimelineItem
            entry={entry}
            index={index}
            reducedMotion={reducedMotion}
            axisPoint={axisPoints[index] ?? fallbackPoints[index]}
            mobileOrder={entries.length - index}
            mobileSide={getMobileTimelineSide(entries.length - index)}
            onSelect={() => onEntrySelect(entry)}
            key={entry.id}
          />
        ))}
        <FutureExperienceItem
          index={entries.length}
          reducedMotion={reducedMotion}
          axisPoint={futurePoint}
          mobileOrder={0}
          mobileSide={getMobileTimelineSide(0)}
        />
      </div>
    </div>
  )
}
