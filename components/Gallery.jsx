'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from './Motion';
import Photo from './Photo';
import { PHOTOS } from '@/lib/photos';

const ITEMS = [
  { img: PHOTOS.gal1, cat: 'arreglos', alt: 'Arreglo floral artificial en tonos rosados' },
  { img: PHOTOS.gal2, cat: 'bodas', alt: 'Mesa de boda decorada con flores artificiales' },
  { img: PHOTOS.gal3, cat: 'espacios', alt: 'Lobby de hotel con decoración floral premium' },
  { img: PHOTOS.gal4, cat: 'arreglos', alt: 'Flores artificiales sobre mesa de madera' },
  { img: PHOTOS.gal5, cat: 'arreglos', alt: 'Rosas blancas artificiales de toque natural' },
  { img: PHOTOS.gal6, cat: 'espacios', alt: 'Sala decorada con guías florales' },
  { img: PHOTOS.gal7, cat: 'bodas', alt: 'Detalle floral romántico para evento' },
  { img: PHOTOS.gal8, cat: 'espacios', alt: 'Composición floral otoñal en interior' },
];

const FILTERS = [
  ['todos', 'Todo'],
  ['arreglos', 'Arreglos'],
  ['bodas', 'Bodas'],
  ['espacios', 'Espacios'],
];

export default function Gallery() {
  const [filter, setFilter] = useState('todos');
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => e.key === 'Escape' && setLightbox(null);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  const visible = ITEMS.filter((i) => filter === 'todos' || i.cat === filter);

  return (
    <section className="section" id="galeria">
      <div className="container">
        <div className="section-head center">
          <FadeUp>
            <span className="eyebrow">Galería</span>
            <h2 className="h-section">
              Espacios que ya <em className="gold-accent">florecen</em>
            </h2>
          </FadeUp>
        </div>

        <FadeUp>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.6rem' }}>
            {FILTERS.map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                aria-pressed={filter === key}
                style={{
                  padding: '0.6rem 1.5rem',
                  borderRadius: 999,
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  transition: 'all 0.4s var(--ease-luxe)',
                  background: filter === key ? 'var(--sage-deep)' : 'var(--ivory)',
                  color: filter === key ? 'var(--cream)' : 'var(--charcoal)',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </FadeUp>

        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))',
            gap: '1.2rem',
          }}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.button
                layout
                key={item.img + item.cat}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightbox(item)}
                aria-label={`Ampliar: ${item.alt}`}
                className="img-frame"
                style={{
                  borderRadius: 'var(--radius-md)',
                  aspectRatio: '1',
                  boxShadow: 'var(--shadow-card)',
                  padding: 0,
                }}
              >
                <Photo src={item.img} alt={item.alt} />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: 'rgba(28,27,24,0.92)',
              display: 'grid',
              placeItems: 'center',
              padding: '2rem',
              cursor: 'zoom-out',
              backdropFilter: 'blur(10px)',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{ maxWidth: 'min(880px, 92vw)', width: '100%' }}
            >
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 40px 120px rgba(0,0,0,0.5)', aspectRatio: '4/3' }}>
                <Photo src={lightbox.img.replace('w=900', 'w=1600')} alt={lightbox.alt} />
              </div>
              <p style={{ color: 'rgba(250,247,241,0.75)', textAlign: 'center', marginTop: '1rem', fontSize: '0.92rem' }}>
                {lightbox.alt} — toca para cerrar
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
