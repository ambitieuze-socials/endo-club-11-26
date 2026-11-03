import { useState, useEffect, useRef } from 'react'

const navLinks = [
  { href: '#about', label: 'Over Endo' },
  { href: '#community', label: 'Community' },
  { href: '#amy', label: 'Founder' },
  { href: '#app', label: 'App' },
]

export default function Navbar({ onWordLid }: { onWordLid: () => void }) {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      setHidden(y > lastY.current && y > 80)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Floating pill navbar */}
      <nav
        className="fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-48px)] max-w-2xl transition-all duration-300 ease-out"
        style={{ top: hidden ? '-80px' : '24px' }}
      >
        <div className="bg-white rounded-full shadow-lg px-5 py-3 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="font-heading italic text-lg font-bold tracking-tight text-black select-none">
            Endo Club.
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-brand-mid hover:text-purple transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger button */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Menu sluiten' : 'Menu openen'}
            aria-expanded={open}
            className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className="block w-5 h-0.5 bg-brand-dark rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transform: open ? 'translateY(4px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-5 h-0.5 bg-brand-dark rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transform: open ? 'translateY(-4px) rotate(-45deg)' : 'none',
              }}
            />
          </button>

          {/* Desktop CTA */}
          <button
            onClick={onWordLid}
            className="hidden md:inline-flex items-center bg-purple text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-purple-deep transition-colors duration-200 ml-2"
          >
            Word lid
          </button>
        </div>

        {/* Dropdown menu */}
        <div
          className="md:hidden mt-2 bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-out origin-top"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? 'scaleY(1) translateY(0)' : 'scaleY(0.95) translateY(-8px)',
            pointerEvents: open ? 'auto' : 'none',
          }}
        >
          <ul className="list-none py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-sm font-medium text-brand-mid hover:text-purple hover:bg-purple/5 transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-4 pb-2 pt-1">
              <button
                onClick={() => { setOpen(false); onWordLid() }}
                className="block w-full text-center bg-purple text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-purple-deep transition-colors duration-200"
              >
                Word lid
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay for mobile — close on outside click */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
