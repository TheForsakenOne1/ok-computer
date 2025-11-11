import { memo, useMemo } from 'react'
import './ParallaxLayers.css'

const ParallaxLayers = memo(({ scrollY }) => {
  // Memoize parallax transforms for better performance
  const transforms = useMemo(() => ({
    background: `translateY(${scrollY * 0.1}px)`,
    midground: `translateY(${scrollY * 0.3}px)`,
    foreground: `translateY(${scrollY * 0.5}px)`
  }), [scrollY])

  return (
    <div className="parallax-layers">
      {/* Background layer - slowest */}
      <div
        className="parallax-layer layer-background"
        style={{
          transform: transforms.background,
        }}
      >
        <div className="highway-grid"></div>
        <div className="cityscape">
          <div className="building building-1"></div>
          <div className="building building-2"></div>
          <div className="building building-3"></div>
          <div className="building building-4"></div>
          <div className="building building-5"></div>
        </div>
      </div>

      {/* Midground layer - medium speed */}
      <div
        className="parallax-layer layer-midground"
        style={{
          transform: transforms.midground,
        }}
      >
        <div className="geometric-float geo-1"></div>
        <div className="geometric-float geo-2"></div>
        <div className="geometric-float geo-3"></div>
        <div className="overpass"></div>
      </div>

      {/* Foreground layer - fastest */}
      <div
        className="parallax-layer layer-foreground"
        style={{
          transform: transforms.foreground,
        }}
      >
        <div className="tech-element tech-1">
          <div className="scanline-h"></div>
        </div>
        <div className="tech-element tech-2">
          <div className="data-stream">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="data-bit">
                {Math.random() > 0.5 ? '1' : '0'}
              </span>
            ))}
          </div>
        </div>
        <div className="floating-particle particle-1"></div>
        <div className="floating-particle particle-2"></div>
        <div className="floating-particle particle-3"></div>
      </div>
    </div>
  )
})

ParallaxLayers.displayName = 'ParallaxLayers'

export default ParallaxLayers
