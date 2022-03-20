import { ElementId, Element } from 'views/types/classElement';
import earthElementImage from 'views/assets/terra.png';
import airElementImage from 'views/assets/wind.png';
import fireElementImage from 'views/assets/inferno.png';
import waterElementImage from 'views/assets/aqua.png';

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
