'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { FadeUp, Stagger, Item } from './Motion';

const STATS = [
  { end: 500, suffix: '+', label: 'Espacios transformados' },
  { end: 70, suffix: '+', label: 'Diseños exclusivos' },
  { end: 32, suffix: '', label: 'Estados con envío' },
  { end: 98, suffix: '%', label: 'Clientes que regresan' },
];

function Counter({ end, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1800;
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      setVal(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);

  return (
    <span ref={ref} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.6rem, 5vw, 4rem)', color: 'var(--ink)' }}>
      {val}
      <span style={{ color: 'var(--gold)' }}>{suffix}</span>
    </span>
  );
}

export default function TrustStats() {
  return (
    <section className="section section-ivory" aria-label="Nuestra trayectoria">
      <div className="container">
        <FadeUp>
          <p
            style={{
              textAlign: 'center',
              fontSize: '0.8rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '3rem',
            }}
          >
            La elección de hogares, bodas, hoteles y restaurantes en todo México
          </p>
        </FadeUp>

        <Stagger className="grid-4" style={{ textAlign: 'center' }}>
          {STATS.map((s) => (
            <Item key={s.label}>
              <Counter end={s.end} suffix={s.suffix} />
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem', marginTop: '0.4rem' }}>{s.label}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
