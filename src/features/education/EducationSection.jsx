import { education } from '../../data/portfolioData'
import { highlightKeywords } from '../../utils/highlightKeywords'

function EducationSection() {
  return (
    <section id="education" className="section education-section">
      <div className="section-head">
        <p className="section-kicker">Education</p>
        <h2>Formacion academica y tecnica</h2>
      </div>

      <div className="education-timeline">
        {education.map((item) => (
          <article key={item.id} className="card education-card">
            <div className="education-top">
              <p className="education-period">{item.period}</p>
              <span className="education-dot" aria-hidden="true" />
            </div>
            <h3>{item.title}</h3>
            <p className="education-school">{item.school}</p>
            {item.details.length > 0 && (
              <ul className="education-detail-list">
                {item.details.map((detail) => (
                  <li key={detail}>{highlightKeywords(detail)}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default EducationSection
