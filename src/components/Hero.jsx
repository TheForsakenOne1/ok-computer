import { useEffect, useRef, useState, memo, useMemo } from 'react'
import './Hero.css'

const Hero = memo(({ scrollY }) => {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Memoize expensive calculations
  const { opacity, scale, translateY } = useMemo(() => ({
    opacity: Math.max(1 - scrollY / 800, 0),
    scale: Math.max(1 - scrollY / 2000, 0.8),
    translateY: scrollY * 0.5
  }), [scrollY])

  return (
    <section className="hero" ref={heroRef}>
      <div
        className="hero-content"
        style={{
          opacity,
          transform: `scale(${scale}) translateY(${translateY}px)`,
        }}
      >
        <div className={`hero-title ${isVisible ? 'visible' : ''}`}>
          <h1 className="glitch-text">OK COMPUTER</h1>
          <div className="subtitle">
            <span className="mono">RADIOHEAD // 1997</span>
          </div>
        </div>

        <div className="album-cover-container floating">
          <div className="album-cover">
            <div className="cover-overlay"></div>
            <div className="cover-content">
              <div className="geometric-shape shape-1"></div>
              <div className="geometric-shape shape-2"></div>
              <div className="geometric-shape shape-3"></div>
              <div className="highway-lines"></div>
            </div>
          </div>
        </div>

        <div className={`hero-subtitle ${isVisible ? 'visible' : ''}`}>
          <p className="terminal-text">
            {'>'} INITIALIZING IMMERSIVE EXPERIENCE_
          </p>
          <p className="terminal-text delay-1">
            {'>'} LOADING TECHNOLOGICAL ANXIETY MODULE_
          </p>
          <p className="terminal-text delay-2">
            {'>'} DYSTOPIAN ATMOSPHERE: ACTIVE_
          </p>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span className="mono">SCROLL TO EXPLORE</span>
        </div>
      </div>

      {/* Background elements */}
      <div className="hero-bg-elements">
        <div className="grid-overlay"></div>
        <div className="static-noise"></div>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero
