import { Suspense, lazy, useEffect, useState } from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'

const StarBackground = lazy(() => import('../../components/common/StarBackground'))

function MainLayout({ children }) {
  const [showStarBackground, setShowStarBackground] = useState(false)

  useEffect(() => {
    const updateStarBackgroundVisibility = () => {
      const isSmallScreen = window.matchMedia('(max-width: 760px)').matches
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      const saveDataEnabled = navigator.connection?.saveData === true

      setShowStarBackground(!isSmallScreen && !prefersReducedMotion && !saveDataEnabled)
    }

    updateStarBackgroundVisibility()
    window.addEventListener('resize', updateStarBackgroundVisibility)

    return () => {
      window.removeEventListener('resize', updateStarBackgroundVisibility)
    }
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('.section')
    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          } else {
            entry.target.classList.remove('in-view')
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      {showStarBackground && (
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      )}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
