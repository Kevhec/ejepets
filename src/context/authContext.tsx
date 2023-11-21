'use client';

import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { app } from '@/services/firebase/config';

const auth = getAuth(app);
const AuthContext = createContext<User | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <AuthContext.Provider value={user}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
}
