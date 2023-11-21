import { useEffect, useState } from 'react';
import type { Store } from '@/types/stores';
import { getDocs, type DocumentData, type QueryDocumentSnapshot } from 'firebase/firestore';
import { storesCol } from '@/services/firebase/config';

export default function useAllStores() {
  const [allStores, setAllStores] = useState<QueryDocumentSnapshot<Store, DocumentData>[]>();

  // Effect if IIFE to get all stores data from firestore
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(storesCol);
      setAllStores(querySnapshot.docs);
    })();
  }, []);

  return { allStores };
}
