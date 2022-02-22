import backgroundImage from './assets/backgrounds/background2.png';
import idleAnimationImage from './assets/character/fire-idle.png';
import moveAnimationImage from './assets/character/fire-move.png';

export interface IGameData {
  backgroundImage: string;
  idleAnimationImage: string;
  moveAnimationImage: string;
}
export const gameData: IGameData = {
  backgroundImage: backgroundImage,
  idleAnimationImage: idleAnimationImage,
  moveAnimationImage: moveAnimationImage,
};
