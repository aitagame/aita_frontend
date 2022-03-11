import { ElementId, Element } from 'views/types/classElement';
import earthElementImage from 'views/assets/earth.png';
import airElementImage from 'views/assets/wind.png';
import fireElementImage from 'views/assets/fire.png';
import waterElementImage from 'views/assets/water.png';

export const elementTypes: Record<ElementId, Element> = {
  terrestrial: {
    id: 'terrestrial',
    name: 'Earth',
    url: earthElementImage,
  },
  air: {
    id: 'air',
    name: 'Air',
    url: airElementImage,
  },
  inferno: {
    id: 'inferno',
    name: 'Fire',
    url: fireElementImage,
  },
  aqua: {
    id: 'aqua',
    name: 'Water',
    url: waterElementImage,
  },
};
