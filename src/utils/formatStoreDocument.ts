import downloadFromStorage from '@/services/firebase/storage/download';
import uploadToStorage from '@/services/firebase/storage/upload';
import { Store } from '@/types/stores';
import { GeoPoint } from 'firebase/firestore';

async function formatStoreDocument(data: { [k: string]: FormDataEntryValue }) {
  const uploadedImgRef = await uploadToStorage(data.storeImage as File);
  const imageUrl = await downloadFromStorage(uploadedImgRef.fullPath);

  const formmatedData: Store = {
    name: String(data.storeName),
    contact: {
      tel: String(data.storeTel),
      email: String(data.storeEmail),
      website: String(data.storeWebsite),
    },
    description: String(data.storeDescription),
    img: imageUrl || '',
    location: {
      dir: String(data.storeDir),
      latlng: new GeoPoint(Number(data.storeLat), Number(data.storeLong)),
    },
    types: [],
  };

  Object.keys(data).forEach((key) => {
    if (key.startsWith('type:')) {
      formmatedData.types.push(String(data[key]));
    }
  });

  return formmatedData;
}

export default formatStoreDocument;
