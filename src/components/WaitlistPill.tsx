import { useState, useRef, type FormEvent } from 'react'
import { Plus, X, ArrowRight, Check } from 'lucide-react'

export default function WaitlistPill() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setDone(true)
  }

  if (done) {
    return (
      <div className="inline-flex items-center gap-3 bg-brand-muted text-brand-dark rounded-full pl-1.5 pr-5 py-1.5 text-sm font-medium uppercase tracking-wide">
        <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
          <Check size={14} className="text-brand-dark" />
        </span>
        Je staat op de lijst!
      </div>
    )
  }

  return (
    <div
      className="inline-flex items-center rounded-full bg-brand-muted h-11 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden cursor-pointer"
      style={{ width: open ? '272px' : '232px' }}
      onClick={() => !open && setOpen(true)}
    >
      <button
        type="button"
        onClick={(e) => { if (open) { e.stopPropagation(); setOpen(false); setEmail('') } }}
        className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0 ml-1.5 transition-transform duration-200 hover:scale-110"
        aria-label={open ? 'Sluiten' : undefined}
      >
        {open ? <X size={13} className="text-brand-dark" /> : <Plus size={14} className="text-brand-dark" />}
      </button>

      <span
        className="text-brand-dark font-medium text-sm whitespace-nowrap select-none overflow-hidden transition-all duration-500"
        style={{
          opacity: open ? 0 : 1,
          maxWidth: open ? '0px' : '180px',
          paddingLeft: open ? 0 : '12px',
          paddingRight: open ? 0 : '12px',
        }}
      >
        Blijf op de hoogte
      </span>

      <form
        onSubmit={handleSubmit}
        className="flex-1 pr-1.5 transition-opacity duration-300"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}
      >
        <div className="relative flex items-center">
          <input
            ref={inputRef}
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="jouw@email.nl"
            className="bg-white/50 text-brand-dark placeholder:text-brand-dark/35 text-sm outline-none rounded-full pl-3 pr-10 py-1.5 w-full"
          />
          <button
            type="submit"
            className="absolute right-0.5 w-8 h-8 bg-brand-dark rounded-full flex items-center justify-center hover:bg-brand-mid transition-colors shrink-0"
          >
            <ArrowRight size={13} className="text-white" />
          </button>
        </div>
      </form>
    </div>
  )
}
