import Image from 'next/image';
import React from 'react';

interface BannerProps {
  src: string;
  alt: string;
  title?: string;
}

const Banner: React.FC<BannerProps> = ({ src, alt, title }) => {
  return (
    <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl">
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-scale-down rounded-3xl lg:object-cover"
        width={1920}
        height={1080}
      />
      {title && (
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            {title}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Banner;
