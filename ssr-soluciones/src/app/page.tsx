import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HomeHero from '@/components/HomeHero/HomeHero'
import PromoBar from '@/components/PromoBar/PromoBar'
import StatsBar from '@/components/StatsBar/StatsBar'
import ServicesGrid from '@/components/ServicesGrid/ServicesGrid'
import { TESTIMONIALS, PROCESS_STEPS } from '@/lib/constants'
import styles from './home.module.css'

export const metadata: Metadata = {
  title: 'SSR Soluciones | Cámaras de Seguridad en Lima, Perú',
  description:
    'Empresa de seguridad con +15 años en Lima. Instalación de cámaras IP, CCTV, alarmas y monitoreo 24/7 para hogares y empresas.',
}

export default function HomePage() {
  return (
    <>
      <PromoBar />

      <HomeHero />

      <StatsBar />

      {/* Bento Grid */}
      <section className={`section ${styles.bentoSection}`}>
        <div className="container">
          <h2 className={`section-title ${styles.bentoTitle}`}>
            +15 años siendo PRO en Seguridad,<br />
            <span className={styles.bentoTitleAccent}>tu aliado en Lima</span>
          </h2>
          <div className={styles.bentoGrid}>
            {/* Card grande izquierda */}
            <div className={`${styles.bentoCard} ${styles.bentoLarge}`}>
              <Image src="/bento-main.jpeg" alt="15 años protegiéndote" fill className={styles.bentoImg} sizes="(max-width:768px) 100vw, 40vw" />
              <div className={styles.bentoDark} />
              <div className={styles.bentoText}>
                <p className={styles.bentoCopy}><strong>+15 años</strong> protegiéndote con la mejor tecnología</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className={`${styles.bentoCard} ${styles.bentoSmall}`}>
              <Image src="/servicio3.jpeg" alt="Monitoreo 24/7" fill className={styles.bentoImg} sizes="30vw" />
              <div className={styles.bentoDark} />
              <div className={styles.bentoText}>
                <p className={styles.bentoCopy}><strong className={styles.bentoAccent}>Te cuidamos</strong> las 24 horas del día</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className={`${styles.bentoCard} ${styles.bentoSmall}`}>
              <Image src="/servicio1.jpeg" alt="Instalación profesional" fill className={styles.bentoImg} sizes="30vw" />
              <div className={styles.bentoDark} />
              <div className={styles.bentoText}>
                <p className={styles.bentoCopy}><strong className={styles.bentoAccent}>Instalación</strong> profesional el mismo día</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className={`${styles.bentoCard} ${styles.bentoSmall}`}>
              <Image src="/servicio5.jpeg" alt="Garantía extendida" fill className={styles.bentoImg} sizes="30vw" />
              <div className={styles.bentoDark} />
              <div className={styles.bentoText}>
                <p className={styles.bentoCopy}><strong className={styles.bentoAccent}>Garantía extendida</strong> en todos los equipos</p>
              </div>
            </div>
            {/* Card 5 */}
            <div className={`${styles.bentoCard} ${styles.bentoSmall}`}>
              <Image src="/servicio6.jpeg" alt="Tecnología Hikvision y Dahua" fill className={styles.bentoImg} sizes="30vw" />
              <div className={styles.bentoDark} />
              <div className={styles.bentoText}>
                <p className={styles.bentoCopy}><strong className={styles.bentoAccent}>Tecnología</strong> Hikvision y Dahua certificada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />

      {/* WhySSR */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyImage}>
              <Image
                src="/inicio.jpeg"
                alt="SSR Soluciones - 15 años protegiendo Lima"
                fill
                className={styles.whyImagePhoto}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className={styles.whyImageOverlay} />
              <div className={styles.whyImageInner}>
                <span className={styles.whyImageLabel}>+15 años</span>
                <span className={styles.whyImageSub}>protegiendo Lima</span>
              </div>
            </div>
            <div className={styles.whyContent}>
              <div className="divider" />
              <h2 className="section-title">¿Por qué SSR Soluciones?</h2>
              <p className="section-subtitle">
                Somos la empresa de seguridad electrónica de confianza en Lima Metropolitana.
              </p>
              <ul className={styles.advantageList}>
                {[
                  'Técnicos certificados por Hikvision y Dahua',
                  'Instalación en menos de 24 horas',
                  'Garantía extendida en todos los equipos',
                  'Central de monitoreo propia 24/7',
                  'Soporte técnico rápido y personalizado',
                  'Presupuesto sin costo ni compromiso',
                ].map((item) => (
                  <li key={item} className={styles.advantage}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/nosotros" className="btn btn-outline" style={{ marginTop: '8px' }}>
                Conoce más sobre nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Cómo trabajamos</h2>
          <p className="section-subtitle">Un proceso simple y transparente de 4 pasos.</p>
          <div className={styles.processGrid}>
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className={styles.step}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <p className="section-subtitle">Más de 500 clientes confían en SSR Soluciones en Lima y Callao.</p>
          <div className={styles.testimonialGrid}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className={styles.testimonialCard}>
                <div className={styles.stars}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorAvatar}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong className={styles.authorName}>{t.name}</strong>
                    <span className={styles.authorLocation}>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HomeCTA */}
      <section className={styles.homeCta}>
        <div className="container">
          <div className={styles.homeCtaInner}>
            <div>
              <h2 className={styles.homeCtaTitle}>¿Listo para proteger lo que más importa?</h2>
              <p className={styles.homeCtaSub}>Cotiza gratis. Sin compromiso. Respuesta en menos de 24 horas.</p>
            </div>
            <Link href="/contacto" className="btn btn-primary">
              Cotiza gratis ahora
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
