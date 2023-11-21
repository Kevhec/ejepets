import React from 'react';
import type { IconVariantProps } from '../iconTypes';

export default function MapFlag({ fill, width, height }: IconVariantProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '16'}
      height={height || '20'}
      fill="none"
    >
      <g fill={fill || '#1E1E24'} clipPath="url(#a)">
        <path fillRule="evenodd" d="M0 8.77a8.006 8.006 0 0 1 2.345-5.658A8.001 8.001 0 0 1 16 8.769c0 3.293-1.647 5.903-3.412 7.666a13.372 13.372 0 0 1-2.603 2.037 7.712 7.712 0 0 1-1.089.544c-.304.121-.623.215-.896.215s-.592-.094-.896-.215a7.949 7.949 0 0 1-1.09-.544 13.375 13.375 0 0 1-2.602-2.037C1.647 14.672 0 12.062 0 8.77Zm8-3.078A3.076 3.076 0 0 0 4.923 8.77 3.08 3.08 0 0 0 8 11.85a3.076 3.076 0 0 0 3.077-3.08A3.08 3.08 0 0 0 8 5.692Z" clipRule="evenodd" />
        <path d="M6.4 8.764a2 2 0 0 1 .469-1.305 1.5 1.5 0 0 1 1.13-.54 1.5 1.5 0 0 1 1.132.54A2 2 0 0 1 9.6 8.764a2 2 0 0 1-.469 1.306A1.5 1.5 0 0 1 8 10.61a1.5 1.5 0 0 1-1.131-.54 2 2 0 0 1-.47-1.306Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .77h16V19.23H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
