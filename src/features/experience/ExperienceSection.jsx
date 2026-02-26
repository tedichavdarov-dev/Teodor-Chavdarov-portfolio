import { experience } from '../../data/portfolioData'
import { highlightKeywords } from '../../utils/highlightKeywords'

function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <h2>Experiencia</h2>
      <div className="experience-timeline">
        {experience.map((item) => (
          <article key={item.id} className="card experience-card">
            <p className="experience-period">{item.period}</p>
            <h3>
              {highlightKeywords(item.role)} - {highlightKeywords(item.company)}
            </h3>
            <p>{highlightKeywords(item.details)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
