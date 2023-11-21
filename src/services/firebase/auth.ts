import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './config';

const auth = getAuth(app);

export default async function signin(email: string, password: string) {
  let result = null;
  let error = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e: any) {
    error = e;
  }

  return { result, error };
}
