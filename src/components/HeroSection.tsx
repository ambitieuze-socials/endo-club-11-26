import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import heroVideo from '../../img/hero-video/Gradient Lab 002.mp4'

function anim(delay: number): React.CSSProperties {
  return {
    animation: `fadeUp 0.7s ease ${delay}ms both`,
  }
}

export default function HeroSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setSubmitted(true)
  }

  return (
    <section
      className="h-screen overflow-hidden relative"
      style={{ background: 'linear-gradient(135deg, #BFB0E0 0%, #D8A8C0 100%)' }}
      aria-label="Hero sectie"
    >
      {/* Video background */}
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-dark/10" aria-hidden="true" />

      {/* Bottom-aligned content */}
      <div className="absolute inset-0 flex flex-col justify-center md:justify-end pb-0 md:pb-36 items-center text-center px-6">
        {/* Eyebrow badge */}
        <div
          style={anim(0)}
          className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md border border-white/60 px-4 sm:px-5 py-2 rounded-full text-[0.6rem] sm:text-[0.72rem] font-bold tracking-[0.05em] sm:tracking-[0.09em] uppercase text-[#5A4E98] mb-7 select-none whitespace-nowrap"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-pink inline-block shrink-0" aria-hidden="true" />
          Community voor vrouwen met endometriose
        </div>

        {/* Main heading */}
        <h1
          style={anim(150)}
          className="font-heading italic text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-normal text-white leading-[1.1] tracking-tight mb-3"
        >
          Community voor<br />
          vrouwen met endo.
        </h1>

        {/* Subtitle */}
        <p
          style={anim(300)}
          className="text-white/80 text-sm md:text-base max-w-[500px] leading-relaxed mb-8"
        >
          Endo Club is een warme, ondersteunende community voor vrouwen die leven met endometriose. Vind herkenning en steun.
        </p>

        {/* CTA bar */}
        <div style={anim(450)} className="w-full max-w-md">
          {submitted ? (
            <div className="bg-white/20 backdrop-blur-md border border-white/40 text-white rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center gap-3">
              <span className="text-sm font-semibold flex-1 text-center sm:text-left">Wij houden je op de hoogte.</span>
              <a
                href="https://chat.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-[#5A4E98] text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200 whitespace-nowrap shrink-0"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.197-1.624A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-4.99-1.367l-.357-.212-3.681.965.981-3.584-.233-.369A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                WhatsApp groep
              </a>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2 w-full"
              aria-label="Wachtlijst aanmelding"
            >
              <input
                type="email"
                inputMode="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Jouw e-mailadres"
                aria-label="E-mailadres voor wachtlijst"
                autoComplete="email"
                required
                className="flex-1 bg-white/15 backdrop-blur-md border border-white/30 text-white placeholder:text-white/55 text-sm px-5 py-3.5 rounded-2xl outline-none focus:border-white/60 transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-[#5A4E98] text-sm font-semibold px-6 py-3.5 rounded-2xl hover:bg-white/90 transition-colors duration-200 whitespace-nowrap shrink-0"
              >
                Aanmelden <ArrowRight size={14} className="inline ml-1 -mt-0.5" />
              </button>
            </form>
          )}
        </div>

        {/* Secondary link */}
        <a
          href="#community"
          style={anim(580)}
          className="mt-5 inline-flex items-center gap-1.5 text-white/75 text-sm font-medium hover:text-white hover:gap-2.5 transition-all duration-200"
        >
          Ontdek de community
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  )
}
