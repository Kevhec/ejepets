import React from 'react';
import type { IconComponentMapping, IconVariant, IconVariantProps } from './iconTypes';
import './index.css';
import {
  MapFlag,
  Refugio,
  Veterinaria,
  Peluqueria,
  Tienda,
  Restaurante,
  Parque,
  Hotel,
} from './variants';

interface Props extends IconVariantProps {
  variant: IconVariant
}

const iconComponentMapping: IconComponentMapping = {
  'map-flag': MapFlag,
  refugio: Refugio,
  veterinaria: Veterinaria,
  peluqueria: Peluqueria,
  tienda: Tienda,
  restaurante: Restaurante,
  parque: Parque,
  hotel: Hotel,
};

export default function Icon({
  variant, fill, width, height, stroke, style, className,
} : Props) {
  const IconComponent = iconComponentMapping[variant];

  if (IconComponent) {
    return (
      <IconComponent
        fill={fill}
        width={width}
        height={height || width}
        stroke={stroke}
        style={style || {}}
        className={className}
      />
    );
  }

  return null;
}
