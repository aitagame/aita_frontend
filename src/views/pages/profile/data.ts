import { Element } from 'views/types/profile';
import earthElementImage from 'views/assets/Earth.png';
import airElementImage from 'views/assets/Air.png';
import fireElementImage from 'views/assets/Fire.png';
import waterElementImage from 'views/assets/Water.png';

export const characterTypeElement: Element[] = [
  {
    id: 'terrestrial',
    name: 'Earth',
    url: earthElementImage,
  },
  {
    id: 'air',
    name: 'Air',
    url: airElementImage,
  },
  {
    id: 'inferno',
    name: 'Fire',
    url: fireElementImage,
  },
  {
    id: 'aqua',
    name: 'Water',
    url: waterElementImage,
  },
];
