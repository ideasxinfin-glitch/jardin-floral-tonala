# Jardín Floral Tonalá — Landing Premium

Landing page de lujo con funnel de conversión a WhatsApp (+52 33 1726 4992).
Next.js 14 (App Router) + Framer Motion, con **export estático**: el resultado
final es HTML/CSS/JS puro que funciona en cualquier hosting (cPanel incluido).

## Comandos

```bash
npm install     # primera vez
npm run dev     # desarrollo en http://localhost:3000
npm run build   # genera la carpeta out/ lista para subir al hosting
```

Para publicar en hosting compartido (cPanel): sube **todo el contenido de
`out/`** a `public_html/`.

## Reemplazar fotos por las reales del negocio

Todas las imágenes se controlan desde **`lib/photos.js`**. Hoy usan fotografía
editorial de Unsplash como placeholder premium. Para usar fotos propias
(Instagram/Facebook del negocio):

1. Guarda las fotos en `public/img/` (ej. `public/img/hero.jpg`).
2. En `lib/photos.js` cambia la URL por la ruta local: `hero: '/img/hero.jpg'`.
3. `npm run build` de nuevo.

Si una imagen falla, el sitio muestra automáticamente un fondo botánico de la
marca (nunca se ve un ícono roto).

## Estructura

- `app/layout.jsx` — SEO, Open Graph, Schema.org LocalBusiness, fuentes.
- `app/page.jsx` — orden de las secciones.
- `components/` — una sección por archivo (Hero, Colecciones, Bodas, Empresas,
  Mayoreo, Comparativa, Galería, Testimonios, Envíos, FAQ, CTA final, Footer).
- `lib/site.js` — número de WhatsApp, redes y dirección (edítalo aquí una vez
  y cambia en todo el sitio).
- `lib/faqs.js` — preguntas frecuentes (alimenta el acordeón y el schema SEO).
