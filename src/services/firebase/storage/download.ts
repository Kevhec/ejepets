import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../config';

async function downloadFromStorage(path: string) {
  const elementRef = ref(storage, path);

  const url = await getDownloadURL(elementRef);

  return url;
}

export default downloadFromStorage;
