import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero/Hero'
import ContactForm from '@/components/ContactForm/ContactForm'
import FAQ from '@/components/FAQ/FAQ'
import { HOME_PACKAGES } from '@/lib/constants'
import styles from './hogares.module.css'

const HOGARES_FAQ = [
  {
    question: '¿Cuánto tiempo tarda la instalación?',
    answer: 'En la mayoría de hogares instalamos el sistema completo en un solo día, entre 3 y 6 horas dependiendo de la cantidad de cámaras y el tamaño de la propiedad.',
  },
  {
    question: '¿Puedo ver las cámaras desde mi celular?',
    answer: 'Sí. Todos nuestros sistemas incluyen app móvil gratuita (Android e iOS) para ver las cámaras en tiempo real, revisar grabaciones y recibir alertas de movimiento desde cualquier lugar.',
  },
  {
    question: '¿Qué pasa si se va la luz?',
    answer: 'Las cámaras cuentan con visión nocturna infrarroja que funciona sin luz. Además podemos agregar un UPS (batería de respaldo) para que el sistema siga operando durante cortes de energía.',
  },
  {
    question: '¿Las cámaras graban las 24 horas?',
    answer: 'Sí. El DVR/NVR graba de forma continua. Puedes configurar grabación por movimiento para ahorrar espacio. Con 1TB de disco duro tienes entre 15 y 30 días de historial según la resolución.',
  },
  {
    question: '¿Qué garantía tienen los equipos?',
    answer: 'Todos los equipos tienen garantía de fábrica (1 a 3 años según el paquete) más nuestra garantía de instalación. Si algo falla, lo resolvemos sin costo adicional.',
  },
  {
    question: '¿Hacen mantenimiento después de la instalación?',
    answer: 'Sí, ofrecemos planes de mantenimiento preventivo para limpiar lentes, actualizar firmware y verificar que todo funcione correctamente. También atendemos por soporte remoto.',
  },
]

export const metadata: Metadata = {
  title: 'Cámaras de Seguridad para Hogares en Lima | Instalación el mismo día',
  description:
    'Instala cámaras IP, alarmas y monitoreo residencial 24/7 en tu hogar en Lima. SSR Soluciones: +15 años, técnicos certificados, garantía extendida. ¡Cotiza gratis!',
  keywords: [
    'cámaras de seguridad para hogares Lima',
    'instalación cámaras casa Lima',
    'alarmas para casas Lima',
    'monitoreo residencial Lima',
    'cámaras IP para hogar Lima',
    'sistema seguridad hogar Lima',
    'cámaras seguridad departamento Lima',
    'videoportero Lima',
    'cámaras con visión nocturna Lima',
    'alarmas residenciales Lima Perú',
  ],
  alternates: { canonical: 'https://www.ssrsoluciones.pe/hogares' },
  openGraph: {
    title: 'Cámaras de Seguridad para Hogares en Lima | SSR Soluciones',
    description: 'Protege tu hogar con cámaras IP, alarmas y monitoreo 24/7. Instalación profesional en Lima. Cotiza gratis.',
    url: 'https://www.ssrsoluciones.pe/hogares',
  },
}

export default function HogaresPage() {
  return (
    <>
      <Hero
        headline="PROTEGE TU HOGAR Y TU FAMILIA."
        subheadline="Cámaras IP, alarmas y monitoreo residencial instalados por expertos en Lima. Accede a tu sistema desde cualquier dispositivo, en cualquier momento."
        ctaPrimary={{ label: 'Cotiza tu paquete', href: '#cotizar' }}
        ctaSecondary={{ label: 'Ver paquetes', href: '#paquetes' }}
        showVideo
        videoSrc="/hogares-bg.mp4"
      />

      {/* Services for homes */}
      <section className={`section ${styles.homeServices}`}>
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Servicios para tu hogar</h2>
          <p className="section-subtitle">Todo lo que necesitas para proteger lo que más importa.</p>
          <div className={styles.serviceGrid}>
            {[
              {
                title: 'Cámaras IP Full HD / 4K',
                desc: 'Visión nocturna, detección de movimiento y acceso remoto en tiempo real desde tu celular.',
                image: '/servicio1.jpeg',
              },
              {
                title: 'Alarmas y Sensores',
                desc: 'Detectores de movimiento, contactos magnéticos en puertas y ventanas, sirena con aviso al celular.',
                image: '/servicio2.jpeg',
              },
              {
                title: 'Monitoreo Residencial',
                desc: 'Nuestra central monitorea tu hogar 24 horas. Ante cualquier alerta, coordinamos la respuesta.',
                image: '/servicio3.jpeg',
              },
              {
                title: 'Almacenamiento en Nube',
                desc: 'Grabación continua con backup en la nube y disco local. Tus videos siempre seguros.',
                image: '/servicio4.jpeg',
              },
            ].map((s) => (
              <div key={s.title} className={styles.serviceCard}>
                <div className={styles.serviceImageWrap}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className={styles.serviceImage}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className={styles.serviceCardBody}>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="paquetes" className={`section ${styles.packages}`}>
        <div className="container">
          <div className="divider" />
          <h2 className="section-title">Paquetes residenciales</h2>
          <p className="section-subtitle">
            Elige el plan que mejor se adapta a tu hogar. Todos incluyen instalación y garantía.
          </p>
          <div className={styles.packageGrid}>
            {HOME_PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`${styles.packageCard} ${pkg.highlighted ? styles.highlighted : ''}`}
              >
                {pkg.highlighted && (
                  <span className={styles.badge}>Más popular</span>
                )}
                <h3 className={styles.packageName}>{pkg.name}</h3>
                <p className={styles.packageDesc}>{pkg.description}</p>
                <ul className={styles.featureList}>
                  {pkg.features.map((f) => (
                    <li key={f} className={styles.feature}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contacto"
                  className={`btn ${pkg.highlighted ? 'btn-primary' : 'btn-outline'}`}
                  style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}
                >
                  Contactar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={HOGARES_FAQ} />

      {/* Contact Form */}
      <section id="cotizar" className={`section ${styles.formSection}`}>
        <div className="container">
          <div className={styles.formGrid}>
            <div>
              <div className="divider" />
              <h2 className="section-title">Cotiza tu sistema</h2>
              <p className="section-subtitle">
                Cuéntanos sobre tu hogar y te enviaremos un presupuesto personalizado sin costo.
              </p>
              <ul className={styles.formBenefits}>
                {['Respuesta en menos de 24 horas', 'Sin costo ni compromiso', 'Visita técnica gratuita'].map((b) => (
                  <li key={b} className={styles.benefit}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.formBox}>
              <ContactForm variant="hogar" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
