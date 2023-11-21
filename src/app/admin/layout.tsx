'use client';

import React from 'react';
import AuthProvider from '@/context/authContext';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <div className="bg-light-blue min-h-screen grid place-content-center p-2">
        {children}
      </div>
    </AuthProvider>
  );
}
