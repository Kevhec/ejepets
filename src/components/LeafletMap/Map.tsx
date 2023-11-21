'use client';

import React from 'react';
import {
  MapContainer, TileLayer,
} from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import useStoresContext from '@/hooks/useStoresContext';
import MarkerContainer from './MarkerContainer';

export default function Map() {
  const { stores } = useStoresContext();

  const pereiraLocation: LatLngExpression = [4.80921871285737, -75.71239716258806];

  return (
    <MapContainer
      style={{ height: '100%' }}
      center={pereiraLocation}
      zoom={12}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        stores?.map((store) => (
          <MarkerContainer key={store.id} store={store} />
        ))
      }
    </MapContainer>
  );
}
