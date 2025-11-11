import { useEffect, useState } from 'react'
import './LoadingScreen.css'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('INITIALIZING')

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    const textStates = [
      { text: 'INITIALIZING', time: 0 },
      { text: 'LOADING ASSETS', time: 300 },
      { text: 'CONFIGURING PARALLAX', time: 600 },
      { text: 'PREPARING EXPERIENCE', time: 900 },
      { text: 'READY', time: 1200 }
    ]

    textStates.forEach(({ text, time }) => {
      setTimeout(() => setLoadingText(text), time)
    })

    return () => clearInterval(progressInterval)
  }, [])

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-glitch">OK COMPUTER</div>
          <div className="logo-subtitle mono">RADIOHEAD // 1997</div>
        </div>

        <div className="loading-bar-container">
          <div className="loading-bar">
            <div
              className="loading-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="loading-percentage mono">{progress}%</div>
        </div>

        <div className="loading-text mono">
          <span className="prompt">{'>'}</span>
          <span className="text">{loadingText}</span>
          <span className="cursor">_</span>
        </div>

        <div className="loading-artifacts">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="artifact"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="scanline-loading"></div>
    </div>
  )
}

export default LoadingScreen
