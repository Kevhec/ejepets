import { StoreName, type Store } from '@/types/stores';
import type { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';

interface UseStoresFilter {
  storesCopy: QueryDocumentSnapshot<Store, DocumentData>[] | undefined
}

export default function useStoresFilter({ storesCopy }: UseStoresFilter) {
  const [selectedFilter, setSelectedFilter] = useState<StoreName>('todo');
  const [stores, setStores] = useState<QueryDocumentSnapshot<Store, DocumentData>[]>();

  // Filter method that recieves a callback which should apply the condition to filter
  const filterStores = useCallback(() => {
    const newStores = storesCopy?.filter((store) => {
      const storeData = store.data();
      const defaultCondition = selectedFilter === 'todo';
      const typesCondition = storeData.types.some((type) => type === selectedFilter);

      return defaultCondition || typesCondition;
    });

    setStores(newStores);
  }, [storesCopy, selectedFilter]);

  useEffect(() => {
    filterStores();
  }, [selectedFilter, filterStores]);

  return {
    selectedFilter,
    setSelectedFilter,
    stores,
    filterStores,
  };
}
