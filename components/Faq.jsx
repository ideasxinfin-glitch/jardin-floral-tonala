'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from './Motion';
import { wa } from '@/lib/site';
import { FAQS } from '@/lib/faqs';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section section-ivory" id="faq">
      <div className="container" style={{ maxWidth: 860 }}>
        <div className="section-head center">
          <FadeUp>
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className="h-section">Resolvemos tus dudas</h2>
          </FadeUp>
        </div>

        <FadeUp>
          <div style={{ display: 'grid', gap: '0.9rem' }}>
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  style={{
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: isOpen ? 'var(--shadow-soft)' : 'var(--shadow-card)',
                    overflow: 'hidden',
                    transition: 'box-shadow 0.4s',
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.35rem 1.6rem',
                      textAlign: 'left',
                      fontSize: '1.05rem',
                      fontWeight: 400,
                      fontFamily: 'var(--font-display)',
                      color: 'var(--ink)',
                    }}
                  >
                    {f.q}
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.35 }}
                      style={{ color: 'var(--gold)', fontSize: '1.4rem', lineHeight: 1, flexShrink: 0 }}
                      aria-hidden="true"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p style={{ padding: '0 1.6rem 1.4rem', color: 'var(--muted)', fontSize: '0.97rem' }}>
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </FadeUp>

        <FadeUp delay={0.1} style={{ textAlign: 'center', marginTop: '2.6rem' }}>
          <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>¿Tienes otra pregunta?</p>
          <a
            className="btn btn-ghost"
            href={wa('Hola 🌸 Tengo una pregunta sobre sus flores artificiales.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pregúntanos por WhatsApp
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
