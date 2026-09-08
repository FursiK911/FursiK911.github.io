import type {
  LiveCamTelemetryState,
  LiveCamTerminalEntry,
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

export const liveCamTerminalEntries: LiveCamTerminalEntry[] = [
  {
    id: 'unix-relay',
    tokens: [
      { text: '$ ', tone: 'prompt' },
      { text: 'sudo', tone: 'keyword' },
      { text: ' systemctl restart ', tone: 'plain' },
      { text: 'media-relay', tone: 'function' },
    ],
  },
  {
    id: 'powershell-build',
    tokens: [
      { text: 'PS> ', tone: 'prompt' },
      { text: 'npm', tone: 'function' },
      { text: ' run ', tone: 'plain' },
      { text: 'build', tone: 'string' },
    ],
  },
  {
    id: 'typescript-frame',
    tokens: [
      { text: 'const ', tone: 'keyword' },
      { text: 'frame', tone: 'function' },
      { text: ' = ', tone: 'plain' },
      { text: 'await', tone: 'keyword' },
      { text: ' capture(', tone: 'plain' },
      { text: '30', tone: 'number' },
      { text: ')', tone: 'plain' },
    ],
  },
  {
    id: 'sql-build',
    tokens: [
      { text: 'SELECT', tone: 'keyword' },
      { text: ' status ', tone: 'plain' },
      { text: 'FROM', tone: 'keyword' },
      { text: ' builds ', tone: 'plain' },
      { text: 'WHERE', tone: 'keyword' },
      { text: ' id=', tone: 'plain' },
      { text: '42', tone: 'number' },
    ],
  },
  {
    id: 'qa-message',
    tokens: [
      { text: '[qa]', tone: 'comment' },
      { text: ' smoke tests queued', tone: 'plain' },
    ],
  },
  {
    id: 'git-push',
    tokens: [
      { text: '$ ', tone: 'prompt' },
      { text: 'git', tone: 'function' },
      { text: ' push origin ', tone: 'plain' },
      { text: 'main', tone: 'string' },
    ],
  },
  {
    id: 'csharp-sync',
    tokens: [
      { text: 'public ', tone: 'keyword' },
      { text: 'Task ', tone: 'keyword' },
      { text: 'SyncFeed()', tone: 'function' },
    ],
  },
  {
    id: 'design-message',
    tokens: [
      { text: '[design]', tone: 'comment' },
      { text: ' overlay approved', tone: 'plain' },
    ],
  },
  {
    id: 'javascript-reconnect',
    tokens: [
      { text: 'await', tone: 'keyword' },
      { text: ' reconnect()', tone: 'function' },
      { text: '.then(', tone: 'plain' },
      { text: 'render', tone: 'function' },
      { text: ')', tone: 'plain' },
    ],
  },
]

export const liveCamTerminalStatusEntries: LiveCamTerminalEntry[] = [
  {
    id: 'build-success',
    severity: 'success',
    tokens: [
      { text: 'build :: ', tone: 'plain' },
      { text: 'SUCCESS', tone: 'success' },
    ],
  },
  {
    id: 'lint-warning',
    severity: 'warning',
    tokens: [
      { text: 'lint :: ', tone: 'plain' },
      { text: 'WARNING', tone: 'warning' },
    ],
  },
  {
    id: 'worker-failed',
    severity: 'failed',
    tokens: [
      { text: 'worker :: ', tone: 'plain' },
      { text: 'FAILED', tone: 'failed' },
    ],
  },
]
