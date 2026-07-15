import { wa, SOCIAL, ADDRESS } from '@/lib/site';

const COLS = [
  {
    title: 'Productos',
    links: [
      ['Colecciones', '#colecciones'],
      ['Arreglos premium', '#colecciones'],
      ['Guías florales', '#colecciones'],
      ['Línea otoñal', '#colecciones'],
    ],
  },
  {
    title: 'Servicios',
    links: [
      ['Bodas y eventos', '#bodas'],
      ['Hoteles y restaurantes', '#empresas'],
      ['Oficinas', '#empresas'],
      ['Venta de mayoreo', '#mayoreo'],
    ],
  },
  {
    title: 'Empresa',
    links: [
      ['Galería', '#galeria'],
      ['Testimonios', '#testimonios'],
      ['Envíos', '#envios'],
      ['Preguntas frecuentes', '#faq'],
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'rgba(244,239,230,0.7)', paddingTop: '5rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gap: '3rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(244,239,230,0.12)',
          }}
        >
          <div style={{ maxWidth: 300 }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.1rem' }}>
              <span
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  width: 44,
                  height: 44,
                  display: 'grid',
                  placeItems: 'center',
                  border: '1px solid var(--gold)',
                  borderRadius: '50%',
                  color: 'var(--cream)',
                }}
              >
                JF
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--cream)' }}>
                Jardín Floral
                <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: '0.62rem', letterSpacing: '0.42em', textTransform: 'uppercase', color: 'var(--gold-soft)' }}>
                  Tonalá
                </span>
              </span>
            </p>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.7 }}>
              Creando y transformando tus espacios con flores artificiales
              premium desde el corazón artesanal de Jalisco.
            </p>
          </div>

          {COLS.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold-soft)', marginBottom: '1.2rem', fontWeight: 500 }}>
                {c.title}
              </h3>
              <ul style={{ display: 'grid', gap: '0.7rem' }}>
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} style={{ fontSize: '0.93rem', transition: 'color 0.3s' }}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold-soft)', marginBottom: '1.2rem', fontWeight: 500 }}>
              Contacto
            </h3>
            <ul style={{ display: 'grid', gap: '0.8rem', fontSize: '0.93rem' }}>
              <li>📍 {ADDRESS}</li>
              <li>
                📱{' '}
                <a href={wa('Hola Jardín Floral 🌸')} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cream)' }}>
                  +52 33 1726 4992
                </a>
              </li>
              <li style={{ display: 'flex', gap: '1rem', marginTop: '0.4rem' }}>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href={SOCIAL.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
              </li>
            </ul>
          </div>
        </div>

        <p style={{ padding: '1.8rem 0', fontSize: '0.8rem', textAlign: 'center', color: 'rgba(244,239,230,0.4)' }}>
          © {new Date().getFullYear()} Jardín Floral Tonalá · Flores artificiales premium · Envíos a todo México
        </p>
      </div>
    </footer>
  );
}
