import {
  UserCredential, getAuth, signInWithEmailAndPassword, signOut,
} from 'firebase/auth';
import { redirect } from 'next/navigation';
import { app } from './config';

const auth = getAuth(app);

async function logIn(email: string, password: string) {
  let result: UserCredential | null = null;
  let error = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
    result.user.getIdToken();
  } catch (e: any) {
    error = e;
  }

  return { result, error };
}

function logOut() {
  signOut(auth);
  redirect('/admin/login');
}

export { logIn, logOut };
