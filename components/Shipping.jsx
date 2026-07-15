'use client';

import { FadeUp, Stagger, Item } from './Motion';
import { wa } from '@/lib/site';

const STEPS = [
  ['01', 'Nos escribes por WhatsApp', 'Cuéntanos qué espacio quieres transformar o qué producto buscas.'],
  ['02', 'Te asesoramos y cotizamos', 'Fotos, video y precios el mismo día. Sin compromiso.'],
  ['03', 'Empacamos con cuidado premium', 'Cada pieza viaja protegida para llegar impecable.'],
  ['04', 'Recibes en cualquier parte de México', 'Rastreo puntual hasta la puerta de tu casa o negocio.'],
];

export default function Shipping() {
  return (
    <section className="section" id="envios">
      <div className="container">
        <div className="section-head center">
          <FadeUp>
            <span className="eyebrow">De Tonalá a todo México</span>
            <h2 className="h-section">
              Tu pedido viaja <em className="gold-accent">seguro</em>
            </h2>
            <p className="lead">
              Desde nuestros locales en Av. Tonaltecas — el corazón artesanal de
              Jalisco — hasta cualquiera de los 32 estados.
            </p>
          </FadeUp>
        </div>

        <Stagger className="grid-4">
          {STEPS.map(([num, title, text]) => (
            <Item key={num}>
              <div
                className="card"
                style={{ padding: '2rem 1.7rem', height: '100%', position: 'relative', overflow: 'visible' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '3rem',
                    color: 'var(--champagne-deep)',
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {num}
                </span>
                <h3 style={{ fontSize: '1.2rem', margin: '0.8rem 0 0.4rem' }}>{title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.93rem' }}>{text}</p>
              </div>
            </Item>
          ))}
        </Stagger>

        <FadeUp delay={0.15} style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            className="btn btn-whatsapp"
            href={wa('Hola 🌸 Quiero hacer un pedido con envío. ¿Me ayudan?')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Iniciar mi pedido ahora
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
