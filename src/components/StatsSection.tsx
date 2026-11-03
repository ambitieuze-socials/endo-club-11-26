import { useEffect, useRef, useState } from 'react'
import { ComposableMap, Geographies, Geography, Sphere } from 'react-simple-maps'
import worldAtlas from 'world-atlas/countries-110m.json'

const EUROPE_IDS = new Set([40,56,70,100,112,191,196,203,208,233,246,250,276,300,348,352,372,380,428,440,442,470,498,499,528,578,616,620,642,688,703,705,724,752,756,804,807,826])

function useInView(threshold = 0.35) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

const gradText = {
  background: 'linear-gradient(135deg, #8B7EC8 0%, #D47FA0 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
} as const

function DotsCard() {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className="bg-white rounded-3xl p-7 flex-1 flex flex-col min-h-[300px] border border-[#8B7EC8]/10 shadow-sm">
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-5 gap-3">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="relative w-9 h-9">
              {i === 0 && inView && (
                <div
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: 'linear-gradient(135deg, #8B7EC8, #D47FA0)', opacity: 0.35 }}
                />
              )}
              <div
                className="w-9 h-9 rounded-full transition-all duration-700 relative"
                style={{
                  transitionDelay: inView ? `${i * 60}ms` : '0ms',
                  background: i === 0 ? 'linear-gradient(135deg, #8B7EC8, #D47FA0)' : '#EDE9F5',
                  transform: inView ? (i === 0 ? 'scale(1.2)' : 'scale(1)') : 'scale(0.4)',
                  opacity: inView ? 1 : 0,
                  boxShadow: inView && i === 0 ? '0 0 16px rgba(139,126,200,0.45)' : 'none',
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <p className="font-heading italic text-[2.25rem] leading-[1.2] mb-1.5" style={gradText}>1 op 10</p>
        <p className="text-sm text-[#9B8EBF]/80 leading-snug">vrouwen heeft endometriose</p>
      </div>
    </div>
  )
}

function CounterCard() {
  const { ref, inView } = useInView()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let n = 0
    const id = setInterval(() => {
      n += 1
      setCount(n)
      if (n >= 7) clearInterval(id)
    }, 130)
    return () => clearInterval(id)
  }, [inView])

  return (
    <div ref={ref} className="bg-white rounded-3xl p-7 flex-1 flex flex-col min-h-[300px] border border-[#8B7EC8]/10 shadow-sm">
      <div className="flex-1 flex flex-col items-center justify-center gap-2 pt-4">
        <span
          className="font-sans font-light leading-none select-none tracking-tight"
          style={{ fontSize: '5rem', ...gradText }}
        >
          {count}
        </span>
        <span
          className="text-lg font-medium tracking-widest uppercase"
          style={{ color: '#C5B8E8', opacity: inView ? 1 : 0, transition: 'opacity 0.5s ease 0.9s', letterSpacing: '0.2em' }}
        >
          jaar
        </span>
      </div>
      <div className="mt-6">
        <p className="font-heading italic text-[2.25rem] leading-[1.2] mb-1.5" style={gradText}>7 jaar</p>
        <p className="text-sm text-[#9B8EBF]/80 leading-snug">gemiddelde tijd tot diagnose</p>
      </div>
    </div>
  )
}

function WorldMapCard() {
  const { ref, inView } = useInView()
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (!inView) return
    const id = setInterval(() => setRotation(r => (r + 0.3) % 360), 33)
    return () => clearInterval(id)
  }, [inView])

  return (
    <div ref={ref} className="bg-white rounded-3xl p-7 flex-1 flex flex-col min-h-[300px] border border-[#8B7EC8]/10 shadow-sm overflow-hidden">
      <div className="flex-1 flex items-center justify-center">
        <ComposableMap
          projection="geoOrthographic"
          projectionConfig={{ scale: 100, rotate: [rotation - 10, -20, 0] }}
          width={240}
          height={240}
          style={{ width: '100%', height: 'auto', maxWidth: '195px' }}
        >
          <Sphere id="globe-ocean" fill="#EDE9F5" stroke="#D6CDF0" strokeWidth={0.5} />
          <Geographies geography={worldAtlas as unknown as string}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={EUROPE_IDS.has(Number(geo.id)) ? '#8B7EC8' : '#C4B0E0'}
                  stroke="#FFFCF8"
                  strokeWidth={0.5}
                  style={{ outline: 'none' }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
      <div className="mt-2">
        <p className="font-heading italic text-[2.25rem] leading-[1.2] mb-1.5" style={gradText}>175 miljoen</p>
        <p className="text-sm text-[#9B8EBF]/80 leading-snug">vrouwen wereldwijd met endometriose</p>
      </div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="bg-offwhite py-20" aria-label="Feiten over endometriose">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <DotsCard />
          <CounterCard />
          <WorldMapCard />
        </div>
      </div>
    </section>
  )
}
