import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../config';

async function uploadToStorage(file: File) {
  try {
    const storageRef = ref(storage, `stores/${file.name}`);

    const snapshot = await uploadBytes(storageRef, file);

    return snapshot.ref;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export default uploadToStorage;
