import React from 'react';
import dynamic from 'next/dynamic';
import StoresFilter from '@/components/storesFilter/StoresFilter';

const DynamicMap = dynamic(() => import('@/components/LeafletMap/Map'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function MapSection() {
  return (
    <div className="container z-10 mb-2 border-2 border-black rounded-xl overflow-hidden">
      <div className="bg-black px-5 py-3">
        <div className="flex items-center gap-4">
          <p className="text-white">Mostrar:</p>
          <StoresFilter />
        </div>
      </div>
      <figure className="h-[250px] md:h-[300px] lg:h-[400px] relative z-20">
        <DynamicMap />
      </figure>
    </div>
  );
}
