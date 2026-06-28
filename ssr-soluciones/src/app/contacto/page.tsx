import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm/ContactForm'
import { CONTACT_INFO } from '@/lib/constants'
import styles from './contacto.module.css'

export const metadata: Metadata = {
  title: 'Cotiza Gratis tu Sistema de Seguridad en Lima | Respuesta en 24h',
  description:
    'Solicita tu cotización gratis de cámaras, CCTV o alarmas en Lima. SSR Soluciones te responde en menos de 24 horas. Llámanos al +51 927 199 798.',
  keywords: [
    'cotizar cámaras seguridad Lima',
    'presupuesto cámaras seguridad Lima',
    'contacto empresa seguridad Lima',
    'cotización CCTV Lima',
    'instalación cámaras Lima precio',
    'cuanto cuesta instalar camaras seguridad Lima',
  ],
  alternates: { canonical: 'https://www.ssrsoluciones.pe/contacto' },
  openGraph: {
    title: 'Cotiza Gratis tu Sistema de Seguridad en Lima | SSR Soluciones',
    description: 'Cotiza cámaras, CCTV o alarmas en Lima. Respuesta en 24h. +51 927 199 798.',
    url: 'https://www.ssrsoluciones.pe/contacto',
  },
}

const CONTACT_ITEMS = [
  {
    label: 'Teléfono',
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.4 19.79 19.79 0 0 1 1.61 4.8 2 2 0 0 1 3.6 2.61h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.7 17.4z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: 'Escríbenos ahora',
    href: `https://wa.me/${CONTACT_INFO.whatsapp}?text=Hola%2C%20quiero%20cotizar%20un%20sistema%20de%20seguridad`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: 'Horario',
    value: CONTACT_INFO.hours,
    href: undefined,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

export default function ContactoPage() {
  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className="divider" />
          <h1 className={styles.pageTitle}>Cotiza tu sistema de seguridad</h1>
          <p className={styles.pageSubtitle}>
            Sin costo, sin compromiso. Un especialista se pondrá en contacto contigo en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          <div className={styles.mainGrid}>
            {/* Form */}
            <div className={styles.formBox}>
              <h2 className={styles.formTitle}>Envíanos tu consulta</h2>
              <ContactForm variant="general" />
            </div>

            {/* Contact Info */}
            <div className={styles.infoCol}>
              <div className={styles.contactCards}>
                {CONTACT_ITEMS.map((item) => (
                  <div key={item.label} className={styles.contactCard}>
                    <div className={styles.contactIcon}>{item.icon}</div>
                    <div>
                      <span className={styles.contactLabel}>{item.label}</span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className={styles.contactValue}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className={styles.contactValue}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapPin} aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <p className={styles.mapText}>Lima Metropolitana y Callao</p>
                <p className={styles.mapSubtext}>Atendemos en toda la ciudad</p>
              </div>

              {/* WhatsApp Direct */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hola%2C%20quiero%20cotizar%20un%20sistema%20de%20seguridad`}
                className={styles.waBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Chatear por WhatsApp ahora
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
