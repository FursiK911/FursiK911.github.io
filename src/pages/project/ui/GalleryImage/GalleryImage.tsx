import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IconPhotoOff } from '@tabler/icons-react'
import type { GalleryImageProps } from '../../model/types/projectCase.types'
import styles from './styles/GalleryImage.module.css'
export function GalleryImage({
  src,
  alt,
  youtube = false,
  className,
}: GalleryImageProps) {
  const { t } = useTranslation()
  const [fallback, setFallback] = useState(false)
  const [failed, setFailed] = useState(false)
  const imageSrc = fallback
    ? src.replace('maxresdefault.jpg', 'hq720.jpg')
    : src
  if (failed)
    return (
      <span
        className={styles.galleryImageUnavailable}
        role="img"
        aria-label={alt}
      >
        <IconPhotoOff aria-hidden="true" />
        <span>{t('projectCase.unavailable')}</span>
      </span>
    )
  return (
    <img
      className={className}
      src={imageSrc}
      alt={alt}
      decoding="async"
      onLoad={(event) => {
        if (youtube && event.currentTarget.naturalWidth <= 120) {
          if (!fallback) setFallback(true)
          else setFailed(true)
        }
      }}
      onError={() => {
        if (youtube && !fallback) setFallback(true)
        else setFailed(true)
      }}
    />
  )
}
