'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  heading?: string
  subheading?: string
}

export default function FAQ({
  items,
  heading = '¿Tienes dudas?',
  subheading = '¡Las resolvemos!',
}: FAQProps) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className="divider" />
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.subheading}>{subheading}</p>
            <p className={styles.hint}>
              Si no encuentras la respuesta que buscas, escríbenos por WhatsApp o llámanos.
            </p>
          </div>

          <div className={styles.right}>
            {items.map((item, idx) => (
              <div key={idx} className={`${styles.item} ${open === idx ? styles.itemOpen : ''}`}>
                <button
                  className={styles.question}
                  onClick={() => setOpen(open === idx ? null : idx)}
                  aria-expanded={open === idx}
                >
                  <span>{item.question}</span>
                  <svg
                    className={styles.icon}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
