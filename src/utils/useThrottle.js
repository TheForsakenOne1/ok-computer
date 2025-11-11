import { useRef, useCallback } from 'react'

/**
 * Custom hook for throttling function calls
 * @param {Function} callback - Function to throttle
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Throttled function
 */
export const useThrottle = (callback, delay) => {
  const lastRun = useRef(Date.now())
  const timeoutRef = useRef(null)

  return useCallback(
    (...args) => {
      const now = Date.now()
      const timeSinceLastRun = now - lastRun.current

      if (timeSinceLastRun >= delay) {
        callback(...args)
        lastRun.current = now
      } else {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(
          () => {
            callback(...args)
            lastRun.current = Date.now()
          },
          delay - timeSinceLastRun
        )
      }
    },
    [callback, delay]
  )
}

/**
 * Request Animation Frame based throttle for smooth animations
 * @param {Function} callback - Function to throttle
 * @returns {Function} RAF throttled function
 */
export const useRAFThrottle = (callback) => {
  const rafRef = useRef(null)
  const lastArgs = useRef([])

  return useCallback(
    (...args) => {
      lastArgs.current = args

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          callback(...lastArgs.current)
          rafRef.current = null
        })
      }
    },
    [callback]
  )
}
