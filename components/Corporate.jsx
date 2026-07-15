'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from './Motion';
import Photo from './Photo';
import { PHOTOS } from '@/lib/photos';
import { wa } from '@/lib/site';

const TABS = [
  {
    key: 'hoteles',
    label: 'Hoteles',
    img: PHOTOS.hotel,
    title: 'Lobbies que dan la bienvenida con lujo',
    text: 'La primera impresión de tu huésped comienza en el lobby. Arreglos monumentales que se ven espectaculares las 24 horas, sin florista de planta ni reposiciones semanales.',
    points: ['Piezas monumentales para lobby y recepción', 'Programa de renovación por temporada', 'Cero costo recurrente de flor natural'],
    cta: 'Cotizar para mi hotel',
  },
  {
    key: 'restaurantes',
    label: 'Restaurantes',
    img: PHOTOS.restaurant,
    title: 'Ambientes que los comensales fotografían',
    text: 'Mesas, barras y muros verdes que convierten cada visita en contenido para redes sociales. Higiénicas, sin polen y siempre impecables junto a los alimentos.',
    points: ['Centros de mesa resistentes al uso diario', 'Muros y techos florales instagrameables', 'Sin alergias ni pétalos caídos'],
    cta: 'Cotizar para mi restaurante',
  },
  {
    key: 'oficinas',
    label: 'Oficinas',
    img: PHOTOS.office,
    title: 'Espacios de trabajo que inspiran',
    text: 'Recepciones y salas de junta con presencia. La calidez de un jardín, sin distraer a tu equipo de mantenimiento ni comprometer el presupuesto.',
    points: ['Recepciones y salas ejecutivas', 'Plantas y guías de bajo perfil', 'Facturación disponible'],
    cta: 'Cotizar para mi oficina',
  },
  {
    key: 'interioristas',
    label: 'Diseñadores',
    img: PHOTOS.interior,
    title: 'El aliado floral de los interioristas',
    text: 'Trabajamos con diseñadores de interiores y event planners como su proveedor de confianza: catálogo amplio, asesoría de color y precios preferenciales de gremio.',
    points: ['Precios especiales para profesionales', 'Asesoría de paleta y proporción', 'Piezas a medida por proyecto'],
    cta: 'Quiero ser aliado',
  },
];

export default function Corporate() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="section" id="empresas">
      <div className="container">
        <div className="section-head center">
          <FadeUp>
            <span className="eyebrow">Espacios Comerciales</span>
            <h2 className="h-section">
              Decoración que <em className="gold-accent">trabaja por tu marca</em>
            </h2>
          </FadeUp>
        </div>

        <FadeUp>
          <div
            role="tablist"
            aria-label="Sectores"
            style={{
              display: 'flex',
              gap: '0.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            {TABS.map((t, i) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                style={{
                  padding: '0.75rem 1.7rem',
                  borderRadius: 999,
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  transition: 'all 0.4s var(--ease-luxe)',
                  background: i === active ? 'var(--ink)' : 'rgba(255,255,255,0.7)',
                  color: i === active ? 'var(--cream)' : 'var(--charcoal)',
                  border: '1px solid rgba(43,42,38,0.1)',
                  boxShadow: i === active ? 'var(--shadow-soft)' : 'none',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </FadeUp>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab.key}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="grid-2"
          >
            <div
              className="img-frame"
              style={{ borderRadius: 'var(--radius-lg)', aspectRatio: '16 / 11', boxShadow: 'var(--shadow-float)' }}
            >
              <Photo src={tab.img} alt={tab.title} />
            </div>
            <div>
              <h3 className="h-card" style={{ marginBottom: '1rem' }}>{tab.title}</h3>
              <p className="lead" style={{ marginBottom: '1.6rem', fontSize: '1.05rem' }}>{tab.text}</p>
              <ul style={{ display: 'grid', gap: '0.8rem', marginBottom: '2.2rem' }}>
                {tab.points.map((p) => (
                  <li key={p} style={{ display: 'flex', gap: '0.8rem', alignItems: 'baseline', color: 'var(--charcoal)' }}>
                    <span style={{ color: 'var(--gold)' }} aria-hidden="true">✦</span>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                className="btn btn-primary"
                href={wa(`Hola 🌸 ${tab.cta}. ¿Podemos agendar una asesoría?`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tab.cta}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
