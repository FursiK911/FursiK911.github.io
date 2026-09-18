import liveCamVideo from '@/shared/assets/videos/live_cam_loop.webm'

export const liveCamConfig = {
  source: liveCamVideo,
  minimumLoadingDurationMs: 2000,
  reconnectDelaysMs: [5000, 10000, 20000, 30000],
} as const

export const liveCamStatusClassNames = {
  idle: 'live-cam-idle',
  connecting: 'live-cam-connecting',
  live: 'live-cam-live',
  'signal-lost': 'live-cam-signal-lost',
} as const
