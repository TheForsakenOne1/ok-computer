import { useState } from 'react'
import './EnhancedButton.css'

const EnhancedButton = ({ children, onClick, className = '' }) => {
  const [ripples, setRipples] = useState([])

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = {
      x,
      y,
      id: Date.now()
    }

    setRipples([...ripples, newRipple])

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id))
    }, 600)

    if (onClick) onClick(e)
  }

  return (
    <button
      className={`enhanced-button retro-button ${className}`}
      onClick={handleClick}
    >
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y
          }}
        />
      ))}
      <span className="button-content">{children}</span>
    </button>
  )
}

export default EnhancedButton
