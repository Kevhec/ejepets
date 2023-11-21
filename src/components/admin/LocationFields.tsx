'use client';

import React, { useState } from 'react';
import { LocationContent } from './layout';

export interface LatLngState {
  lat: number
  lng: number
}

export default function LocationContainer() {
  const [latLng, setLatLng] = useState<LatLngState>({ lat: 0, lng: 0 });

  const handlePaste = (evt: React.ClipboardEvent<HTMLInputElement>) => {
    const { name } = evt.target as HTMLInputElement;
    const pastedData = evt.clipboardData.getData('text');

    const nameCondition = name === 'storeLat' || name === 'storeLong';
    const clipboardCondition = pastedData.includes(',');

    if (nameCondition && clipboardCondition) {
      const [newLat, newLng] = pastedData.split(',').map((el) => Number(el.trim()));

      setLatLng({ lat: newLat, lng: newLng });
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target as HTMLInputElement;
    const numericValue = parseFloat(value);
    const newLatLng = { ...latLng };

    if (name === 'storeLat') {
      newLatLng.lat = numericValue;
    } else if (name === 'storeLong') {
      newLatLng.lng = numericValue;
    }

    setLatLng(newLatLng);
  };

  return (
    <LocationContent
      handleChange={handleChange}
      handlePaste={handlePaste}
      lat={latLng.lat}
      lng={latLng.lng}
    />
  );
}
