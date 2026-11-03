import { useState, useRef, useEffect, type FormEvent } from 'react'
import { Check, Plus, X, ArrowRight } from 'lucide-react'
import endoMockup from '../../img/endo-club-mockup.png'
import heroVideo from '../../img/hero-video/Gradient Lab 002.mp4'
import { useInView } from '../hooks/useInView'

function AppWaitlistPill() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 320)
  }, [open])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setDone(true)
  }

  if (done) {
    return (
      <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white rounded-full pl-1.5 pr-5 py-1.5 text-sm font-medium">
        <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
          <Check size={14} className="text-purple-deep" />
        </span>
        Je staat op de lijst!
      </div>
    )
  }

  return (
    <div
      className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm h-11 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden cursor-pointer"
      style={{ width: open ? '272px' : '256px' }}
      onClick={() => !open && setOpen(true)}
    >
      <button
        type="button"
        onClick={(e) => { if (open) { e.stopPropagation(); setOpen(false); setEmail('') } }}
        className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0 ml-1.5 transition-transform duration-200 hover:scale-110"
        aria-label={open ? 'Sluiten' : undefined}
      >
        {open ? <X size={13} className="text-purple-deep" /> : <Plus size={14} className="text-purple-deep" />}
      </button>

      <span
        className="text-white font-medium text-sm whitespace-nowrap select-none overflow-hidden transition-all duration-500"
        style={{
          opacity: open ? 0 : 1,
          maxWidth: open ? '0px' : '180px',
          paddingLeft: open ? 0 : '12px',
          paddingRight: open ? 0 : '12px',
        }}
      >
        Op de hoogte blijven
      </span>

      <form
        onSubmit={handleSubmit}
        className="flex-1 pr-1.5 transition-opacity duration-300"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}
      >
        <div className="relative flex items-center">
          <input
            ref={inputRef}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="jouw@email.nl"
            className="bg-white/30 text-white placeholder:text-white/55 text-sm outline-none rounded-full pl-3 pr-9 py-1.5 w-full"
          />
          <button
            type="submit"
            className="absolute right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-offwhite transition-colors shrink-0"
          >
            <ArrowRight size={11} className="text-purple-deep" />
          </button>
        </div>
      </form>
    </div>
  )
}

const features = [
  'Symptomen & cyclus tracker',
  'Community feed & directe berichten',
  'Persoonlijk dagboek & notities',
  'Doktersrapport exporteren',
  'Exclusieve content & webinars',
]

const ease = 'cubic-bezier(0.16, 1, 0.3, 1)'

export default function AppSection() {
  const { ref, inView } = useInView<HTMLElement>()

  const fadeUp = (delay = 0): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.75s ${ease} ${delay}ms, transform 0.75s ${ease} ${delay}ms`,
  })

  const fadeRight: React.CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.97)',
    transition: `opacity 0.9s ${ease} 120ms, transform 0.9s ${ease} 120ms`,
  }

  return (
    <section
      id="app"
      ref={ref}
      className="relative overflow-hidden rounded-t-[25px] z-50 mt-[-25px] py-20 md:py-32 px-6"
      style={{ background: 'linear-gradient(135deg, #BFB0E0 0%, #D8A8C0 100%)' }}
      aria-label="De Endo Club App"
    >
      {/* Decorative circles */}
      <div aria-hidden="true" className="absolute -top-[120px] -right-[120px] w-[420px] h-[420px] rounded-full bg-white/8 pointer-events-none" />
      <div aria-hidden="true" className="absolute -bottom-[80px] -left-[60px] w-[280px] h-[280px] rounded-full bg-white/6 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div>
            <span style={fadeUp(0)} className="inline-flex items-center gap-2 bg-white/22 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.09em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80 inline-block" aria-hidden="true" />
              Binnenkort beschikbaar
            </span>

            <h2 style={fadeUp(80)} className="font-heading italic text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              De Endo Club App<br />komt eraan 📱
            </h2>

            <p style={fadeUp(150)} className="text-white/82 text-base leading-relaxed mb-8">
              Jouw endometriose-community in je broekzak. Track je klachten, verbindt met andere
              vrouwen en krijg persoonlijk inzicht in jouw patroon.
            </p>

            <ul style={fadeUp(200)} className="flex flex-col gap-3 mb-8 list-none">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-white/88 text-sm font-medium">
                  <span className="w-5 h-5 rounded-full bg-white/22 flex items-center justify-center shrink-0">
                    <Check size={11} strokeWidth={3} className="text-white" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div style={fadeUp(280)}>
              <AppWaitlistPill />
            </div>
          </div>

          {/* App mockup */}
          <div style={fadeRight} className="flex justify-center order-first md:order-last">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-[440px] h-[440px] rounded-full overflow-hidden opacity-80">
                <video
                  src={heroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                  className="w-full h-full object-cover"
                />
              </div>
              <img
                src={endoMockup}
                alt="Endo Club app preview"
                className="relative z-10 w-80 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
