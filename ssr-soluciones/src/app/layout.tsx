import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-barlow',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ssrsoluciones.pe'),
  title: {
    default: 'SSR Soluciones | Cámaras de Seguridad en Lima, Perú',
    template: '%s | SSR Soluciones',
  },
  description:
    'SSR Soluciones: +15 años instalando cámaras IP, CCTV y alarmas en Lima. Monitoreo 24/7, técnicos certificados Hikvision y Dahua. Cotiza gratis hoy.',
  keywords: [
    // Alta intención comercial local
    'cámaras de seguridad Lima',
    'instalación cámaras seguridad Lima',
    'empresa seguridad Lima',
    'CCTV Lima Perú',
    'cámaras IP Lima',
    'videovigilancia Lima',
    'alarmas de seguridad Lima',
    // Long-tail de alto potencial
    'instalación cámaras seguridad hogares Lima',
    'cámaras de seguridad para empresas Lima',
    'sistema videovigilancia Lima Perú',
    'monitoreo seguridad 24 horas Lima',
    'cámaras Hikvision Lima precio',
    'cámaras Dahua instalación Lima',
    'cámaras 4K Lima',
    'alarmas para hogares Lima',
    'instalación CCTV Lima Perú',
    // Por distritos (ranking rápido, baja competencia)
    'cámaras seguridad Miraflores',
    'cámaras seguridad San Isidro',
    'cámaras seguridad Surco',
    'cámaras seguridad La Molina',
    'cámaras seguridad San Borja',
    'cámaras seguridad San Miguel',
    'cámaras seguridad Jesús María',
    'cámaras seguridad Lince',
    'cámaras seguridad Callao',
    'cámaras seguridad Lima Norte',
    // Búsquedas de servicio
    'cotizar cámaras seguridad Lima',
    'cuanto cuesta instalar camaras seguridad Lima',
    'mejor empresa cámaras seguridad Lima',
    'técnico cámaras seguridad Lima',
    'mantenimiento cámaras seguridad Lima',
  ],
  openGraph: {
    locale: 'es_PE',
    type: 'website',
    siteName: 'SSR Soluciones',
    title: 'SSR Soluciones | Cámaras de Seguridad en Lima, Perú',
    description:
      'Instalamos cámaras IP, CCTV y alarmas en Lima. +15 años de experiencia, más de 500 clientes. Cotiza gratis.',
    url: 'https://www.ssrsoluciones.pe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSR Soluciones | Cámaras de Seguridad en Lima',
    description: 'Instalamos cámaras IP, CCTV y alarmas en Lima. +15 años, +500 clientes. Cotiza gratis.',
  },
  alternates: {
    canonical: 'https://www.ssrsoluciones.pe',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'SecurityBusiness'],
  name: 'SSR Soluciones',
  alternateName: 'SSR Soluciones - Cámaras de Seguridad Lima',
  description:
    'Empresa de seguridad electrónica en Lima, Perú con +15 años de experiencia. Instalación de cámaras IP, CCTV, alarmas y monitoreo 24/7 para hogares y empresas.',
  url: 'https://www.ssrsoluciones.pe',
  telephone: '+51-927199798',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lima Metropolitana',
    addressLocality: 'Lima',
    addressRegion: 'Lima',
    addressCountry: 'PE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -12.0464,
    longitude: -77.0428,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '19:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Lima' },
    { '@type': 'City', name: 'Callao' },
    { '@type': 'AdministrativeArea', name: 'Lima Metropolitana' },
  ],
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Seguridad Electrónica',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Instalación de Cámaras IP' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Instalación CCTV' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Alarmas de Seguridad' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monitoreo Residencial 24/7' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Videovigilancia Empresarial' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mantenimiento de Cámaras' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
  },
  sameAs: [
    'https://www.instagram.com/ssr.soluciones/',
    'https://www.tiktok.com/@ssr.soluciones',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
