import { createTheme } from '@mantine/core'

const cyan = [
  '#e8ffff',
  '#d0fbfc',
  '#b7f7f8',
  '#a7f3f6',
  '#8fecef',
  '#70e2e6',
  '#51d5da',
  '#35c2c8',
  '#1ca9b0',
  '#078a92',
] as const

export const theme = createTheme({
  primaryColor: 'cyan',
  colors: { cyan },
  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
  fontFamilyMonospace:
    "'SFMono-Regular', Consolas, 'Liberation Mono', monospace",
  defaultRadius: 0,
  cursorType: 'pointer',
  respectReducedMotion: true,
})
