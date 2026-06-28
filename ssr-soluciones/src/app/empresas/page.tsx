import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero/Hero'
import { BUSINESS_SECTORS } from '@/lib/constants'
import styles from './empresas.module.css'

export const metadata: Metadata = {
  title: 'Seguridad Empresarial y CCTV para Empresas en Lima | SSR Soluciones',
  description:
    'Sistemas CCTV empresarial, control de acceso y monitoreo centralizado para empresas en Lima. Soluciones escalables, técnicos certificados, soporte 24/7. Cotiza gratis.',
  keywords: [
    'seguridad empresarial Lima',
    'CCTV empresarial Lima',
    'cámaras para empresas Lima',
    'videovigilancia corporativa Lima',
    'control de acceso empresas Lima',
    'monitoreo empresarial 24 horas Lima',
    'sistema seguridad oficina Lima',
    'cámaras seguridad almacén Lima',
    'seguridad electrónica empresas Lima Perú',
    'instalación CCTV empresa Lima',
  ],
  alternates: { canonical: 'https://www.ssrsoluciones.pe/empresas' },
  openGraph: {
    title: 'Seguridad Empresarial y CCTV para Empresas en Lima | SSR Soluciones',
    description: 'CCTV, control de acceso y monitoreo 24/7 para empresas en Lima. Soluciones escalables. Cotiza gratis.',
    url: 'https://www.ssrsoluciones.pe/empresas',
  },
}

const B2B_SERVICES = [
  {
    title: 'Cámaras de Seguridad',
    description:
      'Sistemas CCTV e IP de alta definición para empresas. Grabación centralizada, acceso remoto multi-usuario y análisis de video inteligente.',
    detail: 'Hasta 256 cámaras',
  },
  {
    title: 'Redes e Infraestructura',
    description:
      'Diseño e instalación de redes corporativas: cableado estructurado, switches administrables, Wi-Fi empresarial y VLANs segmentadas.',
    detail: 'Redes de alta disponibilidad',
  },
  {
    title: 'Servidores y Almacenamiento',
    description:
      'Implementación de servidores físicos y virtuales, NAS, backup centralizado y administración remota para operación continua.',
    detail: 'Windows Server / Linux',
  },
  {
    title: 'Auditorías de Red y Pentesting',
    description:
      'Evaluación de vulnerabilidades, pruebas de penetración y auditorías de seguridad. Informe detallado con plan de remediación.',
    detail: 'Hacking ético certificado',
  },
  {
    title: 'Mantenimiento de Equipos',
    description:
      'Mantenimiento preventivo y correctivo de computadoras, laptops y periféricos. Soporte técnico presencial en tu empresa.',
    detail: 'Contrato de soporte',
  },
  {
    title: 'Soporte Técnico TI',
    description:
      'Gestión integral de tu infraestructura tecnológica. Atención de incidencias, actualizaciones, parches de seguridad y soporte a usuarios.',
    detail: 'SLA documentado',
  },
]

export default function EmpresasPage() {
  return (
    <>
      <Hero
        headline="SEGURIDAD CORPORATIVA SIN CONCESIONES."
        subheadline="Protegemos tus operaciones con sistemas CCTV empresarial, control de acceso biométrico y monitoreo centralizado 24/7. Soluciones escalables para cualquier industria."
        ctaPrimary={{ label: 'Solicitar propuesta', href: '/contacto' }}
        ctaSecondary={{ label: 'Ver servicios B2B', href: '#servicios-b2b' }}
        bgImage="/empresas-bg.jpeg"
      />

      {/* B2B Services */}
      <section id="servicios-b2b" className={`section ${styles.b2bServices}`}>
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Servicios corporativos</h2>
          <p className="section-subtitle">Soluciones diseñadas para las exigencias del entorno empresarial.</p>
          <div className={styles.serviceGrid}>
            {B2B_SERVICES.map((s) => (
              <div key={s.title} className={styles.serviceCard}>
                <div className={styles.cardTop}>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <span className={styles.detail}>{s.detail}</span>
                </div>
                <p className={styles.serviceDesc}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className={`section ${styles.sectors}`}>
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Sectores que atendemos</h2>
          <p className="section-subtitle">Experiencia en las principales industrias de Lima y Callao.</p>
          <div className={styles.sectorGrid}>
            {BUSINESS_SECTORS.map((sector) => (
              <div key={sector.name} className={styles.sectorCard}>
                <h3 className={styles.sectorName}>{sector.name}</h3>
                <p className={styles.sectorDesc}>{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SSR for Business */}
      <section className={`section ${styles.whyBusiness}`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div>
              <div className="divider" />
              <h2 className="section-title">La confianza de más de 200 empresas</h2>
              <p className="section-subtitle">
                Desde pymes hasta corporaciones, SSR Soluciones es el socio de seguridad de confianza en Lima.
              </p>
              <ul className={styles.bulletList}>
                {[
                  'Proyectos llave en mano: diseño, instalación y operación',
                  'Técnicos certificados con experiencia en entornos industriales',
                  'Integración con sistemas existentes (ERP, Control de Personas)',
                  'Cobertura en toda Lima Metropolitana y Callao',
                  'Contratos de servicio con SLA documentado',
                  'Facturación electrónica y cumplimiento tributario',
                ].map((item) => (
                  <li key={item} className={styles.bullet}>
                    <span className={styles.bulletDot} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.statsBox}>
              {[
                { value: '200+', label: 'Empresas clientes' },
                { value: '5,000+', label: 'Cámaras instaladas' },
                { value: '15', label: 'Años de experiencia' },
                { value: '24/7', label: 'Soporte técnico' },
              ].map((s) => (
                <div key={s.label} className={styles.statItem}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaTitle}>¿Necesitas una propuesta técnica?</h2>
              <p className={styles.ctaSub}>Te visitamos, evaluamos y entregamos un presupuesto detallado sin costo.</p>
            </div>
            <Link href="/contacto" className="btn btn-primary">
              Solicitar propuesta técnica
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
