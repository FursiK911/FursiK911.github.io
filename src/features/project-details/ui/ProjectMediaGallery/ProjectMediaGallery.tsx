import {
  IconChevronLeft,
  IconChevronRight,
  IconPlayerPlay,
  IconPhotoOff,
} from '@tabler/icons-react'
import { motion, useReducedMotion } from 'motion/react'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { orderProjectMedia } from '@/entities/project'
import type { KeyboardEvent, TouchEvent } from 'react'
import styles from './styles/ProjectMediaGallery.module.css'
import type { ProjectMediaGalleryProps } from './types/ProjectMediaGallery.types'

export function ProjectMediaGallery({
  project,
  variant,
}: ProjectMediaGalleryProps) {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const media = orderProjectMedia(project.media ?? [])
  const activeMedia = media[activeIndex]
  const title = t(`projects.${project.titleKey}`)

  const navigate = (direction: number) => {
    setActiveIndex((index) => (index + direction + media.length) % media.length)
    setIsPlaying(false)
    setImageFailed(false)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (media.length < 2) return
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      navigate(-1)
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      navigate(1)
    }
  }

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    const point = event.touches[0]
    touchStart.current = { x: point.clientX, y: point.clientY }
  }

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (!touchStart.current || media.length < 2) return
    const point = event.changedTouches[0]
    const deltaX = point.clientX - touchStart.current.x
    const deltaY = point.clientY - touchStart.current.y
    touchStart.current = null
    if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      navigate(deltaX < 0 ? 1 : -1)
    }
  }

  const selectMedia = (index: number) => {
    setActiveIndex(index)
    setIsPlaying(false)
    setImageFailed(false)
  }

  const mediaAlt =
    activeMedia?.kind === 'image' ? t(`projects.${activeMedia.altKey}`) : title

  return (
    <section
      className={styles.projectMediaGallery}
      data-variant={variant}
      aria-label={t('projects.mediaLabel', { title })}
    >
      {/* The media frame is a keyboard and touch interaction surface. */}
      <div
        className={styles.projectMediaMock}
        role="group"
        aria-label={t('projects.mediaLabel', { title })}
        tabIndex={media.length > 1 ? 0 : undefined}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          key={`${activeIndex}-${isPlaying}`}
          className={`${styles.projectMediaScreen} project-media-screen`}
          data-media-kind={activeMedia?.kind}
          initial={reducedMotion ? false : { opacity: 0.35, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.28 }}
        >
          {activeMedia?.kind === 'image' && !imageFailed && (
            <img
              src={activeMedia.src}
              alt={mediaAlt}
              onError={() => setImageFailed(true)}
            />
          )}
          {activeMedia?.kind === 'image' && imageFailed && (
            <div
              className={styles.projectMediaUnavailable}
              role="img"
              aria-label={mediaAlt}
            >
              <IconPhotoOff aria-hidden="true" />
              <span>{t('projectCase.unavailable')}</span>
            </div>
          )}
          {activeMedia?.kind === 'youtube' && !isPlaying && (
            <button
              className={styles.projectMediaYoutubePreview}
              type="button"
              aria-label={t('projects.playVideo', { title })}
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={`https://i.ytimg.com/vi/${activeMedia.videoId}/hqdefault.jpg`}
                alt=""
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                }}
              />
              <span className={styles.projectMediaVideoVeil} />
              <span className={styles.projectMediaPlay}>
                <IconPlayerPlay aria-hidden="true" />
                <span>{t('projects.playVideo')}</span>
              </span>
            </button>
          )}
          {activeMedia?.kind === 'youtube' && isPlaying && (
            <iframe
              className={styles.projectMediaPlayer}
              title={t('projects.videoTitle', { title })}
              src={`https://www.youtube-nocookie.com/embed/${activeMedia.videoId}?autoplay=1&rel=0${activeMedia.startSeconds ? `&start=${activeMedia.startSeconds}` : ''}`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}
          {!activeMedia && (
            <div className={styles.projectMediaPlaceholder} aria-hidden="true">
              <span>
                {project.category
                  .map((category) => t(`projects.${category}`))
                  .join(' / ')}
              </span>
              <strong>{title}</strong>
              <i>{project.id.toUpperCase()}</i>
            </div>
          )}
        </motion.div>
      </div>
      {media.length > 1 && (
        <div className={styles.projectMediaControls}>
          <button
            className={styles.projectMediaArrow}
            type="button"
            aria-label={t('projects.previousMedia')}
            onClick={() => navigate(-1)}
            onKeyDown={handleKeyDown}
          >
            <IconChevronLeft aria-hidden="true" />
          </button>
          <div className={styles.projectMediaThumbnails}>
            {media.map((item, index) => (
              <button
                className={styles.projectMediaThumbnail}
                key={`${item.kind}-${index}`}
                type="button"
                aria-label={t('projects.selectMedia', { index: index + 1 })}
                aria-current={index === activeIndex}
                onClick={() => selectMedia(index)}
                onKeyDown={handleKeyDown}
              >
                {item.kind === 'image' ? (
                  <img src={item.src} alt="" />
                ) : (
                  <>
                    <img
                      src={`https://i.ytimg.com/vi/${item.videoId}/default.jpg`}
                      alt=""
                    />
                    <IconPlayerPlay aria-hidden="true" />
                  </>
                )}
                <span>{String(index + 1).padStart(2, '0')}</span>
              </button>
            ))}
          </div>
          <button
            className={styles.projectMediaArrow}
            type="button"
            aria-label={t('projects.nextMedia')}
            onClick={() => navigate(1)}
            onKeyDown={handleKeyDown}
          >
            <IconChevronRight aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  )
}
