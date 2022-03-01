import { Element } from 'views/types/profilePage';
import airElementImage from 'views/assets/Air.png';
import fireElementImage from 'views/assets/Fire.png';
import earthElementImage from 'views/assets/Earth.png';
import waterElementImage from 'views/assets/Water.png';

export const characterTypeElement: Element[] = [
  {
    id: 'Earth',
    name: 'Earth',
    url: earthElementImage,
  },
  {
    id: 'Air',
    name: 'Air',
    url: airElementImage,
  },
  {
    id: 'Fire',
    name: 'Fire',
    url: fireElementImage,
  },
  {
    id: 'Water',
    name: 'Water',
    url: waterElementImage,
  },
];
