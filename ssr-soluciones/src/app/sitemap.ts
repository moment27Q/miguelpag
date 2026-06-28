import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.ssrsoluciones.pe',
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.ssrsoluciones.pe/hogares',
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.ssrsoluciones.pe/empresas',
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.ssrsoluciones.pe/servicios',
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.ssrsoluciones.pe/nosotros',
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://www.ssrsoluciones.pe/contacto',
      lastModified: new Date('2026-06-28'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}
