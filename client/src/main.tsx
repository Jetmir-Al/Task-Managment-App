import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ToggleLightDarkProvider } from './context/LightDarkMode.tsx'
import { AccountToggleProvider } from './context/AccountToggle.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToggleLightDarkProvider>
      <AccountToggleProvider>
        <App />
      </AccountToggleProvider>
    </ToggleLightDarkProvider>
  </StrictMode>,
)
