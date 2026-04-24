import { profile } from '../../data/portfolioData'
import { highlightKeywords } from '../../utils/highlightKeywords'

const heroIcons = {
  email: 'https://api.iconify.design/material-symbols:mail-outline.svg?color=white',
  linkedin: 'https://api.iconify.design/mdi:linkedin.svg?color=white',
}

function HeroSection() {
  const [firstName = '', lastName = ''] = profile.name.split(' ')
  const hireMailto = `mailto:${profile.email}?subject=Oferta%20laboral%20-%20${encodeURIComponent(
    profile.name,
  )}`

  return (
    <section id="home" className="section hero hero-v2">
      <div className="hero-main">
        <p className="hero-greeting">{profile.greeting}</p>
        <h1 className="hero-name">
          {firstName}
          <span>{lastName}</span>
        </h1>
        <p className="hero-summary">{highlightKeywords(profile.summary)}</p>
        <div
          className="hero-focus hero-focus-rotator"
          style={{ '--count': profile.focusAreas.length }}
        >
          {profile.focusAreas.map((area, index) => (
            <span key={area} style={{ '--index': index }}>
              {area}
            </span>
          ))}
        </div>
        <div className="hero-actions">
          <a href={hireMailto} className="button">
            <img
              src="https://api.iconify.design/material-symbols:person-add-outline.svg?color=black"
              alt="Contrátame"
              width="18"
              height="18"
            />
            <span>Contrátame</span>
          </a>
          <a href="#projects" className="button button-secondary">
            Ver proyectos
          </a>
          <a
            href={profile.resumeUrl}
            className="button button-secondary"
            target="_blank"
            rel="noreferrer"
            download
          >
            Descargar CV
          </a>
        </div>
      </div>

      <div className="hero-side">
        <article className="card code-card code-window">
          <div className="code-window-header">
            <div className="code-window-controls">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <p className="code-card-title">portfolio.js</p>
          </div>
          <div className="code-body">
            <p>
              <span className="code-line">01</span>
              <span className="token-keyword">const</span>{' '}
              <span className="token-variable">developer</span>{' '}
              <span className="token-operator">=</span>{' '}
              <span className="token-punctuation">{'{'}</span>
            </p>
            <p>
              <span className="code-line">02</span>
              <span className="token-property">name</span>
              <span className="token-punctuation">:</span>{' '}
              <span className="token-string">'{profile.name}'</span>
              <span className="token-punctuation">,</span>
            </p>
            <p>
              <span className="code-line">03</span>
              <span className="token-property">role</span>
              <span className="token-punctuation">:</span>{' '}
              <span className="token-string">'{profile.role}'</span>
              <span className="token-punctuation">,</span>
            </p>
            <p>
              <span className="code-line">04</span>
              <span className="token-property">focus</span>
              <span className="token-punctuation">:</span>{' '}
              <span className="token-string">'Full-Stack & Consulting'</span>
              <span className="token-punctuation">,</span>
            </p>
            <p>
              <span className="code-line">05</span>
              <span className="token-property">stack</span>
              <span className="token-punctuation">:</span>{' '}
              <span className="token-punctuation">[</span>
              <span className="token-string">'React'</span>
              <span className="token-punctuation">,</span>{' '}
              <span className="token-string">'Node.js'</span>
              <span className="token-punctuation">,</span>
            </p>
            <p>
              <span className="code-line">06</span>
              <span className="token-string">'APIs'</span>
              <span className="token-punctuation">,</span>{' '}
              <span className="token-string">'PostgreSQL'</span>
              <span className="token-punctuation">,</span>
            </p>
            <p>
              <span className="code-line">07</span>
              <span className="token-string">'Next.js'</span>
              <span className="token-punctuation">,</span>{' '}
              <span className="token-string">'Express'</span>
              <span className="token-punctuation">]</span>
              <span className="token-punctuation">,</span>
            </p>
            <p>
              <span className="code-line">08</span>
              <span className="token-property">availableForHire</span>
              <span className="token-punctuation">:</span>{' '}
              <span className="token-boolean">true</span>
            </p>
            <p>
              <span className="code-line">09</span>
              <span className="token-punctuation">{'}'}</span>
              <span className="token-punctuation">;</span>
            </p>
            <p>
              <span className="code-line">10</span>
              <span className="token-variable">developer</span>
              <span className="token-punctuation">.</span>
              <span className="token-method">buildImpact</span>
              <span className="token-punctuation">(</span>
              <span className="token-punctuation">)</span>
              <span className="token-punctuation">;</span>
            </p>
          </div>
        </article>
        <article className="card glance-mini">
          <p className="glance-mini-title">At a glance</p>
          <div className="glance-mini-actions">
            <a
              href={`mailto:${profile.email}`}
              className="glance-mini-btn"
              aria-label="Enviar email"
              title={profile.email}
            >
              <img src={heroIcons.email} alt="Email" width="18" height="18" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glance-mini-btn"
              aria-label="Abrir LinkedIn"
              title="LinkedIn"
            >
              <img src={heroIcons.linkedin} alt="LinkedIn" width="18" height="18" />
            </a>
            <a
              href={`tel:${profile.phone.replaceAll(' ', '')}`}
              className="glance-mini-btn"
              aria-label="Llamar por teléfono"
              title={profile.phone}
            >
              <img
                src="https://api.iconify.design/material-symbols:phone-enabled-outline.svg?color=white"
                alt="Phone"
                width="18"
                height="18"
              />
            </a>
            <a
              href="#contact"
              className="glance-mini-btn"
              aria-label="Ir a contacto"
              title="Contacto"
            >
              <img
                src="https://api.iconify.design/material-symbols:rocket-launch-outline.svg?color=white"
                alt="Contacto"
                width="18"
                height="18"
              />
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default HeroSection
