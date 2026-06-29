export interface Service {
  id: string
  title: string
  description: string
  icon: string
  longDescription?: string
}

export interface Stat {
  value: string
  label: string
}

export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
}

export interface ContactInfo {
  phone: string
  whatsapp: string
  email: string
  hours: string
  address: string
}

export interface NavLink {
  label: string
  href: string
}

export interface Package {
  name: string
  description: string
  features: string[]
  highlighted?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Hogares', href: '/hogares' },
  { label: 'Empresas', href: '/empresas' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Nosotros', href: '/nosotros' },
]

export const SERVICES: Service[] = [
  {
    id: 'camaras-seguridad',
    title: 'Cámaras de Seguridad',
    description: 'Instalación de cámaras IP y CCTV con acceso remoto en tiempo real desde cualquier dispositivo.',
    icon: 'camera',
    longDescription:
      'Nuestro servicio estrella. Instalamos cámaras IP y CCTV de última generación con resolución Full HD / 4K, visión nocturna, detección de movimiento por IA y acceso remoto desde tu celular o computadora. Marcas Hikvision, Dahua, Axis y más.',
  },
  {
    id: 'redes',
    title: 'Redes e Infraestructura',
    description: 'Diseño, instalación y configuración de redes cableadas e inalámbricas para hogares y empresas.',
    icon: 'network',
    longDescription:
      'Diseñamos e implementamos infraestructura de red completa: cableado estructurado, switches, routers, puntos de acceso Wi-Fi y VLANs. Redes corporativas, redes de distribución y conectividad de alta disponibilidad para empresas de cualquier tamaño en Lima.',
  },
  {
    id: 'servidores',
    title: 'Servidores y Almacenamiento',
    description: 'Instalación, configuración y administración de servidores físicos y virtuales.',
    icon: 'server',
    longDescription:
      'Montamos y configuramos servidores Windows Server, Linux y entornos virtualizados (VMware, Hyper-V). Soluciones NAS, backup centralizado y gestión remota. Ideal para empresas que necesitan almacenamiento seguro y disponibilidad continua.',
  },
  {
    id: 'mantenimiento-equipos',
    title: 'Mantenimiento de Equipos',
    description: 'Mantenimiento preventivo y correctivo de computadoras, laptops y periféricos.',
    icon: 'computer',
    longDescription:
      'Limpieza interna, cambio de pasta térmica, formateo, instalación de software y actualización de hardware. Atendemos equipos de escritorio, laptops y estaciones de trabajo. Servicio a domicilio o en tu empresa con técnicos certificados.',
  },
  {
    id: 'hacking-etico',
    title: 'Hacking Ético y Seguridad',
    description: 'Pentesting, auditorías de seguridad y evaluación de vulnerabilidades en redes y sistemas.',
    icon: 'shield',
    longDescription:
      'Realizamos pruebas de penetración (pentesting) y auditorías de seguridad para identificar vulnerabilidades antes que los atacantes. Evaluamos redes, aplicaciones web y sistemas internos. Entregamos informe detallado con hallazgos y plan de remediación.',
  },
  {
    id: 'auditoria-red',
    title: 'Auditorías de Red',
    description: 'Análisis completo de tu infraestructura de red: rendimiento, seguridad y puntos ciegos.',
    icon: 'audit',
    longDescription:
      'Auditamos tu red para detectar cuellos de botella, dispositivos no autorizados, configuraciones inseguras y problemas de rendimiento. Usamos herramientas profesionales como Wireshark, Nmap y Nessus. Ideal para empresas que quieren saber exactamente qué pasa en su red.',
  },
]

export const STATS: Stat[] = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '500+', label: 'Clientes activos' },
  { value: '24/7', label: 'Monitoreo continuo' },
  { value: '98%', label: 'Satisfacción del cliente' },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Carlos Mendoza',
    location: 'Miraflores, Lima',
    rating: 5,
    text: 'Excelente servicio desde el primer día. Instalaron 8 cámaras en mi empresa en menos de 4 horas. La calidad de imagen es impresionante y el soporte técnico responde rápido.',
  },
  {
    name: 'Patricia Quispe',
    location: 'San Isidro, Lima',
    rating: 5,
    text: 'Llevamos 3 años con SSR Soluciones y nunca hemos tenido un problema sin resolver. El monitoreo 24/7 nos da total tranquilidad. Totalmente recomendados.',
  },
  {
    name: 'Roberto Flores',
    location: 'Callao',
    rating: 5,
    text: 'Tenía un almacén con puntos ciegos en la vigilancia. El equipo de SSR diseñó una solución perfecta. Los precios son justos y el trabajo profesional.',
  },
]

