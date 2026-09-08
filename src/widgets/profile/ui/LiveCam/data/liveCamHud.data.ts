import type {
  LiveCamJournalEventTemplate,
  LiveCamTelemetryState,
  LiveCamTrackerState,
} from '../types/LiveCamHud.types'

export const initialLiveCamTelemetry: LiveCamTelemetryState = {
  fps: 24.5,
  latency: 155,
  signal: 62.5,
  uplink: 6,
}

export const initialLiveCamTracker: LiveCamTrackerState = {
  lock: 94.8,
  x: 38,
  y: 48,
}

export const initialLiveCamWaveform = [
  18, 32, 24, 52, 38, 70, 28, 46, 62, 35, 76, 44, 57, 23, 68, 39,
]

export const liveCamHudEvents: Record<
  'connecting' | 'live' | 'signalLost' | 'restored',
  LiveCamJournalEventTemplate[]
> = {
  connecting: [
    { code: 'LINK-01', message: 'UPLINK WAKE', severity: 'warning' },
    { code: 'OPT-11', message: 'OPTICS SYNC', severity: 'success' },
    { code: 'BUF-04', message: 'BUFFER PRIME', severity: 'warning' },
  ],
  live: [
    { code: 'TRK-07', message: 'TRACK LOCK', severity: 'success' },
    { code: 'BUF-22', message: 'BUFFER RECOVERED', severity: 'success' },
    { code: 'NET-16', message: 'PACKET RETRY', severity: 'warning' },
    { code: 'OPT-42', message: 'AUX SENSOR FAILED', severity: 'failed' },
    { code: 'FRM-03', message: 'FRAME DROP', severity: 'warning' },
    { code: 'UPL-09', message: 'UPLINK NOMINAL', severity: 'success' },
  ],
  signalLost: [
    { code: 'TRK-07', message: 'TRACK LOCK LOST', severity: 'failed' },
    { code: 'NET-00', message: 'SIGNAL LOST', severity: 'failed' },
  ],
  restored: [
    { code: 'UPL-09', message: 'UPLINK RESTORED', severity: 'success' },
  ],
}
