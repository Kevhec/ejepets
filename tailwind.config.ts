import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#A5C5CF',
        black: '#1E1E24',
        'coral-pink': '#FB9F89',
        'yellow-chartreuse': '#E0FF4F',
        'green-mindaro': '#D6F49D',
        gold: '#CDB900',
        tomato: '#FF6642',
        'dark-gray': '#757575',
        celurean: '#127FA2',
        kobicha: '#724923',
        'apple-green': '#80BE0B',
        crimnson: '#8B2323',
        transparent: 'transparent',
      },
      fontFamily: {
        urbanist: ['var(--font-urbanist)'],
        fraunces: ['var(--font-fraunces)'],
      },
      backgroundImage: {
        'dashed-border': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='98%25' height='96%25' x='1%25' y='2%25' fill='none' rx='16' ry='16' stroke='%23724923' stroke-width='4' stroke-dasharray='15, 16' stroke-linecap='round'/%3E%3C/svg%3E%0A\")",
        'cat-paw': 'url(/catpaw.svg)',
        'dog-paw': 'url(/dogpaw.svg)',
        'divisor-green-waves': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' viewBox='0 0 1277 204' fill='none' preserveAspectRatio='xMidYMid meet'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M565.669 53.7266C386.026 -6.45475 172.471 -28.5185 0 53.7266V203.863H623H1277V53.7266C1090 95.8631 681 92.3631 565.669 53.7266Z' fill='%23D6F49D'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
