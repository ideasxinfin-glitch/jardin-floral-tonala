'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { wa } from '@/lib/site';

const LINKS = [
  ['Colecciones', '#colecciones'],
  ['Bodas', '#bodas'],
  ['Empresas', '#empresas'],
  ['Mayoreo', '#mayoreo'],
  ['Galería', '#galeria'],
  ['Preguntas', '#faq'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{
          scaleX: progress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          transformOrigin: '0 0',
          background: 'linear-gradient(90deg, var(--sage), var(--gold))',
          zIndex: 120,
        }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 110,
          transition: 'background 0.5s, box-shadow 0.5s, backdrop-filter 0.5s',
          background: scrolled ? 'rgba(250, 247, 241, 0.82)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px) saturate(1.3)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px) saturate(1.3)' : 'none',
          boxShadow: scrolled ? '0 10px 40px -20px rgba(43,42,38,0.25)' : 'none',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBlock: scrolled ? '0.8rem' : '1.3rem',
            transition: 'padding 0.5s',
          }}
        >
          <a href="#inicio" aria-label="Jardín Floral Tonalá — inicio"
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="50" cy="50" r="44" stroke="url(#logoGold)" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="40" stroke="url(#logoGold)" strokeWidth="0.7" />
              {/* Rama izquierda */}
              <path d="M22 52c4-18 8-28 14-38" stroke="url(#logoGold)" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
              <path d="M28 42c-4-1-7 1-8 4 3 1 6-0.5 8-4z" fill="url(#logoGold)" opacity="0.85"/>
              <path d="M30 36c-4-2-7-0.5-9 2.5 3 1.5 7 0.5 9-2.5z" fill="url(#logoGold)" opacity="0.8"/>
              <path d="M32 30c-3.5-2-7-1-8.5 1.5 3 2 6.5 1 8.5-1.5z" fill="url(#logoGold)" opacity="0.75"/>
              <path d="M26 48c-4 0-7 2-7.5 5 3.5 0.5 6.5-1.5 7.5-5z" fill="url(#logoGold)" opacity="0.85"/>
              <path d="M24 54c-4 1-6 3.5-6 6.5 3.5-0.5 5.5-3 6-6.5z" fill="url(#logoGold)" opacity="0.8"/>
              {/* Flor derecha */}
              <path d="M72 68c3-3 3-7 1-9-3 1-4 5-1 9z" fill="url(#logoGold)" opacity="0.7"/>
              <path d="M76 64c2-4 1-7-1.5-9-2.5 2-2.5 6 1.5 9z" fill="url(#logoGold)" opacity="0.75"/>
              <path d="M78 60c1-4-0.5-7.5-3.5-9-1.5 3-0.5 6.5 3.5 9z" fill="url(#logoGold)" opacity="0.7"/>
              <path d="M68 72c4 1 7-0.5 8.5-3.5-3.5-1-7 0.5-8.5 3.5z" fill="url(#logoGold)" opacity="0.8"/>
              <circle cx="72" cy="68" r="2.5" fill="url(#logoGold)" opacity="0.5"/>
              {/* Letras JF */}
              <text x="34" y="62" fontFamily="var(--font-display)" fontSize="32" fontWeight="400" fill="url(#logoGold)">JF</text>
              <defs>
                <linearGradient id="logoGold" x1="0" y1="0" x2="100" y2="100">
                  <stop offset="0%" stopColor="#C6A94E"/>
                  <stop offset="50%" stopColor="#D4B96A"/>
                  <stop offset="100%" stopColor="#B8943F"/>
                </linearGradient>
              </defs>
            </svg>
            <span style={{ lineHeight: 1.15 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', display: 'block', color: 'var(--ink)' }}>
                Jardín Floral
              </span>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.42em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Tonalá
              </span>
            </span>
          </a>

          <nav className="hide-mobile" aria-label="Navegación principal">
            <ul style={{ display: 'flex', gap: '2rem' }}>
              {LINKS.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    style={{ fontSize: '0.92rem', fontWeight: 400, letterSpacing: '0.04em', position: 'relative' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <a
              className="btn btn-primary hide-mobile"
              style={{ padding: '0.7rem 1.6rem', fontSize: '0.88rem' }}
              href={wa('Hola Jardín Floral 🌸 Me gustaría recibir una cotización.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Cotización
            </a>
            <button
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              style={{
                display: 'grid',
                placeItems: 'center',
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: '1px solid rgba(43,42,38,0.15)',
                background: 'rgba(255,255,255,0.6)',
              }}
              className="menu-btn"
            >
              <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
                <path
                  d={open ? 'M2 2l14 10M16 2L2 12' : 'M1 1h16M1 7h16M1 13h16'}
                  stroke="var(--ink)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                overflow: 'hidden',
                background: 'rgba(250,247,241,0.97)',
                backdropFilter: 'blur(20px)',
                borderTop: '1px solid rgba(43,42,38,0.06)',
              }}
              aria-label="Menú móvil"
            >
              <ul className="container" style={{ padding: '1.5rem var(--gutter) 2rem', display: 'grid', gap: '1.1rem' }}>
                {LINKS.map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--ink)' }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    className="btn btn-whatsapp"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                    href={wa('Hola Jardín Floral 🌸 Me gustaría recibir una cotización.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    Cotizar por WhatsApp
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      <style jsx>{`
        @media (min-width: 860px) {
          .menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
