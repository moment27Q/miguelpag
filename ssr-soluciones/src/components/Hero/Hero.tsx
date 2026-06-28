import Link from 'next/link'
import styles from './Hero.module.css'

interface HeroProps {
  headline: string
  subheadline: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  showSignature?: boolean
  showVideo?: boolean
  videoSrc?: string
  bgImage?: string
}

export default function Hero({
  headline,
  subheadline,
  ctaPrimary = { label: 'Cotiza gratis', href: '/contacto' },
  ctaSecondary = { label: 'Ver servicios', href: '/servicios' },
  showSignature = false,
  showVideo = false,
  videoSrc = '/hero-bg.mp4',
  bgImage,
}: HeroProps) {
  return (
    <section
      className={styles.hero}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      {showVideo ? (
        <video
          className={styles.videoBg}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      ) : (
        <div className={styles.bg} aria-hidden="true" />
      )}
      <div className={styles.overlay} aria-hidden="true" />
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.headline}>{headline}</h1>
          <p className={styles.subheadline}>{subheadline}</p>
          <div className={styles.ctas}>
            <Link href={ctaPrimary.href} className="btn btn-primary">
              {ctaPrimary.label}
            </Link>
            <Link href={ctaSecondary.href} className="btn btn-outline">
              {ctaSecondary.label}
            </Link>
          </div>
        </div>
      </div>
      {showSignature && <div className={styles.signature} aria-hidden="true" />}
    </section>
  )
}
