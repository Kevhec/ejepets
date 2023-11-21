import { StoresContext } from '@/context/storesContext';
import { useContext } from 'react';

export default function useStoresContext() {
  const {
    selectedFilter,
    setSelectedFilter,
    stores,
    allStores,
  } = useContext(StoresContext);

  return {
    stores, selectedFilter, setSelectedFilter, allStores,
  };
}
