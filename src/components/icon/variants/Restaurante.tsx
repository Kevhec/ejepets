import React from 'react';
import type { IconVariantProps } from '../iconTypes';

export default function Restaurante({ fill, width, height }: IconVariantProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 12}
      height={height || 16}
      viewBox="0 0 12 16"
      fill="none"
    >
      <path
        d="M2.4 16V8.68A3.3 3.3 0 0 1 .69 7.56 2.99 2.99 0 0 1 0 5.6V0h1.6v5.6h.8V0H4v5.6h.8V0h1.6v5.6c0 .747-.23 1.4-.69 1.96A3.3 3.3 0 0 1 4 8.68V16H2.4Zm8 0V9.6H8V4c0-1.107.39-2.05 1.17-2.83C9.95.39 10.894 0 12 0v16h-1.6Z"
        fill={fill || '#fff'}
      />
    </svg>
  );
}
