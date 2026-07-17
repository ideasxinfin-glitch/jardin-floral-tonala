'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { wa } from '@/lib/site';

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 16 });
  const sy = useSpring(my, { stiffness: 40, damping: 16 });

  const onMouse = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 18);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 12);
  };

  return (
    <section
      id="inicio"
      ref={ref}
      onMouseMove={onMouse}
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#1c1b18',
      }}
    >
      {/* Video de fondo con loop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.85,
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Velo editorial — más fuerte para legibilidad */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(100deg, rgba(28,27,24,0.75) 0%, rgba(28,27,24,0.5) 42%, rgba(28,27,24,0.2) 75%), linear-gradient(0deg, rgba(28,27,24,0.6) 0%, transparent 35%)',
        }}
      />

      <Petals />

      {/* Contenido */}
      <motion.div className="container" style={{ position: 'relative', zIndex: 3, opacity: fade, paddingBlock: '9rem 6rem' }}>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.35 }}
          className="eyebrow"
          style={{ color: '#E8D5A3', textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
        >
          Florería Artificial Premium · Tonalá, Jalisco
        </motion.p>

        <motion.h1
          className="h-hero"
          style={{
            color: '#fff',
            maxWidth: '13ch',
            margin: '1.4rem 0 1.6rem',
            textShadow: '0 3px 20px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.4)',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.5 }}
        >
          Belleza que{' '}
          <em style={{ fontStyle: 'italic', color: '#E8D5A3' }}>florece</em>{' '}
          para siempre
        </motion.h1>

        <motion.p
          className="lead"
          style={{
            color: 'rgba(255,255,255,0.95)',
            maxWidth: '34rem',
            textShadow: '0 2px 12px rgba(0,0,0,0.5)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.7 }}
        >
          Arreglos florales artificiales de lujo que transforman hogares, bodas,
          hoteles y restaurantes en espacios inolvidables. Sin marchitarse. Sin
          mantenimiento. Solo elegancia, todos los días.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.9 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2.6rem' }}
        >
          <a
            className="btn btn-gold"
            href={wa('Hola Jardín Floral 🌸 Me gustaría solicitar una cotización.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar Cotización
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a className="btn btn-ghost" href="#colecciones">
            Ver Catálogo
          </a>
        </motion.div>

        {/* Glass cards — solo desktop */}
        <motion.div
          className="hero-glass-cards"
          style={{
            position: 'absolute',
            right: 'clamp(0rem, 3vw, 3rem)',
            bottom: '4rem',
            display: 'grid',
            gap: '1rem',
            x: sx,
            y: sy,
            zIndex: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.15 }}
            className="glass"
            style={{ padding: '1.1rem 1.4rem', display: 'flex', gap: '0.9rem', alignItems: 'center', maxWidth: 300 }}
          >
            <span style={{ fontSize: '1.6rem' }} aria-hidden="true">🚚</span>
            <span style={{ fontSize: '0.88rem', lineHeight: 1.45 }}>
              <strong style={{ fontWeight: 500 }}>Envíos a todo México</strong>
              <br />
              Empaque protegido premium
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.3 }}
            className="glass"
            style={{ padding: '1.1rem 1.4rem', display: 'flex', gap: '0.9rem', alignItems: 'center', maxWidth: 300 }}
          >
            <span style={{ fontSize: '1.6rem' }} aria-hidden="true">✨</span>
            <span style={{ fontSize: '0.88rem', lineHeight: 1.45 }}>
              <strong style={{ fontWeight: 500 }}>Realismo excepcional</strong>
              <br />
              Flores toque natural de alta gama
            </span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '1.6rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          color: 'rgba(250,247,241,0.7)',
          fontSize: '0.72rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}
        aria-hidden="true"
      >
        Descubre
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ marginTop: 6 }}
        >
          ↓
        </motion.div>
      </motion.div>

    </section>
  );
}

function Petals() {
  const petals = [
    { left: '12%', delay: 0, dur: 14, size: 14 },
    { left: '28%', delay: 3, dur: 17, size: 10 },
    { left: '55%', delay: 6, dur: 15, size: 12 },
    { left: '72%', delay: 1.5, dur: 19, size: 9 },
    { left: '88%', delay: 4.5, dur: 16, size: 13 },
  ];
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', overflow: 'hidden' }}>
      {petals.map((p, i) => (
        <motion.span
          key={i}
          initial={{ y: '-8vh', opacity: 0 }}
          animate={{ y: '110vh', opacity: [0, 0.7, 0.7, 0], rotate: [0, 180, 360], x: [0, 30, -20, 10] }}
          transition={{ repeat: Infinity, duration: p.dur, delay: p.delay, ease: 'linear' }}
          style={{
            position: 'absolute',
            left: p.left,
            width: p.size,
            height: p.size * 1.3,
            borderRadius: '60% 40% 60% 40%',
            background: 'linear-gradient(140deg, rgba(233,223,204,0.9), rgba(212,188,139,0.5))',
          }}
        />
      ))}
    </div>
  );
}
