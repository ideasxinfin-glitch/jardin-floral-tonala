import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://jardinfloraltonala.mx'),
  title: 'Jardín Floral Tonalá — Flores Artificiales Premium en México',
  description:
    'Flores artificiales premium y arreglos florales de lujo. Decoración para bodas, hoteles, restaurantes y hogares. Mayoreo y menudeo con envíos a todo México.',
  keywords: [
    'flores artificiales premium',
    'arreglos florales de lujo',
    'flores artificiales Tonalá',
    'decoración floral bodas México',
    'flores artificiales mayoreo Guadalajara',
    'decoración hoteles restaurantes',
  ],
  openGraph: {
    title: 'Jardín Floral Tonalá — Flores Artificiales Premium',
    description:
      'Creando y transformando tus espacios. Arreglos florales de lujo con envíos a todo México.',
    locale: 'es_MX',
    type: 'website',
    siteName: 'Jardín Floral Tonalá',
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Jardín Floral Tonalá',
  description:
    'Flores artificiales premium, arreglos de lujo y decoración floral para bodas, hoteles, restaurantes y hogares. Mayoreo y menudeo.',
  telephone: '+52 33 1726 4992',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Tonaltecas #200, Locales 22, 23 y 26',
    addressLocality: 'Tonalá',
    addressRegion: 'Jalisco',
    addressCountry: 'MX',
  },
  areaServed: 'MX',
  priceRange: '$$',
  sameAs: [
    'https://www.instagram.com/jardin_floral_tonala/',
    'https://www.facebook.com/jardinfloral.tonala',
    'https://www.tiktok.com/@jardinfloral.tonala',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
