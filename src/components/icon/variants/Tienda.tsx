import React from 'react';
import type { IconVariantProps } from '../iconTypes';

export default function Tienda({ fill, width, height }: IconVariantProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 16}
      height={height || 16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M4.905.202 1.935 5.4H.8a.8.8 0 0 0-.772 1.01l2.239 8.21a1.603 1.603 0 0 0 1.544 1.179h8.378c.718 0 1.353-.484 1.543-1.18l2.24-8.21a.799.799 0 0 0-.773-1.01h-1.136L11.093.203 9.706.996l2.516 4.403H3.778L6.294.996 4.905.202ZM9.6 8.598h1.6v4H9.6v-4Zm-4.8 0h1.6v4H4.8v-4Z"
        fill={fill || '#fff'}
      />
    </svg>
  );
}
