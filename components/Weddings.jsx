'use client';

import { FadeUp } from './Motion';
import Photo from './Photo';
import { PHOTOS } from '@/lib/photos';
import { wa } from '@/lib/site';

export default function Weddings() {
  return (
    <section className="section section-dark grain" id="bodas" style={{ overflow: 'hidden' }}>
      <div className="container grid-2">
        <FadeUp>
          <div style={{ position: 'relative' }}>
            <div
              className="img-frame"
              style={{ borderRadius: 'var(--radius-lg)', aspectRatio: '4 / 5', boxShadow: 'var(--shadow-float)' }}
            >
              <Photo src={PHOTOS.wedding} alt="Montaje de boda con flores artificiales de lujo" />
            </div>
            <div
              className="img-frame hide-mobile"
              style={{
                position: 'absolute',
                right: '-1.5rem',
                bottom: '-2rem',
                width: '45%',
                aspectRatio: '1',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-float)',
                border: '6px solid var(--ink)',
              }}
            >
              <Photo src={PHOTOS.weddingDetail} alt="Detalle de bouquet artificial para novia" />
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <span className="eyebrow">Bodas & Eventos</span>
          <h2 className="h-section" style={{ margin: '1.1rem 0 1.3rem' }}>
            El día más importante merece flores{' '}
            <em style={{ color: 'var(--gold-soft)', fontStyle: 'italic' }}>perfectas</em>
          </h2>
          <p className="lead" style={{ marginBottom: '1.8rem' }}>
            Nada puede fallar en tu boda. Nuestros montajes llegan impecables,
            resisten el sol, el viento y las horas de celebración — y al final,
            el recuerdo se queda contigo para siempre.
          </p>
          <ul style={{ display: 'grid', gap: '0.9rem', marginBottom: '2.4rem' }}>
            {[
              'Arcos, centros de mesa y guías florales a medida',
              'Paleta de color coordinada con tu evento',
              'Montajes que no se marchitan durante la celebración',
              'Renta o compra: tú decides',
            ].map((t) => (
              <li key={t} style={{ display: 'flex', gap: '0.8rem', alignItems: 'baseline', color: 'rgba(244,239,230,0.85)' }}>
                <span style={{ color: 'var(--gold-soft)' }} aria-hidden="true">✦</span>
                {t}
              </li>
            ))}
          </ul>
          <a
            className="btn btn-light"
            href={wa('Hola 🌸 Estoy planeando una boda y me gustaría cotizar decoración floral.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotizar mi boda
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
