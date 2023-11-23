import React from 'react';
import AboutCard from '@/components/AboutCard';
import pelulandia1 from 'public/pelulandia1.jpg';
import pelulandia2 from 'public/pelulandia2.webp';

export default function AboutSection() {
  return (
    <section className="bg-green-mindaro wave-clip-path">
      <div className="container overflow-hidden pt-28 md:pt-64 pb-9 mx-auto px-4 md:px-16 lg:px-24">
        <h3 className="mb-12 text-2xl md:text-4xl">Sobre EjePets</h3>
        <div className="px-4 md:p-0 flex flex-col gap-16">
          <AboutCard
            imageProps={{ src: pelulandia1, alt: 'Cat' }}
          >
            EjePets es un proyecto personal, nace como un tributo a mi natal pereira por
            sus esfuerzos para convertirse en la ciudad más petfriendly de suramérica.
            Por esto, pretendo facilitar el acceso a todos aquellos lugares que podamos
            frecuentar con nuestras mascotas, tanto para servicios dedicados a ellas como
            establecimientos que admitan su acceso.
          </AboutCard>
          <AboutCard
            imageProps={{ src: pelulandia2, alt: 'Cat' }}
            inverted
          >
            <p className="inline">
              Además de establecimientos que se han sumado a la iniciativa pet-friendly,
              Pereira invirtió en la construcción de un hospital público veterinario para
              perros y gatos en situación de calle o cullos dueños sean de estratos bajos.
              A este se puede acceder con el sisbén si es de categoría A, B O C9, para más
              información puedes dar&nbsp;
            </p>
            <a
              className="inline relative before:content-[''] before:h-1 before:bg-kobicha before:w-[105%] before:absolute before:-bottom-[2px] before:-translate-x-1/2 before:left-1/2 before:rounded-full hover:before:bg-opacity-75 before:transition-all italic"
              href="https://www.pereira.gov.co/publicaciones/7396/pelulandia-el-primer-hospital-publico-veterinario-en-pereira/"
            >
              click aquí.
            </a>
          </AboutCard>
        </div>
      </div>
    </section>
  );
}
