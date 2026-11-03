import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll naar boven"
      className="fixed bottom-20 md:bottom-6 right-6 z-[200] w-11 h-11 bg-white/90 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(100,80,140,0.18)] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none', transform: visible ? 'scale(1)' : 'scale(0.8)' }}
    >
      <ArrowUp size={16} className="text-brand-dark" />
    </button>
  )
}
