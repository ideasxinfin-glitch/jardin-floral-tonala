'use client';

import { FadeUp, Stagger, Item } from './Motion';
import Photo from './Photo';
import { PHOTOS } from '@/lib/photos';

const REASONS = [
  {
    icon: '🌸',
    title: 'Perfección eterna',
    text: 'Cada pétalo conserva su belleza por años. Tu inversión florece para siempre, sin marchitarse jamás.',
  },
  {
    icon: '💧',
    title: 'Cero mantenimiento',
    text: 'Sin agua, sin luz solar, sin cuidados. Elegancia absoluta sin esfuerzo, todos los días del año.',
  },
  {
    icon: '💎',
    title: 'Inversión inteligente',
    text: 'Un solo arreglo premium sustituye cientos de ramos naturales. Lujo que se paga solo.',
  },
  {
    icon: '🤍',
    title: 'Hipoalergénicas',
    text: 'Belleza sin polen ni alergias. Perfectas para hoteles, restaurantes, consultorios y hogares con niños.',
  },
];

export default function WhyArtificial() {
  return (
    <section className="section" id="por-que">
      <div className="container grid-2">
        <div>
          <FadeUp>
            <span className="eyebrow">La nueva era floral</span>
            <h2 className="h-section" style={{ margin: '1.1rem 0 1.3rem' }}>
              El lujo de lo <em className="gold-accent">imperecedero</em>
            </h2>
            <p className="lead" style={{ marginBottom: '2.5rem' }}>
              Las flores naturales duran días. Las nuestras, años. Diseñadas con
              materiales de toque natural que engañan a la vista y al tacto,
              nuestras piezas visten los espacios más exigentes de México.
            </p>
          </FadeUp>

          <Stagger style={{ display: 'grid', gap: '1.6rem' }}>
            {REASONS.map((r) => (
              <Item key={r.title} style={{ display: 'flex', gap: '1.2rem' }}>
                <span
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    width: 54,
                    height: 54,
                    borderRadius: 18,
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: '1.4rem',
                    background: 'linear-gradient(140deg, var(--ivory), var(--champagne))',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  {r.icon}
                </span>
                <span>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.3rem' }}>{r.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.97rem' }}>{r.text}</p>
                </span>
              </Item>
            ))}
          </Stagger>
        </div>

        <FadeUp delay={0.15}>
          <div
            className="img-frame"
            style={{
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-float)',
              aspectRatio: '4 / 5',
              position: 'relative',
            }}
          >
            <Photo
              src={PHOTOS.whyLiving}
              alt="Interior elegante decorado con flores artificiales premium"
            />
            <div
              className="glass"
              style={{
                position: 'absolute',
                left: '1.2rem',
                right: '1.2rem',
                bottom: '1.2rem',
                padding: '1.1rem 1.4rem',
                fontSize: '0.92rem',
              }}
            >
              <em style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem' }}>
                “Nadie cree que no son naturales.”
              </em>
              <span style={{ display: 'block', color: 'var(--muted)', marginTop: 4, fontSize: '0.82rem' }}>
                — Nuestra frase favorita de cada cliente
              </span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
