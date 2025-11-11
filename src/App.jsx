import { useEffect, useState } from 'react'
import './App.css'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import TracksHorizontal from './components/TracksHorizontal'
import ParallaxLayers from './components/ParallaxLayers'
import ThemesSection from './components/ThemesSection'
import LyricsParallax from './components/LyricsParallax'
import Credits from './components/Credits'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <CustomCursor />
      <ParallaxLayers scrollY={scrollY} />
      <Hero scrollY={scrollY} />
      <TracksHorizontal />
      <ThemesSection />
      <LyricsParallax scrollY={scrollY} />
      <Credits />
    </div>
  )
}

export default App
