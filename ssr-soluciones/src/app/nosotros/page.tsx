import type { Metadata } from 'next'
import { TIMELINE, TEAM, VALUES } from '@/lib/constants'
import styles from './nosotros.module.css'

export const metadata: Metadata = {
  title: '+15 Años en Seguridad Electrónica en Perú',
  description:
    'Conoce SSR Soluciones: nuestra historia, misión, visión, equipo y valores. Empresa peruana de seguridad con más de 15 años protegiendo Lima.',
}

function PersonPlaceholder({ initial }: { initial: string }) {
  return (
    <svg viewBox="0 0 100 100" width="80" height="80" aria-hidden="true">
      <circle cx="50" cy="50" r="50" fill="#1a1a1a" />
      <circle cx="50" cy="38" r="18" fill="#333" />
      <ellipse cx="50" cy="95" rx="30" ry="22" fill="#333" />
      <text x="50" y="44" textAnchor="middle" dominantBaseline="middle" fill="#F5C200" fontSize="20" fontWeight="700" fontFamily="sans-serif">
        {initial}
      </text>
    </svg>
  )
}

export default function NosotrosPage() {
  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className="divider" />
          <h1 className={styles.pageTitle}>Sobre SSR Soluciones</h1>
          <p className={styles.pageSubtitle}>
            Desde 2008 protegemos hogares y empresas en Lima con tecnología de vigilancia de primer nivel y el compromiso de un equipo que sabe lo que hace.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className={`section ${styles.mvSection}`}>
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <span className={styles.mvLabel}>Misión</span>
              <p className={styles.mvText}>
                Proveer soluciones de seguridad electrónica accesibles, confiables y de alta tecnología que protejan la vida y el patrimonio de nuestros clientes en Lima y Callao, con un servicio profesional y personalizado.
              </p>
            </div>
            <div className={styles.mvCard}>
              <span className={styles.mvLabel}>Visión</span>
              <p className={styles.mvText}>
                Ser la empresa de seguridad electrónica de referencia en el Perú, reconocida por la calidad de nuestras instalaciones, la rapidez de nuestra respuesta y la satisfacción total de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Nuestra historia</h2>
          <p className="section-subtitle">15 años protegiendo Lima.</p>
          <div className={styles.timeline}>
            {TIMELINE.map((item, idx) => (
              <div key={item.year} className={`${styles.timelineItem} ${idx % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <p>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Nuestro equipo</h2>
          <p className="section-subtitle">Profesionales certificados con años de experiencia en el sector.</p>
          <div className={styles.teamGrid}>
            {TEAM.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamAvatar}>
                  <PersonPlaceholder initial={member.name.charAt(0)} />
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <span className={styles.teamRole}>{member.role}</span>
                <span className={styles.teamYears}>{member.years}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Nuestros valores</h2>
          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className={`section ${styles.certsSection}`}>
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Certificaciones</h2>
          <div className={styles.certsList}>
            {[
              'Instalador Autorizado Hikvision',
              'Instalador Autorizado Dahua',
              'Certificación Axis Partner',
              'RUC activo — Persona Jurídica',
              'Miembro APESI Perú',
            ].map((cert) => (
              <div key={cert} className={styles.certItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
