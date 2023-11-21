import React from 'react';

export type IconVariant =
  'map-flag'
  | 'veterinaria'
  | 'refugio'
  | 'peluqueria'
  | 'tienda'
  | 'restaurante'
  | 'parque'
  | 'hotel';

export interface IconVariantProps {
  fill?: string
  stroke?: string
  width?: number
  height?: number
  style?: React.CSSProperties
  className?: string
}

export type IconComponentMapping = {
  [key in IconVariant]: React.FC<IconVariantProps>;
};
