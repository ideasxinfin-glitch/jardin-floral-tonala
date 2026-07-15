'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp, Stagger, Item } from './Motion';
import { SOCIAL } from '@/lib/site';

const TESTIMONIALS = [
  {
    quote:
      'Decoré todo mi salón de eventos con sus guías florales. Un año después siguen impecables y mis clientas siempre preguntan dónde las compré.',
    name: 'Mariana G.',
    role: 'Salón de eventos · Guadalajara',
  },
  {
    quote:
      'Compro por mayoreo cada temporada para mi florería en CDMX. La calidad no la encuentro en ningún otro proveedor y el envío siempre llega perfecto.',
    name: 'Roberto C.',
    role: 'Florería · Ciudad de México',
  },
  {
    quote:
      'Mi boda fue en plena primavera con 35 grados. Las flores lucieron perfectas desde la ceremonia hasta la última foto. La mejor decisión.',
    name: 'Fernanda & Luis',
    role: 'Boda en Ajijic, Jalisco',
  },
  {
    quote:
      'El lobby del hotel se transformó por completo. Los huéspedes las tocan porque no creen que sean artificiales.',
    name: 'Alejandra M.',
    role: 'Hotel boutique · Tlaquepaque',
  },
];

const NETWORKS = [
  {
    name: 'Instagram',
    handle: '@jardin_floral_tonala',
    url: SOCIAL.instagram,
    desc: 'Arreglos, decoraciones y guías florales en fotos.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@jardinfloral.tonala',
    url: SOCIAL.tiktok,
    desc: 'Videos de montajes y novedades de temporada.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.6 2h-3v13.5a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.6a6 6 0 1 0 5 5.9V8.4a7.7 7.7 0 0 0 4.4 1.4V6.7A4.7 4.7 0 0 1 16.6 2z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'jardinfloral.tonala',
    url: SOCIAL.facebook,
    desc: 'Comunidad, promociones y atención directa.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.5 1.5-1.5h1.4V4.9c-.2 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.3v3h2.4v7h2.8z" />
      </svg>
    ),
  },
];

export default function Social() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[idx];

  return (
    <section className="section section-ivory" id="testimonios">
      <div className="container">
        {/* Testimonios */}
        <div className="section-head center">
          <FadeUp>
            <span className="eyebrow">Historias reales</span>
            <h2 className="h-section">
              Lo que dicen quienes ya <em className="gold-accent">confiaron</em>
            </h2>
          </FadeUp>
        </div>

        <FadeUp>
          <div
            style={{
              maxWidth: 760,
              margin: '0 auto 2rem',
              textAlign: 'center',
              minHeight: 220,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            aria-live="polite"
          >
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.35rem, 2.6vw, 1.9rem)',
                    fontStyle: 'italic',
                    lineHeight: 1.4,
                    color: 'var(--ink)',
                  }}
                >
                  “{t.quote}”
                </p>
                <footer style={{ marginTop: '1.4rem' }}>
                  <strong style={{ fontWeight: 500 }}>{t.name}</strong>
                  <span style={{ color: 'var(--muted)', fontSize: '0.9rem', display: 'block' }}>{t.role}</span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div style={{ display: 'flex', gap: '0.55rem', justifyContent: 'center', marginBottom: '4.5rem' }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Testimonio ${i + 1}`}
                style={{
                  width: i === idx ? 28 : 9,
                  height: 9,
                  borderRadius: 999,
                  transition: 'all 0.5s var(--ease-luxe)',
                  background: i === idx ? 'var(--gold)' : 'var(--champagne-deep)',
                }}
              />
            ))}
          </div>
        </FadeUp>

        {/* Redes */}
        <div className="divider-botanical" aria-hidden="true">✿</div>

        <FadeUp style={{ textAlign: 'center', margin: '3rem 0 2.5rem' }}>
          <h3 className="h-card">Síguenos y mira nuestro trabajo diario</h3>
          <p className="lead" style={{ marginInline: 'auto', marginTop: '0.6rem' }}>
            Cada semana publicamos nuevos arreglos, montajes y llegadas de temporada.
          </p>
        </FadeUp>

        <Stagger className="grid-3">
          {NETWORKS.map((n) => (
            <Item key={n.name}>
              <a
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.7rem',
                  padding: '2rem 1.8rem',
                  height: '100%',
                  color: 'var(--charcoal)',
                }}
              >
                <span style={{ color: 'var(--sage-deep)' }}>{n.icon}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--ink)' }}>
                  {n.name}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--gold)', letterSpacing: '0.04em' }}>{n.handle}</span>
                <span style={{ fontSize: '0.92rem', color: 'var(--muted)' }}>{n.desc}</span>
                <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--sage-deep)', marginTop: 'auto' }}>
                  Visitar perfil →
                </span>
              </a>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
