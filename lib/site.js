export const WA_NUMBER = '523317264992';

export function wa(text) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const WA_DEFAULT = wa(
  'Hola Jardín Floral 🌸 Me gustaría recibir una cotización.'
);

export const SOCIAL = {
  instagram: 'https://www.instagram.com/jardin_floral_tonala/',
  facebook: 'https://www.facebook.com/jardinfloral.tonala',
  tiktok: 'https://www.tiktok.com/@jardinfloral.tonala',
};

export const ADDRESS = 'Av. Tonaltecas #200, Locales 22, 23 y 26 · Tonalá, Jalisco';
