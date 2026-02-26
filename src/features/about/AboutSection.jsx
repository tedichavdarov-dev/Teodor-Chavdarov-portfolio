import { highlights, languages, profile } from '../../data/portfolioData'
import { highlightKeywords } from '../../utils/highlightKeywords'

function TeamIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="about-inline-icon">
      <circle cx="9" cy="8" r="3" />
      <circle cx="16.5" cy="9" r="2.5" />
      <path d="M3.5 18c.5-2.8 2.5-4.5 5.5-4.5s5 1.7 5.5 4.5" />
      <path d="M13.5 18c.4-2 1.8-3.2 3.9-3.2S21 16 21.5 18" />
    </svg>
  )
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="about-inline-icon">
      <path d="M8 4h8v3a4 4 0 0 1-8 0z" />
      <path d="M8 6H5a3 3 0 0 0 3 3" />
      <path d="M16 6h3a3 3 0 0 1-3 3" />
      <path d="M12 11v4" />
      <path d="M9 19h6" />
      <path d="M10 15h4v4h-4z" />
    </svg>
  )
}

function LanguageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="about-inline-icon">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a13 13 0 0 1 0 18" />
      <path d="M12 3a13 13 0 0 0 0 18" />
    </svg>
  )
}

function MedalIcon({ variant = 0 }) {
  const marks = ['*', '**', '***']
  return <span className="achievement-item-icon">{marks[variant % marks.length]}</span>
}

function getLanguageMeta(item) {
  const match = item.match(/^(.+?)\s*\((.+)\)$/)
  const name = match ? match[1] : item
  const level = match ? match[2] : 'Competencia profesional'
  const initials = name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return { name, level, initials }
}

function AboutSection() {
  return (
    <section id="about" className="section about-pro-section">
      <div className="section-head">
        <p className="section-kicker">About</p>
        <h2>Sobre mi, logros e idiomas</h2>
      </div>

      <div className="about-pro-grid">
        <article className="card about-story-card">
          <p className="about-card-label">Perfil profesional</p>
          {profile.aboutStory.map((paragraph) => (
            <p key={paragraph} className="about-story-text">
              {highlightKeywords(paragraph)}
            </p>
          ))}
          <div className="about-team-pill">
            <TeamIcon />
            <span>
              {highlightKeywords(
                'Trabajo en equipo: colaboracion diaria con perfil UI/UX, seguimiento continuo y retrospectivas mensuales orientadas a mejora.',
              )}
            </span>
          </div>
        </article>

        <div className="about-side-column">
          <article className="card about-achievements-card">
            <div className="about-achievements-head">
              <TrophyIcon />
              <h3>Logros destacados</h3>
            </div>
            <div className="achievement-grid">
              {highlights.map((item, index) => (
                <article key={item} className="achievement-item">
                  <div className="achievement-item-content">
                    <MedalIcon variant={index} />
                    <p>{highlightKeywords(item)}</p>
                  </div>
                </article>
              ))}
            </div>
          </article>

          <article className="card about-languages-card">
            <div className="about-achievements-head">
              <LanguageIcon />
              <h3>Idiomas</h3>
            </div>
            <div className="language-chip-wrap">
              {languages.map((item) => {
                const { name, level, initials } = getLanguageMeta(item)
                return (
                  <article key={item} className="language-chip">
                    <span className="language-chip-icon" aria-hidden="true">
                      {initials}
                    </span>
                    <span className="language-chip-text">
                      <strong>{highlightKeywords(name)}</strong>
                      <small>{highlightKeywords(level)}</small>
                    </span>
                  </article>
                )
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
