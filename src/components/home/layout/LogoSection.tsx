import Image from 'next/image';
import React from 'react';

export default function LogoSection() {
  return (
    <figure className="md:mx-auto">
      <Image src='/logo-sm.svg' alt="EjePets logo" className="block md:hidden" />
      <Image src='/logo-lg.svg' alt="EjePets logo" className="hidden md:block" />
    </figure>
  );
}
