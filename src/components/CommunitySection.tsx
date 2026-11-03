import { useEffect, useRef, useState } from 'react'
import LogoMark from './LogoMark'
import herkenning from '../../img/herkenning.png'
import kennis from '../../img/kennis.png'
import nietAlleen from '../../img/niet-alleen.png'
import events from '../../img/events.png'

interface CommunityCard {
  title: string
  image: string
  description: string
}

const cards: CommunityCard[] = [
  {
    title: 'Herkenning & begrip',
    image: herkenning,
    description:
      'Praat met vrouwen die precies weten wat jij doormaakt. Geen medeleven van buitenaf, maar échte herkenning van binnenuit.',
  },
  {
    title: 'Kennis & informatie',
    image: kennis,
    description:
      'Toegang tot betrouwbare informatie over endometriose, behandelingen, voeding en lifestyle. Samengesteld door experts en ervaringsdeskundigen.',
  },
  {
    title: 'Je staat er niet alleen voor',
    image: nietAlleen,
    description:
      'Onze eigen WhatsApp groep waar je altijd terechtkan. Voor vragen, steun, of gewoon even ventileren bij mensen die het écht begrijpen.',
  },
  {
    title: 'Events & bijeenkomsten',
    image: events,
    description:
      'Regelmatige events waar je andere endo-vrouwen ontmoet, ervaringen deelt en meer leert over endometriose. Samen leren, samen sterker worden.',
  },
]

export default function CommunitySection({ onWordLid }: { onWordLid: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState<boolean[]>(cards.map(() => false))
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Reveal observer (threshold 0.15)
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = cardRefs.current.indexOf(entry.target as HTMLDivElement)
          if (idx !== -1 && entry.isIntersecting) {
            setVisibleCards((prev) => {
              const next = [...prev]
              next[idx] = true
              return next
            })
          }
        })
      },
      { threshold: 0.15 },
    )

    // Active observer (threshold 0.6)
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (idx !== -1) setActiveIndex(idx)
          }
        })
      },
      { threshold: 0.6 },
    )

    cardRefs.current.forEach((el) => {
      if (el) {
        revealObserver.observe(el)
        activeObserver.observe(el)
      }
    })

    return () => {
      revealObserver.disconnect()
      activeObserver.disconnect()
    }
  }, [])

  return (
    <section
      id="community"
      className="relative bg-purple rounded-t-[25px] z-30 mt-[-25px] py-20 md:py-32 px-6 overflow-hidden"
      aria-label="Community functies"
    >
      {/* Subtle radial gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(139,126,200,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left sticky column */}
          <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-32 lg:w-[380px] shrink-0">
            <div>
              <h2 className="font-heading italic text-white text-2xl sm:text-3xl lg:text-[46px] leading-[1.2] font-normal mb-8">
                Een community die er altijd voor je is
              </h2>

              {/* Nav buttons — visible lg+ */}
              <nav className="hidden lg:flex flex-col gap-2" aria-label="Community onderwerpen">
                {cards.map((card, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      cardRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeIndex === i
                        ? 'bg-white/20 text-white'
                        : 'bg-white/10 text-white/40 hover:text-white/70'
                    }`}
                  >
                    {card.title}
                  </button>
                ))}
              </nav>
            </div>

            {/* Bottom CTA — visible lg+ */}
            <div className="hidden lg:block">
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                Word lid van de community en ontdek alles wat Endo Club te bieden heeft.
              </p>
              <button
                onClick={onWordLid}
                className="inline-flex items-center bg-white text-brand-dark text-sm font-semibold px-6 py-3 rounded-full hover:bg-offwhite transition-colors duration-200"
              >
                Word lid
              </button>
            </div>
          </div>

          {/* Right scrolling cards */}
          <div className="flex-1 flex flex-col gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el }}
                className="bg-black/20 backdrop-blur-sm rounded-3xl p-6 md:p-10 transition-all duration-700 ease-out"
                style={{
                  transform: visibleCards[i] ? 'translateX(0)' : 'translateX(64px)',
                  opacity: visibleCards[i] ? 1 : 0,
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {/* Logo mark */}
                <LogoMark
                  size={32}
                  fill="rgba(255,255,255,0.8)"
                  className="mb-4"
                />

                {/* Card title */}
                <h3 className="font-heading italic text-white text-xl md:text-2xl font-medium mb-4">
                  {card.title}
                </h3>

                {/* Card image */}
                <div className="aspect-video rounded-2xl overflow-hidden mb-5">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <p className="text-white/60 font-medium text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="lg:hidden mt-4 text-center">
              <button
                onClick={onWordLid}
                className="inline-flex items-center bg-white text-brand-dark text-sm font-semibold px-6 py-3 rounded-full hover:bg-offwhite transition-colors duration-200"
              >
                Word lid
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
