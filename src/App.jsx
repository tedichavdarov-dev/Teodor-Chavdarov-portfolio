import { useEffect, useState } from 'react'
import AppRouter from './app/router/AppRouter'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [isClosingSplash, setIsClosingSplash] = useState(false)

  useEffect(() => {
    const closeTimer = setTimeout(() => {
      setIsClosingSplash(true)
    }, 950)

    const removeTimer = setTimeout(() => {
      setShowSplash(false)
    }, 1250)

    return () => {
      clearTimeout(closeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  return (
    <>
      {showSplash && (
        <div
          className={`app-splash ${isClosingSplash ? 'app-splash-hidden' : ''}`}
          aria-hidden="true"
        >
          <div className="app-splash-mark">TC</div>
        </div>
      )}
      <AppRouter />
    </>
  )
}

export default App
