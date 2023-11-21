import React from 'react';
import type { IconVariantProps } from '../iconTypes';

export default function Veterinaria({ fill, width, height }: IconVariantProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 14}
      height={height || 16}
      viewBox="0 0 14 16"
      fill="none"
    >
      <path
        d="M4.736 6.04c.81-.139 1.411-.877 1.503-1.758.093-.897.302-4.5-1.05-4.271-3.51.595-3.263 6.505-.453 6.028Zm4.616 0c2.81.476 3.056-5.434-.453-6.03-1.352-.229-1.143 3.375-1.05 4.271.091.882.693 1.62 1.503 1.758ZM3.295 8.822a1.83 1.83 0 0 0-.437-1.203c-.444-.58-1.853-1.751-2.2-1.45-.722.627-.699 2.173-.263 3.297.223.624.763 1.064 1.395 1.064.83 0 1.505-.765 1.505-1.708ZM13.429 6.17c-.346-.3-1.755.872-2.199 1.451a1.83 1.83 0 0 0-.437 1.203c0 .943.675 1.708 1.505 1.708.632 0 1.172-.44 1.396-1.064.434-1.124.458-2.67-.265-3.298Zm-2.83 5.314c-1.279-.638-1.239-1.866-1.53-2.986a2.088 2.088 0 0 0-2.025-1.554 2.09 2.09 0 0 0-2.01 1.5c-.311 1.071-.124 2.32-1.518 3.031-1.132.37-1.59.908-1.59 2.181 0 1.035.888 2.142 2.034 2.28 1.279.192 2.276-.06 3.084-.52.808.46 1.805.712 3.086.52 1.145-.138 2.033-1.241 2.033-2.28 0-1.301-.43-1.786-1.564-2.172ZM9.091 13.04H7.765l.002 1.391H6.32l.002-1.391H4.917v-1.391h1.407l-.002-1.392h1.445l-.002 1.392h1.326v1.39Z"
        fill={fill || '#fff'}
      />
    </svg>
  );
}