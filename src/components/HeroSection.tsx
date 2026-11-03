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
      className="h-screen overflow-hidden mb-[-25px] relative"
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
      <div className="absolute inset-0 flex flex-col justify-end pb-28 md:pb-36 items-center text-center px-6">
        {/* Eyebrow badge */}
        <div
          style={anim(0)}
          className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md border border-white/60 px-5 py-2 rounded-full text-[0.72rem] font-bold tracking-[0.09em] uppercase text-[#5A4E98] mb-7 select-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-pink inline-block" aria-hidden="true" />
          Community voor vrouwen met endometriose
        </div>

        {/* Main heading */}
        <h1
          style={anim(150)}
          className="font-heading italic text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-normal text-white leading-[1.1] tracking-tight mb-5"
        >
          Jij hoort<br />
          erbij.
        </h1>

        {/* Subtitle */}
        <p
          style={anim(300)}
          className="text-white/80 text-sm md:text-base max-w-[500px] leading-relaxed mb-8"
        >
          Endo Club is een warme, ondersteunende community voor vrouwen die leven met endometriose.
        </p>

        {/* CTA bar */}
        <div style={anim(450)} className="w-full max-w-md">
          {submitted ? (
            <div className="bg-white/20 backdrop-blur-md border border-white/40 text-white font-semibold text-sm px-8 py-4 rounded-2xl">
              Welkom! We houden je op de hoogte.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2 w-full"
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
