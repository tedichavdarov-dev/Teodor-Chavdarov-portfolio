export const profile = {
  name: 'Teodor Chavdarov',
  role: 'Software Developer',
  greeting: 'Hi there! this is',
  focusAreas: [
    'Software Developer',
    'Full-Stack Developer',
    'SaaS Product Builder',
  ],
  summary:
    'Desarrollador de software enfocado en crear productos web robustos, escalables y listos para negocio. Especializado en arquitectura full-stack, APIs e integraciones reales para producto.',
  summarySecondary:
    'Combino visión técnica y foco en resultados para entregar software mantenible, rápido y orientado a impacto en negocio.',
  aboutStory: [
    'Nací y crecí en Madrid, y he sentido pasión por la tecnología y la programación desde muy joven. Mi primer proyecto fue una web sencilla donde mis amigos podían solicitar una invitación para mi cumpleaños; una idea pequeña que marcó el inicio de mi compromiso con el software.',
    'Desde entonces he mantenido una formación continua autodidacta, aprendiendo mediante documentación técnica, libros y experimentación práctica. Esa curiosidad me llevó a desarrollar productos SaaS y a construir soluciones para empresas con necesidades reales de producción.',
    'Me especializo en automatización de procesos, integración de APIs y desarrollo full-stack orientado a escalabilidad. Busco siempre equilibrio entre calidad técnica y utilidad de negocio para entregar soluciones mantenibles y efectivas.',
    'Disfruto colaborar con otros profesionales, participar en meetups, talleres y eventos de tecnología, especialmente en innovación e inteligencia artificial. Me motivan los entornos exigentes, con aprendizaje continuo, responsabilidad y foco en resultados.',
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
    id: 'project-saas-automation',
    title: 'SaaS de Automatización de Procesos',
    description:
      'Desarrollo de soluciones SaaS enfocadas en automatizar operaciones para clientes y reducir tareas manuales.',
    stack: ['JavaScript', 'Node.js', 'React', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 'project-metrics-panels',
    title: 'Paneles de Métricas y Gestión de Datos',
    description:
      'Diseño e implementación de paneles de métricas, sistemas de gestión de datos y landings para Astra Automations y otros clientes.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Express.js', 'MongoDB'],
    link: '#',
  },
]

export const featuredProjects = [
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
      'Landing page para cliente con una demo de automatizacion conectada con Make en los flujos de newsletter y formulario de contacto.',
    stack: ['React', 'Vite', 'JavaScript', 'Make', 'Email Automation'],
    image:
      'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fastrautomations.vercel.app%2F?w=1200',
    url: 'https://astrautomations.vercel.app/',
  },
]

export const highlights = [
  'Lanzamiento de productos SaaS en produccion, desde MVP hasta version estable para clientes reales',
  'Trabajo colaborativo con Git',
  'Automatizaciones mediante IA',
  'Desarrollo End-to-End completo: idea, arquitectura, backend, frontend, integraciones, testing y despliegue',
  'Escalado de funcionalidades SaaS con enfoque en negocio, mantenibilidad y rendimiento',
  'Entrega End-to-End orientada a impacto: definicion de requerimientos, iteracion y mejora continua',
]

export const techCategories = [
  {
    category: 'Frontend',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
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
      'Express.js (Básico)',
      'RESTful APIs',
      'JWT Authentication',
      'Stripe Integration',
      'API Integrations',
    ],
  },
  {
    category: 'Databases',
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Programming Languages',
    technologies: ['JavaScript', 'Python', 'Java', 'C#', 'Kotlin'],
  },
  {
    category: 'Mobile',
    technologies: ['Android Studio'],
  },
  {
    category: 'DevOps & Tools',
    technologies: ['CI/CD', 'Git', 'Docker (Básico)'],
  },
]

export const languages = [
  'Español (Nativo)',
  'Búlgaro (Nativo)',
  'Inglés (B2)',
]

export const education = [
  {
    id: 'edu-dam',
    title: 'Desarrollador de Apps y Multiplataformas',
    school: 'CEV escuela superio, Madrid',
    period: '21/09/2024 - Actualidad',
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
    period: '16/09/2022 - 10/06/2024',
    details: [],
  },
]

export const experience = [
  {
    id: 'exp-freelancer',
    role: 'Software Developer (Freelance SaaS Projects)',
    company: 'Proyectos Propios y Clientes',
    period: '10/2025 - Presente',
    details:
      'He estado ganando experiencia con Freelancer, desarrollando soluciones SaaS, paneles de métricas y sistemas de gestión de datos para clientes. Trabajé de forma colaborativa con un compañero responsable de UI/UX y landings, mejorando dinámicas de equipo: seguimiento diario de avances, organización de tareas, compartición continua de resultados y retrospectivas mensuales para analizar mejoras y errores.',
  },
  {
    id: 'exp-ovb',
    role: 'Asesor Financiero',
    company: 'OVB Allfinanz',
    period: '02/2024 - 04/2025',
    details:
      'Uso de herramientas de empresa para automatizar y optimizar procesos de clientes. Gestión y organización de datos con Excel.',
  },
  {
    id: 'exp-galaxy',
    role: 'Desarrollador de Software',
    company: 'Galaxy Construcciones y Reformas SL',
    period: 'Sept. 2022 - Sept. 2024',
    details:
      'Desarrollé soluciones internas para optimizar operaciones en el sector de construcción y reformas. Implementé automatizaciones para reducir trabajo manual y mejorar la toma de decisiones. Creé herramientas de cálculo ROI y sistemas inteligentes de búsqueda de inmuebles integrando APIs externas y filtros basados en IA para detectar oportunidades viables de suelo y reforma.',
  },
]
