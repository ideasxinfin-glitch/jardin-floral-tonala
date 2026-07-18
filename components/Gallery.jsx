'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from './Motion';
import { GALLERY_ROW_A, GALLERY_ROW_B } from '@/lib/photos';

function MarqueeRow({ items, onOpen, reverse = false, duration = 55 }) {
  // Duplicamos la lista para lograr el loop infinito sin salto visible
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask">
      <div
        className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            className="marquee-item img-frame"
            onClick={() => onOpen(item)}
            aria-label={`Ampliar: ${item.alt}`}
            tabIndex={i < items.length ? 0 : -1}
            aria-hidden={i >= items.length}
          >
            <img src={item.src} alt={i < items.length ? item.alt : ''} loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
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

  return (
    <section className="section" id="galeria" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="section-head center">
          <FadeUp>
            <span className="eyebrow">Galería</span>
            <h2 className="h-section">
              Espacios que ya <em className="gold-accent">florecen</em>
            </h2>
            <p className="lead" style={{ margin: '1rem auto 0', maxWidth: '38rem' }}>
              Trabajo real de nuestro taller: arreglos, montajes de eventos e
              instalaciones en hogares y negocios. Toca cualquier foto para ampliarla.
            </p>
          </FadeUp>
        </div>
      </div>

      <FadeUp>
        <div style={{ display: 'grid', gap: '1.2rem' }}>
          <MarqueeRow items={GALLERY_ROW_A} onOpen={setLightbox} duration={58} />
          <MarqueeRow items={GALLERY_ROW_B} onOpen={setLightbox} reverse duration={64} />
        </div>
      </FadeUp>

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
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: '0 40px 120px rgba(0,0,0,0.5)',
                  display: 'grid',
                  placeItems: 'center',
                  background: '#111',
                }}
              >
                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  style={{ width: '100%', maxHeight: '78vh', objectFit: 'contain', display: 'block' }}
                />
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
