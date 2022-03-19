import { SectionItem } from 'views/types/mainPage';
import mainInfoImage from 'views/assets/mainInfo.jpg';
import characterImage from 'views/assets/character.jpg';
import airCrystal from 'views/assets/airCrystal.png';
import darkCrystal from 'views/assets/darkCrystal.png';
import deathCrystal from 'views/assets/deathCrystal.png';
import earthCrystal from 'views/assets/earthCrystal.png';
import fireCrystal from 'views/assets/fireCrystal.png';
import lifeCrystal from 'views/assets/lifeCrystal.png';
import waterCrystal from 'views/assets/waterCrystal.png';
import gamePlay from 'views/assets/gameplay.jpg';

export const mainBackground =
  'https://store-images.s-microsoft.com/image/apps.59352.14333371177529780.b6b0e65b-5f45-4caa-81d5-0a50416a56ba.cfeee9be-c402-4365-9ed4-f3d18bdc14a4?mode=scale&q=90&h=1080&w=1920';

// FIRST SECTION
export const mainSectionTitle = 'Where does it come from?';
export const mainSectionText =
  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.';
export const mainSectionsData: SectionItem[] = [
  {
    id: 'story background',
    title: 'Enter the world of Atia',
    text: "Despite the beauty of the planet Atia, there was always a hostile atmosphere on it.The planet was inhabited by magical creatures with immortality and great power. There was a crystal in everyone's chest that gave them magical power. There were only two classes of these beings: Magicians of darkness and magicians of light, some believed that the world should embrace darkness, others - that light should reign in the world... ",
    url: mainInfoImage,
  },
  {
    id: 'gameplay',
    title: 'Aita Battle',
    text: 'Create your own character and select a room. Once done, start battling and collecting crystals to gain eternal life and powerful assets. The game play is simple and interactive which is suitable to any levels of gamers',
    url: gamePlay,
  },
];

// SECOND SECTION
export const infoSectionTitle = 'Where does it come from?';
export const infoSectionText =
  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.';

export const infoSectionData: SectionItem[] = [
  {
    id: 'ksjdla',
    title: 'Section 1 title',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
    url: characterImage,
  },
  {
    id: 'gdfgd',
    title: 'Section 2 title',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
    url: characterImage,
  },
  {
    id: 'gddfsfgd',
    title: 'Section 3 title',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
    url: characterImage,
  },
  {
    id: 'gddfsfdfsgd',
    title: 'Section 4 title',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal',
    url: characterImage,
  },
];

// 3 SECTION

export const SectionTitle = 'Where does it come from?';

export const itemsSectionData: SectionItem[] = [
  {
    id: 'dark crystal',
    title: 'Dark Crystal',
    text: 'The powerful crystal which can be obtain with 20 life crystals',
    url: darkCrystal,
  },
  {
    id: 'life crystal',
    title: 'Life Crystal',
    text: 'Gain eternal life by collecting all 4 elemental crystals',
    url: lifeCrystal,
  },
  {
    id: 'death crystal',
    title: 'Death Crystal',
    text: 'The crystal of death',
    url: deathCrystal,
  },
  {
    id: 'water crystal',
    title: 'Water Crystal',
    text: 'The elemental crystal of water',
    url: waterCrystal,
  },
  {
    id: 'fire crystal',
    title: 'Fire Crystal',
    text: 'The elemental crystal of fire',
    url: fireCrystal,
  },
  {
    id: 'earth crystal',
    title: 'Earth Crystal',
    text: 'The elemental crystal of earth',
    url: earthCrystal,
  },
  {
    id: 'air crystal',
    title: 'Air Crystal',
    text: 'The elemental crystal of air',
    url: airCrystal,
  },
];
