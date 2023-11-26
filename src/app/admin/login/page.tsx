'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { logIn } from '@/services/firebase/auth';
import { useAuth } from '@/context/authContext';
import FormInput from '@/components/admin/FormInput';
import objectFromFormData from '@/utils/objectFromFormData';
import Loader from '@/components/Loader';

export default function LoginPage() {
  const [authError, setAuthError] = useState(null);
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user !== null) {
      router.push('/admin');
    }
  }, [user, loading, router]);

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = objectFromFormData(evt.currentTarget);
    const { loginEmail, loginPassword } = formData;

    const { error } = await logIn(String(loginEmail), String(loginPassword));
    if (error) {
      setAuthError(error.message);
      return;
    }

    router.push('/admin');
  };

  return (
    !loading && !user ? (
      <main className="container px-1">
        {
          authError && (
            <p className="text-center text-crimnson font-bold p-2 max-w-md">{authError}</p>
          )
        }
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 bg-white border rounded-lg p-4"
        >
          <FormInput
            name="loginEmail"
            id="email"
            type="email"
            label="Email"
            autoComplete="email"
          />
          <FormInput
            name="loginPassword"
            id="password"
            type="password"
            label="Contraseña"
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="px-2 py-1 bg-indigo-900 text-white rounded-md"
          >
            Ingresar
          </button>
        </form>
      </main>
    )
      : (
        <main className="bg-light-blue flex items-center min-h-screen mx-auto">
          <Loader />
        </main>
      )
  );
}
