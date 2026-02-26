import { useState } from 'react'
import { profile } from '../../data/portfolioData'

const navItems = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#education', label: 'Formación' },
  { href: '#contact', label: 'Contacto' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [firstName = 'Teodor', lastName = 'Chavdarov'] = profile.name.split(' ')

  return (
    <header className="site-header">
      <a href="#home" className="brand">
        <span className="brand-first">{firstName}</span>
        <span className="brand-last">{lastName}</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Abrir menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className="menu-icon" />
        <span className="menu-icon" />
        <span className="menu-icon" />
      </button>
      <nav className={`site-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
