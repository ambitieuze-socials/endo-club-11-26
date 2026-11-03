import { useState, type FormEvent } from 'react'
import heroVideo from '../../img/hero-video/Gradient Lab 002.mp4'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setSubmitted(true)
  }

  return (
    <section
      id="cta"
      className="relative overflow-hidden py-20 md:py-32 px-6"
      aria-label="Aanmelden wachtlijst"
    >
      {/* Full-section video background */}
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Glass card */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <div
          className="rounded-3xl px-8 py-14 sm:px-14 sm:py-16 text-center"
          style={{
            background: 'rgba(255, 255, 255, 0.14)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.28)',
            boxShadow: '0 8px 48px rgba(90, 78, 152, 0.18), inset 0 1px 0 rgba(255,255,255,0.35)',
          }}
        >
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.09em] uppercase mb-5"
            style={{
              background: 'rgba(255,255,255,0.22)',
              color: '#5A4E98',
              border: '1px solid rgba(255,255,255,0.35)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#5A4E98] inline-block" aria-hidden="true" />
            Klaar om te beginnen?
          </span>

          <h2 className="font-heading italic text-3xl sm:text-4xl font-bold text-offwhite mb-4 leading-tight drop-shadow-sm">
            Word onderdeel van<br />de Endo Club
          </h2>

          <p className="text-white/80 text-base leading-relaxed max-w-[420px] mx-auto mb-9">
            Meld je aan voor de wachtlijst en ontvang als eerste nieuws over de launch van de
            community en de app.
          </p>

          {/* Form */}
          {submitted ? (
            <div
              className="inline-flex items-center gap-2 text-[#5A4E98] text-sm font-semibold px-6 py-3 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(8px)' }}
            >
              💜 We kunnen niet wachten om je te verwelkomen!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2 max-w-[420px] mx-auto"
              aria-label="Wachtlijst aanmelding"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Jouw e-mailadres"
                aria-label="E-mailadres voor wachtlijst"
                autoComplete="email"
                required
                className="flex-1 text-brand-dark placeholder:text-brand-light rounded-full px-5 py-3 text-sm outline-none border-0 transition-colors duration-200"
                style={{
                  background: 'rgba(255,255,255,0.60)',
                  backdropFilter: 'blur(8px)',
                }}
              />
              <button
                type="submit"
                className="bg-purple-deep text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#5A4E98] transition-colors duration-200 whitespace-nowrap"
                style={{ boxShadow: '0 4px 18px rgba(107, 94, 168, 0.45)' }}
              >
                Word lid →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
