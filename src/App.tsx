import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import AboutSection from './components/AboutSection'
import CommunitySection from './components/CommunitySection'
import AmySection from './components/AmySection'
import AppSection from './components/AppSection'
import CharitySection from './components/CharitySection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import FloatingPill from './components/FloatingPill'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [communityOpen, setCommunityOpen] = useState(false)

  return (
    <div className="bg-offwhite">
      <Navbar onWordLid={() => setCommunityOpen(true)} />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CommunitySection />
      <AmySection />
      <AppSection />
      <CharitySection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingPill open={communityOpen} setOpen={setCommunityOpen} />
      <ScrollToTop />
    </div>
  )
}
