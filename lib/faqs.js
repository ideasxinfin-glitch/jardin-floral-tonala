export const FAQS = [
  {
    q: '¿Realmente parecen flores naturales?',
    a: 'Sí. Trabajamos con flor de "toque natural" (real touch) de alta gama: pétalos con textura, venas y acabados que engañan a la vista y al tacto. Es la reacción más común de nuestros clientes.',
  },
  {
    q: '¿Hacen envíos a toda la República?',
    a: 'Sí, enviamos a los 32 estados con paquetería confiable y empaque protegido especial para flor. Te compartimos tu guía de rastreo en cuanto sale tu pedido.',
  },
  {
    q: '¿Venden por mayoreo? ¿Cuál es el mínimo?',
    a: 'Sí, es una de nuestras especialidades. Manejamos descuentos escalonados por volumen para floristas, decoradores y tiendas. Escríbenos por WhatsApp y te compartimos la lista de precios de mayoreo.',
  },
  {
    q: '¿Pueden hacer un arreglo personalizado?',
    a: 'Por supuesto. Dinos los colores, el estilo y el espacio (o mándanos una foto de inspiración) y nuestro equipo diseña una pieza a tu medida.',
  },
  {
    q: '¿Decoran bodas y eventos completos?',
    a: 'Sí: arcos, centros de mesa, guías, muros florales y montajes completos. Podemos trabajar venta o cotizar el proyecto integral con tu wedding planner.',
  },
  {
    q: '¿Dónde están ubicados?',
    a: 'En Av. Tonaltecas #200, locales 22, 23 y 26, en Tonalá, Jalisco — a unos minutos de Guadalajara. Ven a conocer las colecciones en persona, con gusto te atendemos.',
  },
  {
    q: '¿Cómo cuido mis flores artificiales?',
    a: 'Prácticamente no requieren cuidado: una sacudida ligera o aire frío de secadora de vez en cuando. Evita exposición directa prolongada al sol para conservar el color por muchos años.',
  },
];

export const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};
