import { Mail } from 'lucide-react'
import amyPhoto from '../../img/amy.jpg'
import { useInView } from '../hooks/useInView'
import WaitlistPill from './WaitlistPill'

const ease = 'cubic-bezier(0.16, 1, 0.3, 1)'

export default function AboutSection() {
  const { ref, inView } = useInView<HTMLElement>()

  const fadeUp = (delay = 0): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.75s ${ease} ${delay}ms, transform 0.75s ${ease} ${delay}ms`,
  })

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#F5F0E8] rounded-t-[25px] relative z-20 mt-[-25px] py-20 md:py-32 px-6"
      aria-label="Over Endo Club"
    >
      {/* Top centered area */}
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">
        <p style={fadeUp(0)} className="font-heading italic text-brand-dark text-base md:text-lg leading-relaxed max-w-lg mb-8">
          Een community én een platform, gebouwd door vrouwen met endo, voor vrouwen met endo.
        </p>

        <div style={fadeUp(120)} className="flex flex-wrap justify-center gap-4">
          <a
            href="#cta"
            className="inline-flex items-center gap-3 bg-brand-dark text-offwhite rounded-full pl-1.5 pr-5 py-1.5 font-medium text-sm uppercase tracking-wide hover:bg-brand-mid transition-colors duration-200"
          >
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
              <Mail size={14} className="text-brand-dark" />
            </span>
            Neem contact op
          </a>

          <WaitlistPill />
        </div>

        <div style={fadeUp(200)} className="mt-12 flex items-center gap-2" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-brand-muted/60 inline-block" />
          <span className="w-24 h-px bg-brand-muted/60 inline-block" />
          <span className="w-2 h-2 rounded-full bg-brand-muted/60 inline-block" />
        </div>
      </div>

      {/* Bottom two-column area */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        <div style={fadeUp(220)} className="shrink-0">
          <div
            className="relative w-16 h-16 rounded-full p-0.5"
            style={{ background: 'linear-gradient(135deg, #8B7EC8 0%, #E08BA0 100%)' }}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img src={amyPhoto} alt="Amy Jalloh" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>

        <p style={fadeUp(280)} className="font-heading italic text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.3] font-normal text-brand-dark">
          Endo Club is meer dan een community. Het is een thuis. We bouwen een app en producten
          die jou dagelijks ondersteunen. Want vrouwen met endometriose verdienen tools die écht
          begrijpen hoe het voelt, en een plek waar ze altijd terechtkunnen.
        </p>
      </div>
    </section>
  )
}
