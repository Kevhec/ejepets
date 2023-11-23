import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface Props {
  children: React.ReactNode
  imageProps: {
    src: StaticImageData
    alt: string
  }
  inverted?: boolean
}

export default function AboutCard({ children, imageProps, inverted }: Props) {
  const catPawProps = {
    src: '/catpaw.svg',
    dim: {
      w: 67,
      h: 57,
    },
  };
  const dogPawProps = {
    src: '/dogpaw.svg',
    dim: {
      w: 57,
      h: 57,
    },
  };

  const pawProps = inverted ? dogPawProps : catPawProps;

  return (
    <div className="overflow-visible md:grid md:grid-cols-2 relative md:gap-16 lg:gap-32 lg:leading-[2.025rem] md:items-center">
      <Image
        src={pawProps.src}
        width={pawProps.dim.w}
        height={pawProps.dim.h}
        alt=""
        className={`absolute top-[-60px] md:top-[-40px] ${inverted ? 'left-[-40px] -rotate-12' : 'right-[-40px] rotate-12'}`}
      />
      <div
        className="text-base lg:h-[70%] lg:flex lg:items-center font-medium lg:text-lg h-fit relative before:pointer-events-none before:content-[''] before:w-[110%] before:h-[120%] lg:before:w-[125%] lg:before:h-[140%] xl:before:w-[120%] before:bg-dashed-border before:rounded-2xl before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2"
      >
        <div>
          {children}
        </div>
      </div>
      <Image
        src={imageProps.src}
        alt={imageProps.alt}
        className={`hidden md:block object-cover w-full rounded-lg h-[300px] ${inverted ? 'order-first' : ''}`}
        width={200}
        height={300}
      />
    </div>
  );
}
