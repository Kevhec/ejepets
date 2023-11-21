import Image from 'next/image';
import React from 'react';
import logoSm from 'public/logo-sm.svg';
import logoLg from 'public/logo-lg.svg';

export default function LogoSection() {
  return (
    <figure className="md:mx-auto">
      <Image src={logoSm} alt="EjePets logo" className="block md:hidden" />
      <Image src={logoLg} alt="EjePets logo" className="hidden md:block" />
    </figure>
  );
}
