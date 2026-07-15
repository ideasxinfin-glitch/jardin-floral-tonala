'use client';

import { useState } from 'react';

// Fotografía editorial con degradado de respaldo:
// si una imagen no carga, muestra una composición botánica de la marca.
export default function Photo({ src, alt, className = '', style, ...rest }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`ph ${className}`}
        style={{
          background:
            'linear-gradient(150deg, #E9DFCC 0%, #F4EFE6 45%, #C9D1C2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          ...style,
        }}
      >
        <svg width="88" height="88" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 21c0-6 0-9 0-12M12 9c0-2.5 1.8-4.5 4.5-5-.3 2.8-2 4.7-4.5 5Zm0 4c0-2.5-1.8-4.5-4.5-5 .3 2.8 2 4.7 4.5 5Z"
            stroke="#6F7D66"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`cover ${className}`}
      style={style}
      {...rest}
    />
  );
}
