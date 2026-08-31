import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { motion, useReducedMotion } from 'motion/react'
import { useLayoutEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import type { WorkExperience } from '../../data/workExperience'
import { getEvenlySpacedX } from './ExperienceTimelineGeometry'
import { ExperienceTimelineItem } from './ExperienceTimelineItem'
import { FutureExperienceItem } from './FutureExperienceItem'

gsap.registerPlugin(MotionPathPlugin)

export interface ExperienceTimelineProps {
  entries: WorkExperience[]
  reducedMotion?: boolean
}

type ScenePoint = { x: number; y: number }

const desktopPath =
  'M 0 165 C 44 165 72 166 102 161 C 190 148 260 112 326 99 C 404 86 492 145 570 204 C 631 247 688 211 744 170 C 816 121 872 94 936 100 C 1010 107 1067 166 1108 205 C 1141 225 1172 220 1200 202'
const mobilePath = 'M 50 0 L 50 100'

const fallbackPoints: ScenePoint[] = [
  { x: 50, y: 222 },
  { x: 270, y: 165 },
  { x: 490, y: 175 },
  { x: 710, y: 248 },
  { x: 930, y: 171 },
  { x: 1150, y: 272 },
]

function pointToSceneAtX(
  path: SVGPathElement,
  targetX: number,
  sceneRect: DOMRect,
): ScenePoint | null {
  const totalLength = path.getTotalLength()
  const matrix = path.getScreenCTM()
  const svg = path.ownerSVGElement
  if (!totalLength || !matrix || !svg?.createSVGPoint()) return null

  let low = 0
  let high = totalLength
  let closest: ScenePoint | null = null

  for (let iteration = 0; iteration < 24; iteration += 1) {
    const length = (low + high) / 2
    const point = path.getPointAtLength(length)
    const svgPoint = svg.createSVGPoint()
    svgPoint.x = point.x
    svgPoint.y = point.y
    const screenPoint = svgPoint.matrixTransform(matrix)
    const scenePoint = {
      x: screenPoint.x - sceneRect.left,
      y: screenPoint.y - sceneRect.top,
    }

    if (
      !closest ||
      Math.abs(scenePoint.x - targetX) < Math.abs(closest.x - targetX)
    ) {
      closest = scenePoint
    }

    if (scenePoint.x < targetX) {
      low = length
    } else {
      high = length
    }
  }

  return closest
}

export function ExperienceTimeline({
  entries,
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
    const axis = axisRef.current
    const path = axis?.querySelector<SVGPathElement>(
      '#experience-timeline-wave-desktop',
    )
    if (!scene || !path || typeof path.getTotalLength !== 'function') return

    const measurePoints = () => {
      const sceneRect = scene.getBoundingClientRect()
      if (!sceneRect.width || !sceneRect.height) return
      const targetXs = getEvenlySpacedX(sceneRect.width, entries.length + 1)
      const points = targetXs.map((targetX) =>
        pointToSceneAtX(path, targetX, sceneRect),
      )

      if (points.every((point): point is ScenePoint => point !== null)) {
        setAxisPoints(points)
      }
    }

    measurePoints()
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(measurePoints)
    observer.observe(scene)
    return () => observer.disconnect()
  }, [entries])

  useLayoutEffect(() => {
    const runner = runnerRef.current
    const axis = axisRef.current
    const path = axis?.querySelector<SVGPathElement>(
      '#experience-timeline-wave-desktop',
    )
    if (
      reducedMotion ||
      !runner ||
      !path ||
      typeof path.getScreenCTM !== 'function' ||
      !path.getScreenCTM()
    )
      return

    const context = gsap.context(() => {
      gsap.set(runner, { autoAlpha: 1 })
      gsap.to(runner, {
        duration: 12,
        ease: 'none',
        repeat: -1,
        repeatDelay: 0.7,
        motionPath: {
          path,
          align: path,
          alignOrigin: [0.5, 0.5],
          start: 0.03,
          end: 0.97,
        },
      })
    }, sceneRef)

    return () => context.revert()
  }, [reducedMotion])

  const futurePoint = axisPoints[entries.length] ?? fallbackPoints.at(-1)!

  return (
    <div
      ref={sceneRef}
      className="experience-timeline"
      aria-label={t('experience.timelineLabel')}
    >
      <svg
        ref={axisRef}
        className="experience-timeline-axis"
        viewBox="0 0 1200 420"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          id="experience-timeline-wave-desktop"
          className="experience-timeline-wave-path experience-timeline-wave-desktop"
          d={desktopPath}
          strokeDasharray="5 7"
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 0.72 }}
          viewport={reducedMotion ? undefined : { once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
        <motion.path
          id="experience-timeline-wave-mobile"
          className="experience-timeline-wave-path experience-timeline-wave-mobile"
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
        className="experience-timeline-runner"
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
      <div className="experience-timeline-items">
        {entries.map((entry, index) => (
          <ExperienceTimelineItem
            entry={entry}
            index={index}
            reducedMotion={reducedMotion}
            axisPoint={axisPoints[index] ?? fallbackPoints[index]}
            key={entry.id}
          />
        ))}
        <FutureExperienceItem
          index={entries.length}
          reducedMotion={reducedMotion}
          axisPoint={futurePoint}
        />
      </div>
    </div>
  )
}
