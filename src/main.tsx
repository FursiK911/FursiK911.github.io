import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { MotionConfig } from 'motion/react'
import '@/shared/config/i18n'
import '@mantine/core/styles.css'
import './index.css'
import { App } from '@/app/App'
import { theme } from '@/shared/config/theme'

const redirectPath = new URLSearchParams(window.location.search).get('__path')
if (redirectPath) {
  window.history.replaceState({}, '', redirectPath)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </MantineProvider>
  </StrictMode>,
)
