import { renderHook } from '@testing-library/react'
import { usePageMetadata } from '../usePageMetadata'

it('updates the shared OG and Twitter preview metadata for the current page', () => {
  window.history.replaceState({}, '', '/projects/example?preview=1#media')

  renderHook(() =>
    usePageMetadata({
      title: 'Example project',
      description: 'Example description',
      language: 'en',
    }),
  )

  expect(document.title).toBe('Example project')
  expect(document.documentElement.lang).toBe('en')
  expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
    'content',
    'Example description',
  )
  expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute(
    'content',
    'Example project',
  )
  expect(
    document.querySelector('meta[property="og:description"]'),
  ).toHaveAttribute('content', 'Example description')
  expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute(
    'content',
    'http://localhost:3000/projects/example',
  )
  expect(document.querySelector('meta[property="og:image"]')).toHaveAttribute(
    'content',
    'http://localhost:3000/og-cover.webp',
  )
  expect(
    document.querySelector('meta[property="og:image:alt"]'),
  ).toHaveAttribute('content', 'Dmitry Fursov — Software Developer')
  expect(document.querySelector('meta[name="twitter:image"]')).toHaveAttribute(
    'content',
    'http://localhost:3000/og-cover.webp',
  )
  expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'http://localhost:3000/projects/example',
  )
})
