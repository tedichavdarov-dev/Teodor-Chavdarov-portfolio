import { useEffect, useRef, useState } from 'react'
import { profile } from '../../data/portfolioData'
import { highlightKeywords } from '../../utils/highlightKeywords'

const contactIcons = {
  location: 'https://api.iconify.design/material-symbols:location-on-outline.svg?color=white',
  phone: 'https://api.iconify.design/material-symbols:phone-enabled-outline.svg?color=white',
  email: 'https://api.iconify.design/material-symbols:mail-outline.svg?color=white',
  github: 'https://api.iconify.design/mdi:github.svg?color=white',
  linkedin: 'https://api.iconify.design/mdi:linkedin.svg?color=white',
  download: 'https://api.iconify.design/material-symbols:download-rounded.svg?color=black',
  hire: 'https://api.iconify.design/material-symbols:person-add-outline.svg?color=black',
}

function ContactSection() {
  const hireMailto = `mailto:${profile.email}?subject=Oferta%20laboral%20-%20${encodeURIComponent(
    profile.name,
  )}`

  return (
    <section id="contact" className="section contact-section">
      <div className="section-head">
        <p className="section-kicker">Contact</p>
        <h2>Construyamos algo grande</h2>
      </div>

      <div className="contact-grid-pro">
        <article className="card contact-hero-card">
          <p className="contact-status">Available for new opportunities</p>
          <h3>Software Developer listo para aportar impacto real desde el dia uno.</h3>
          <p>{highlightKeywords(profile.summarySecondary)}</p>
          <div className="contact-cta-row">
            <a href={hireMailto} className="button">
              <img src={contactIcons.hire} alt="Contratame" width="18" height="18" />
              <span>Contratame</span>
            </a>
            <a href={profile.resumeUrl} className="button button-secondary" target="_blank" rel="noreferrer" download>
              Descargar CV
            </a>
          </div>
          <RunnerPreview />
        </article>

        <div className="contact-link-grid">
          <a className="card contact-link-card" href={`mailto:${profile.email}`}>
            <img src={contactIcons.email} alt="Email" width="20" height="20" />
            <p>Email</p>
            <span>{profile.email}</span>
          </a>
          <a className="card contact-link-card" href={`tel:${profile.phone.replaceAll(' ', '')}`}>
            <img src={contactIcons.phone} alt="Telefono" width="20" height="20" />
            <p>Telefono</p>
            <span>{profile.phone}</span>
          </a>
          <a className="card contact-link-card" href={profile.linkedin} target="_blank" rel="noreferrer">
            <img src={contactIcons.linkedin} alt="LinkedIn" width="20" height="20" />
            <p>LinkedIn</p>
            <span>Perfil profesional</span>
          </a>
          <a className="card contact-link-card" href={profile.github} target="_blank" rel="noreferrer">
            <img src={contactIcons.github} alt="GitHub" width="20" height="20" />
            <p>GitHub</p>
            <span>Codigo y proyectos</span>
          </a>
          <a className="card contact-link-card contact-link-wide" href={profile.resumeUrl} target="_blank" rel="noreferrer" download>
            <img src={contactIcons.download} alt="CV" width="20" height="20" />
            <p>Curriculum</p>
            <span>Descarga en PDF</span>
          </a>
          <div className="card contact-link-card contact-link-wide">
            <img src={contactIcons.location} alt="Ubicacion" width="20" height="20" />
            <p>Ubicacion</p>
            <span>{profile.address}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function RunnerPreview() {
  const canvasRef = useRef(null)
  const [score, setScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const width = canvas.width
    const height = canvas.height
    const groundY = height - 24
    const player = { x: 42, y: groundY - 16, w: 16, h: 16, vy: 0 }
    const gravity = 1500
    const jumpVelocity = -490
    const obstacleSpeed = 230
    const obstacles = []

    let gameOver = false
    let animationFrameId = 0
    let lastTime = performance.now()
    let spawnTimer = 0.9
    let elapsed = 0
    let lastScoreUpdate = 0

    const reset = () => {
      player.y = groundY - player.h
      player.vy = 0
      obstacles.length = 0
      gameOver = false
      elapsed = 0
      spawnTimer = 0.8
      setScore(0)
      setIsGameOver(false)
    }

    const jump = () => {
      if (gameOver) {
        reset()
        return
      }
      const onGround = player.y >= groundY - player.h - 0.1
      if (onGround) player.vy = jumpVelocity
    }

    const handleKeyDown = (event) => {
      if (event.code === 'Space' || event.code === 'ArrowUp') {
        event.preventDefault()
        jump()
      }
      if (event.code === 'Enter' && gameOver) {
        event.preventDefault()
        reset()
      }
    }

    const handlePointerJump = (event) => {
      event.preventDefault()
      jump()
    }

    window.addEventListener('keydown', handleKeyDown)
    canvas.addEventListener('pointerdown', handlePointerJump)
    canvas.addEventListener('touchstart', handlePointerJump, { passive: false })

    const hasCollision = (a, b) =>
      a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y

    const render = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.03)
      lastTime = now

      ctx.clearRect(0, 0, width, height)

      ctx.fillStyle = '#0a0a0a'
      ctx.fillRect(0, 0, width, height)

      ctx.strokeStyle = '#2f2f2f'
      ctx.beginPath()
      ctx.moveTo(0, groundY + 0.5)
      ctx.lineTo(width, groundY + 0.5)
      ctx.stroke()

      if (!gameOver) {
        elapsed += dt
        lastScoreUpdate += dt
        if (lastScoreUpdate >= 0.12) {
          lastScoreUpdate = 0
          setScore(Math.floor(elapsed * 10))
        }

        spawnTimer -= dt
        if (spawnTimer <= 0) {
          const obstacleHeight = 18 + Math.floor(Math.random() * 12)
          obstacles.push({
            x: width + 20,
            y: groundY - obstacleHeight,
            w: 12,
            h: obstacleHeight,
          })
          spawnTimer = 0.95 + Math.random() * 0.9
        }

        player.vy += gravity * dt
        player.y += player.vy * dt
        if (player.y > groundY - player.h) {
          player.y = groundY - player.h
          player.vy = 0
        }

        for (let i = obstacles.length - 1; i >= 0; i -= 1) {
          const obstacle = obstacles[i]
          obstacle.x -= obstacleSpeed * dt
          if (obstacle.x + obstacle.w < -4) obstacles.splice(i, 1)
          if (hasCollision(player, obstacle)) {
            gameOver = true
            setIsGameOver(true)
          }
        }
      }

      ctx.fillStyle = '#ffffff'
      ctx.fillRect(player.x, player.y, player.w, player.h)

      ctx.fillStyle = '#8a8a8a'
      obstacles.forEach((obstacle) => {
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h)
      })

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      canvas.removeEventListener('pointerdown', handlePointerJump)
      canvas.removeEventListener('touchstart', handlePointerJump)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="contact-game-shell">
      <div className="contact-game-head">
        <p>JS Mini Demo</p>
        <span>Score: {score}</span>
      </div>
      <canvas
        ref={canvasRef}
        width={520}
        height={120}
        className="contact-game-canvas"
        role="button"
        tabIndex={0}
        aria-label="Toca para saltar en el minijuego"
      />
      <p className="contact-game-help">
        {isGameOver ? 'Game Over - Enter para reiniciar' : 'Space / ArrowUp para saltar'}
      </p>
    </div>
  )
}

export default ContactSection
