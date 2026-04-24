const KEYWORDS = [
  'Software Developer',
  'Full-Stack',
  'Consultor Tecnológico',
  'consultora',
  'consultor',
  'consultoría',
  'Innovathera',
  'asesor-implementador',
  'asesor',
  'asesoramiento',
  'diagnóstico',
  'diagnosticar',
  'Ciberseguridad',
  'ISO 9001',
  'ISO 27001',
  'OWASP',
  'PYMEs',
  'end-to-end',
  'APIs',
  'IA',
  'UI/UX',
  'automatización',
  'automatizar',
  'escalables',
  'escalabilidad',
  'integración',
  'integraciones',
  'arquitectura',
  'equipo',
  'colaborativa',
  'ROI',
  'producción',
  'negocio',
  'clientes',
  'resultados',
  'proyectos',
  'desarrollador',
  'Landing page',
]

const TOP_KEYWORDS = [
  'Software Developer',
  'Full-Stack',
  'Consultor Tecnológico',
  'consultora',
  'Innovathera',
  'asesor-implementador',
  'diagnóstico',
  'Ciberseguridad',
  'ISO 27001',
  'OWASP',
  'APIs',
  'Landing page',
  'arquitectura',
  'automatización',
  'integración',
]

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function highlightKeywords(text) {
  if (!text) return text

  const normalizedKeywords = KEYWORDS.map((word) => word.toLowerCase())
  const normalizedTopKeywords = TOP_KEYWORDS.map((word) => word.toLowerCase())
  const pattern = new RegExp(
    `(${KEYWORDS.slice()
      .sort((a, b) => b.length - a.length)
      .map(escapeRegex)
      .join('|')})`,
    'gi',
  )

  return text.split(pattern).map((part, index) => {
    const shouldHighlight = normalizedKeywords.includes(part.toLowerCase())
    if (!shouldHighlight) return part

    const isTopKeyword = normalizedTopKeywords.includes(part.toLowerCase())
    return (
      <strong
        key={`${part}-${index}`}
        className={isTopKeyword ? 'keyword-top' : 'keyword-main'}
      >
        {part}
      </strong>
    )
  })
}
