import React from 'react';
import type { Metadata } from 'next';
import { fraunces, urbanist } from '@/utils/fonts';
import 'leaflet/dist/leaflet.css';
import '@styles/main.scss';
import Footer from '@/components/home/layout/Footer';
import StoresProvider from '@/context/storesContext';

export const metadata: Metadata = {
  title: 'EjePets',
  description: 'Encuentra establecimientos pet-friendly en Pereira Colombia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={`${urbanist.className} ${fraunces.variable} bg-light-blue overflow-x-hidden min-h-screen flex flex-col justify-between`}
      >
        <StoresProvider>
          {children}
          <Footer />
        </StoresProvider>
      </body>
    </html>
  );
}
