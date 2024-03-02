'use client';

import React from 'react';
import useStores from '@/hooks/useStores';
import StoreCard from '@/components/StoreCard';
import mergeTailwind from '@/utils/mergeTailwind';
import { useMediaQuery } from 'react-responsive';

export default function CardsContainer() {
  const { allStores } = useStores();
  const isTablet = useMediaQuery({ query: '(min-width: 48rem)' });

  return (
    <div className="grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-2 pb-6">
      {allStores?.map((store, i) => {
        const storeData = store.data();
        const pointer = i + 1;

        const hasDashedBorder = pointer % 4 === 0 || pointer % 4 === 1 || !isTablet;

        const dashedBorderClasses = mergeTailwind(
          'relative',
          { "before:pointer-events-none before:content-[''] before:w-[105%] before:h-[105%] lg:before:h-[110%] before:bg-dashed-border before:rounded-2xl before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2": hasDashedBorder },
        );

        return (
          <div className={dashedBorderClasses}>
            <StoreCard
              type="directory"
              images={storeData.images}
              name={storeData.name}
              description={storeData.description}
              contact={storeData.contact}
              storeId={store.id}
              key={store.id}
            />
          </div>
        );
      })}

    </div>
  );
}
