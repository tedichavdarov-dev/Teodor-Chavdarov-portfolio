export const profile = {
  name: 'Teodor Chavdarov',
  role: 'Desarrollador Full-Stack & Consultor Tecnológico',
  greeting: 'Hi there! this is',
  focusAreas: [
    'Full-Stack Developer',
    'Consultor Tecnológico',
    'Arquitectura de Software',
  ],
  summary:
    'Fundador de Innovathera Technology (Madrid), consultora tecnológica que diagnostica ineficiencias operativas en PYMEs y las resuelve con desarrollo a medida. Sectores principales: hostelería y construcción.',
  summarySecondary:
    'Enfoque asesor-implementador: primero entiendo cómo trabaja el negocio, después propongo, después construyo. El objetivo no es entregar código, es mejorar un proceso medible.',
  aboutStory: [
    'Nací y crecí en Madrid, y he sentido pasión por la tecnología desde muy joven. Mi primer proyecto fue una web sencilla donde mis amigos podían solicitar invitación para mi cumpleaños; una idea pequeña que marcó el inicio de mi compromiso con el software.',
    'Mi recorrido profesional empezó fuera del código: más de un año como asesor financiero en OVB Allfinanz, donde aprendí consultoría de alto valor — analizar al cliente, construir propuestas personalizadas y diseñar estrategias patrimoniales a medio-largo plazo. Esa base marcó mi forma de entender el negocio antes de entender la técnica.',
    'Después pasé al desarrollo en Galaxy Construcciones, implementando soluciones internas para optimizar operaciones reales. Esa experiencia me llevó a fundar Innovathera Technology (Madrid), mi consultora actual: diagnosticamos ineficiencias operativas en PYMEs y las resolvemos con software a medida, bajo estándares ISO 9001, ISO 27001 y OWASP Top 10.',
    'En septiembre de 2026 comienzo el Máster en Ciberseguridad en U-Tad, profundizando en seguridad defensiva para aplicarlo a nuestros propios desarrollos y a los de nuestros clientes. Me motivan los entornos exigentes, con aprendizaje continuo, responsabilidad y foco en resultados medibles.',
  ],
  resumeUrl: '/resume/CV-Teodor-Chavdarov-Karadazhov-2026-DesarrolladorSoftware.pdf',
  location: 'Collado Villalba, Madrid, Spain',
  address: 'Calle Costa Verde 5, Collado Villalba C.P. 28400',
  phone: '672 724 676',
  email: 'tedichavdarov@gmail.com',
  github: 'https://github.com/tedichavdarov-dev',
  linkedin: 'https://www.linkedin.com/in/teodor-chavdarov-836a552b4',
}

export const projects = [
  {
    id: 'project-automation',
    title: 'Automatización de Procesos Empresariales',
    description:
      'Desarrollo de soluciones a medida enfocadas en automatizar operaciones internas de clientes y reducir trabajo manual, integrando IA para tareas repetitivas.',
    stack: ['React', 'Node.js', 'Supabase', 'Claude API'],
    link: '#',
  },
  {
    id: 'project-metrics-panels',
    title: 'Paneles de Métricas y Gestión de Datos',
    description:
      'Diseño e implementación de paneles de métricas, sistemas de gestión de datos y landings para Astra Solutions y otros clientes.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
]

export const featuredProjects = [
  {
    id: 'featured-trade-void',
    title: 'Trade Void',
    developmentTime: 'Proyecto personal',
    description:
      'Plataforma de trading journal para llevar el control de tus operaciones. Incluye dashboard global, journal de trades, calendario mensual, registro de estrategias con analisis de rendimiento, backtesting y calculadora, todo integrado con widgets de TradingView.',
    stack: [
      'Next.js',
      'React',
      'Supabase',
      'TradingView Widgets',
      'Tailwind CSS',
    ],
    image:
      'https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftrade-void.vercel.app%2F?w=1200',
    url: 'https://trade-void.vercel.app/',
  },
  {
    id: 'featured-paradoxical',
    title: 'Paradoxical',
    developmentTime: 'Proyecto real',
    description:
      'Wikipedia social de autores donde compiten por escribir el mejor articulo y mantenerse en la plataforma. Incluye autenticacion con JWT, gestion de imagenes con Cloudinary, emails con Nodemailer y pagos con Stripe API.',
    stack: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Cloudinary',
      'Nodemailer',
      'Stripe API',
    ],
    image:
      'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fparadoxical-client.vercel.app%2F?w=1200',
    url: 'https://paradoxical-client.vercel.app/',
  },
  {
    id: 'featured-astra-automations',
    title: 'Astra Automations',
    developmentTime: 'Proyecto cliente',
    description:
      'Landing page para cliente con una demo de automatizacion conectada con n8n en los flujos de newsletter y formulario de contacto, incluyendo integración con Calendly.',
    stack: [
      'Web real de Astra',
      'React',
      'Vite',
      'TypeScript',
      'n8n',
      'Calendly',
      'Email Automation',
    ],
    image:
      'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fastrautomations.vercel.app%2F?w=1200',
    url: 'https://astrautomations.vercel.app/',
  },
]

