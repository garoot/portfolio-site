// __mocks__/next/image.js
import React from 'react';

// Strip next/image-only props so React doesn't warn about unknown DOM
// attributes, but keep src/alt/className so tests can assert on them.
const MockedImage = ({
  src,
  alt,
  priority,
  fill,
  quality,
  sizes,
  loader,
  placeholder,
  blurDataURL,
  unoptimized,
  ...props
}) => <img src={src} alt={alt} {...props} />;

export default MockedImage;
