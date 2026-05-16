export interface Project {
  id: string
  slug: string
  title: string
  category: 'Residencial' | 'Comercial' | 'Rehabilitación' | 'Interiorismo'
  location: string
  year: number
  area: string
  description: string
  tagline: string
  images: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'casa-montjuic',
    title: 'Casa Montjuïc',
    category: 'Residencial',
    location: 'Barcelona',
    year: 2023,
    area: '280m²',
    tagline: 'Donde la piedra abraza la luz',
    description:
      'Una vivienda unifamiliar que dialoga con la colina de Montjuïc mediante volúmenes escalonados de hormigón visto y piedra local. El proyecto explora la transición entre interior y exterior, disolviendo los límites a través de grandes planos acristalados y patios hundidos que capturan la luz mediterránea. Cada espacio ha sido concebido como una secuencia de experiencias sensoriales, desde la penumbra del acceso hasta la apertura luminosa de los salones principales.',
    images: ['/images/placeholder-1.jpg', '/images/placeholder-2.jpg', '/images/placeholder-3.jpg'],
    featured: true,
  },
  {
    id: '2',
    slug: 'estudio-breva',
    title: 'Estudio Breva',
    category: 'Comercial',
    location: 'Madrid',
    year: 2023,
    area: '120m²',
    tagline: 'Creatividad en estado puro',
    description:
      'Espacio de trabajo para una agencia creativa en el corazón de Malasaña. La intervención mantiene la estructura original del local —una antigua imprenta del siglo XX— integrando materiales industriales con elementos cálidos y artesanales. Las estanterías de acero oxidado contrastan con el suelo de terrazo recuperado, creando un ambiente que inspira sin distraer.',
    images: ['/images/placeholder-2.jpg', '/images/placeholder-4.jpg'],
    featured: false,
  },
  {
    id: '3',
    slug: 'loft-malasana',
    title: 'Loft Malasaña',
    category: 'Rehabilitación',
    location: 'Madrid',
    year: 2022,
    area: '95m²',
    tagline: 'Historia vivida de nuevo',
    description:
      'Rehabilitación integral de un loft en planta primera de un edificio modernista de Malasaña. Se recuperaron los forjados de madera originales y se eliminaron todos los tabiques interiores para crear una planta diáfana que celebra la estructura. La cocina de acero negro y la bañera de resina blanca flotante son los puntos focales de un espacio que combina lo histórico con lo contemporáneo.',
    images: ['/images/placeholder-3.jpg', '/images/placeholder-5.jpg'],
    featured: false,
  },
  {
    id: '4',
    slug: 'villa-tramuntana',
    title: 'Villa Tramuntana',
    category: 'Residencial',
    location: 'Ibiza',
    year: 2022,
    area: '450m²',
    tagline: 'El viento como arquitecto',
    description:
      'Vivienda de lujo en la costa norte de Ibiza, orientada hacia el Mediterráneo y protegida del viento de tramontana mediante muros de piedra seca tradicional. La villa se organiza en torno a un patio central con piscina desbordante que refleja el cielo ibicenco. Los materiales —piedra de la isla, madera de olivo y lino— crean una continuidad sensorial entre el paisaje y el interior.',
    images: ['/images/placeholder-4.jpg', '/images/placeholder-1.jpg', '/images/placeholder-6.jpg'],
    featured: true,
  },
  {
    id: '5',
    slug: 'oficinas-diagonal',
    title: 'Oficinas Diagonal',
    category: 'Comercial',
    location: 'Barcelona',
    year: 2021,
    area: '800m²',
    tagline: 'Productividad con alma',
    description:
      'Rediseño completo de las oficinas de una empresa tecnológica en la Avenida Diagonal de Barcelona. El proyecto responde al nuevo paradigma del trabajo híbrido, creando zonas diferenciadas de concentración, colaboración y descanso que se articulan mediante una circulación orgánica. El verde integrado en la arquitectura mejora el bienestar y la calidad del aire interior.',
    images: ['/images/placeholder-5.jpg', '/images/placeholder-2.jpg'],
    featured: false,
  },
  {
    id: '6',
    slug: 'casa-collserola',
    title: 'Casa Collserola',
    category: 'Residencial',
    location: 'Barcelona',
    year: 2024,
    area: '320m²',
    tagline: 'El bosque entra en casa',
    description:
      'Vivienda unifamiliar en la falda del parque de Collserola que integra el bosque mediterráneo como elemento protagonista del proyecto. La planta baja, completamente abierta al jardín, se prolonga en terrazas escalonadas que descienden hacia la vegetación existente. La cubierta verde actúa como continuación del bosque, mientras que los grandes voladizos de hormigón proporcionan sombra en verano y dejan pasar el sol de invierno.',
    images: ['/images/placeholder-6.jpg', '/images/placeholder-3.jpg', '/images/placeholder-1.jpg'],
    featured: false,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category)
}

export function getNextProject(currentSlug: string): Project {
  const index = projects.findIndex((p) => p.slug === currentSlug)
  return projects[(index + 1) % projects.length]
}
