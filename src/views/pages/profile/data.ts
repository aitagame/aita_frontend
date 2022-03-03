import { Element } from 'views/types/profilePage';
import airElementImage from 'views/assets/air.png';
import fireElementImage from 'views/assets/fire.png';
import earthElementImage from 'views/assets/earth.png';
import waterElementImage from 'views/assets/water.png';

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
