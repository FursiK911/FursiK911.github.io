import { IconArrowsMaximize, IconPlayerPlay } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'
import type { CSSProperties } from 'react'
import { GalleryImage } from '../GalleryImage/GalleryImage'
import type { GallerySlideProps } from '../../model/types/projectCase.types'
import styles from './styles/GallerySlide.module.css'
export function GallerySlide({
  media,
  title,
  playing,
  onPlay,
  onExpand,
}: GallerySlideProps) {
  const { t } = useTranslation()
  if (media.kind === 'image')
    return (
      <button
        type="button"
        className={styles.gallerySlidePhoto}
        style={
          {
            '--project-image-background': `url(${JSON.stringify(media.src)})`,
          } as CSSProperties
        }
        onClick={onExpand}
        aria-label={t('projectCase.expand')}
      >
        <GalleryImage
          src={media.src}
          alt={t(`projects.${media.altKey}`)}
          className={styles.gallerySlideImage}
        />
        <span className={styles.gallerySlideExpand}>
          <IconArrowsMaximize aria-hidden="true" />
          {t('projectCase.expand')}
        </span>
      </button>
    )
  return (
    <div className={styles.gallerySlideVideo}>
      {playing ? (
        <iframe
          title={t('projects.videoTitle', { title })}
          src={`https://www.youtube-nocookie.com/embed/${media.videoId}?autoplay=1&rel=0${media.startSeconds ? `&start=${media.startSeconds}` : ''}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className={styles.gallerySlidePreview}
          onClick={onPlay}
          aria-label={t('projectCase.play')}
        >
          <GalleryImage
            src={`https://i.ytimg.com/vi/${media.videoId}/maxresdefault.jpg`}
            alt={title}
            youtube
          />
          <span className={styles.gallerySlidePlay}>
            <IconPlayerPlay aria-hidden="true" />
            <span>{t('projectCase.play')}</span>
          </span>
        </button>
      )}
    </div>
  )
}
