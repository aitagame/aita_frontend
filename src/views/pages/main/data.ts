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
import gamePlay from 'views/assets/gameplay.png';

export const mainBackground = 'https://dev-aita.itracers.xyz/assets/background.jpeg';

// FIRST SECTION
export const mainSectionTitle = 'Game currencies';
export const mainSectionText =
  'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.';
export const mainSectionsData: SectionItem[] = [
  {
    id: 'story background',
    title: 'Enter the world of Atia',
    text: 'Despite the beauty of the planet Atia, there has always been a hostile atmosphere. The planet was inhabited by magical creatures endowed with immortality and enormous power. They had a crystal in their chest that gave them their abilities. There were only two kinds of these creatures: mages of darkness and mages of light. Some of them believed that the world should be embraced by darkness, others were sure that light should reign the world...',
    url: mainInfoImage,
  },
  {
    id: 'gameplay',
    title: 'Aita Gameplay',
    text: 'A p2e multiplayer game where you create your own character and select a room. Once done, you can start playing and collecting crystals to gain eternal life and powerful assets. The gameplay is simple and interactive which is suitable to all players regardless of their experience. Throughout the game, you can earn tokens by taking part in rating battles, clan wars with the use of DAO and more.',
    url: gamePlay,
  },
];

// SECOND SECTION
export const infoSectionTitle = '';
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

export const SectionTitle = '';

export const itemsSectionData: SectionItem[] = [
  {
    id: 'dark crystal',
    title: 'Dark Crystal',
    text: 'The powerful crystal which can be obtained with 20 life crystals',
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