export const highlights = [
  'Fundador de consultora tecnológica propia con clientes activos',
  'Desarrollo end-to-end: diagnóstico, arquitectura, implementación, despliegue y seguimiento',
  'Automatización de procesos con integración de IA (Claude API, OpenAI)',
  'Trabajo bajo estándares ISO 9001, ISO 27001 y OWASP Top 10',
  'Formación continua: Máster Oficial en Ciberseguridad (U-Tad, 2026)',
  'Experiencia previa en consultoría financiera de alto valor (OVB Allfinanz)',
]

export const techCategories = [
  {
    category: 'Frontend',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'Three.js',
      'HTML',
      'CSS',
      'Bootstrap',
      'Figma',
    ],
  },
  {
    category: 'Backend & APIs',
    technologies: [
      'Node.js',
      'Express',
      'Supabase',
      'RESTful APIs',
      'JWT Authentication',
      'Stripe Integration',
      'API Integrations',
    ],
  },
  {
    category: 'IA & Automatización',
    technologies: ['Claude API', 'OpenAI API', 'n8n'],
  },
  {
    category: 'Databases',
    technologies: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    category: 'Programming Languages',
    technologies: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Kotlin'],
  },
  {
    category: 'Mobile',
    technologies: ['Android Studio'],
  },
  {
    category: 'Cloud & DevOps',
    technologies: [
      'AWS',
      'Vercel',
      'GitHub Actions',
      'CI/CD',
      'Git Flow',
      'Vitest',
      'Docker (Básico)',
      'Render',
    ],
  },
]

export const languages = [
  'Español (Nativo)',
  'Búlgaro (Nativo)',
  'Inglés (B2)',
]

export const education = [
  {
    id: 'edu-master-cyber',
    title: 'Máster en Ciberseguridad',
    school: 'U-Tad (Centro Universitario de Tecnología y Arte Digital), Madrid',
    period: '09/2026 - En curso',
    details: [
      'Seguridad defensiva y ofensiva',
      'Análisis forense y respuesta a incidentes',
      'Criptografía aplicada',
      'Seguridad en cloud y aplicaciones web (OWASP)',
    ],
  },
  {
    id: 'edu-grado',
    title: 'Grado en Desarrollo de Software',
    school: 'CEV Escuela Superior, Madrid',
    period: '09/2024 - 06/2026',
    details: [
      'Programación en Java, JavaScript y Python',
      'Bases de datos relacionales y no relacionales (MySQL, PostgreSQL, MongoDB)',
      'Desarrollo web y móvil con React, Vite, HTML, CSS, Tailwind y Bootstrap',
      'Arquitectura de software y diseño de interfaces',
      'Integración de APIs y servicios externos',
    ],
  },
  {
    id: 'edu-bach',
    title: 'Bachillerato de Ciencias Tecnológicas',
    school: 'IES Jaime Ferran',
    period: '09/2022 - 06/2024',
    details: [],
  },
]

export const experience = [
  {
    id: 'exp-innovathera',
    role: 'Fundador & Consultor Tecnológico',
    company: 'Innovathera Technology',
    period: '10/2025 - Presente',
    details:
      'Consultora tecnológica propia que diagnostica ineficiencias operativas en PYMEs de hostelería y construcción y las resuelve con desarrollo a medida. Proceso asesor-implementador end-to-end: análisis del negocio, arquitectura, desarrollo full-stack, despliegue y seguimiento. Clientes activos: Astra Solutions, C22 Calisthenics, Moa Society y Galaxy Construcciones. Liderazgo técnico y de negocio bajo estándares ISO 9001, ISO 27001 y OWASP Top 10. Gestión de equipo comercial propio y dirección estratégica de más de 10 productos verticales internos (gestión de obras con IA, clínicas, gestorías, marketplaces B2B y CRM internos).',
  },
  {
    id: 'exp-ovb',
    role: 'Asesor Financiero',
    company: 'OVB Allfinanz',
    period: '02/2024 - 04/2025',
    details:
      'Asesoramiento financiero integral a particulares y autónomos: análisis patrimonial, ahorro, inversión, protección familiar, jubilación e hipotecas. Diseño de estrategias a medio-largo plazo con metodología consultiva de alto valor. Base sólida en consultoría empresarial: análisis de necesidades, construcción de propuestas personalizadas y gestión de cartera con herramientas internas de optimización operativa.',
  },
  {
    id: 'exp-galaxy',
    role: 'Desarrollador de Software',
    company: 'Galaxy Construcciones y Reformas SL',
    period: '09/2022 - 09/2024',
    details:
      'Desarrollé soluciones internas para optimizar operaciones en el sector de construcción y reformas. Implementé automatizaciones para reducir trabajo manual y mejorar la toma de decisiones. Creé herramientas de cálculo ROI y sistemas inteligentes de búsqueda de inmuebles integrando APIs externas y filtros basados en IA para detectar oportunidades viables de suelo y reforma.',
  },
]

