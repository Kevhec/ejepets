import downloadFromStorage from '@/services/firebase/storage/download';
import uploadToStorage from '@/services/firebase/storage/upload';
import { Store } from '@/types/stores';
import { GeoPoint } from 'firebase/firestore';

type Data = Record<string, FormDataEntryValue | FormDataEntryValue[]>;

async function formatStoreDocument(data: Data) {
  const storeImages = data.storeImages as FormDataEntryValue[];

  const imagesUrls = await Promise.all(
    (storeImages as File[]).map(async (imgFile) => {
      try {
        const uploadedImgRef = await uploadToStorage(imgFile);
        const imageUrl = await downloadFromStorage(uploadedImgRef.fullPath);

        return imageUrl;
      } catch (error: any) {
        // Handle the error or return a default value if necessary
        return 'dogpaw.svg';
      }
    }),
  );

  const formattedData: Store = {
    name: String(data.storeName),
    contact: {
      tel: String(data.storeTel),
      email: String(data.storeEmail),
      website: String(data.storeWebsite),
    },
    description: String(data.storeDescription),
    images: imagesUrls || '',
    location: {
      dir: String(data.storeDir),
      latlng: new GeoPoint(Number(data.storeLat), Number(data.storeLong)),
    },
    types: [],
  };

  Object.keys(data).forEach((key) => {
    if (key.startsWith('type:')) {
      formattedData.types.push(String(data[key]));
    }
  });

  return formattedData;
}

export default formatStoreDocument;
