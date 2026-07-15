'use client';

import { FadeUp, Stagger, Item } from './Motion';
import { wa } from '@/lib/site';

const PERKS = [
  {
    icon: '📦',
    title: 'Precios de mayoreo reales',
    text: 'Descuentos por volumen escalonados. Entre más creces, mejor tu margen.',
  },
  {
    icon: '🚚',
    title: 'Envíos a todo México',
    text: 'Logística probada con empaque protegido a los 32 estados.',
  },
  {
    icon: '🌷',
    title: 'Inventario constante',
    text: '3 locales llenos de flor, follaje y guías. Reabasteces sin esperar importaciones.',
  },
  {
    icon: '🤝',
    title: 'Asesor personal',
    text: 'Un solo contacto por WhatsApp que conoce tu negocio y tus temporadas.',
  },
  {
    icon: '📖',
    title: 'Catálogo por temporada',
    text: 'Novedades cada temporada: primavera, otoñal, navideña y más.',
  },
  {
    icon: '💼',
    title: 'Hecho para tu negocio',
    text: 'Floristas, decoradores, event planners y dueños de tienda ya confían en nosotros.',
  },
];

export default function Wholesale() {
  return (
    <section className="section section-dark grain" id="mayoreo">
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'start', marginBottom: '3.5rem' }}>
          <FadeUp>
            <span className="eyebrow">Mayoreo & Menudeo</span>
            <h2 className="h-section" style={{ margin: '1.1rem 0 0' }}>
              Haz crecer tu negocio con{' '}
              <em style={{ color: 'var(--gold-soft)', fontStyle: 'italic' }}>flor premium</em>
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="lead" style={{ marginTop: '0.6rem' }}>
              Si tienes una florería, decoras eventos o vendes por catálogo,
              conviértete en distribuidor. Calidad que tus clientes notan,
              márgenes que tu contabilidad agradece — y menudeo con la misma
              atención para quien decora su propio espacio.
            </p>
          </FadeUp>
        </div>

        <Stagger className="grid-3">
          {PERKS.map((p) => (
            <Item key={p.title}>
              <div
                style={{
                  background: 'rgba(250,247,241,0.05)',
                  border: '1px solid rgba(250,247,241,0.12)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.9rem 1.7rem',
                  height: '100%',
                  transition: 'transform 0.5s var(--ease-luxe), background 0.5s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.background = 'rgba(250,247,241,0.09)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.background = 'rgba(250,247,241,0.05)';
                }}
              >
                <span style={{ fontSize: '1.8rem' }} aria-hidden="true">{p.icon}</span>
                <h3 style={{ fontSize: '1.25rem', margin: '0.9rem 0 0.4rem' }}>{p.title}</h3>
                <p style={{ color: 'rgba(244,239,230,0.65)', fontSize: '0.95rem' }}>{p.text}</p>
              </div>
            </Item>
          ))}
        </Stagger>

        <FadeUp delay={0.2} style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a
            className="btn btn-gold"
            style={{ fontSize: '1rem', padding: '1.15rem 2.8rem' }}
            href={wa('Hola 🌸 Tengo un negocio y me interesa comprar por mayoreo. ¿Me comparten precios y catálogo?')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar precios de mayoreo
          </a>
          <p style={{ color: 'rgba(244,239,230,0.5)', fontSize: '0.85rem', marginTop: '1rem' }}>
            Respuesta el mismo día · Sin compra mínima para tu primer pedido
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
