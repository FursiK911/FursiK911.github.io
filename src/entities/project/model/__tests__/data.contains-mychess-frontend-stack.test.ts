import { expect, it } from 'vitest'
import { projects } from '@/entities/project'

it('defines the MyChess frontend stack and implementation areas', () => {
  const project = projects.find((item) => item.id === 'mychess-web')

  expect(project?.tech).toEqual(
    expect.arrayContaining([
      'React',
      'TypeScript',
      'Vite',
      'Mantine',
      'Redux Toolkit',
      'TanStack Query',
      'Socket.IO',
      'chess.js',
      'Stockfish',
      'WebAssembly',
      'mediasoup',
      'WebRTC',
    ]),
  )
  expect(project?.tech).not.toEqual(
    expect.arrayContaining(['RxJS', 'Chessground', 'react-dnd']),
  )
  expect(project?.actions).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        href: 'https://mychess.app/',
        unavailableReasonKey: 'projects.unavailableActions.mychessWebsite',
      }),
    ]),
  )
})
