import amyPhoto from '../../img/amy.jpg'
import { useInView } from '../hooks/useInView'

const ease = 'cubic-bezier(0.16, 1, 0.3, 1)'

export default function AmySection() {
  const { ref, inView } = useInView<HTMLElement>()

  const fadeUp = (delay = 0): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.75s ${ease} ${delay}ms, transform 0.75s ${ease} ${delay}ms`,
  })

  const fadeLeft: React.CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-40px)',
    transition: `opacity 0.75s ${ease} 0ms, transform 0.75s ${ease} 0ms`,
  }

  return (
    <section
      id="amy"
      ref={ref}
      className="bg-offwhite rounded-t-[25px] relative z-40 mt-[-25px] py-20 md:py-32 px-6"
      aria-label="Over Amy Jalloh"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: avatar */}
        <div style={fadeLeft} className="relative flex justify-center md:justify-start">
          <div
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1"
            style={{ background: 'linear-gradient(135deg, #8B7EC8 0%, #E08BA0 100%)' }}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img src={amyPhoto} alt="Amy Jalloh" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          <div className="absolute bottom-3 right-0 sm:-right-4 bg-offwhite rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(139,126,200,0.15)] flex items-center gap-3 border border-purple/10">
            <span className="w-2.5 h-2.5 rounded-full bg-pink animate-pulse-dot shrink-0" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold text-brand-dark whitespace-nowrap">
              Ambassadeur Endometriose
            </span>
          </div>
        </div>

        {/* Right: content */}
        <div>
          <span style={fadeUp(100)} className="inline-flex items-center gap-2 bg-purple/10 text-purple-deep px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.09em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-pink inline-block" aria-hidden="true" />
            De oprichter
          </span>

          <h2 style={fadeUp(160)} className="font-heading italic text-3xl sm:text-4xl font-bold text-brand-dark mb-3 leading-tight">
            Amy Jalloh
          </h2>

          <span
            style={{
              ...fadeUp(200),
              background: 'linear-gradient(135deg, #8B7EC8 0%, #E08BA0 100%)',
            }}
            className="inline-block text-white text-xs font-bold tracking-wide px-4 py-1.5 rounded-full mb-6"
          >
            Ambassadeur &amp; Oprichter
          </span>

          <p style={fadeUp(240)} className="text-brand-mid text-sm sm:text-base leading-[1.8] mb-3">
            Amy Jalloh weet als geen ander hoe het is om met endometriose te leven. Na jaren van
            zoeken, pijn en onbegrip werd bij haar de diagnose gesteld. Dit veranderde haar leven
            en ook haar missie.
          </p>
          <p style={fadeUp(270)} className="text-brand-mid text-sm sm:text-base leading-[1.8] mb-3">
            Als ambassadeur voor endometriose zet Amy zich actief in voor meer bewustwording,
            eerdere diagnoses en betere zorg. Ze heeft de Endo Club opgericht omdat ze gelooft in
            de kracht van samen: samen weet je meer, samen sta je sterker, samen maak je verschil.
          </p>

          <blockquote style={fadeUp(310)} className="relative border-l-4 border-purple rounded-r-2xl bg-gradient-to-br from-purple/8 to-pink/8 pl-5 pr-5 py-4 my-6">
            <p className="font-heading italic text-brand-dark text-base sm:text-lg leading-[1.65]">
              "Ik wilde een plek creëren waar vrouwen zich eindelijk begrepen voelen. Waar je niet
              hoeft uit te leggen waarom je soms niet kunt. Waar je gewoon jezelf kunt zijn."
            </p>
          </blockquote>

          <p style={fadeUp(350)} className="text-brand-mid text-sm sm:text-base leading-[1.8]">
            Met Endo Club bouwt Amy aan een community die niet alleen steun biedt, maar ook actief
            bijdraagt aan de strijd tegen endometriose, met 10% van alle inkomsten naar onderzoek
            en bewustwording.
          </p>
        </div>
      </div>
    </section>
  )
}
