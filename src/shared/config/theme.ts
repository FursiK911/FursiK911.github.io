import { createTheme } from '@mantine/core'
import { cyan } from './theme/data/cyanPalette'

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
