import LogoMark from './LogoMark'

const communityLinks = [
  { href: '/#community', label: 'Over de Community' },
  { href: '/#app', label: 'De App' },
  { href: '/#cta', label: 'Word lid' },
]

const informatieLinks = [
  { href: '/over-endo', label: 'Wat is Endo?' },
  { href: '/#amy', label: 'Over Amy' },
  { href: '/#goeddoel', label: 'Goed Doel' },
  { href: '#', label: 'Pers & Media' },
]

const juridischLinks = [
  { href: '#', label: 'Privacybeleid' },
  { href: '#', label: 'Algemene Voorwaarden' },
  { href: '#', label: 'Cookiebeleid' },
  { href: '#', label: 'Contact' },
]

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.197-1.624A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-4.99-1.367l-.357-.212-3.681.965.981-3.584-.233-.369A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-offwhite rounded-t-[25px] relative z-[90] mt-[-25px] border-t border-purple/10 py-16 px-6" role="contentinfo">
      <div className="max-w-5xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-purple/10 mb-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="inline-flex items-center gap-2 mb-4" aria-label="Endo Club home">
              <LogoMark size={28} fill="#8B7EC8" />
              <span className="text-lg font-bold tracking-tight text-purple">Endo Club.</span>
            </a>
            <p className="text-brand-light text-sm leading-relaxed max-w-[230px] mb-4">
              Een warme community voor vrouwen die leven met endometriose. Samen zijn we sterker.
            </p>
            <span className="font-heading italic inline-flex items-center gap-1.5 bg-purple/10 px-4 py-2 rounded-full text-sm text-purple font-semibold">
              "Voor vrouwen, door vrouwen"
            </span>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-[0.72rem] font-bold tracking-[0.09em] uppercase text-brand-dark mb-4">Community</h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {communityLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-brand-light hover:text-purple transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informatie */}
          <div>
            <h4 className="text-[0.72rem] font-bold tracking-[0.09em] uppercase text-brand-dark mb-4">Informatie</h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {informatieLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-brand-light hover:text-purple transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Juridisch */}
          <div>
            <h4 className="text-[0.72rem] font-bold tracking-[0.09em] uppercase text-brand-dark mb-4">Juridisch</h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {juridischLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-brand-light hover:text-purple transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-brand-light text-sm">© 2025 Endo Club.</p>
            <span className="hidden sm:block text-brand-light/30 text-sm">·</span>
            <span className="inline-flex items-center gap-1.5 bg-purple/10 text-purple text-xs font-semibold px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-purple shrink-0" />
              10% naar endometriose-onderzoek
            </span>
            <span className="hidden sm:block text-brand-light/30 text-sm">·</span>
            <a
              href="https://plannerplus.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-light/60 text-xs hover:text-purple transition-colors duration-200"
            >
              Powered by PlannerPlus
            </a>
          </div>

          {/* Social buttons — alleen Instagram & WhatsApp */}
          <div className="flex gap-2.5" aria-label="Social media links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-[10px] bg-purple/10 flex items-center justify-center text-purple hover:bg-purple hover:text-white hover:-translate-y-0.5 transition-all duration-200"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://chat.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-[10px] bg-purple/10 flex items-center justify-center text-purple hover:bg-[#25D366] hover:text-white hover:-translate-y-0.5 transition-all duration-200"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
