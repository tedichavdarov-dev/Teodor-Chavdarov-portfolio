import { useEffect } from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import StarBackground from '../../components/common/StarBackground'

function MainLayout({ children }) {
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
      <StarBackground />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
