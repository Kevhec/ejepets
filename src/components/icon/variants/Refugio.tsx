import React from 'react';
import type { IconVariantProps } from '../iconTypes';

export default function Refugio({ fill, width, height }: IconVariantProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 18}
      height={height || 18}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M17 15.875v-8.5a.999.999 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8v8.5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Z"
        stroke={fill || '#fff'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
