# 🚀 SSR Soluciones Tecnológicas — Landing Page Web & Plataforma de Servicios

![SSR Soluciones Tecnológicas](https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Status](https://img.shields.io/badge/Status-Producción-success?style=for-the-badge)

Repositorio oficial del frontend corporativo y landing page comercial de **SSR Soluciones Tecnológicas** (Lima Metropolitana y Callao, Perú). La aplicación ofrece una experiencia web de alta velocidad, optimizada para SEO y diseñada para presentar catálogos de servicios de seguridad electrónica, redes de datos, mantenimiento informático y ciberseguridad corporativa.

---

## 📌 Tabla de Contenidos

- [📋 Características Principales](#-características-principales)
- [🛠️ Tecnologías y Arquitectura](#️-tecnologías-y-arquitectura)
- [🏬 Oferta de Servicios y Módulos](#-oferta-de-servicios-y-módulos)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [⚡ Requisitos Previos e Instalación](#-requisitos-previos-e-instalación)
- [⚙️ Scripts de Ejecución](#️-scripts-de-ejecución)
- [🔍 Optimización SEO y Rendimiento](#-optimización-seo-y-rendimiento)
- [📤 Flujo de Trabajo en Git y GitHub](#-flujo-de-trabajo-en-git-y-github)
- [📞 Contacto y Soporte](#-contacto-y-soporte)

---

## 📋 Características Principales

- **Arquitectura SSR / SSG Modernizada**: Desarrollada con Next.js (App Router) para maximizar la velocidad de carga de primera pintura y rendimiento móvil.
- **Diseño 100% Responsivo y Multi-Sección**: Diseñada para usuarios residenciales (Hogares) y empresariales (Corporaciones, Retail, Almacenes).
- **Integración Directa de Canales de Ventas**: Enlaces de llamada y acceso directo a atención de soporte e instalación vía WhatsApp Business (+51 927 199 798).
- **Optimización de Recursos Multimedia**: Configurada con carga de imágenes optimizada y gestión eficiente de recursos estáticos.
- **Seguridad y Tipado Estricto**: Todo el código de cliente y componentes está tipado con TypeScript e interfaces modulares.

---

## 🛠️ Tecnologías y Arquitectura

| Tecnología | Descripción / Rol |
| :--- | :--- |
| **Next.js 14.2.5** | Framework de React para Renderizado del Lado del Servidor (SSR) y Generación de Sitios Estáticos (SSG). |
| **React 18** | Biblioteca base para la construcción de componentes web declarativos. |
| **TypeScript 5** | Lenguaje primario para garantizar tipado estático, solidez e interfaces claras. |
| **CSS Modules & Global CSS** | Sistema de estilos personalizados sin dependencias pesadas para asegurar bajo peso de transferencia CSS. |
| **Cross-Env** | Gestión de variables de entorno multiplataforma (Windows / Linux / macOS). |

---

## 🏬 Oferta de Servicios y Módulos

La plataforma presenta las siguientes líneas de negocio y soluciones técnicas:

1. **📷 Cámaras de Seguridad & CCTV**: Instalación de cámaras IP, 4K, visión nocturna, analítica por IA (Hikvision, Dahua, Axis).
2. **🌐 Redes e Infraestructura**: Cableado estructurado, redes inalámbricas Wi-Fi corporativas, routers, switches, VLANs y fibra óptica.
3. **🖥️ Servidores y Almacenamiento**: Montaje de Windows Server/Linux, entornos virtualizados (Hyper-V, VMware) y almacenamiento NAS con backup.
4. **🔧 Mantenimiento de Equipos**: Servicio preventivo y correctivo de laptops, PCs de escritorio y estaciones de trabajo.
5. **🛡️ Hacking Ético & Ciberseguridad**: Pruebas de penetración (Pentesting), auditorías de seguridad y remediación de vulnerabilidades.
6. **📊 Auditoría de Red**: Diagnóstico de rendimiento, cuellos de botella y vulnerabilidades con herramientas como Wireshark, Nmap y Nessus.

---

## 📁 Estructura del Proyecto

```text
miguelpag/
├── .gitignore                     # Configuración de exclusiones de versiones para Git
├── README.md                      # Documentación completa del proyecto
├── back/                          # Módulo para servicios de backend y APIs futuras
└── ssr-soluciones/                # Aplicación principal en Next.js
    ├── public/                    # Archivos estáticos, imágenes, íconos y SVG
    ├── src/
    │   ├── app/                   # App Router de Next.js (Rutas y vistas)
    │   │   ├── contacto/          # Página de formulario e información de contacto
    │   │   ├── empresas/          # Paquetes y soluciones B2B corporativas
    │   │   ├── hogares/           # Paquetes y planes residenciales
    │   │   ├── nosotros/          # Historia, equipo, valores y trayectoria
    │   │   ├── servicios/         # Catálogo detallado de servicios técnicos
    │   │   ├── globals.css        # Estilos globales y variables de diseño
    │   │   ├── layout.tsx         # Layout general con cabecera y pie de página
    │   │   ├── page.tsx           # Página principal / Landing Page Home
    │   │   └── sitemap.ts         # Generador dinámico de mapa del sitio XML
    │   └── lib/
    │       └── constants.ts       # Datos estáticos, menú, testimonios y servicios
    ├── next.config.mjs            # Configuración principal del compilador Next.js
    ├── package.json               # Dependencias de npm y scripts de desarrollo
    └── tsconfig.json              # Configuración de compilación de TypeScript
```

---

## ⚡ Requisitos Previos e Instalación

### Requisitos Técnicos

- **Node.js**: Versión `18.x` o superior (`v20.x` recomendada).
- **npm**: Versión `9.x` o superior.

### Pasos de Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/moment27Q/miguelpag.git
   cd miguelpag
   ```

2. **Entrar al directorio de la landing page:**

   ```bash
   cd ssr-soluciones
   ```

3. **Instalar dependencias:**

   ```bash
   npm install
   ```

---

## ⚙️ Scripts de Ejecución

Dentro de la carpeta `ssr-soluciones`, dispones de los siguientes comandos:

```bash
# Iniciar el entorno de desarrollo local (con asignación ampliada de memoria)
npm run dev

# Compilar la aplicación para entornos de producción
npm run build

# Iniciar el servidor con el build de producción previamente generado
npm run start

# Analizar la calidad del código mediante ESLint
npm run lint
```

---

## 🔍 Optimización SEO y Rendimiento

El proyecto cuenta con las siguientes buenas prácticas de SEO integradas:

- **Estructura Semántica**: Uso correcto de etiquetas HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **Sitemap Dinámico**: Generación automatizada de `sitemap.xml` para fácil indexación en Google Search Console.
- **Configuración de Memoria**: Configuración optimizada en `package.json` (`cross-env NODE_OPTIONS=--max-old-space-size=4096`) para evitar desbordamiento de memoria durante la compilación.

---

## 📤 Flujo de Trabajo en Git y GitHub

El control de versiones se gestiona a través de la rama `main` en GitHub:

- **Repositorio oficial**: [https://github.com/moment27Q/miguelpag](https://github.com/moment27Q/miguelpag)
- **Comandos estándar de despliegue**:

  ```bash
  git add .
  git commit -m "feat/docs: actualización de características y documentación"
  git push origin main
  ```

---

## 📞 Contacto y Soporte

- **Empresa**: SSR Soluciones Tecnológicas
- **Teléfono / WhatsApp**: [+51 927 199 798](https://wa.me/51927199798)
- **Correo Electrónico**: soporte@ssrsoluciones.pe
- **Cobertura**: Lima Metropolitana y Callao, Perú
