'use client';

import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import Loader from './Loader';

export default function isAuth(Component: JSX.ElementType) {
  return function IsAuth(props: any) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push('/admin/login');
      }
    }, [user, loading, router]);

    if (!user || loading) {
      return (
        <main className="bg-light-blue flex items-center min-h-screen mx-auto">
          <Loader />
        </main>
      );
    }

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Component {...props} />
    );
  };
}
