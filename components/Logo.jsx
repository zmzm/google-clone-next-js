import React from 'react';
import Image from 'next/image';

const Logo = ({ altText = 'logo', width = 400, height = 240 }) => (
  <Image
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
    width={width}
    height={height}
    alt={altText}
  />
);

export default Logo;
