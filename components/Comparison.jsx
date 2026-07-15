'use client';

import { FadeUp, Stagger, Item } from './Motion';

const ROWS = [
  ['Duración', 'De 3 a 7 días', 'Años de belleza intacta'],
  ['Mantenimiento', 'Agua, poda y limpieza diaria', 'Ninguno'],
  ['Costo anual', 'Compra tras compra, cada semana', 'Una sola inversión'],
  ['Alergias', 'Polen y aromas intensos', 'Hipoalergénicas'],
  ['Clima y sol', 'Se marchitan en horas de calor', 'Impecables en cualquier clima'],
  ['Eventos largos', 'Lucen cansadas al final', 'Perfectas de principio a fin'],
];

export default function Comparison() {
  return (
    <section className="section section-ivory" id="comparativa">
      <div className="container" style={{ maxWidth: 980 }}>
        <div className="section-head center">
          <FadeUp>
            <span className="eyebrow">La decisión inteligente</span>
            <h2 className="h-section">
              Flor natural <em className="italic-accent">vs.</em> Jardín Floral
            </h2>
          </FadeUp>
        </div>

        <FadeUp>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(90px, 1.1fr) 1.2fr 1.4fr',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-float)',
              background: 'var(--white)',
              fontSize: 'clamp(0.82rem, 1.6vw, 1rem)',
            }}
            role="table"
            aria-label="Comparación entre flores naturales y flores artificiales premium"
          >
            <div role="row" style={{ display: 'contents' }}>
              <span role="columnheader" style={headCell()} />
              <span role="columnheader" style={headCell()}>Flor natural</span>
              <span
                role="columnheader"
                style={{
                  ...headCell(),
                  background: 'linear-gradient(135deg, var(--ink), #3B392F)',
                  color: 'var(--gold-soft)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05em',
                }}
              >
                Jardín Floral ✦
              </span>
            </div>
            {ROWS.map(([label, nat, art], i) => (
              <div role="row" key={label} style={{ display: 'contents' }}>
                <span role="cell" style={bodyCell(i, { fontWeight: 500, color: 'var(--ink)' })}>{label}</span>
                <span role="cell" style={bodyCell(i, { color: 'var(--muted)' })}>{nat}</span>
                <span role="cell" style={bodyCell(i, { background: i % 2 ? 'rgba(169,181,160,0.14)' : 'rgba(169,181,160,0.08)', color: 'var(--sage-deep)', fontWeight: 400 })}>
                  {art}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>

        <Stagger className="grid-3" style={{ marginTop: '3rem', textAlign: 'center' }}>
          {[
            ['♻️', 'Reutilizables evento tras evento'],
            ['🎨', 'Colores imposibles en la naturaleza'],
            ['🛡️', 'Materiales de alta calidad UV'],
          ].map(([icon, text]) => (
            <Item key={text}>
              <div style={{ padding: '1.2rem' }}>
                <span style={{ fontSize: '1.7rem' }} aria-hidden="true">{icon}</span>
                <p style={{ marginTop: '0.5rem', color: 'var(--muted)', fontSize: '0.95rem' }}>{text}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

const headCell = () => ({
  padding: '1.3rem 1.4rem',
  background: 'var(--ivory)',
  fontWeight: 500,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  fontSize: '0.82em',
});

const bodyCell = (i, extra = {}) => ({
  padding: '1.15rem 1.4rem',
  borderTop: '1px solid rgba(43,42,38,0.06)',
  background: i % 2 ? 'rgba(244,239,230,0.5)' : 'transparent',
  ...extra,
});
