'use client';

import { FadeUp } from './Motion';
import Photo from './Photo';
import { PHOTOS } from '@/lib/photos';
import { wa, ADDRESS } from '@/lib/site';

export default function FinalCta() {
  return (
    <section
      className="section"
      id="contacto"
      style={{ position: 'relative', overflow: 'hidden', minHeight: '70vh', display: 'flex', alignItems: 'center' }}
    >
      <div style={{ position: 'absolute', inset: 0 }}>
        <Photo src={PHOTOS.ctaBg} alt="" aria-hidden="true" />
      </div>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(120deg, rgba(28,27,24,0.7), rgba(28,27,24,0.4))',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <FadeUp>
          <span className="eyebrow" style={{ color: '#E8D5A3', justifyContent: 'center', textShadow: '0 1px 6px rgba(0,0,0,0.3)' }}>
            Da el primer paso
          </span>
          <h2
            className="h-section"
            style={{ color: '#fff', maxWidth: '18ch', margin: '1.2rem auto 1.4rem', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
          >
            Tu espacio está a un mensaje de <em style={{ color: 'var(--gold-soft)', fontStyle: 'italic' }}>florecer</em>
          </h2>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.92)', margin: '0 auto 2.6rem', textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
            Escríbenos hoy y recibe asesoría personalizada, fotos reales y tu
            cotización el mismo día. Sin compromiso.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              className="btn btn-whatsapp"
              style={{ fontSize: '1.02rem', padding: '1.15rem 2.7rem' }}
              href={wa('Hola Jardín Floral 🌸 Quiero transformar mi espacio. ¿Me ayudan con una cotización?')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar por WhatsApp ahora
            </a>
            <a className="btn btn-ghost" href="#colecciones" style={{ color: 'var(--cream)', background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.3)' }}>
              Volver al catálogo
            </a>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', marginTop: '1.6rem', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
            📍 {ADDRESS} · 📱 +52 33 2603 9200
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
