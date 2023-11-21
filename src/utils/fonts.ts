import { Urbanist, Fraunces } from 'next/font/google';

const urbanist = Urbanist({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-urbanist',
});

const fraunces = Fraunces({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-fraunces',
});

export { urbanist, fraunces };
