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
            <img
              src="/logo.png"
              alt="Jardín Floral"
              width={52}
              height={52}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <span style={{ lineHeight: 1.15 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', display: 'block', color: scrolled ? 'var(--ink)' : '#fff', transition: 'color 0.5s', textShadow: scrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.3)' }}>
                Jardín Floral
              </span>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.42em', textTransform: 'uppercase', color: 'var(--gold)', textShadow: scrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.3)' }}>
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
                    style={{ fontSize: '0.92rem', fontWeight: 400, letterSpacing: '0.04em', position: 'relative', color: scrolled ? 'var(--charcoal)' : 'rgba(255,255,255,0.9)', transition: 'color 0.4s', textShadow: scrolled ? 'none' : '0 1px 4px rgba(0,0,0,0.25)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? 'var(--charcoal)' : 'rgba(255,255,255,0.9)')}
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
