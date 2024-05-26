// __mocks__/next/image.js
import React from 'react';

const MockedImage = ({ src, alt, ...props }) => {
    return <img src={src} alt={alt} {...props} />;
};

export default MockedImage;
