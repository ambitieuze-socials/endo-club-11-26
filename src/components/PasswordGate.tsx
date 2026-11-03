import { useState } from 'react'
import LogoMark from './LogoMark'

const PASSWORD = 'pookie123'

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('preview_auth') === '1')
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  if (unlocked) return <>{children}</>

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (input === PASSWORD) {
      sessionStorage.setItem('preview_auth', '1')
      setUnlocked(true)
    } else {
      setError(true)
      setInput('')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: 'linear-gradient(135deg, #BFB0E0 0%, #D8A8C0 100%)' }}>
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-[0_24px_64px_rgba(100,80,140,0.22)] p-10 w-full max-w-sm text-center">
        <div className="flex justify-center mb-6">
          <LogoMark size={40} fill="#8B7EC8" />
        </div>
        <h1 className="font-heading italic text-2xl text-brand-dark mb-1">Endo Club</h1>
        <p className="text-brand-mid text-sm mb-8">Preview — voer het wachtwoord in</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="password"
            value={input}
            onChange={e => { setInput(e.target.value); setError(false) }}
            placeholder="Wachtwoord"
            autoFocus
            className="bg-brand-muted text-brand-dark placeholder:text-brand-dark/40 text-sm outline-none rounded-full px-5 py-3.5 text-center"
          />
          {error && <p className="text-pink text-xs">Onjuist wachtwoord</p>}
          <button
            type="submit"
            className="bg-brand-dark text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:opacity-80 transition-opacity"
          >
            Bekijk site
          </button>
        </form>
      </div>
    </div>
  )
}
