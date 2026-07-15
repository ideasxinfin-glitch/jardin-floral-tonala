// Fotografía mixta: OpenArt AI (editorial/lifestyle) + Google Photos (catálogo real)

// Helper: Google Photos URL (álbumes compartidos del negocio)
const gp = (id, w = 1600) =>
  `https://lh3.googleusercontent.com/pw/${id}=w${w}`;

export const PHOTOS = {
  // ── OpenArt GPT Image 2 — imágenes editoriales de lujo ──

  // Hero — sala de estar de lujo con arreglo floral como pieza central
  hero: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784084059637_3b3f069e.png',

  // Card en hero — close-up editorial de rosas premium
  heroCard: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784084099817_eb25c818.png',

  // Sección "Por qué flores artificiales" — peonías y rosas premium
  whyLiving: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784087171838_e010460d.png',

  // ── Google Photos — fotos reales del catálogo de Jardín Floral ──

  // Colecciones (productos reales)
  colPrimavera: gp('AP1GczN0NglsqKL0zRQsZ5o1wX9emMvKVOfR7birKhueBwxXHLdij8XbkbTax4aWmVy_Kan1Wj7KtLH-AjwjptPz4beJj-Pnj_J_pTzS2i0z1FWQHmYKXBOXJ3V6VpdPd02ebN7ZPxR4V4FygZoPgnWg_WKmqQ', 1100),
  colRosas: gp('AP1GczPmHqZVTTiWsIO5Ds-SMKZcsUoOIe8VZ_Vl7kZsb9A5gL2XbNuQDzA-xPUY-NIQCmraZjHfpjZRyA8tEmR4bZv1SyPOhyJeKZkVN4JXUh26r7vA9hoI', 1100),
  colOtonal: gp('AP1GczO8U-InTHYl51djGTPxZsJ37IZUfVG0A0-ixdhm0bW3Xr9SVUMtXOkCAgoJeCKUByARX6dH-S70ZyR4nleiN2DtozIwEr3QXD0aQFFISHZDzJqUB42c', 1100),
  colTropical: gp('AP1GczMnoSni6vFBumqtDhc7KMA3XrEwCwj7kEmxJQai_8Ms6KwO40JKu51zDB-DeeoQ00eO7Ezz5vON_2ILgB1y_RkGdW2i8B2gT7JJgHFVuLfhuJg9EvOO', 1100),

  // Arreglos destacados (productos reales — ARREGLOS)
  arr1: gp('AP1GczMimzUsFn6fupxUwKVTnIzH8rznM_d-5JJzqVRnmPPd4CVu8s28sdx2g42NrfWssj0_8fw3eAQFEPxIo5agzbPkhGQ0RN0CNsPVJx-o9iEBNbuv0v8', 900),
  arr2: gp('AP1GczPklSSTnfbX_s4zFGKn0_ceABvZe_GBJGhC5TpJAf8vFKLuvXjrUm21SGgwiRKEm9mN6UFEUHyT_0x7jKMUqfhDaD1OUNpITeeSt3UkMriyJAcmLOk', 900),
  arr3: gp('AP1GczM5UegngdNgWwBjm3Cf14wUkrpLJP-4ZrIoLjb31lTtEcdHZ4HIfy1FkPalHPCWU2uV4IG_eZsFxKsMz50N4njTSI7c6bi1XVQglgCzXsJeIyIw34w', 900),
  arr4: gp('AP1GczPhxJL_OPzqEAyFJDjocRV7Zg7WftTgb-6Ut9FhSFjjzkKzlTUl2H3xzG97r5TYfLHW_omAn5-_yV2UTgCuMrDXoOFbkpElt20Yo9b033qNJWSyoWs', 900),

  // ── OpenArt GPT Image 2 — bodas editorial ──

  // Boda — ceremonia con arco floral al atardecer
  wedding: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784084105430_f0482eee.png',
  // Detalle de boda — mesa con centro de mesa floral
  weddingDetail: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784084132460_bb578a7d.png',

  // ── OpenArt GPT Image 2 — corporativo editorial ──

  // Hotel — lobby de lujo con arreglo monumental
  hotel: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784084277615_28c6f9f2.png',
  // Restaurante — fine dining con decoración floral
  restaurant: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784084296765_75c97df0.png',
  // Oficina — recepción moderna con arreglo arquitectónico
  office: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784084278135_00a6d50d.png',
  // Interior — showroom de diseño de interiores con arreglos florales (OpenArt)
  interior: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784087137344_46e25a1c.png',

  // Mayoreo — ramos en línea (foto real — RAMOS)
  wholesale: gp('AP1GczO8dXu2rG7nCChuGCpeDIFATMvlV5VS_ROApQlChaglfAzAOND6qri2fGACwSrS-1yIV8uaMrILPAOz2xmcxUmykFNlWLK9xMNYkPiDuYQln1SorNO6', 1400),

  // ── Google Photos — galería real del negocio ──

  // OpenArt AI — galería editorial (flores visibles, sin marcas de agua)
  gal1: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784087178830_aaed0a59.png',
  gal2: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784087189985_e614e0d5.png',
  gal3: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784087360640_85aeda7a.png',
  gal4: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784087389123_c34af0d2.png',
  gal5: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784087394059_db9d86d8.png',
  gal6: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784087397502_656e9f35.png',
  // Google Photos — arreglos reales sin marcas de precio
  gal7: gp('AP1GczPklSSTnfbX_s4zFGKn0_ceABvZe_GBJGhC5TpJAf8vFKLuvXjrUm21SGgwiRKEm9mN6UFEUHyT_0x7jKMUqfhDaD1OUNpITeeSt3UkMriyJAcmLOk', 900),
  gal8: gp('AP1GczPhxJL_OPzqEAyFJDjocRV7Zg7WftTgb-6Ut9FhSFjjzkKzlTUl2H3xzG97r5TYfLHW_omAn5-_yV2UTgCuMrDXoOFbkpElt20Yo9b033qNJWSyoWs', 900),

  // ── OpenArt GPT Image 2 — CTA final ──

  // CTA background — espacio de evento dramático con flores colgantes
  ctaBg: 'https://cdn.openart.ai/openart-ai/production/2026-07/create-image/wd6a5U8J9wARKg0qTfUI/gpt-image-2-1_1784084323268_13cfbb4b.png',
};
