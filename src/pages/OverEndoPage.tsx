import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import FloatingPill from '../components/FloatingPill'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { useInView } from '../hooks/useInView'
import heroVideo from '../../img/hero-video/Gradient Lab 002.mp4'

const ease = 'cubic-bezier(0.16, 1, 0.3, 1)'

function fu(inView: boolean, delay = 0): React.CSSProperties {
  return {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.75s ${ease} ${delay}ms, transform 0.75s ${ease} ${delay}ms`,
  }
}

const symptoms = [
  { num: '01', title: 'Hevige menstruatiepijn', desc: 'Krampen zo ernstig dat dagelijkse activiteiten worden belemmerd.' },
  { num: '02', title: 'Chronische bekkenpijn', desc: 'Aanhoudende pijn in het bekkengebied, ook buiten de menstruatie.' },
  { num: '03', title: 'Pijn tijdens seks', desc: 'Diepe pijn tijdens of na geslachtsgemeenschap.' },
  { num: '04', title: 'Darm- en blaasklachten', desc: 'Pijn bij stoelgang, opgezette buik en diarree.' },
  { num: '05', title: 'Extreme vermoeidheid', desc: 'Uitputting die niet verdwijnt na voldoende slaap.' },
  { num: '06', title: 'Vruchtbaarheidsproblemen', desc: 'Een veelvoorkomende oorzaak van verminderde vruchtbaarheid.' },
]

const myths = [
  { myth: 'Het hoort erbij', truth: 'Hevige menstruatiepijn is niet normaal en verdient medische aandacht.' },
  { myth: 'Het is alleen in je hoofd', truth: 'Endometriose is een meetbare, fysieke aandoening aantoonbaar bij beeldvorming en operatie.' },
  { myth: 'Zwangerschap geneest het', truth: 'Zwangerschap verlicht soms tijdelijk de symptomen, maar is geen behandeling.' },
  { myth: 'Alleen oudere vrouwen krijgen het', truth: 'Endometriose treft vrouwen van alle leeftijden, ook tieners.' },
]

function HeroSection() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="relative h-[85vh] min-h-[560px] overflow-hidden flex flex-col justify-end pb-20 px-6">
      <video
        src={heroVideo}
        autoPlay muted loop playsInline aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-transparent to-brand-dark/60" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div style={fu(inView, 0)} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.09em] uppercase text-white mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-pink inline-block" />
          Informatie
        </div>

        <h1 style={{ ...fu(inView, 100), fontSize: 'clamp(3.5rem, 10vw, 7.5rem)' }} className="font-heading italic text-white leading-[1.0] tracking-tight mb-8">
          Wat is<br />endometriose?
        </h1>

        <div style={fu(inView, 250)} className="flex flex-col sm:flex-row gap-6 sm:gap-12">
          <div className="border-l-2 border-white/40 pl-5">
            <p className="text-white text-4xl font-light mb-1">1 op 10</p>
            <p className="text-white/65 text-sm">vrouwen heeft endometriose</p>
          </div>
          <div className="border-l-2 border-white/40 pl-5">
            <p className="text-white text-4xl font-light mb-1">175M</p>
            <p className="text-white/65 text-sm">vrouwen wereldwijd</p>
          </div>
          <div className="border-l-2 border-white/40 pl-5">
            <p className="text-white text-4xl font-light mb-1">7 jaar</p>
            <p className="text-white/65 text-sm">gemiddeld tot diagnose</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function WatIsHetSection() {
  const { ref, inView } = useInView<HTMLElement>()

  const steps = [
    { label: 'Normaal', desc: 'Het baarmoederslijmvlies groeit alleen binnen de baarmoeder en verlaat het lichaam tijdens de menstruatie.' },
    { label: 'Bij endometriose', desc: 'Vergelijkbaar weefsel groeit buiten de baarmoeder, op eierstokken, eileiders, darmen of blaas.' },
    { label: 'Het probleem', desc: 'Dit weefsel reageert ook op hormonen maar het bloed heeft geen uitweg. Ontsteking, littekenweefsel en pijn zijn het gevolg.' },
  ]

  return (
    <section ref={ref} className="bg-cream rounded-t-[25px] relative z-10 mt-[-25px] py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          <div>
            <div style={fu(inView, 0)} className="inline-flex items-center gap-2 bg-brand-dark text-offwhite rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.09em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink inline-block" />
              Hoe werkt het?
            </div>
            <h2
              style={{ ...fu(inView, 80), fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}
              className="font-heading italic text-brand-dark leading-[1.05] tracking-tight"
            >
              Weefsel op de<br />verkeerde plek
            </h2>
          </div>

          <div className="space-y-6 pt-2 md:pt-16">
            {steps.map((s, i) => (
              <div key={s.label} style={fu(inView, 160 + i * 100)} className="flex gap-4">
                <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                  style={{ background: 'linear-gradient(135deg, #8B7EC8, #D47FA0)', color: 'white' }}>
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm mb-1">{s.label}</p>
                  <p className="text-brand-mid text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

function SymptomsSection() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="bg-offwhite rounded-t-[25px] relative z-20 mt-[-25px] py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div style={fu(inView, 0)} className="inline-flex items-center gap-2 bg-purple/10 text-purple-deep rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.09em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink inline-block" />
              Klachten
            </div>
            <h2
              style={{ ...fu(inView, 80), fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}
              className="font-heading italic text-brand-dark leading-[1.05] tracking-tight"
            >
              Veelvoorkomende<br />symptomen
            </h2>
          </div>
          <p style={fu(inView, 140)} className="text-brand-mid text-sm md:text-base max-w-xs md:pb-1">
            Klachten kunnen per vrouw sterk verschillen in ernst en soort.
          </p>
        </div>

        <div className="divide-y divide-brand-muted/20">
          {symptoms.map((s, i) => (
            <div
              key={s.num}
              style={fu(inView, 180 + i * 60)}
              className="flex items-start gap-6 py-6 group"
            >
              <span
                className="text-[2.5rem] leading-none font-light shrink-0 w-16 select-none"
                style={{ background: 'linear-gradient(135deg, #8B7EC8, #D47FA0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                {s.num}
              </span>
              <div className="pt-1">
                <p className="font-semibold text-brand-dark text-base mb-1">{s.title}</p>
                <p className="text-brand-mid text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function DiagnoseCounter() {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let n = 0
    const id = setInterval(() => {
      n += 1
      setCount(n)
      if (n >= 7) clearInterval(id)
    }, 160)
    return () => clearInterval(id)
  }, [started])

  return <span ref={ref}>{count}</span>
}

function DiagnoseSection() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="relative bg-purple rounded-t-[25px] z-30 mt-[-25px] overflow-hidden py-20 md:py-28 px-6">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 90% 40%, rgba(212,127,160,0.2) 0%, transparent 60%)' }}
      />

      <div className="max-w-5xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          <div>
            <div style={fu(inView, 0)} className="inline-flex items-center gap-2 bg-white/15 text-white rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.09em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-pink inline-block" />
              Diagnose
            </div>
            <div style={{ ...fu(inView, 80), fontSize: 'clamp(7rem, 20vw, 14rem)' }} className="font-heading italic text-white leading-none mb-2 select-none">
              <DiagnoseCounter />
            </div>
            <p style={fu(inView, 160)} className="font-heading italic text-white/70 text-2xl mb-8 leading-tight">
              jaar gemiddeld<br />tot diagnose
            </p>
          </div>

          <div style={fu(inView, 200)} className="space-y-5 text-white/80 leading-relaxed text-base">
            <p>
              Gemiddeld duurt het <strong className="text-white">7 jaar</strong> voordat
              endometriose wordt vastgesteld. Symptomen worden vaak afgedaan als
              "gewone menstruatiepijn" en er bestaat geen eenvoudige bloedtest.
            </p>
            <p>
              De enige zekere manier om endometriose te diagnosticeren is via een{' '}
              <strong className="text-white">laparoscopie</strong>, een kijkoperatie
              waarbij een arts de buikholte bekijkt en eventueel weefsel verwijdert
              voor onderzoek.
            </p>
            <p>
              Een echo of MRI kan grotere haarden zichtbaar maken,
              maar kleinere worden soms gemist.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

function MythsSection() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="bg-cream rounded-t-[25px] relative z-40 mt-[-25px] py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div style={fu(inView, 0)} className="inline-flex items-center gap-2 bg-brand-dark text-offwhite rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.09em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink inline-block" />
              Mythen
            </div>
            <h2
              style={{ ...fu(inView, 80), fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}
              className="font-heading italic text-brand-dark leading-[1.05] tracking-tight"
            >
              Misverstanden<br />ontkracht
            </h2>
          </div>
          <p style={fu(inView, 140)} className="text-brand-mid text-sm md:text-base max-w-xs md:pb-1">
            Misvattingen die te lang zijn blijven bestaan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {myths.map((m, i) => (
            <div
              key={m.myth}
              style={fu(inView, 180 + i * 80)}
              className="bg-white rounded-2xl overflow-hidden border border-[#8B7EC8]/10 shadow-sm"
            >
              <div className="px-6 pt-6 pb-4 border-b border-[#8B7EC8]/10">
                <p className="text-xs font-bold tracking-[0.09em] uppercase text-brand-muted mb-2">Mythe</p>
                <p className="font-heading italic text-[#D47FA0] text-xl leading-tight line-through decoration-[#D47FA0]/50">
                  "{m.myth}"
                </p>
              </div>
              <div className="px-6 py-5">
                <p className="text-xs font-bold tracking-[0.09em] uppercase text-purple-deep mb-2">Werkelijkheid</p>
                <p className="text-brand-mid text-sm leading-relaxed">{m.truth}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function CTASection({ onOpen }: { onOpen: () => void }) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="relative rounded-t-[25px] z-50 mt-[-25px] py-32 px-6 text-center overflow-hidden">
      <video
        src={heroVideo}
        autoPlay muted loop playsInline aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute inset-0 bg-brand-dark/50 backdrop-blur-[2px]" aria-hidden="true" />

      <div className="relative z-10 max-w-xl mx-auto">
        <div style={fu(inView, 0)} className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.09em] uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-pink inline-block" />
          Community
        </div>
        <h2
          style={{ ...fu(inView, 80), fontSize: 'clamp(2.8rem, 7vw, 5rem)' }}
          className="font-heading italic text-white leading-[1.05] tracking-tight mb-6"
        >
          Je hoeft het niet<br />alleen te dragen.
        </h2>
        <p style={fu(inView, 160)} className="text-white/75 leading-relaxed mb-10 text-base">
          Endo Club is een community waar vrouwen met endometriose
          elkaar vinden, steunen en begrijpen.
        </p>
        <div style={fu(inView, 240)} className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onOpen}
            className="inline-flex items-center justify-center gap-2 bg-white text-[#5A4E98] font-semibold px-8 py-4 rounded-full hover:bg-offwhite transition-colors duration-200 text-sm"
          >
            Word onderdeel van de community
            <ArrowRight size={14} />
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full hover:bg-white/25 transition-colors duration-200 text-sm border border-white/25"
          >
            <ArrowLeft size={14} />
            Terug naar home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function OverEndoPage() {
  const [communityOpen, setCommunityOpen] = useState(false)
  const [navHidden, setNavHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      setNavHidden(y > lastY.current && y > 80)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-offwhite">
      <nav
        className="fixed left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-48px)] max-w-2xl transition-all duration-300 ease-out"
        style={{ top: navHidden ? '-80px' : '24px' }}
      >
        <div className="bg-white rounded-full shadow-lg px-5 py-3 flex items-center justify-between">
          <Link to="/" className="font-heading italic text-lg font-bold tracking-tight text-black select-none">
            Endo Club.
          </Link>
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-mid hover:text-purple transition-colors duration-200">
            <ArrowLeft size={14} />
            Terug
          </Link>
        </div>
      </nav>

      <HeroSection />
      <WatIsHetSection />
      <SymptomsSection />
      <DiagnoseSection />
      <MythsSection />
      <CTASection onOpen={() => setCommunityOpen(true)} />
      <Footer />

      <FloatingPill open={communityOpen} setOpen={setCommunityOpen} />
      <ScrollToTop />
    </div>
  )
}
