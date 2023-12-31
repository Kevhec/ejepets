import React from 'react';
import type { IconVariantProps } from '../iconTypes';

export default function Hotel({ fill, width, height }: IconVariantProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 16}
      height={height || 12}
      viewBox="0 0 16 12"
      fill="none"
    >
      <path
        d="M0 11.455V.545h1.455v7.273h5.818V2h5.818c.8 0 1.485.285 2.055.855.57.57.854 1.254.854 2.054v6.546h-1.454V9.273H1.455v2.182H0ZM4.364 7.09a2.104 2.104 0 0 1-1.546-.636 2.104 2.104 0 0 1-.636-1.546c0-.606.212-1.121.636-1.545.424-.425.94-.637 1.546-.637.606 0 1.12.212 1.545.637.424.424.636.939.636 1.545S6.333 6.03 5.91 6.455c-.424.424-.94.636-1.545.636Zm4.363.727h5.819V4.91c0-.4-.143-.742-.428-1.028a1.398 1.398 0 0 0-1.027-.426H8.727v4.363ZM4.364 5.636c.206 0 .379-.07.518-.21a.7.7 0 0 0 .209-.517.704.704 0 0 0-.21-.518.7.7 0 0 0-.517-.21.704.704 0 0 0-.519.21.7.7 0 0 0-.209.518c0 .206.07.379.21.519a.7.7 0 0 0 .518.208Zm0 0a.704.704 0 0 1-.519-.21.7.7 0 0 1-.209-.517c0-.206.07-.379.21-.518a.7.7 0 0 1 .518-.21c.206 0 .379.07.518.21a.7.7 0 0 1 .209.518c0 .206-.07.379-.21.519a.7.7 0 0 1-.517.208Zm4.363-2.181h4.364c.4 0 .743.142 1.027.427.286.285.428.628.428 1.027v2.91H8.727V3.454Z"
        fill={fill || '#fff'}
      />
    </svg>
  );
}
