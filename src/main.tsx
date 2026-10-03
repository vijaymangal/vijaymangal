import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { loadBrandFont } from '@/utils/fonts'
import App from '@/App'
import '@/styles/globals.css'

loadBrandFont()

// React 19 hoists route metadata without replacing static HTML tags.
// Hand the fallback metadata to Helmet before rendering to avoid duplicates.
document.head.querySelectorAll('[data-rh="true"]').forEach(tag => tag.remove())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)
