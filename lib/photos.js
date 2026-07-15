// Manifiesto central de fotografía editorial.
// Reemplaza cualquier URL por fotos propias colocándolas en /public/img
// y usando la ruta local, p. ej. '/img/hero.jpg'.

const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const PHOTOS = {
  hero: u('photo-1616486338812-3dadae4b4ace', 2200),
  heroCard: u('photo-1487530811176-3780de880c2d', 800),

  whyLiving: u('photo-1618221195710-dd6b41faaea6', 1400),

  colPrimavera: u('photo-1490750967868-88aa4486c946', 1100),
  colRosas: u('photo-1455659817273-f96807779a8a', 1100),
  colOtonal: u('photo-1508610048659-a06b669e3321', 1100),
  colTropical: u('photo-1416879595882-3373a0480b5b', 1100),

  arr1: u('photo-1487530811176-3780de880c2d', 900),
  arr2: u('photo-1416879595882-3373a0480b5b', 900),
  arr3: u('photo-1455659817273-f96807779a8a', 900),
  arr4: u('photo-1526047932273-341f2a7631f9', 900),

  wedding: u('photo-1519225421980-715cb0215aed', 1600),
  weddingDetail: u('photo-1465495976277-4387d4b0b4c6', 900),

  hotel: u('photo-1566073771259-6a8506099945', 1400),
  restaurant: u('photo-1517248135467-4c7edcad34c4', 1400),
  office: u('photo-1497366216548-37526070297c', 1400),
  interior: u('photo-1586023492125-27b2c045efd7', 1400),

  wholesale: u('photo-1441986300917-64674bd600d8', 1400),

  gal1: u('photo-1490750967868-88aa4486c946', 900),
  gal2: u('photo-1519225421980-715cb0215aed', 900),
  gal3: u('photo-1566073771259-6a8506099945', 900),
  gal4: u('photo-1416879595882-3373a0480b5b', 900),
  gal5: u('photo-1455659817273-f96807779a8a', 900),
  gal6: u('photo-1586023492125-27b2c045efd7', 900),
  gal7: u('photo-1526047932273-341f2a7631f9', 900),
  gal8: u('photo-1508610048659-a06b669e3321', 900),

  ctaBg: u('photo-1600585154340-be6161a56a0c', 2000),
};
