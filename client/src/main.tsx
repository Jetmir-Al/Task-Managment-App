import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToggleLightDarkProvider } from './context/LightDarkMode.tsx'
import { AccountToggleProvider } from './context/AccountToggle.tsx'
import { AuthProvider } from './context/AuthProvider.tsx'
import { ToggleTaskFormProvider } from './context/ToggleTask.tsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToggleLightDarkProvider>
          <AccountToggleProvider>
            <ToggleTaskFormProvider>
              <App />
            </ToggleTaskFormProvider>
          </AccountToggleProvider>
        </ToggleLightDarkProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
