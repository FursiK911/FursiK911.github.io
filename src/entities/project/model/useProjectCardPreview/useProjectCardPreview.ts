import { useEffect, useMemo, useState } from 'react'
import type { UseProjectCardPreviewOptions } from './types/UseProjectCardPreview.types'

export function useProjectCardPreview({
  active,
  images,
  reducedMotion,
}: UseProjectCardPreviewOptions) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [failedSources, setFailedSources] = useState<string[]>([])
  const [loadedSources, setLoadedSources] = useState<string[]>([])
  const [isDocumentVisible, setIsDocumentVisible] = useState(
    () => document.visibilityState === 'visible',
  )
  const availableImages = useMemo(
    () => images.filter((image) => !failedSources.includes(image.src)),
    [failedSources, images],
  )

  useEffect(() => {
    const handleVisibilityChange = () =>
      setIsDocumentVisible(document.visibilityState === 'visible')
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () =>
      document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  useEffect(() => {
    if (!active) return
    const preloaders = images.slice(1).map((image) => {
      const preloader = new Image()
      preloader.onload = () => {
        setLoadedSources((sources) =>
          sources.includes(image.src) ? sources : [...sources, image.src],
        )
      }
      preloader.onerror = () => {
        setFailedSources((sources) =>
          sources.includes(image.src) ? sources : [...sources, image.src],
        )
      }
      preloader.src = image.src
      return preloader
    })
    return () => {
      preloaders.forEach((preloader) => {
        preloader.onload = null
        preloader.onerror = null
      })
    }
  }, [active, images])

  const readyImages = useMemo(
    () => availableImages.filter((image) => loadedSources.includes(image.src)),
    [availableImages, loadedSources],
  )

  useEffect(() => {
    if (
      !active ||
      reducedMotion ||
      !isDocumentVisible ||
      readyImages.length < 2
    )
      return
    const intervalId = window.setInterval(
      () => setActiveIndex((index) => (index + 1) % readyImages.length),
      2000,
    )
    return () => window.clearInterval(intervalId)
  }, [active, isDocumentVisible, readyImages.length, reducedMotion])

  const reportImageError = (src: string) => {
    setFailedSources((sources) =>
      sources.includes(src) ? sources : [...sources, src],
    )
  }
  const reportImageLoad = (src: string) => {
    setLoadedSources((sources) =>
      sources.includes(src) ? sources : [...sources, src],
    )
  }

  const currentImage =
    active && readyImages.length
      ? readyImages[activeIndex % readyImages.length]
      : (availableImages[0] ?? null)

  return { currentImage, reportImageError, reportImageLoad }
}
