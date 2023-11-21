import React from 'react';
import Link from 'next/link';
import LogoSection from './LogoSection';

export default function Header() {
  return (
    <header className="bg-black px-8 lg:px-16 py-4 mb-8 md:bg-transparent flex items-center justify-between md:justify-normal md:flex-col md:items-start">
      <LogoSection />
      <p className="hidden md:text-lg md:block md:max-w-[400px] md:my-4">
        Aquí podrás encontrar lugares para compartir con tus mascotas en Pereira,
        la ciudad que apunta a ser la más petfriendly de suramérica.
      </p>
      <Link className="text-white text-base md:rounded-lg md:hover:bg-opacity-90 md:transition-colors md:bg-black md:px-7 md:py-2 justify-self-start" href="dir">Directorio</Link>
    </header>
  );
}
