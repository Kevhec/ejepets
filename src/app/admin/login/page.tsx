'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import signin from '@/services/firebase/auth';
import { useAuth } from '@/context/authContext';
import FormInput from '@/components/admin/FormInput';
import objectFromFormData from '@/utils/objectFromFormData';

export default function Login() {
  const [authError, setAuthError] = useState(null);
  const router = useRouter();
  const user = useAuth();

  useEffect(() => {
    if (user !== null) {
      router.push('/admin');
    }
  }, [user, router]);

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = objectFromFormData(evt.currentTarget);
    const { loginEmail, loginPassword } = formData;

    const { error } = await signin(String(loginEmail), String(loginPassword));
    if (error) {
      setAuthError(error.message);
      return;
    }

    router.push('/admin');
  };

  return (
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
  );
}
