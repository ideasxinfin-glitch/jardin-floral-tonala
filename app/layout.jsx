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
  title: {
    default: 'Jardín Floral Tonalá — Flores Artificiales Premium | Arreglos y Decoración Floral en México',
    template: '%s | Jardín Floral Tonalá',
  },
  description:
    'Flores artificiales premium y arreglos florales de lujo en Tonalá, Jalisco. Decoración floral para bodas, hoteles, restaurantes, oficinas y hogares. Venta de mayoreo y menudeo con envíos a todo México. Guías florales, centros de mesa, ramos y arreglos personalizados.',
  keywords: [
    'flores artificiales',
    'flores artificiales premium',
    'arreglos florales artificiales',
    'arreglos florales de lujo',
    'decoración floral',
    'flores artificiales Tonalá',
    'flores artificiales Guadalajara',
    'flores artificiales Jalisco',
    'flores artificiales México',
    'arreglos florales para bodas',
    'decoración floral bodas',
    'centros de mesa artificiales',
    'flores artificiales mayoreo',
    'flores artificiales mayoreo Guadalajara',
    'flores artificiales mayoreo México',
    'decoración hoteles flores',
    'decoración restaurantes flores',
    'decoración oficinas flores artificiales',
    'guías florales artificiales',
    'ramos artificiales premium',
    'flores artificiales realistas',
    'flores artificiales toque natural',
    'arreglos florales para eventos',
    'florería artificial Tonalá',
    'florería Tonalá Jalisco',
    'flores artificiales envío todo México',
    'arreglos florales personalizados',
    'decoración floral para el hogar',
    'flores artificiales para sala',
    'flores artificiales baratas mayoreo',
  ],
  openGraph: {
    title: 'Jardín Floral Tonalá — Flores Artificiales Premium en México',
    description:
      'Arreglos florales artificiales de lujo para bodas, hoteles, restaurantes y hogares. Mayoreo y menudeo con envíos a todo México desde Tonalá, Jalisco.',
    locale: 'es_MX',
    type: 'website',
    siteName: 'Jardín Floral Tonalá',
    url: 'https://jardinfloraltonala.mx',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jardín Floral Tonalá — Arreglos florales artificiales premium',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jardín Floral Tonalá — Flores Artificiales Premium',
    description:
      'Arreglos florales artificiales de lujo. Decoración para bodas, hoteles y hogares. Envíos a todo México.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'TU_CODIGO_GOOGLE_SEARCH_CONSOLE',
  },
  category: 'shopping',
  other: {
    'geo.region': 'MX-JAL',
    'geo.placename': 'Tonalá, Jalisco',
    'geo.position': '20.6240;-103.2368',
    'ICBM': '20.6240, -103.2368',
    'content-language': 'es-MX',
  },
};

const jsonLdBusiness = {
  '@context': 'https://schema.org',
  '@type': 'Florist',
  '@id': 'https://jardinfloraltonala.mx/#business',
  name: 'Jardín Floral Tonalá',
  alternateName: 'Jardín Floral',
  description:
    'Flores artificiales premium, arreglos florales de lujo y decoración floral para bodas, hoteles, restaurantes, oficinas y hogares. Venta de mayoreo y menudeo con envíos a todo México.',
  url: 'https://jardinfloraltonala.mx',
  telephone: '+52 33 2603 9200',
  email: 'contacto@jardinfloraltonala.mx',
  image: 'https://jardinfloraltonala.mx/og-image.png',
  logo: 'https://jardinfloraltonala.mx/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Tonaltecas #200, Locales 22, 23 y 26',
    addressLocality: 'Tonalá',
    addressRegion: 'Jalisco',
    postalCode: '45400',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 20.6240,
    longitude: -103.2368,
  },
  hasMap: 'https://maps.app.goo.gl/CBMNLEgdfCgCwN8VA',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  areaServed: [
    { '@type': 'Country', name: 'México' },
    { '@type': 'State', name: 'Jalisco' },
    { '@type': 'City', name: 'Tonalá' },
    { '@type': 'City', name: 'Guadalajara' },
    { '@type': 'City', name: 'Zapopan' },
    { '@type': 'City', name: 'Tlaquepaque' },
  ],
  priceRange: '$$',
  currenciesAccepted: 'MXN',
  paymentAccepted: 'Efectivo, Transferencia, Tarjeta',
  sameAs: [
    'https://www.instagram.com/jardin_floral_tonala/',
    'https://www.facebook.com/jardinfloral.tonala',
    'https://www.tiktok.com/@jardinfloral.tonala',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Las flores artificiales se ven reales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Nuestras flores artificiales premium tienen tecnología de toque natural (Real Touch) que replica la textura, flexibilidad y apariencia de flores frescas. Incluyen detalles como gotas de rocío, degradados de color y tallos con textura vegetal realista.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hacen envíos a todo México?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Enviamos a toda la República Mexicana con empaque protegido premium para que tus arreglos lleguen en perfecto estado. También puedes visitarnos en nuestra tienda en Av. Tonaltecas #200, Tonalá, Jalisco.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Venden flores artificiales por mayoreo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Ofrecemos precios especiales de mayoreo para florerías, decoradores, wedding planners, hoteles, restaurantes y empresas. Contáctanos por WhatsApp para cotizaciones personalizadas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Dónde están ubicados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Estamos en Av. Tonaltecas #200, Locales 22, 23 y 26, Tonalá, Jalisco, en el corazón artesanal de la Zona Metropolitana de Guadalajara.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tipos de arreglos florales artificiales ofrecen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ofrecemos arreglos florales para bodas, centros de mesa, guías florales, ramos, arreglos para hoteles, restaurantes, oficinas y hogares. Trabajamos con rosas, peonías, orquídeas, hortensias, girasoles y más, todas en versión artificial premium.',
      },
    },
  ],
};

const jsonLdProducts = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Catálogo de Flores Artificiales Premium',
  description: 'Arreglos florales artificiales de lujo para todos los espacios',
  itemListElement: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'Arreglos Florales Artificiales Premium',
        description: 'Arreglos florales artificiales de lujo con flores de toque natural para hogares y eventos.',
        category: 'Decoración Floral',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'Decoración Floral para Bodas',
        description: 'Arcos florales, centros de mesa y bouquets artificiales premium para bodas y eventos.',
        category: 'Bodas y Eventos',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'Flores Artificiales Mayoreo',
        description: 'Venta por mayoreo de flores artificiales premium para florerías, decoradores y empresas.',
        category: 'Mayoreo',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProducts) }}
        />
        {children}
      </body>
    </html>
  );
}
