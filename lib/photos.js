// Fotografía real del negocio (public/gallery/) + OpenArt AI donde no hay foto real.
// Todas las imágenes están libres de logos, precios y letras.

export const PHOTOS = {
  // ── OpenArt GPT Image 2 — imágenes editoriales (sin texto) ──

  // Hero fallback — sala de estar de lujo con arreglo floral
  hero: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784084059637_3b3f069e.png',
  heroCard: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784084099817_eb25c818.png',

  // Sección "Por qué flores artificiales" — peonías durazno en copa dorada (foto real)
  whyLiving: '/gallery/peonias-durazno.webp',

  // ── Colecciones (fotos reales del negocio) ──
  colPrimavera: '/gallery/jardinera-rosa.webp',
  colRosas: '/gallery/magnolias-rosa.webp',
  colOtonal: '/gallery/otonal-calabaza.webp',
  colTropical: '/gallery/palmera.webp',

  // ── Bodas & eventos (fotos reales) ──
  wedding: '/gallery/boda-arco.webp',
  weddingDetail: '/gallery/boda-playa.webp',

  // ── Corporativo ──
  // Hotel — lobby de lujo (OpenArt, sin texto)
  hotel: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784084277615_28c6f9f2.png',
  // Restaurante/salón — montaje real de evento con rosas rojas
  restaurant: '/gallery/evento-rojo.webp',
  // Oficinas/comercios — instalación real de árboles y enredaderas
  office: '/gallery/interior-verde.webp',
  // Diseñadores — árbol de cerezo artificial en escalera (instalación real)
  interior: '/gallery/cerezo-escalera.webp',

  // Mayoreo — montaje real de kioscos florales para evento
  wholesale: '/gallery/evento-puestos.webp',

  // ── CTA final — decoración dorada dramática de evento (foto real) ──
  ctaBg: '/gallery/evento-amarillo.webp',
};

// ── Galería carrusel — fotos reales, dos filas en movimiento ──
export const GALLERY_ROW_A = [
  { src: '/gallery/cerezo-escalera.webp', alt: 'Árbol de cerezo artificial en escalera residencial' },
  { src: '/gallery/magnolia-borgona.webp', alt: 'Arreglo de magnolias borgoña en jarrón negro' },
  { src: '/gallery/boda-arco.webp', alt: 'Arco de boda con rosas naranjas y amarillas' },
  { src: '/gallery/agaves.webp', alt: 'Composición de agaves y suculentas artificiales' },
  { src: '/gallery/orquideas.webp', alt: 'Orquídeas phalaenopsis blancas en maceta negra' },
  { src: '/gallery/evento-rojo.webp', alt: 'Montaje de evento con guía floral de rosas rojas' },
  { src: '/gallery/protea-canasta.webp', alt: 'Centro de mesa con protea y eucalipto' },
  { src: '/gallery/evento-amarillo.webp', alt: 'Decoración de evento con cempasúchil y telas doradas' },
  { src: '/gallery/palmera.webp', alt: 'Palmera artificial en terraza con jardinera negra' },
];

export const GALLERY_ROW_B = [
  { src: '/gallery/peonias-durazno.webp', alt: 'Peonías durazno en copa dorada' },
  { src: '/gallery/otonal-mesa.webp', alt: 'Centro de mesa otoñal con calabazas y trigo' },
  { src: '/gallery/jardinera-rosa.webp', alt: 'Jardinera con flores rosas y pastos ornamentales' },
  { src: '/gallery/hortensias-durazno.webp', alt: 'Arreglo de hortensias durazno y suculentas' },
  { src: '/gallery/boda-playa.webp', alt: 'Montaje de evento frente al mar con flores rojas' },
  { src: '/gallery/alcachofa-canasta.webp', alt: 'Centro de mesa verde con alcachofa ornamental' },
  { src: '/gallery/corona-otonal.webp', alt: 'Corona otoñal con calabazas y hojas de maple' },
  { src: '/gallery/evento-puestos.webp', alt: 'Kioscos florales para evento con cempasúchil' },
  { src: '/gallery/otonal-calabaza.webp', alt: 'Arreglo otoñal con calabaza y girasoles' },
];
