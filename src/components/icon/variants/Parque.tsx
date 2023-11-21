import React from 'react';
import type { IconVariantProps } from '../iconTypes';

export default function Parque({ fill, width, height }: IconVariantProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 15}
      height={height || 16}
      viewBox="0 0 15 16"
      fill="none"
    >
      <path
        d="M9.36 16H6.24v-3.2H.6L3.8 8H2.2l5.6-8 5.6 8h-1.6l3.2 4.8H9.36V16Z"
        fill={fill || '#fff'}
      />
    </svg>
  );
}
