import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ToggleLightDarkProvider } from './context/LightDarkMode.tsx'
import { AccountToggleProvider } from './context/AccountToggle.tsx'
import { AuthProvider } from './context/AuthProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ToggleLightDarkProvider>
        <AccountToggleProvider>
          <App />
        </AccountToggleProvider>
      </ToggleLightDarkProvider>
    </AuthProvider>
  </StrictMode>,
)
