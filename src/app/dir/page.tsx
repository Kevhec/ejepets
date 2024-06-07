import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardsContainer from '@/components/directory/layout/CardsContainer';
import logoSm from '@public/logo-sm.svg'

export default function Dir() {
  return (
    <>
      <header className="bg-black px-8 py-4 flex items-center justify-between">
        <figure className="md:mx-auto">
          <Image src={logoSm} alt="EjePets logo" />
        </figure>
        <Link className="text-white text-base justify-self-start" href="/">
          Inicio
        </Link>
      </header>
      <div className="p-4 flex-1">
        <main className="bg-white mx-auto px-4 rounded-3xl">
          <h1 className="pt-8 mb-8 md:mb-14 text-center text-4xl">Directorio</h1>
          <CardsContainer />
        </main>
      </div>
    </>
  );
}
