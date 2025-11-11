import { useEffect, useRef, useState } from 'react'
import './TracksHorizontal.css'

const tracks = [
  {
    number: '01',
    title: 'Airbag',
    lyrics: '[Lyrics available on official sources]',
    theme: 'rebirth',
    color: '#3b9a9c'
  },
  {
    number: '02',
    title: 'Paranoid Android',
    lyrics: '[Lyrics available on official sources]',
    theme: 'anger',
    color: '#d93636'
  },
  {
    number: '03',
    title: 'Subterranean Homesick Alien',
    lyrics: '[Lyrics available on official sources]',
    theme: 'escape',
    color: '#1a4d6d'
  },
  {
    number: '04',
    title: 'Exit Music (For a Film)',
    lyrics: '[Lyrics available on official sources]',
    theme: 'darkness',
    color: '#1a1a1a'
  },
  {
    number: '05',
    title: 'Let Down',
    lyrics: '[Lyrics available on official sources]',
    theme: 'disappointment',
    color: '#2d5f7f'
  },
  {
    number: '06',
    title: 'Karma Police',
    lyrics: '[Lyrics available on official sources]',
    theme: 'justice',
    color: '#404040'
  },
  {
    number: '07',
    title: 'Fitter Happier',
    lyrics: '[Lyrics available on official sources]',
    theme: 'automation',
    color: '#808080'
  },
  {
    number: '08',
    title: 'Electioneering',
    lyrics: '[Lyrics available on official sources]',
    theme: 'politics',
    color: '#e8b923'
  },
  {
    number: '09',
    title: 'Climbing Up the Walls',
    lyrics: '[Lyrics available on official sources]',
    theme: 'paranoia',
    color: '#d93636'
  },
  {
    number: '10',
    title: 'No Surprises',
    lyrics: '[Lyrics available on official sources]',
    theme: 'resignation',
    color: '#3b9a9c'
  },
  {
    number: '11',
    title: 'Lucky',
    lyrics: '[Lyrics available on official sources]',
    theme: 'survival',
    color: '#1a4d6d'
  },
  {
    number: '12',
    title: 'The Tourist',
    lyrics: '[Lyrics available on official sources]',
    theme: 'warning',
    color: '#e8b923'
  }
]

const TracksHorizontal = () => {
  const containerRef = useRef(null)
  const [activeTrack, setActiveTrack] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const trackWidth = container.scrollWidth / tracks.length
      const newActive = Math.round(scrollLeft / trackWidth)
      setActiveTrack(newActive)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="tracks-horizontal">
      <div className="tracks-header">
        <h2 className="section-title glitch-text">TRACK LISTING</h2>
        <div className="track-counter mono">
          <span className="current-track">{String(activeTrack + 1).padStart(2, '0')}</span>
          <span className="divider">/</span>
          <span className="total-tracks">{tracks.length}</span>
        </div>
      </div>

      <div className="horizontal-scroll-container" ref={containerRef}>
        <div className="tracks-wrapper">
          {tracks.map((track, index) => (
            <div
              key={track.number}
              className="track-card"
              style={{
                borderColor: track.color,
              }}
            >
              <div className="track-number mono" style={{ color: track.color }}>
                {track.number}
              </div>

              <div className="track-content">
                <h3 className="track-title" style={{ color: track.color }}>
                  {track.title}
                </h3>

                <div className="track-theme mono">
                  [{track.theme.toUpperCase()}]
                </div>

                <div className="track-lyrics">
                  <div className="lyrics-icon">❝</div>
                  <p>{track.lyrics}</p>
                  <div className="lyrics-icon-end">❞</div>
                </div>

                <div className="track-visualization">
                  <div className="waveform">
                    {[...Array(30)].map((_, i) => (
                      <div
                        key={i}
                        className="waveform-bar"
                        style={{
                          height: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.1}s`,
                          backgroundColor: track.color,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="track-decorations">
                  <div className="corner-decoration top-left"></div>
                  <div className="corner-decoration top-right"></div>
                  <div className="corner-decoration bottom-left"></div>
                  <div className="corner-decoration bottom-right"></div>
                </div>
              </div>

              <div className="track-hover-effect" style={{ backgroundColor: track.color }}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-hint mono">
        <span>← SCROLL HORIZONTALLY →</span>
      </div>
    </section>
  )
}

export default TracksHorizontal
