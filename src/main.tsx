import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { MotionConfig } from 'motion/react'
import './i18n.ts'
import '@mantine/core/styles.css'
import './index.css'
import { AppRouter } from './app/AppRouter.tsx'
import { theme } from './theme'

const redirectPath = new URLSearchParams(window.location.search).get('__path')
if (redirectPath) {
  window.history.replaceState({}, '', redirectPath)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <MotionConfig reducedMotion="user">
        <AppRouter />
      </MotionConfig>
    </MantineProvider>
  </StrictMode>,
)
