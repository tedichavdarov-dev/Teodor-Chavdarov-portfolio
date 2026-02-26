import { techCategories } from '../../data/portfolioData'

const TECH_ICONS = {
  React: 'https://api.iconify.design/logos:react.svg',
  'Next.js': 'https://api.iconify.design/logos:nextjs-icon.svg',
  'Vue.js': 'https://api.iconify.design/logos:vue.svg',
  Vite: 'https://api.iconify.design/logos:vitejs.svg',
  'Tailwind CSS': 'https://api.iconify.design/logos:tailwindcss-icon.svg',
  HTML: 'https://api.iconify.design/logos:html-5.svg',
  CSS: 'https://api.iconify.design/logos:css-3.svg',
  Bootstrap: 'https://api.iconify.design/logos:bootstrap.svg',
  Figma: 'https://api.iconify.design/logos:figma.svg',
  'Node.js': 'https://api.iconify.design/logos:nodejs-icon.svg',
  'Express.js (Básico)': 'https://api.iconify.design/simple-icons:express.svg?color=white',
  'RESTful APIs': 'https://api.iconify.design/material-symbols:api.svg?color=white',
  'JWT Authentication':
    'https://api.iconify.design/material-symbols:verified-user-outline.svg?color=white',
  'API Integrations': 'https://api.iconify.design/material-symbols:integration-instructions-outline.svg?color=white',
  MongoDB: 'https://api.iconify.design/logos:mongodb-icon.svg',
  PostgreSQL: 'https://api.iconify.design/logos:postgresql.svg',
  MySQL: 'https://api.iconify.design/logos:mysql.svg',
  'Stripe Integration': 'https://api.iconify.design/logos:stripe.svg',
  JavaScript: 'https://api.iconify.design/logos:javascript.svg',
  Python: 'https://api.iconify.design/logos:python.svg',
  Java: 'https://api.iconify.design/logos:java.svg',
  'C#': 'https://api.iconify.design/logos:c-sharp.svg',
  Kotlin: 'https://api.iconify.design/logos:kotlin-icon.svg',
  'Android Studio': 'https://api.iconify.design/logos:android-icon.svg',
  'CI/CD': 'https://api.iconify.design/material-symbols:sync-alt-rounded.svg?color=white',
  Git: 'https://api.iconify.design/logos:git-icon.svg',
  'Docker (Básico)': 'https://api.iconify.design/logos:docker-icon.svg',
}

function buildLoopItems(items, minCount = 14) {
  if (!items?.length) return []
  const result = [...items]
  while (result.length < minCount) {
    result.push(...items)
  }
  return result.slice(0, minCount)
}

function SkillsSection() {
  return (
    <section id="skills" className="section">
      <h2>Tecnologías y stack</h2>
      <div className="skills-categories">
        {techCategories.map((group, rowIndex) => (
          <div key={group.category} className="skills-category-row">
            <p className="skills-category-title">{group.category}</p>
            <div className={`skills-marquee ${rowIndex % 2 === 0 ? 'scroll-left' : 'scroll-right'}`}>
              <div className="skills-track">
                {[...buildLoopItems(group.technologies), ...buildLoopItems(group.technologies)].map((tech, index) => (
                  <article className="tech-pill" key={`${group.category}-${tech}-${index}`}>
                    <img
                      src={TECH_ICONS[tech] || 'https://api.iconify.design/material-symbols:code-blocks-outline.svg?color=white'}
                      alt={tech}
                      width="18"
                      height="18"
                      loading="lazy"
                    />
                    <span className="tech-name">{tech}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
