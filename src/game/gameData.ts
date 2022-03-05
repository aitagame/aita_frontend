import backgroundImage from './assets/backgrounds/background2.png';
import idleAnimationImage from './assets/character/fire-idle.png';
import moveAnimationImage from './assets/character/fire-move.png';
import attackAnimation from './assets/character/fire-attack.png';
import fireProjectile from './assets/character/fire-projectile.png';
import { Pointer } from './main/pointer';

export const images = {
  background: backgroundImage,
  idleAnimation: idleAnimationImage,
  moveAnimation: moveAnimationImage,
  attackAnimation: attackAnimation,
  fireProjectile: fireProjectile,
};
export interface IAnimation {
  sizeFrame: Pointer;
  shift: Pointer;
  speed: number;
  countFrame: number;
  scale: number;
}

const defaultAnimation: IAnimation = {
  sizeFrame: new Pointer(62, 43),
  shift: new Pointer(-60, -60),
  speed: 7,
  countFrame: 4,
  scale: 2,
};

export const mediaData = {
  background: {
    size: new Pointer(1600, 844),
    center: new Pointer(980, 400),
  },
  idleAnimation: defaultAnimation,
  moveAnimation: defaultAnimation,
  attackAnimation: {
    sizeFrame: new Pointer(62, 43),
    shift: new Pointer(-60, -60),
    speed: 17,
    countFrame: 10,
    scale: 2,
  },
  fireProjectile: {
    sizeFrame: new Pointer(32, 16),
    shift: new Pointer(-30, -20),
    speed: 8,
    countFrame: 4,
    scale: 2,
  },
};

export const gameData = {
  player: {
    size: 16,
    dx: 400,
    ddy: 900, // gravity
    maxDy: 1350,
    jumpPower: 580,
    attackInterval: 0.7,
    attackDelay: 6.5,
    speedProjectile: 600,
    startPosition: new Pointer(800, 400),
  },
  platforms: [
    {
      cords: new Pointer(80, 500),
      size: new Pointer(150, 20),
    },
    {
      cords: new Pointer(500, 309),
      size: new Pointer(150, 20),
    },
    {
      cords: new Pointer(900, 250),
      size: new Pointer(150, 20),
    },
    {
      cords: new Pointer(1050, 120),
      size: new Pointer(20, 150),
    },
    {
      cords: new Pointer(900, 410),
      size: new Pointer(320, 20),
    },
    {
      cords: new Pointer(1070, 250),
      size: new Pointer(150, 20),
    },
    {
      cords: new Pointer(80, 600),
      size: new Pointer(1500, 20),
    },
  ],
};
