// Import the functions you need from the SDKs you need
import type { Store } from '@/types/stores';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import {
  CollectionReference,
  DocumentData,
  collection,
  getFirestore,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize database
const db = getFirestore(app);

// Initialize storage
const storage = getStorage(app);

// Helper to type db responses
function createCollection <T = DocumentData>(collectionName: string) {
  return collection(db, collectionName) as CollectionReference<T>;
}

const storesCol = createCollection<Store>('stores');

export {
  app,
  db,
  storage,
  createCollection,
  storesCol,
};
