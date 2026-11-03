import { ArrowRight } from 'lucide-react'
import heroVideo from '../../img/hero-video/Gradient Lab 002.mp4'
import { useInView } from '../hooks/useInView'

const ease = 'cubic-bezier(0.16, 1, 0.3, 1)'

function fu(inView: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.75s ${ease} ${delay}ms, transform 0.75s ${ease} ${delay}ms`,
  }
}

export default function CTASection({ onOpen }: { onOpen: () => void }) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      id="cta"
      className="relative overflow-hidden rounded-t-[25px] z-[80] mt-[-25px] py-32 px-6 text-center"
      aria-label="Aanmelden wachtlijst"
    >
      <video
        src={heroVideo}
        autoPlay muted loop playsInline aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute inset-0 bg-brand-dark/50 backdrop-blur-[2px]" aria-hidden="true" />

      <div className="relative z-10 max-w-xl mx-auto">
        <div style={fu(inView, 0)} className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.09em] uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-pink inline-block" aria-hidden="true" />
          Klaar om te beginnen?
        </div>

        <h2
          style={{ ...fu(inView, 80), fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}
          className="font-heading italic text-white leading-[1.05] tracking-tight mb-6"
        >
          Word onderdeel van<br />de Endo Club
        </h2>

        <p style={fu(inView, 160)} className="text-white/75 text-base leading-relaxed max-w-md mx-auto mb-10">
          Meld je aan voor de wachtlijst en ontvang als eerste nieuws over de launch van de community en de app.
        </p>

        <div style={fu(inView, 240)}>
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-2 bg-white text-[#5A4E98] font-semibold px-8 py-4 rounded-full hover:bg-offwhite transition-colors duration-200 text-sm"
          >
            Word lid
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  )
}
