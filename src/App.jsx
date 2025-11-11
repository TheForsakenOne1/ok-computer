import { useEffect, useState, useCallback, lazy, Suspense } from 'react'
import './App.css'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import ParallaxLayers from './components/ParallaxLayers'
import { useRAFThrottle } from './utils/useThrottle'
import LoadingScreen from './components/LoadingScreen'

// Lazy load heavy components for better initial load
const TracksHorizontal = lazy(() => import('./components/TracksHorizontal'))
const ThemesSection = lazy(() => import('./components/ThemesSection'))
const LyricsParallax = lazy(() => import('./components/LyricsParallax'))
const Credits = lazy(() => import('./components/Credits'))

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  // Use RAF throttle for smooth scroll handling
  const updateScrollY = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  const throttledScroll = useRAFThrottle(updateScrollY)

  useEffect(() => {
    // Simulate initial load with fade in
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    window.addEventListener('scroll', throttledScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [throttledScroll])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="app">
      <CustomCursor />
      <ParallaxLayers scrollY={scrollY} />
      <Hero scrollY={scrollY} />

      <Suspense fallback={<div className="section-loader">Loading...</div>}>
        <TracksHorizontal />
      </Suspense>

      <Suspense fallback={<div className="section-loader">Loading...</div>}>
        <ThemesSection />
      </Suspense>

      <Suspense fallback={<div className="section-loader">Loading...</div>}>
        <LyricsParallax scrollY={scrollY} />
      </Suspense>

      <Suspense fallback={<div className="section-loader">Loading...</div>}>
        <Credits />
      </Suspense>
    </div>
  )
}

export default App
