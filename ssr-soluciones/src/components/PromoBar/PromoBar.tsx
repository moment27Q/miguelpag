import Link from 'next/link'
import styles from './PromoBar.module.css'

export default function PromoBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>

        <Link href="/contacto" className={styles.btn}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
          Solicitar visita
        </Link>

        <div className={styles.textGroup}>
          <span className={styles.textSide}>la primera visita técnica</span>
          <span className={styles.textMain}>GRATUITA</span>
          <span className={styles.textSide}>para tu hogar o empresa</span>
        </div>

        <div className={styles.badge}>
          <span className={styles.badgeValue}>+15</span>
          <span className={styles.badgeLabel}>años de<br />experiencia</span>
        </div>

      </div>
    </div>
  )
}
