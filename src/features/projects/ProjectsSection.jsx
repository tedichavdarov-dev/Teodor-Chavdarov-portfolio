import { useEffect, useRef, useState } from 'react'
import { featuredProjects } from '../../data/portfolioData'
import { highlightKeywords } from '../../utils/highlightKeywords'

function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleProject, setVisibleProject] = useState(featuredProjects[0])
  const [cardPhase, setCardPhase] = useState('idle')
  const stepRefs = useRef([])
  const transitionTimeoutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const nextIndex = Number(entry.target.getAttribute('data-index'))
          if (!Number.isNaN(nextIndex)) setActiveIndex(nextIndex)
        })
      },
      { threshold: 0.62 },
    )

    stepRefs.current.forEach((step) => step && observer.observe(step))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const nextProject = featuredProjects[activeIndex]
    if (!nextProject || nextProject.id === visibleProject.id) return

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current)
      transitionTimeoutRef.current = null
    }

    setCardPhase('out')

    transitionTimeoutRef.current = setTimeout(() => {
      setVisibleProject(nextProject)
      setCardPhase('in')
      transitionTimeoutRef.current = setTimeout(() => {
        setCardPhase('idle')
      }, 420)
    }, 300)

    return () => {
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current)
    }
  }, [activeIndex, visibleProject.id])

  const activeProject = visibleProject

  return (
    <section id="projects" className="section projects-showcase-section">
      <div className="section-head">
        <p className="section-kicker">Featured Projects</p>
        <h2>{featuredProjects.length} proyectos destacados</h2>
      </div>

      <div
        className="projects-scroll-shell"
        style={{ '--projects-count': featuredProjects.length }}
      >
        <article className={`card projects-sticky-stage project-card-${cardPhase}`}>
          <div className="project-top-meta">
            <p className="project-dev-time">
              <span>Tiempo de desarrollo</span> {activeProject.developmentTime}
            </p>
          </div>

          <h3 className="project-title-left">{activeProject.title}</h3>

          <figure className="project-image-center">
            <a
              className="project-image-link"
              href={activeProject.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Abrir ${activeProject.title} en una nueva pestana`}
            >
              <div className="project-image-cube">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                  }}
                />
                <div className="project-image-fallback">
                  <p>Imagen del proyecto</p>
                  <span>Placeholder temporal</span>
                </div>
              </div>
            </a>
          </figure>

          <div className="project-description-right">
            <p>{highlightKeywords(activeProject.description)}</p>
          </div>

          <p className="project-static-hint">
            Haz scroll para cambiar de proyecto sin mover el escenario.
          </p>

          <div className="project-stack-tags">
            {activeProject.stack.map((tech) => (
              <span key={`${activeProject.id}-${tech}`} className="project-stack-tag">
                {tech}
              </span>
            ))}
          </div>
        </article>

        <div className="projects-scroll-track">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(node) => {
                stepRefs.current[index] = node
              }}
              className="project-scroll-step"
              data-index={index}
            >
              <span className={index === activeIndex ? 'active' : ''}>
                {String(index + 1).padStart(2, '0')} · {project.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
