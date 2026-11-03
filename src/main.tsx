import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import OverEndoPage from './pages/OverEndoPage.tsx'
import PasswordGate from './components/PasswordGate.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PasswordGate>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/over-endo" element={<OverEndoPage />} />
        </Routes>
      </PasswordGate>
    </BrowserRouter>
  </StrictMode>,
)
