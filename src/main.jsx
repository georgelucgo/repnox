import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import { registerSW } from 'virtual:pwa-register'

registerSW({
  immediate: true
})

=======
>>>>>>> adbd70a40a05f4314f664ec6506bc5fbe3c9a4f0

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
