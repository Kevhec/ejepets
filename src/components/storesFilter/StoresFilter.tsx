'use client';

import React, { useState } from 'react';
import useStoresContext from '@/hooks/useStoresContext';
import mergeTailwind from '@/utils/mergeTailwind';
import type { StoreName } from '@/types/stores';
import DropdownButton from './DropdownButton';
import DropdownInput from './DropdownInput';
import type { IconVariant } from '../icon/iconTypes';

type StoreStyleMap = {
  [key in StoreName]: string;
};

const storeStyleMap: StoreStyleMap = {
  todo: 'bg-white text-black',
  refugio: 'bg-gold',
  veterinaria: 'bg-tomato',
  peluqueria: 'bg-dark-gray',
  tienda: 'bg-celurean',
  restaurante: 'bg-kobicha',
  parque: 'bg-apple-green',
  hotel: 'bg-crimnson',
};

const storeDefaultStyle = 'md:font-bold text-white bg-white px-4 py-[6px] rounded-full leading-none hover:opacity-90 transition-opacity flex items-center gap-2 justify-between text-sm';

export default function StoresFilter() {
  const [hasDropdown, setHasDropdown] = useState(false);
  const { setSelectedFilter, selectedFilter } = useStoresContext();
  const storesKeys = Object.keys(storeStyleMap) as StoreName[];

  const handleFilterClick = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newStore = evt.target.value as StoreName;

    if (setSelectedFilter) {
      setSelectedFilter(newStore);
    }
  };

  const handleFilterToggle = () => {
    const newDropdownState = !hasDropdown;
    setHasDropdown(newDropdownState);
  };

  const dropdownClasses = mergeTailwind(
    'absolute top-full translate-y-3 md:-left-3 md:translate-x-0 left-1/2 -translate-x-1/2 transition-all duration-200 overflow-hidden max-h-0',
    { 'max-h-80 md:max-h-96': hasDropdown },
  );

  return (
    <div className="relative z-30">
      <DropdownButton
        className={`${storeDefaultStyle} ${storeStyleMap[selectedFilter]} capitalize text-left w-[124px]`}
        onClick={handleFilterToggle}
        icon={selectedFilter as IconVariant}
      >
        { selectedFilter }
      </DropdownButton>
      <div className={dropdownClasses}>
        <form className="rounded-b-lg md:flex md:flex-col min-w-[280px] md:min-w-0 grid grid-cols-2 gap-2 bg-black p-3">
          {
            storesKeys.map((store) => {
              const filterStyle = `${storeDefaultStyle} ${storeStyleMap[store]} capitalize`;
              const inputId = `filter-${store}`;
              return (
                <DropdownInput
                  id={inputId}
                  key={inputId}
                  className={filterStyle}
                  value={store}
                  onChange={handleFilterClick}
                  name="store-filter"
                  icon={store as IconVariant}
                >
                  { store }
                </DropdownInput>
              );
            })
          }
        </form>
      </div>
    </div>
  );
}
