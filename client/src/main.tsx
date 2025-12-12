import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ToggleLightDarkProvider } from './context/LightDarkMode.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToggleLightDarkProvider>
      <App />
    </ToggleLightDarkProvider>
  </StrictMode>,
)
