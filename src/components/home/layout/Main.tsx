import React from 'react';
import MapSection from './MapSection';

export default function Main() {
  return (
    <main className="px-3 relative z-10 md:p-0 md:flex md:flex-col">
      <h2 className="text-center font-fraunces font-normal text-4xl mb-4">
        ¿Qué buscas?
      </h2>
      <MapSection />
      <p className="text-base md:hidden z-10">
        Aquí podrás encontrar lugares para compartir con tus mascotas en Pereira,
        la ciudad que apunta a ser la más petfriendly de suramérica.
      </p>
    </main>
  );
}
