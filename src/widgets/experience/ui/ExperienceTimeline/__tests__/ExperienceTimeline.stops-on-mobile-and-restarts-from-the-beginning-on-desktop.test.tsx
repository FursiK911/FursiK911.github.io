import { act } from '@testing-library/react'
import { vi } from 'vitest'
import { ExperienceTimeline } from '../ExperienceTimeline'
import { workExperience } from '@/entities/work-experience'
import { renderWithProviders } from '@/shared/test/render'
const { gsapSet, gsapTo, runnerTweens } = vi.hoisted(() => ({
  gsapSet: vi.fn(),
  gsapTo: vi.fn(),
  runnerTweens: [] as Array<{
    kill: ReturnType<typeof vi.fn>
    play: ReturnType<typeof vi.fn>
    progress: ReturnType<typeof vi.fn>
    setProgress: (progress: number) => void
  }>,
}))
vi.mock('gsap', () => ({
  gsap: {
    registerPlugin: vi.fn(),
    set: gsapSet,
    to: gsapTo,
  },
}))
vi.mock('gsap/MotionPathPlugin', () => ({ MotionPathPlugin: {} }))
let desktopMatches = true
let mediaChangeCallback: ((event: MediaQueryListEvent) => void) | null = null
let nextFrameId = 0
const animationFrames = new Map<number, FrameRequestCallback>()
const resizeObserve = vi.fn()
const resizeDisconnect = vi.fn()
function flushAnimationFrame() {
  const frames = [...animationFrames.values()]
  animationFrames.clear()
  frames.forEach((frame) => frame(0))
}
beforeEach(() => {
  desktopMatches = true
  mediaChangeCallback = null
  nextFrameId = 0
  animationFrames.clear()
  resizeObserve.mockReset()
  resizeDisconnect.mockReset()
  runnerTweens.length = 0
  gsapSet.mockReset()
  gsapTo.mockReset()
  gsapTo.mockImplementation(() => {
    let currentProgress = 0
    const tween = {
      kill: vi.fn(),
      play: vi.fn(),
      progress: vi.fn((progress?: number) => {
        if (progress === undefined) return currentProgress
        currentProgress = progress
        return tween
      }),
      setProgress: (progress: number) => {
        currentProgress = progress
      },
    }
    tween.play.mockReturnValue(tween)
    runnerTweens.push(tween)
    return tween
  })
  vi.stubGlobal(
    'requestAnimationFrame',
    vi.fn((callback: FrameRequestCallback) => {
      const frameId = ++nextFrameId
      animationFrames.set(frameId, callback)
      return frameId
    }),
  )
  vi.stubGlobal(
    'cancelAnimationFrame',
    vi.fn((frameId: number) => animationFrames.delete(frameId)),
  )
  vi.stubGlobal(
    'ResizeObserver',
    class ResizeObserverStub {
      constructor(callback: ResizeObserverCallback) {
        void callback
      }
      observe = resizeObserve
      disconnect = resizeDisconnect
    },
  )
  const desktopMedia = {
    get matches() {
      return desktopMatches
    },
    media: '(min-width: 1025px)',
    onchange: null,
    addEventListener: vi.fn(
      (_type: string, callback: (event: MediaQueryListEvent) => void) => {
        mediaChangeCallback = callback
      },
    ),
    removeEventListener: vi.fn(
      (_type: string, callback: (event: MediaQueryListEvent) => void) => {
        if (mediaChangeCallback === callback) mediaChangeCallback = null
      },
    ),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }
  vi.spyOn(window, 'matchMedia').mockImplementation((query) =>
    query === desktopMedia.media
      ? (desktopMedia as MediaQueryList)
      : ({
          matches: false,
          media: query,
          onchange: null,
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          addListener: vi.fn(),
          removeListener: vi.fn(),
          dispatchEvent: vi.fn(),
        } as MediaQueryList),
  )
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
    bottom: 570,
    height: 570,
    left: 0,
    right: 1200,
    top: 0,
    width: 1200,
    x: 0,
    y: 0,
    toJSON: () => ({}),
  })
  Object.defineProperties(SVGElement.prototype, {
    createSVGPoint: {
      configurable: true,
      value: () => ({
        x: 0,
        y: 0,
        matrixTransform(this: { x: number; y: number }) {
          return { x: this.x, y: this.y }
        },
      }),
    },
    getPointAtLength: {
      configurable: true,
      value: (length: number) => ({ x: length, y: 100 }),
    },
    getScreenCTM: {
      configurable: true,
      value: () => ({ a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }),
    },
    getTotalLength: {
      configurable: true,
      value: () => 1200,
    },
  })
})
afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})
it('stops on mobile and restarts from the beginning on desktop', () => {
  renderWithProviders(<ExperienceTimeline entries={workExperience} />)
  act(flushAnimationFrame)
  runnerTweens[0].setProgress(0.64)
  desktopMatches = false
  act(() => {
    mediaChangeCallback?.({ matches: false } as MediaQueryListEvent)
    flushAnimationFrame()
  })
  expect(runnerTweens[0].kill).toHaveBeenCalledOnce()
  desktopMatches = true
  act(() => {
    mediaChangeCallback?.({ matches: true } as MediaQueryListEvent)
    flushAnimationFrame()
  })
  expect(runnerTweens).toHaveLength(2)
  expect(runnerTweens[1].progress).toHaveBeenCalledWith(0)
})
