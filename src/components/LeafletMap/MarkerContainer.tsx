'use client';

import { Store } from '@/types/stores';
import React, { useMemo, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { urbanist } from '@/utils/fonts';
import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { Icon, IconOptions } from 'leaflet';
import getMarkerIcon from '@/utils/getMarkerIcon';
import useStoresContext from '@/hooks/useStoresContext';
import StoreCard from '@/components/StoreCard';

interface Props {
  store: QueryDocumentSnapshot<Store, DocumentData>
}

export default function MarkerContainer({ store }: Props) {
  const [icon, setIcon] = useState<Icon<IconOptions> | undefined>(undefined);
  const { selectedFilter } = useStoresContext();

  const storeData = useMemo(() => store.data(), [store]);
  const storePos = storeData.location.latlng;
  const [
    storeLatitude, storeLongitude,
  ] = [storePos.latitude, storePos.longitude];

  useMemo(() => {
    let iconType;

    if (selectedFilter !== 'todo') {
      iconType = selectedFilter;
    } else {
      iconType = storeData?.types[0] ? storeData?.types[0] : 'generic';
    }

    const newIcon = getMarkerIcon(iconType);
    setIcon(newIcon);
  }, [selectedFilter, storeData?.types]);

  return (
    <Marker
      position={[storeLatitude, storeLongitude]}
      icon={icon}
    >
      <Popup className={urbanist.className}>
        <StoreCard
          type="map"
          img={storeData.img}
          name={storeData.name}
          description={storeData.description}
          contact={storeData.contact}
          storeId={store.id}
        />
      </Popup>
    </Marker>
  );
}
