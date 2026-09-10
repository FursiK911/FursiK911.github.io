import type { ProjectMedia } from '@/entities/project'
import { orderProjectMedia } from '../utils/orderProjectMedia'

it('orders videos before photos without mutating the source media', () => {
  const imageA: ProjectMedia = {
    kind: 'image',
    src: '/a.png',
    altKey: 'a',
  }
  const imageB: ProjectMedia = {
    kind: 'image',
    src: '/b.png',
    altKey: 'b',
  }
  const videoA: ProjectMedia = { kind: 'youtube', videoId: 'video-a' }
  const source = [imageA, videoA, imageB]

  expect(orderProjectMedia(source)).toEqual([videoA, imageA, imageB])
  expect(source).toEqual([imageA, videoA, imageB])
})
