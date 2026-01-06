import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ToggleLightDarkProvider } from './context/LightDarkMode.tsx'
import { AccountToggleProvider } from './context/AccountToggle.tsx'
import { AuthProvider } from './context/AuthProvider.tsx'
import { ToggleTaskFormProvider } from './context/ToggleTask.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ToggleLightDarkProvider>
        <AccountToggleProvider>
          <ToggleTaskFormProvider>
            <App />
          </ToggleTaskFormProvider>
        </AccountToggleProvider>
      </ToggleLightDarkProvider>
    </AuthProvider>
  </StrictMode>,
)
