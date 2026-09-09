export const liveCamHudConfig = {
  fps: { initial: 24.5, intervalMs: 580, maximum: 28, minimum: 21, step: 0.34 },
  latency: {
    initial: 155,
    intervalMs: 470,
    maximum: 220,
    minimum: 90,
    step: 14,
  },
  signal: {
    initial: 62.5,
    intervalMs: 530,
    maximum: 75,
    minimum: 50,
    step: 0.7,
  },
  streamOffsetMaximumSeconds: 5400,
  streamOffsetMinimumSeconds: 900,
  trackerFadeDurationMs: 300,
  trackerHiddenMaximumMs: 10000,
  trackerHiddenMinimumMs: 5000,
  trackerIntervalMs: 640,
  trackerPositionIntervalMs: 2100,
  trackerVisibleDurationMs: 3000,
  uplink: {
    initial: 6,
    intervalMs: 610,
    maximum: 8.5,
    minimum: 3.5,
    step: 0.4,
  },
  waveformIntervalMs: 320,
} as const

export const liveCamTerminalConfig = {
  completedLineLimit: 6,
  pauseMaximumMs: 4000,
  pauseMinimumMs: 3000,
  statusFrequency: 0.1,
  typingMaximumMs: 84,
  typingMinimumMs: 48,
} as const