export const CONTACT_INFO: ContactInfo = {
  phone: '+51 927 199 798',
  whatsapp: '51927199798',
  email: 'contacto@ssrsoluciones.pe',
  hours: 'Lun - Sáb: 8:00am - 7:00pm',
  address: 'Lima Metropolitana y Callao',
}

export const HOME_PACKAGES: Package[] = [
  {
    name: 'Básico',
    description: 'Ideal para departamentos y casas pequeñas.',
    features: [
      '2 cámaras IP Full HD',
      'DVR 4 canales',
      'Disco duro 500GB',
      'App móvil incluida',
      'Instalación incluida',
      'Garantía 1 año',
    ],
  },
  {
    name: 'Estándar',
    description: 'Para casas medianas y locales comerciales.',
    features: [
      '4 cámaras IP Full HD',
      'DVR 8 canales',
      'Disco duro 1TB',
      'Visión nocturna mejorada',
      'App móvil + alertas',
      'Instalación incluida',
      'Garantía 2 años',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    description: 'Protección total para propiedades grandes.',
    features: [
      '8 cámaras IP 4K',
      'NVR 16 canales',
      'Disco duro 2TB',
      'Detección IA movimiento',
      'Monitoreo 30 días incluido',
      'Instalación incluida',
      'Garantía 3 años',
    ],
  },
]

export const BRANDS = ['Hikvision', 'Dahua', 'Axis', 'Bosch', 'Hanwha', 'Cisco', 'Mikrotik']

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Consulta gratuita',
    description: 'Nos contactas y evaluamos tus necesidades de seguridad sin costo ni compromiso.',
  },
  {
    number: '02',
    title: 'Visita técnica',
    description: 'Un especialista visita tu propiedad para diseñar la solución ideal.',
  },
  {
    number: '03',
    title: 'Instalación profesional',
    description: 'Nuestro equipo certificado instala y configura todo el sistema.',
  },
  {
    number: '04',
    title: 'Soporte continuo',
    description: 'Te acompañamos con mantenimiento y soporte técnico 24/7.',
  },
]

export const BUSINESS_SECTORS = [
  { name: 'Retail', description: 'Tiendas, centros comerciales y locales de venta.' },
  { name: 'Industria', description: 'Fábricas, plantas de producción y zonas industriales.' },
  { name: 'Oficinas', description: 'Torres empresariales, coworkings y sedes corporativas.' },
  { name: 'Almacenes', description: 'Depósitos, centros logísticos y bodegas.' },
  { name: 'Minas', description: 'Operaciones mineras, campamentos y zonas de extracción.' },
]

export const TIMELINE = [
  { year: '2008', event: 'Fundación de SSR Soluciones en Lima.' },
  { year: '2011', event: 'Primeros 100 clientes empresariales en Miraflores y San Isidro.' },
  { year: '2014', event: 'Apertura de central de monitoreo 24/7 propia.' },
  { year: '2017', event: 'Certificación oficial como instalador Hikvision y Dahua en Perú.' },
  { year: '2020', event: 'Implementación de soluciones de seguridad para sector salud durante pandemia.' },
  { year: '2023', event: '+500 clientes activos. Expansión a todo Lima Metropolitana y Callao.' },
]

export const TEAM = [
  { name: 'Ricardo Salas', role: 'Gerente General', years: '15 años de experiencia' },
  { name: 'Fiorella Torres', role: 'Jefa de Operaciones', years: '10 años de experiencia' },
  { name: 'Marco Huanca', role: 'Técnico Senior', years: '12 años de experiencia' },
]

export const VALUES = [
  { title: 'Confianza', description: 'Cumplimos lo que prometemos, siempre.' },
  { title: 'Profesionalismo', description: 'Técnicos certificados con equipamiento de primer nivel.' },
  { title: 'Respuesta rápida', description: 'Tiempo de respuesta menor a 24 horas.' },
  { title: 'Transparencia', description: 'Presupuestos claros sin costos ocultos.' },
]
