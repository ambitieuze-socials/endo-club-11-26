interface Product {
  emoji: string
  title: string
  description: string
  gradientClass: string
}

const products: Product[] = [
  {
    emoji: '🌡️',
    title: 'Verwarmingskussen',
    description:
      'Een zachte, herbruikbare warmtepatch speciaal voor de onderbuik. Gerichte verlichting wanneer je het het meest nodig hebt.',
    gradientClass: 'from-[#F5E4E8] to-[#EDD4F0]',
  },
  {
    emoji: '🌿',
    title: 'Comfort Care Box',
    description:
      'Een zorgvuldig samengestelde box met comfortproducten, snacks en self-care items — speciaal voor zware dagen.',
    gradientClass: 'from-[#E4EDF5] to-[#D4E8F0]',
  },
  {
    emoji: '📓',
    title: 'Endo Dagboek',
    description:
      'Een speciaal ontworpen dagboek om klachten, emoties en doktersbezoeken bij te houden. Jouw verhaal, jouw kracht.',
    gradientClass: 'from-[#F5F0E0] to-[#F0E4D0]',
  },
]

export default function ProductsSection() {
  return (
    <section
      id="producten"
      className="bg-cream py-20 md:py-32 px-6"
      aria-label="Producten"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 bg-purple/10 text-purple-deep px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.09em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-pink inline-block" aria-hidden="true" />
            Comfort collectie
          </span>
          <h2 className="font-heading italic text-3xl sm:text-4xl font-bold text-brand-dark mb-4 leading-tight">
            Producten voor comfort
          </h2>
          <p className="text-brand-mid text-base leading-relaxed max-w-lg">
            Speciaal ontwikkeld voor vrouwen met endometriose. Producten die je helpen op
            moeilijke dagen — met liefde gemaakt door iemand die het zelf begrijpt.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-offwhite rounded-[32px] overflow-hidden border border-white/80 shadow-[0_2px_12px_rgba(139,126,200,0.10)] hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(139,126,200,0.15)] transition-all duration-300"
            >
              {/* Image area */}
              <div
                className={`relative h-[220px] bg-gradient-to-br ${product.gradientClass} flex items-center justify-center text-6xl`}
                aria-hidden="true"
              >
                {product.emoji}
                {/* "Binnenkort" badge */}
                <span className="absolute top-3.5 left-3.5 bg-purple text-white text-[0.68rem] font-bold tracking-[0.06em] uppercase px-3 py-1 rounded-full">
                  Binnenkort
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-heading italic text-brand-dark font-bold text-base leading-tight mb-2">
                  {product.title}
                </h3>
                <p className="text-brand-light text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
