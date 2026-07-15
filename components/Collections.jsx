'use client';

import { FadeUp, Stagger, Item } from './Motion';
import Photo from './Photo';
import { PHOTOS } from '@/lib/photos';
import { wa } from '@/lib/site';

const COLLECTIONS = [
  {
    img: PHOTOS.colPrimavera,
    name: 'Colección Primavera',
    desc: 'Tonos frescos y luz. El renacer de tus espacios.',
    tag: 'Más vendida',
  },
  {
    img: PHOTOS.colRosas,
    name: 'Rosas Eternas',
    desc: 'El clásico del romance, elevado a arte.',
    tag: null,
  },
  {
    img: PHOTOS.colOtonal,
    name: 'Colección Otoñal',
    desc: 'Calidez dorada inspirada en nuestra línea de temporada.',
    tag: 'Edición limitada',
  },
  {
    img: PHOTOS.colTropical,
    name: 'Guías & Follajes',
    desc: 'Guías florales y verdes arquitectónicos para grandes montajes.',
    tag: null,
  },
];

export default function Collections() {
  return (
    <section className="section section-ivory" id="colecciones">
      <div className="container">
        <div className="section-head center">
          <FadeUp>
            <span className="eyebrow">Catálogo Premium</span>
            <h2 className="h-section">
              Colecciones que <em className="gold-accent">enamoran</em>
            </h2>
            <p className="lead">
              Cada colección está curada como una pieza de diseño: proporción,
              textura y color en perfecto equilibrio.
            </p>
          </FadeUp>
        </div>

        <Stagger className="grid-4">
          {COLLECTIONS.map((c) => (
            <Item key={c.name}>
              <article className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="img-frame" style={{ aspectRatio: '4 / 5', position: 'relative' }}>
                  <Photo src={c.img} alt={`${c.name} — flores artificiales premium`} />
                  {c.tag && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        background: 'rgba(28,27,24,0.82)',
                        color: 'var(--gold-soft)',
                        fontSize: '0.7rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        padding: '0.42rem 0.9rem',
                        borderRadius: 999,
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {c.tag}
                    </span>
                  )}
                </div>
                <div style={{ padding: '1.5rem 1.5rem 1.7rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.35rem' }}>{c.name}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.92rem', flexGrow: 1 }}>{c.desc}</p>
                  <a
                    href={wa(`Hola 🌸 Me interesa la ${c.name}. ¿Me comparten disponibilidad y precios?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: '0.6rem',
                      fontSize: '0.88rem',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                      color: 'var(--sage-deep)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    Cotizar por WhatsApp
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </Item>
          ))}
        </Stagger>

        <FadeUp delay={0.2} style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a
            className="btn btn-primary"
            href={wa('Hola Jardín Floral 🌸 ¿Me comparten su catálogo completo?')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Recibir catálogo completo
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
