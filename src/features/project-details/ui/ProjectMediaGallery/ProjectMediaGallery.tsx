import {
  IconChevronLeft,
  IconChevronRight,
  IconPlayerPlay,
} from '@tabler/icons-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { KeyboardEvent } from 'react'
import styles from './styles/ProjectMediaGallery.module.css'
import type { ProjectMediaGalleryProps } from './types/ProjectMediaGallery.types'

export function ProjectMediaGallery({
  project,
  variant,
}: ProjectMediaGalleryProps) {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const media = project.media ?? []
  const activeMedia = media[activeIndex]
  const title = t(`projects.${project.titleKey}`)

  const navigate = (direction: number) => {
    setActiveIndex((index) => (index + direction + media.length) % media.length)
    setIsPlaying(false)
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

  return (
    <section
      className={styles.gallery}
      data-variant={variant}
      aria-label={t('projects.mediaLabel', { title })}
    >
      <div className={styles.frame}>
        {activeMedia?.kind === 'image' && (
          <img
            src={activeMedia.src}
            alt={t(`projects.${activeMedia.altKey}`)}
          />
        )}
        {activeMedia?.kind === 'youtube' && !isPlaying && (
          <button
            className={styles.youtubePreview}
            type="button"
            aria-label={t('projects.playVideo', { title })}
            onClick={() => setIsPlaying(true)}
            style={{
              backgroundImage: `url(https://i.ytimg.com/vi/${activeMedia.videoId}/hqdefault.jpg)`,
            }}
          >
            <span className={styles.videoVeil} />
            <IconPlayerPlay aria-hidden="true" />
            <span>{t('projects.playVideo')}</span>
          </button>
        )}
        {activeMedia?.kind === 'youtube' && isPlaying && (
          <iframe
            className={styles.player}
            title={t('projects.videoTitle', { title })}
            src={`https://www.youtube-nocookie.com/embed/${activeMedia.videoId}?autoplay=1&rel=0${activeMedia.startSeconds ? `&start=${activeMedia.startSeconds}` : ''}`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}
        {!activeMedia && (
          <div className={styles.placeholder} aria-hidden="true">
            <span>
              {project.category
                .map((category) => t(`projects.${category}`))
                .join(' / ')}
            </span>
            <strong>{title}</strong>
            <i>{project.id.toUpperCase()}</i>
          </div>
        )}
      </div>
      {media.length > 1 && (
        <>
          <button
            className={styles.previous}
            type="button"
            aria-label={t('projects.previousMedia')}
            onClick={() => navigate(-1)}
            onKeyDown={handleKeyDown}
          >
            <IconChevronLeft aria-hidden="true" />
          </button>
          <button
            className={styles.next}
            type="button"
            aria-label={t('projects.nextMedia')}
            onClick={() => navigate(1)}
            onKeyDown={handleKeyDown}
          >
            <IconChevronRight aria-hidden="true" />
          </button>
          <div
            className={styles.pagination}
            aria-label={t('projects.mediaPagination')}
          >
            {media.map((item, index) => (
              <button
                key={`${item.kind}-${index}`}
                type="button"
                aria-label={t('projects.selectMedia', { index: index + 1 })}
                aria-current={index === activeIndex}
                onClick={() => {
                  setActiveIndex(index)
                  setIsPlaying(false)
                }}
                onKeyDown={handleKeyDown}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
