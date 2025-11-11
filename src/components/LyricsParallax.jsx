import { useEffect, useRef, useState } from 'react'
import './LyricsParallax.css'

const lyricSnippets = [
  {
    text: '[Verse fragments]',
    subtitle: 'Words that capture modern anxiety',
    depth: 0.2
  },
  {
    text: '[Chorus echoes]',
    subtitle: 'Themes of disconnection',
    depth: 0.4
  },
  {
    text: '[Bridge reflections]',
    subtitle: 'Technology and humanity',
    depth: 0.6
  },
  {
    text: '[Outro whispers]',
    subtitle: 'The weight of existence',
    depth: 0.8
  }
]

const LyricsParallax = ({ scrollY }) => {
  const sectionRef = useRef(null)
  const [offsetY, setOffsetY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return

    const handleScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = -rect.top / (rect.height + window.innerHeight)
      setOffsetY(scrollProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="lyrics-parallax" ref={sectionRef}>
      <div className="lyrics-header">
        <h2 className="section-title glitch-text">TEXTUAL FRAGMENTS</h2>
        <p className="section-subtitle mono">
          WORDS SUSPENDED IN DIGITAL SPACE
        </p>
      </div>

      <div className="lyrics-container">
        {lyricSnippets.map((snippet, index) => (
          <div
            key={index}
            className={`lyric-layer ${isVisible ? 'visible' : ''}`}
            style={{
              transform: `translateY(${offsetY * snippet.depth * 200}px) scale(${
                1 + offsetY * snippet.depth * 0.2
              })`,
              opacity: Math.max(1 - Math.abs(offsetY - snippet.depth) * 2, 0.3),
              transitionDelay: `${index * 0.1}s`
            }}
          >
            <div className="lyric-content">
              <div className="lyric-number mono">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="lyric-text">{snippet.text}</h3>
              <p className="lyric-subtitle mono">{snippet.subtitle}</p>
              <div className="lyric-decorative-line"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="lyrics-ambient-text">
        <div className="ambient-word word-1">TRANSPORT</div>
        <div className="ambient-word word-2">MOTORWAYS</div>
        <div className="ambient-word word-3">TECHNOLOGY</div>
        <div className="ambient-word word-4">ALIENATION</div>
        <div className="ambient-word word-5">DYSTOPIA</div>
      </div>

      <div className="lyrics-footer">
        <p className="mono">
          Note: This tribute respects copyright - full lyrics available through official sources
        </p>
      </div>
    </section>
  )
}

export default LyricsParallax
