import { Element } from 'views/types/profilePage';
import earthElementImage from 'views/assets/Earth.png';
import airElementImage from 'views/assets/Air.png';
import fireElementImage from 'views/assets/Fire.png';
import waterElementImage from 'views/assets/Water.png';

export const characterTypeElement: Element[] = [
  {
    id: 'earth',
    name: 'Earth',
    url: earthElementImage,
  },
  {
    id: 'air',
    name: 'Air',
    url: airElementImage,
  },
  {
    id: 'fire',
    name: 'Fire',
    url: fireElementImage,
  },
  {
    id: 'water',
    name: 'Water',
    url: waterElementImage,
  },
];
