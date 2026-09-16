import { useEffect } from 'react'
import { pageMetadataConfig } from './config/pageMetadata.config'
import type { PageMetadata } from './types/PageMetadata.types'
import { getPageUrl } from './utils/getPageUrl'
import { setMeta } from './utils/setMeta'

export function usePageMetadata({
  title,
  description,
  language,
}: PageMetadata) {
  useEffect(() => {
    const pageUrl = getPageUrl()
    const imageUrl = new URL(
      pageMetadataConfig.imagePath,
      window.location.origin,
    ).toString()

    document.title = title
    document.documentElement.lang = language.startsWith('ru') ? 'ru' : 'en'

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = pageUrl

    setMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })
    setMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    })
    setMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    setMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: pageUrl,
    })
    setMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    })
    setMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: pageMetadataConfig.imageAlt,
    })
    setMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    })
  }, [description, language, title])
}
