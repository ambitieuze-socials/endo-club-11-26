import { useState } from 'react'
import { ChevronDown, Mail, ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import WaitlistPill from './WaitlistPill'

const WHATSAPP_URL = 'https://chat.whatsapp.com/'

const faqs: { question: string; answer: string; whatsapp?: boolean; mail?: boolean; waitlist?: boolean; overEndo?: boolean }[] = [
  {
    question: 'Wat is endometriose?',
    answer:
      'Endometriose is een chronische aandoening waarbij weefsel dat lijkt op het baarmoederslijmvlies buiten de baarmoeder groeit. Dit veroorzaakt ontstekingen, verklevingen en vaak hevige pijn — vooral tijdens de menstruatie. Wereldwijd heeft 1 op de 10 vrouwen endometriose, maar een diagnose duurt gemiddeld 7 tot 10 jaar.',
    overEndo: true,
  },
  {
    question: 'Voor wie is Endo Club bedoeld?',
    answer:
      'Endo Club is er voor vrouwen die leven met endometriose, of je nu net je diagnose hebt gekregen of al jaren onderweg bent. Ook als je vermoedt dat je endo hebt maar nog geen officiële diagnose, ben je van harte welkom.',
  },
  {
    question: 'Is het gratis om lid te worden?',
    answer:
      'Ja. De community is gratis toegankelijk. Voor de app werken we aan een freemium model waarbij basisfuncties gratis blijven en je optioneel kunt upgraden voor extra tools.',
    whatsapp: true,
  },
  {
    question: 'Wanneer komt de app?',
    answer:
      'We werken hard aan de lancering. Schrijf je in op de waitlist en je bent de eerste die het hoort. Je krijgt vroegboekersvoordelen zodra de app live gaat.',
    waitlist: true,
  },
  {
    question: 'Hoe werkt de community?',
    answer:
      'De community is een besloten, veilige ruimte waar vrouwen met endometriose ervaringen delen, vragen stellen en elkaar ondersteunen. Na aanmelding krijg je toegang tot onze WhatsApp-groep en straks ook tot het platform in de app.',
    whatsapp: true,
  },
  {
    question: 'Wat doen jullie met mijn e-mailadres?',
    answer:
      'Je e-mailadres gebruiken we uitsluitend om je op de hoogte te houden van Endo Club nieuws en de app-lancering. We verkopen nooit gegevens aan derden en je kunt je op elk moment uitschrijven.',
  },
  {
    question: 'Hoe kan ik contact opnemen?',
    answer:
      'Stuur ons een berichtje via Instagram of mail ons direct. We reageren zo snel mogelijk, want we zijn tenslotte ook gewoon mensen met endo.',
    mail: true,
  },
]

const ease = 'cubic-bezier(0.16, 1, 0.3, 1)'

function MailButton() {
  return (
    <a
      href="mailto:info@endoclub.nl"
      className="inline-flex items-center gap-2.5 bg-brand-dark text-white rounded-full pl-2 pr-5 py-2 text-sm font-semibold hover:opacity-70 transition-opacity duration-200 mt-3 mb-5"
    >
      <span className="w-7 h-7 bg-white/15 rounded-full flex items-center justify-center shrink-0">
        <Mail size={13} />
      </span>
      info@endoclub.nl
    </a>
  )
}

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 bg-brand-dark text-white rounded-full pl-2 pr-5 py-2 text-sm font-semibold hover:opacity-70 transition-opacity duration-200 mt-3 mb-5"
    >
      <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center shrink-0">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.564 4.14 1.544 5.874L.057 23.704a.75.75 0 00.92.92l5.878-1.488A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.712 9.712 0 01-4.953-1.355l-.355-.212-3.686.933.955-3.63-.232-.373A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
        </svg>
      </span>
      Join de WhatsApp groep
    </a>
  )
}

function OverEndoButton() {
  return (
    <a
      href="/over-endo"
      className="inline-flex items-center gap-2.5 bg-brand-dark text-white rounded-full pl-2 pr-5 py-2 text-sm font-semibold hover:opacity-70 transition-opacity duration-200 mt-3 mb-5"
    >
      <span className="w-7 h-7 bg-white/15 rounded-full flex items-center justify-center shrink-0">
        <ArrowRight size={13} />
      </span>
      Lees alles over endometriose
    </a>
  )
}

function FAQItem({ question, answer, whatsapp, mail, waitlist, overEndo, delay }: { question: string; answer: string; whatsapp?: boolean; mail?: boolean; waitlist?: boolean; overEndo?: boolean; delay: number }) {
  const [open, setOpen] = useState(false)
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ${ease} ${delay}ms, transform 0.6s ${ease} ${delay}ms`,
      }}
      className="border-b border-brand-dark/12 last:border-b-0"
    >
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-brand-dark font-semibold text-base md:text-lg leading-snug group-hover:text-brand-mid transition-colors duration-200">
          {question}
        </span>
        <span
          className="shrink-0 w-8 h-8 rounded-full border border-brand-dark/15 flex items-center justify-center transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ChevronDown size={16} className="text-brand-dark" />
        </span>
      </button>

      <div
        className="overflow-hidden"
        style={{
          maxHeight: open ? '400px' : '0px',
          transition: `max-height 0.45s ${ease}, opacity 0.3s ease`,
          opacity: open ? 1 : 0,
        }}
      >
        <p className="text-brand-mid text-base leading-relaxed pt-0.5 max-w-2xl" style={{ paddingBottom: (whatsapp || mail || waitlist || overEndo) ? '0' : '1.25rem' }}>
          {answer}
        </p>
        {overEndo && <OverEndoButton />}
        {whatsapp && <WhatsAppButton />}
        {mail && <MailButton />}
        {waitlist && <div className="mt-3 mb-5"><WaitlistPill /></div>}
      </div>
    </div>
  )
}

export default function FAQSection() {
  const { ref, inView } = useInView<HTMLElement>()

  const fadeUp = (delay = 0): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.75s ${ease} ${delay}ms, transform 0.75s ${ease} ${delay}ms`,
  })

  return (
    <section
      id="faq"
      ref={ref}
      className="bg-offwhite rounded-t-[25px] relative z-[70] mt-[-25px] py-20 md:py-32 px-6"
      aria-label="Veelgestelde vragen"
    >
      <div className="max-w-3xl mx-auto">

        <div style={fadeUp(0)} className="mb-12 flex flex-col items-start gap-4">
          <h2
            className="font-heading italic font-bold text-brand-dark leading-[1.05]"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
          >
            heb je een<br />vraag?
          </h2>
        </div>

        <div style={fadeUp(150)}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} whatsapp={faq.whatsapp} mail={faq.mail} waitlist={faq.waitlist} overEndo={faq.overEndo} delay={i * 50} />
          ))}
        </div>

      </div>
    </section>
  )
}
