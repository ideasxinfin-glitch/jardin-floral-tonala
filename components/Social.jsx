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
    color: '#E1306C',
    gradient: 'linear-gradient(135deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="igGrad" x1="0" y1="24" x2="24" y2="0">
            <stop offset="0%" stopColor="#feda75" />
            <stop offset="25%" stopColor="#fa7e1e" />
            <stop offset="50%" stopColor="#d62976" />
            <stop offset="75%" stopColor="#962fbf" />
            <stop offset="100%" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="url(#igGrad)" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.2" stroke="url(#igGrad)" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.6" r="1.2" fill="url(#igGrad)" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@jardinfloral.tonala',
    url: SOCIAL.tiktok,
    desc: 'Videos de montajes y novedades de temporada.',
    color: '#ff0050',
    gradient: 'linear-gradient(135deg, #25F4EE, #FE2C55)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M16.6 2h-3v13.5a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.6a6 6 0 1 0 5 5.9V8.4a7.7 7.7 0 0 0 4.4 1.4V6.7A4.7 4.7 0 0 1 16.6 2z" fill="#25F4EE" />
        <path d="M15.6 3h-3v13.5a2.9 2.9 0 1 1-2.2-2.8V10.6a6 6 0 1 0 5.2 5.9V9.4a7.7 7.7 0 0 0 4.4 1.4V7.7A4.7 4.7 0 0 1 15.6 3z" fill="#FE2C55" opacity="0.8" />
        <path d="M16.1 2.5h-3v13.5a2.9 2.9 0 1 1-2.5-2.87V10.1a6 6 0 1 0 5.1 5.9V8.9a7.7 7.7 0 0 0 4.4 1.4V7.2A4.7 4.7 0 0 1 16.1 2.5z" fill="var(--ink)" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'jardinfloral.tonala',
    url: SOCIAL.facebook,
    desc: 'Comunidad, promociones y atención directa.',
    color: '#1877F2',
    gradient: 'linear-gradient(135deg, #18acfe, #0163E0)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="#1877F2" />
        <path d="M15.893 14.89l.443-2.89h-2.773v-1.876c0-.79.387-1.562 1.63-1.562h1.26v-2.46s-1.144-.195-2.238-.195c-2.285 0-3.777 1.384-3.777 3.89V12h-2.54v2.89h2.54v6.989a10.075 10.075 0 003.124 0V14.89h2.33z" fill="#fff" />
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
                  &ldquo;{t.quote}&rdquo;
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
              <motion.a
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                whileHover={{ y: -6, boxShadow: '0 16px 40px -12px rgba(43,42,38,0.18)' }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.7rem',
                  padding: '2rem 1.8rem',
                  height: '100%',
                  color: 'var(--charcoal)',
                }}
              >
                <motion.span
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: 'fit-content' }}
                >
                  {n.icon}
                </motion.span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--ink)' }}>
                  {n.name}
                </span>
                <span style={{ fontSize: '0.85rem', color: n.color, letterSpacing: '0.04em', fontWeight: 500 }}>{n.handle}</span>
                <span style={{ fontSize: '0.92rem', color: 'var(--muted)' }}>{n.desc}</span>
                <motion.span
                  whileHover={{ x: 4 }}
                  style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--sage-deep)', marginTop: 'auto' }}
                >
                  Visitar perfil →
                </motion.span>
              </motion.a>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
