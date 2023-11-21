'use client';

import React, {
  createContext, useMemo,
} from 'react';
import type { Store, StoreName } from '@/types/stores';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import useAllStores from '@/hooks/useAllStores';
import useStoresFilter from '@/hooks/useStoresFilter';

interface ContextType {
  stores: QueryDocumentSnapshot<Store, DocumentData>[] | undefined
  allStores: QueryDocumentSnapshot<Store, DocumentData>[] | undefined
  selectedFilter: StoreName
  setSelectedFilter: React.Dispatch<React.SetStateAction<StoreName>>
}

export const StoresContext = createContext<ContextType>({
  stores: undefined,
  allStores: undefined,
  selectedFilter: 'todo',
  setSelectedFilter: () => {},
});

export default function StoresProvider({
  children,
}: { children: React.ReactNode }) {
  const { allStores } = useAllStores();
  const {
    stores,
    selectedFilter,
    setSelectedFilter,
  } = useStoresFilter({ storesCopy: allStores });

  // Memoize stores value as it changes in every render
  const contextValue = useMemo(() => ({
    stores,
    allStores,
    selectedFilter,
    setSelectedFilter,
  }), [selectedFilter, setSelectedFilter, stores, allStores]);

  return (
    <StoresContext.Provider value={contextValue}>
      {children}
    </StoresContext.Provider>
  );
}
