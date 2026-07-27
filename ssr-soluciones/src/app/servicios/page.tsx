import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SERVICES, BRANDS } from '@/lib/constants'
import styles from './servicios.module.css'
import servicio1 from '@/imagenes/servicio1.jpeg'
import servicio2 from '@/imagenes/redesyinfraestructura.png'
import servicio3 from '@/imagenes/servidores.png'
import servicio4 from '@/imagenes/mantenimiento.png'
import servicio5 from '@/imagenes/hacking.png'
import servicio6 from '@/imagenes/servicio6.jpeg'
import servicio7 from '@/imagenes/servicio7.jpeg'

const SERVICE_IMAGES = [servicio1, servicio2, servicio3, servicio4, servicio5, servicio6, servicio7]

export const metadata: Metadata = {
  title: 'Servicios de Videovigilancia e Instalación CCTV en Lima',
  description:
    'Instalación de cámaras IP Full HD/4K, CCTV, alarmas, monitoreo 24/7 y control de acceso en Lima y Callao. Técnicos certificados Hikvision y Dahua. Cotiza gratis.',
  keywords: [
    'instalación cámaras IP Lima',
    'instalación CCTV Lima',
    'cámaras Hikvision Lima',
    'cámaras Dahua Lima',
    'instalación alarmas Lima',
    'monitoreo 24 horas Lima',
    'control de acceso Lima',
    'mantenimiento cámaras seguridad Lima',
    'cámaras 4K Lima',
    'cámaras Full HD Lima',
    'instalación videovigilancia Lima Callao',
  ],
  alternates: { canonical: 'https://www.ssrsoluciones.pe/servicios' },
  openGraph: {
    title: 'Servicios de Videovigilancia e Instalación CCTV en Lima | SSR Soluciones',
    description: 'Cámaras IP, CCTV, alarmas y monitoreo 24/7 en Lima. Técnicos certificados. Cotiza gratis.',
    url: 'https://www.ssrsoluciones.pe/servicios',
  },
}

const ICONS: Record<string, React.ReactNode> = {
  camera: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  ),
  network: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <rect x="2" y="18" width="6" height="4" rx="1" />
      <rect x="16" y="18" width="6" height="4" rx="1" />
      <path d="M12 6v4M5 18v-4h14v4M12 10h-7v4M12 10h7v4" />
    </svg>
  ),
  server: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  computer: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  shield: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  audit: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  ),
}

export default function ServiciosPage() {
  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className="divider" />
          <h1 className={styles.pageTitle}>Nuestros Servicios</h1>
          <p className={styles.pageSubtitle}>
            Soluciones de seguridad electrónica completas para hogares y empresas en Lima y Callao. +15 años instalando sistemas que funcionan.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.servicesList}>
            {SERVICES.map((service, idx) => (
              <div key={service.id} className={`${styles.serviceRow} ${idx % 2 === 1 ? styles.reversed : ''}`}>
                <div className={`${styles.serviceIcon} ${styles.serviceIconImg}`}>
                  <div className={styles.serviceImgWrap}>
                    <Image
                      src={SERVICE_IMAGES[idx]}
                      alt={service.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="280px"
                    />
                  </div>
                </div>
                <div className={styles.serviceContent}>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                  <p className={styles.serviceDesc}>
                    {service.longDescription ?? service.description}
                  </p>
                  <Link href="/contacto" className="btn btn-outline" style={{ marginTop: '24px' }}>
                    Cotizar este servicio →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className={`section ${styles.brandsSection}`}>
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Marcas con las que trabajamos</h2>
          <p className="section-subtitle">
            Instalamos y damos soporte a los líderes mundiales en videovigilancia.
          </p>
        </div>
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack}>
            {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
              <div key={i} className={styles.brandCard}>
                <span className={styles.brandAccent} />
                <span className={styles.brandName}>{brand}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <p className={styles.brandNote}>
            Somos distribuidores e instaladores autorizados. Todos los equipos cuentan con garantía de fábrica.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>¿No sabes cuál servicio necesitas?</h2>
            <p className={styles.ctaSub}>Te hacemos una visita técnica gratuita y te recomendamos la solución ideal.</p>
            <Link href="/contacto" className="btn btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>
              Solicitar visita gratuita
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
