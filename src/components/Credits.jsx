import { useEffect, useRef, useState } from 'react'
import './Credits.css'

const Credits = () => {
  const [isVisible, setIsVisible] = useState(false)
  const creditsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (creditsRef.current) {
      observer.observe(creditsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="credits" ref={creditsRef}>
      <div className="credits-content">
        <div className={`credits-main ${isVisible ? 'visible' : ''}`}>
          <div className="album-info">
            <h2 className="album-title glitch-text">OK COMPUTER</h2>
            <div className="album-details mono">
              <p>RADIOHEAD</p>
              <p>RELEASED: 21 MAY 1997</p>
              <p>LABEL: PARLOPHONE / CAPITOL</p>
              <p>PRODUCED BY: NIGEL GODRICH & RADIOHEAD</p>
            </div>
          </div>

          <div className="tribute-message">
            <div className="message-border">
              <h3 className="tribute-title">A DIGITAL TRIBUTE</h3>
              <p className="tribute-text">
                This immersive website is an artistic tribute to one of the most influential albums
                of the 1990s. OK Computer explored themes of technological anxiety, alienation, and
                modern dystopia that remain deeply relevant today.
              </p>
              <p className="tribute-text">
                Through parallax scrolling, interactive elements, and retro-futuristic design,
                this experience attempts to capture the album's unsettling beauty and its
                commentary on the intersection of humanity and technology.
              </p>
            </div>
          </div>

          <div className="band-members">
            <h3 className="members-title mono">BAND MEMBERS</h3>
            <div className="members-grid">
              <div className="member">
                <span className="member-name">Thom Yorke</span>
                <span className="member-role mono">Vocals, Guitar, Piano</span>
              </div>
              <div className="member">
                <span className="member-name">Jonny Greenwood</span>
                <span className="member-role mono">Lead Guitar, Keyboards</span>
              </div>
              <div className="member">
                <span className="member-name">Ed O'Brien</span>
                <span className="member-role mono">Guitar, Backing Vocals</span>
              </div>
              <div className="member">
                <span className="member-name">Colin Greenwood</span>
                <span className="member-role mono">Bass Guitar</span>
              </div>
              <div className="member">
                <span className="member-name">Phil Selway</span>
                <span className="member-role mono">Drums, Percussion</span>
              </div>
            </div>
          </div>

          <div className="technical-credits">
            <h3 className="tech-title mono">WEBSITE TECHNICAL DETAILS</h3>
            <div className="tech-grid mono">
              <div className="tech-item">
                <span className="tech-label">FRAMEWORK:</span>
                <span className="tech-value">React 18</span>
              </div>
              <div className="tech-item">
                <span className="tech-label">BUILD TOOL:</span>
                <span className="tech-value">Vite</span>
              </div>
              <div className="tech-item">
                <span className="tech-label">TECHNIQUES:</span>
                <span className="tech-value">Parallax, Intersection Observer</span>
              </div>
              <div className="tech-item">
                <span className="tech-label">ANIMATIONS:</span>
                <span className="tech-value">CSS Transforms, Keyframes</span>
              </div>
              <div className="tech-item">
                <span className="tech-label">PERFORMANCE:</span>
                <span className="tech-value">60fps Target, GPU Acceleration</span>
              </div>
              <div className="tech-item">
                <span className="tech-label">RESPONSIVE:</span>
                <span className="tech-value">Mobile & Desktop Optimized</span>
              </div>
            </div>
          </div>

          <div className="copyright-notice">
            <div className="notice-box">
              <p className="mono">
                This is an unofficial fan-made tribute website.
              </p>
              <p className="mono">
                All rights to OK Computer, its music, and lyrics belong to Radiohead
                and their respective copyright holders.
              </p>
              <p className="mono">
                No copyright infringement intended. For official content, visit radiohead.com
              </p>
            </div>
          </div>

          <div className="end-marker">
            <div className="terminal-output mono">
              <span className="prompt">{'>'}</span>
              <span className="output">END_OF_TRANSMISSION</span>
              <span className="cursor">_</span>
            </div>
          </div>
        </div>
      </div>

      <div className="credits-background">
        <div className="matrix-rain">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="rain-column" style={{ left: `${i * 5}%` }}>
              {[...Array(20)].map((_, j) => (
                <span key={j} className="rain-char">
                  {Math.random() > 0.5 ? '1' : '0'}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Credits
