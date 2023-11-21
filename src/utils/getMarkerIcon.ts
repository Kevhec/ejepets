import removeAccents from '@/utils/removeAccents';
import L from 'leaflet';

interface IconSrcMap {
  [key: string]: string
}

const iconSrcMap: IconSrcMap = {
  generic: '/markers/marker-generic.png',
  hotel: '/markers/marker-hotel.png',
  parque: '/markers/marker-parque.png',
  peluqueria: '/markers/marker-peluqueria.png',
  refugio: '/markers/marker-refugio.png',
  restaurante: '/markers/marker-restaurante.png',
  tienda: '/markers/marker-tienda.png',
  veterinaria: '/markers/marker-veterinaria.png',
};

export default function getMarkerIcon(type: string) {
  const normalizedType = removeAccents(type).trim().toLowerCase();
  const iconSrc = iconSrcMap[normalizedType];

  const customIcon = L.icon({
    iconUrl: iconSrc,
    iconSize: [25, 25],
    iconAnchor: [25 / 2, 26],
    popupAnchor: [25 / 2, 26],
    shadowUrl: '/markers/marker-shadow.png',
    shadowSize: [20, 13],
    shadowAnchor: [2, 18],
  });

  return customIcon;
}
