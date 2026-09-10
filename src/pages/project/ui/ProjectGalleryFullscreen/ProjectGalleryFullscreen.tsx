import { Modal } from '@mantine/core'
import {
  IconChevronLeft,
  IconChevronRight,
  IconPlayerPlay,
} from '@tabler/icons-react'
import { motion } from 'motion/react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { GalleryImage } from '../GalleryImage/GalleryImage'
import type { ProjectGalleryFullscreenProps } from '../../model/types/projectCase.types'
import styles from './styles/ProjectGalleryFullscreen.module.css'

export function ProjectGalleryFullscreen({
  opened,
  media,
  title,
  index,
  total,
  playing,
  reducedMotion,
  onClose,
  onPlay,
  onPrevious,
  onNext,
  onTouchStart,
  onTouchEnd,
}: ProjectGalleryFullscreenProps) {
  const { t } = useTranslation()
  useEffect(() => {
    if (!opened || total < 2) return
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
      event.preventDefault()
      if (event.key === 'ArrowLeft') onPrevious()
      else onNext()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onNext, onPrevious, opened, total])

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      fullScreen
      title={t('projectCase.fullscreen')}
      closeButtonProps={{ 'aria-label': t('projectCase.close') }}
      trapFocus
      returnFocus
      closeOnEscape
      transitionProps={{ duration: reducedMotion ? 0 : 180 }}
      classNames={{
        content: styles.projectGalleryFullscreenModal,
        header: styles.projectGalleryFullscreenHeader,
        body: styles.projectGalleryFullscreenBody,
      }}
    >
      <div
        className={styles.projectGalleryFullscreenViewport}
        role="group"
        aria-label={t('projectCase.gallery')}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <motion.div
          key={`${media.kind}-${index}-${playing}`}
          className={styles.projectGalleryFullscreenMedia}
          data-media-kind={media.kind}
          initial={reducedMotion ? false : { opacity: 0.35 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.22 }}
        >
          {media.kind === 'image' && (
            <GalleryImage
              className={styles.projectGalleryFullscreenImage}
              src={media.src}
              alt={t(`projects.${media.altKey}`)}
            />
          )}
          {media.kind === 'youtube' && !playing && (
            <button
              className={styles.projectGalleryFullscreenVideoPreview}
              type="button"
              aria-label={t('projectCase.play')}
              onClick={onPlay}
            >
              <GalleryImage
                className={styles.projectGalleryFullscreenVideoPoster}
                src={`https://i.ytimg.com/vi/${media.videoId}/maxresdefault.jpg`}
                alt={title}
                youtube
              />
              <span className={styles.projectGalleryFullscreenVideoOverlay} />
              <span className={styles.projectGalleryFullscreenPlay}>
                <IconPlayerPlay aria-hidden="true" />
                <span>{t('projectCase.play')}</span>
              </span>
            </button>
          )}
          {media.kind === 'youtube' && playing && (
            <iframe
              className={styles.projectGalleryFullscreenVideo}
              title={t('projects.videoTitle', { title })}
              src={`https://www.youtube-nocookie.com/embed/${media.videoId}?autoplay=1&rel=0${media.startSeconds ? `&start=${media.startSeconds}` : ''}`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}
        </motion.div>
        {total > 1 && (
          <div className={styles.projectGalleryFullscreenControls}>
            <button
              className={styles.projectGalleryFullscreenArrow}
              type="button"
              aria-label={t('projectCase.previous')}
              onClick={onPrevious}
            >
              <IconChevronLeft aria-hidden="true" />
            </button>
            <span
              className={styles.projectGalleryFullscreenPosition}
              aria-live="polite"
            >
              {t('projectCase.position', { current: index + 1, total })}
            </span>
            <button
              className={styles.projectGalleryFullscreenArrow}
              type="button"
              aria-label={t('projectCase.next')}
              onClick={onNext}
            >
              <IconChevronRight aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </Modal>
  )
}
