import { useEffect, useRef, useState } from 'react'
import './ThemesSection.css'

const themes = [
  {
    title: 'Technological Anxiety',
    icon: '⚠',
    description: 'The album explores the overwhelming presence of technology in modern life, from surveillance to automation, capturing the unease of living in an increasingly digital world.',
    keywords: ['AUTOMATION', 'SURVEILLANCE', 'DIGITAL', 'MACHINE'],
    color: '#3b9a9c'
  },
  {
    title: 'Alienation',
    icon: '◯',
    description: 'A pervasive sense of disconnection pervades the album - from society, from others, from oneself. The individual lost in the machinery of modern civilization.',
    keywords: ['ISOLATION', 'DISCONNECT', 'LONELINESS', 'LOST'],
    color: '#1a4d6d'
  },
  {
    title: 'Dystopian Society',
    icon: '▣',
    description: 'OK Computer paints a portrait of a world dominated by consumerism, politics, and control - a society that has lost its humanity to systems and structures.',
    keywords: ['CONTROL', 'SYSTEM', 'POWER', 'CONFORM'],
    color: '#d93636'
  },
  {
    title: 'Transport & Motion',
    icon: '→',
    description: 'Recurring imagery of vehicles, crashes, and movement represents the relentless pace of modern life and the danger of being carried along without control.',
    keywords: ['HIGHWAY', 'CRASH', 'MOVEMENT', 'SPEED'],
    color: '#e8b923'
  }
]

const ThemesSection = () => {
  const [visibleThemes, setVisibleThemes] = useState([])
  const themeRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleThemes((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 }
    )

    themeRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="themes-section">
      <div className="themes-header">
        <h2 className="section-title glitch-text">THEMATIC EXPLORATION</h2>
        <p className="section-subtitle mono">
          ANALYZING THE DYSTOPIAN LANDSCAPE OF OK COMPUTER
        </p>
      </div>

      <div className="themes-grid">
        {themes.map((theme, index) => (
          <div
            key={index}
            ref={(el) => (themeRefs.current[index] = el)}
            data-index={index}
            className={`theme-card ${
              visibleThemes.includes(index) ? 'visible' : ''
            }`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="theme-card-inner">
              <div className="theme-icon" style={{ color: theme.color }}>
                {theme.icon}
              </div>

              <h3 className="theme-title" style={{ color: theme.color }}>
                {theme.title}
              </h3>

              <p className="theme-description">{theme.description}</p>

              <div className="theme-keywords">
                {theme.keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="keyword mono"
                    style={{
                      borderColor: theme.color,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <div
                className="theme-accent-line"
                style={{ backgroundColor: theme.color }}
              ></div>

              <div className="theme-corner-markers">
                <div className="marker top-left" style={{ borderColor: theme.color }}></div>
                <div className="marker top-right" style={{ borderColor: theme.color }}></div>
                <div className="marker bottom-left" style={{ borderColor: theme.color }}></div>
                <div className="marker bottom-right" style={{ borderColor: theme.color }}></div>
              </div>
            </div>

            <div className="theme-hover-overlay" style={{ backgroundColor: theme.color }}></div>
          </div>
        ))}
      </div>

      <div className="themes-footer">
        <div className="system-message mono">
          <span className="blinking-cursor">▮</span>
          <span>SYSTEM ANALYSIS COMPLETE</span>
        </div>
      </div>
    </section>
  )
}

export default ThemesSection
