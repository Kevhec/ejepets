import { GeoPoint } from 'firebase/firestore';

interface Store {
  name: string
  img: string
  description: string
  contact: { [key: string]: string }
  location: {
    dir: string
    latlng: GeoPoint
  }
  types: string[]
}

type StoreName =
  'refugio'
  | 'veterinaria'
  | 'peluqueria'
  | 'tienda'
  | 'restaurante'
  | 'parque'
  | 'hotel'
  | 'todo';

export type { Store, StoreName };
