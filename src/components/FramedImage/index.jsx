import React, { Suspense } from 'react';
import './style.scss';

export default ({ className, src, alt, caption }) => (
  <Suspense fallback={null}>
    <figure className={`image ${className}`}>
      <img src={src} alt={caption || alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  </Suspense>
);
