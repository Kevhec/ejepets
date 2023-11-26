'use client';

import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { app } from '@/services/firebase/config';
import Loader from '@/components/Loader';

const auth = getAuth(app);

interface AuthContextType {
  user: User | null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const contextValues = useMemo(() => ({
    user,
    loading,
  }), [user, loading]);

  return (
    <AuthContext.Provider value={contextValues}>
      {
      loading
        ? (
          <main className="bg-light-blue flex items-center min-h-screen mx-auto">
            <Loader />
          </main>
        )
        : children
      }
    </AuthContext.Provider>
  );
}
