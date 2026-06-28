'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

interface FormState {
  name: string
  phone: string
  email: string
  serviceType: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  serviceType?: string
  message?: string
}

interface ContactFormProps {
  variant?: 'hogar' | 'empresa' | 'general'
}

const SERVICE_OPTIONS: Record<string, string[]> = {
  hogar: [
    'Cámaras IP para hogar',
    'Alarmas y sensores',
    'Monitoreo residencial',
    'Paquete Básico',
    'Paquete Estándar',
    'Paquete Premium',
  ],
  empresa: [
    'CCTV empresarial',
    'Control de acceso',
    'Monitoreo centralizado',
    'Mantenimiento preventivo',
    'Consultoría de seguridad',
  ],
  general: [
    'Cámaras IP',
    'CCTV analógico',
    'Alarmas y sensores',
    'Monitoreo 24/7',
    'Control de acceso',
    'Mantenimiento',
  ],
}

export default function ContactForm({ variant = 'general' }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = 'El nombre es requerido'
    if (!form.phone.trim()) newErrors.phone = 'El teléfono es requerido'
    else if (!/^[\d\s+\-()]{7,15}$/.test(form.phone)) newErrors.phone = 'Teléfono inválido'
    if (!form.email.trim()) newErrors.email = 'El email es requerido'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Email inválido'
    if (!form.serviceType) newErrors.serviceType = 'Selecciona un servicio'
    if (!form.message.trim()) newErrors.message = 'El mensaje es requerido'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((res) => setTimeout(res, 800))
    console.log('Form submitted:', { variant, ...form })
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h3>¡Mensaje enviado!</h3>
        <p>Nos pondremos en contacto contigo en menos de 24 horas.</p>
        <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  const options = SERVICE_OPTIONS[variant]

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>Nombre completo</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            placeholder="Tu nombre"
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>Teléfono / Celular</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            placeholder="+51 9XX XXX XXX"
          />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>Correo electrónico</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          placeholder="tu@correo.com"
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="serviceType" className={styles.label}>Servicio de interés</label>
        <select
          id="serviceType"
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          className={`${styles.select} ${errors.serviceType ? styles.inputError : ''}`}
        >
          <option value="">Selecciona un servicio</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.serviceType && <span className={styles.error}>{errors.serviceType}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>Mensaje</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          placeholder="Cuéntanos sobre tu proyecto o consulta..."
        />
        {errors.message && <span className={styles.error}>{errors.message}</span>}
      </div>

      <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar solicitud'}
      </button>
    </form>
  )
}
