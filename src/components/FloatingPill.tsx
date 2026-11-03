import { useState, type FormEvent } from 'react'
import { X, ArrowRight, Check } from 'lucide-react'
import amyPhoto from '../../img/amy.jpg'

const avatars = [
  amyPhoto,
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/women/12.jpg',
  'https://randomuser.me/api/portraits/women/26.jpg',
  'https://randomuser.me/api/portraits/women/56.jpg',
  'https://randomuser.me/api/portraits/women/83.jpg',
]

function EmailForm() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setDone(true)
  }

  if (done) {
    return (
      <div className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white text-sm font-semibold px-6 py-3.5 rounded-full w-full">
        <Check size={14} /> Je staat op de lijst!
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="jouw@email.nl"
        required
        className="flex-1 bg-brand-muted text-brand-dark placeholder:text-brand-dark/40 text-sm outline-none rounded-full px-4 py-3"
      />
      <button
        type="submit"
        className="w-11 h-11 bg-brand-dark rounded-full flex items-center justify-center hover:bg-brand-mid transition-colors shrink-0"
      >
        <ArrowRight size={15} className="text-white" />
      </button>
    </form>
  )
}

export default function FloatingPill({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {

  return (
    <>
      {/* Desktop: floating pill bottom-left */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:inline-flex fixed bottom-6 left-6 z-[200] items-center gap-3 bg-white/90 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(100,80,140,0.18)] rounded-full pl-1.5 pr-5 py-1.5 hover:scale-105 transition-transform duration-200 cursor-pointer"
        aria-label="Community opties"
      >
        <div className="flex -space-x-2 shrink-0">
          {avatars.slice(0, 4).map((src, i) => (
            <img key={i} src={src} alt="" aria-hidden="true"
              className="w-8 h-8 rounded-full object-cover object-top border-2 border-white shrink-0"
            />
          ))}
        </div>
        <span className="text-brand-dark text-xs font-medium whitespace-nowrap">
          +246 vrouwen doen al mee
        </span>
      </button>

      {/* Mobile: full-width bottom bar */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed bottom-0 left-0 right-0 z-[200] flex items-center gap-3 bg-white/90 backdrop-blur-md border-t border-white/60 shadow-[0_-4px_24px_rgba(100,80,140,0.12)] px-5 py-3.5 cursor-pointer"
        aria-label="Community opties"
      >
        <div className="flex -space-x-2 shrink-0">
          {avatars.slice(0, 4).map((src, i) => (
            <img key={i} src={src} alt="" aria-hidden="true"
              className="w-8 h-8 rounded-full object-cover object-top border-2 border-white shrink-0"
            />
          ))}
        </div>
        <span className="text-brand-dark text-xs font-medium flex-1 text-left">
          +246 vrouwen doen al mee
        </span>
        <span className="bg-brand-dark text-white text-xs font-semibold px-4 py-2 rounded-full shrink-0">
          Aanmelden
        </span>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[200] bg-black/30 backdrop-blur-sm flex items-center justify-center px-6"
          onClick={() => setOpen(false)}
        >
          {/* Modal card */}
          <div
            className="relative bg-white rounded-3xl shadow-[0_24px_64px_rgba(100,80,140,0.22)] p-8 w-full max-w-sm text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-muted flex items-center justify-center hover:bg-purple/15 transition-colors"
              aria-label="Sluiten"
            >
              <X size={14} className="text-brand-dark" />
            </button>

            {/* Avatars */}
            <div className="flex justify-center -space-x-3 mb-4">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full object-cover object-top border-2 border-white shrink-0"
                />
              ))}
            </div>

            <p className="text-brand-dark font-semibold text-base mb-1">Word onderdeel van de community</p>
            <p className="text-brand-mid text-sm mb-7">+246 vrouwen doen al mee</p>

            <div className="flex flex-col gap-3">
              <EmailForm />
              <a
                href="https://chat.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-[#1ebe5d] transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L.057 23.882l6.197-1.624A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.797 9.797 0 01-4.99-1.367l-.357-.212-3.681.965.981-3.584-.233-.369A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                WhatsApp groep
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
