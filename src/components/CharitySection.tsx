import { useEffect, useRef, useState } from 'react'
import LogoMark from './LogoMark'

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export default function CharitySection() {
  const playerRef = useRef<any>(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const initPlayer = () => {
      playerRef.current = new window.YT.Player('charity-yt-player', {
        videoId: '5clCAOGV6d8',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            const iframe = event.target.getIframe()
            iframe.style.position = 'absolute'
            iframe.style.top = '0'
            iframe.style.left = '0'
            iframe.style.width = '100%'
            iframe.style.height = '100%'
            setPlaying(true)
          },
          onStateChange: (e: any) => {
            setPlaying(e.data === window.YT.PlayerState.PLAYING)
          },
        },
      })
    }

    if (window.YT?.Player) {
      initPlayer()
    } else {
      const existing = document.querySelector('script[src*="youtube.com/iframe_api"]')
      if (!existing) {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        document.head.appendChild(tag)
      }
      window.onYouTubeIframeAPIReady = initPlayer
    }

    return () => {
      playerRef.current?.destroy()
      playerRef.current = null
    }
  }, [])

  const toggleMute = () => {
    if (!playerRef.current) return
    if (muted) {
      playerRef.current.unMute()
      setMuted(false)
    } else {
      playerRef.current.mute()
      setMuted(true)
    }
  }

  const togglePlay = () => {
    if (!playerRef.current) return
    if (playing) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
  }

  return (
    <section
      id="goeddoel"
      className="bg-[#F5F0E8] rounded-t-[25px] relative z-[60] mt-[-25px] py-16 md:py-24 px-6 overflow-hidden"
      aria-label="Goed doel"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_500px] gap-10 md:gap-16 items-center">

          {/* ── Left column ── */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-dark text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-pink inline-block shrink-0" aria-hidden="true" />
              Wij doneren 10% van onze winst
            </div>

            <h2
              className="font-heading italic font-bold text-brand-dark leading-[1.0] mb-6"
              style={{ fontSize: 'clamp(3.8rem, 10vw, 7.5rem)' }}
            >
              samen<br />maken we<br />verschil.
            </h2>

            <p className="text-brand-mid text-base leading-relaxed text-center max-w-sm mb-10">
              Wij doneren 10% van alle winst aan stichtingen die strijden voor endometriose-onderzoek en bewustwording. Want elke euro telt.
            </p>

            <div className="w-full h-px bg-brand-dark/15 mb-8" />

            <div className="flex items-center gap-4">
              <a
                href="https://www.endometriose.nl/doneren"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-dark text-white rounded-full pl-2 pr-7 py-2 text-base font-semibold hover:opacity-80 hover:scale-105 transition-all duration-200"
              >
                <span className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center shrink-0">
                  <LogoMark size={16} fill="white" />
                </span>
                Zelf doneren
              </a>

              <a
                href="https://www.endometriose.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-brand-dark/10 overflow-hidden p-2 hover:scale-105 transition-transform duration-200 shrink-0"
                title="Endometriose Stichting NL"
              >
                <img
                  src="https://www.endometriose.nl/images/logo-100px-medium.png"
                  alt="Endometriose Stichting NL"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>

          {/* ── Right column: Custom Video Player ── */}
          <div className="relative rounded-3xl overflow-hidden bg-black" style={{ aspectRatio: '3/4' }}>
            {/* YouTube player target */}
            <div id="charity-yt-player" className="absolute inset-0" />

            {/* Bottom gradient for controls readability */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/65 to-transparent pointer-events-none" />

            {/* Top-right brand circle */}
            <div className="absolute top-4 right-4 w-11 h-11 rounded-full bg-brand-dark/90 backdrop-blur-sm flex items-center justify-center pointer-events-none z-10">
              <LogoMark size={18} fill="white" />
            </div>

            {/* Custom controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
              {/* Play / Pause */}
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/35 transition-colors"
                aria-label={playing ? 'Pauzeer' : 'Afspelen'}
              >
                {playing ? (
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
                    <rect x="1.5" y="0.5" width="3.5" height="12" rx="1" />
                    <rect x="8" y="0.5" width="3.5" height="12" rx="1" />
                  </svg>
                ) : (
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
                    <path d="M2.5 1.5l9 5-9 5V1.5z" />
                  </svg>
                )}
              </button>

              {/* Mute / Unmute */}
              <button
                onClick={toggleMute}
                className="flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-white text-sm font-medium hover:bg-white/35 transition-colors"
                aria-label={muted ? 'Geluid aan' : 'Geluid uit'}
              >
                {muted ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M7.5 2.5L4 6H1.5A.5.5 0 001 6.5v3a.5.5 0 00.5.5H4l3.5 3.5v-11z" fill="currentColor" />
                      <line x1="10.5" y1="6" x2="14.5" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="14.5" y1="6" x2="10.5" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span>Tik voor geluid</span>
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M7.5 2.5L4 6H1.5A.5.5 0 001 6.5v3a.5.5 0 00.5.5H4l3.5 3.5v-11z" fill="currentColor" />
                      <path d="M10.5 5.5a4 4 0 010 5M12.5 3.5a7 7 0 010 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span>Geluid aan</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
