/* eslint-disable @typescript-eslint/no-explicit-any */
import backgroundImage from './assets/backgrounds/background2.png';
import fireIdleAnimationImage from './assets/character/fire-idle.png';
import fireMoveAnimationImage from './assets/character/fire-move.png';
import fireAttackAnimation from './assets/character/fire-attack.png';
import fireProjectile from './assets/character/fire-projectile.png';

import waterIdleAnimationImage from './assets/character/water-idle.png';
import waterMoveAnimationImage from './assets/character/water-move.png';
import waterAttackAnimation from './assets/character/water-attack.png';
import waterProjectile from './assets/character/water-projectile.png';

import windIdleAnimationImage from './assets/character/wind-idle.png';
import windMoveAnimationImage from './assets/character/wind-move.png';
import windAttackAnimation from './assets/character/wind-attack.png';
import windProjectile from './assets/character/wind-projectile.png';

import earthIdleAnimationImage from './assets/character/earth-idle.png';
import earthMoveAnimationImage from './assets/character/earth-move.png';
import earthAttackAnimation from './assets/character/earth-attack.png';
import earthProjectile from './assets/character/earth-projectile.png';
import { Pointer } from './main/pointer';

export const images: Record<string, any> = {
  background: backgroundImage,
  fire: {
    idleAnimation: fireIdleAnimationImage,
    moveAnimation: fireMoveAnimationImage,
    attackAnimation: fireAttackAnimation,
    projectile: fireProjectile,
  },
  water: {
    idleAnimation: waterIdleAnimationImage,
    moveAnimation: waterMoveAnimationImage,
    attackAnimation: waterAttackAnimation,
    projectile: waterProjectile,
  },
  wind: {
    idleAnimation: windIdleAnimationImage,
    moveAnimation: windMoveAnimationImage,
    attackAnimation: windAttackAnimation,
    projectile: windProjectile,
  },
  earth: {
    idleAnimation: earthIdleAnimationImage,
    moveAnimation: earthMoveAnimationImage,
    attackAnimation: earthAttackAnimation,
    projectile: earthProjectile,
  },
};
export interface IAnimation {
  sizeFrame: Pointer;
  leftShift: Pointer;
  rightShift: Pointer;
  speed: number;
  countFrame: number;
  scale: number;
}

export const mediaData: Record<string, any> = {
  background: {
    size: new Pointer(1600, 844),
    center: new Pointer(980, 400),
  },
  fire: {
    idleAnimation: {
      sizeFrame: new Pointer(62, 43),
      leftShift: new Pointer(-44, -44),
      rightShift: new Pointer(-44, -44),
      speed: 7,
      countFrame: 4,
      scale: 2,
    },
    moveAnimation: {
      sizeFrame: new Pointer(62, 43),
      leftShift: new Pointer(-44, -44),
      rightShift: new Pointer(-44, -44),
      speed: 7,
      countFrame: 4,
      scale: 2,
    },
    attackAnimation: {
      sizeFrame: new Pointer(62, 43),
      leftShift: new Pointer(-44, -44),
      rightShift: new Pointer(-44, -44),
      speed: 17,
      countFrame: 10,
      scale: 2,
    },
    projectile: {
      sizeFrame: new Pointer(32, 16),
      leftShift: new Pointer(-4, -6),
      rightShift: new Pointer(-39, -6),
      speed: 8,
      countFrame: 4,
      scale: 2,
    },
  },
  water: {
    idleAnimation: {
      sizeFrame: new Pointer(41, 32),
      leftShift: new Pointer(-33, -21),
      rightShift: new Pointer(-14, -21),
      speed: 7,
      countFrame: 4,
      scale: 2,
    },
    moveAnimation: {
      sizeFrame: new Pointer(41, 32),
      leftShift: new Pointer(-36, -21),
      rightShift: new Pointer(-14, -21),
      speed: 7,
      countFrame: 4,
      scale: 2,
    },
    attackAnimation: {
      sizeFrame: new Pointer(41, 32),
      leftShift: new Pointer(-33, -21),
      rightShift: new Pointer(-14, -21),
      speed: 17,
      countFrame: 10,
      scale: 2,
    },
    projectile: {
      sizeFrame: new Pointer(32, 16),
      leftShift: new Pointer(-8, -8),
      rightShift: new Pointer(-35, -8),
      speed: 8,
      countFrame: 4,
      scale: 2,
    },
  },
  wind: {
    idleAnimation: {
      sizeFrame: new Pointer(45, 45),
      leftShift: new Pointer(-31, -44),
      rightShift: new Pointer(-24, -44),
      speed: 7,
      countFrame: 4,
      scale: 2,
    },
    moveAnimation: {
      sizeFrame: new Pointer(45, 45),
      leftShift: new Pointer(-28, -44),
      rightShift: new Pointer(-30, -44),
      speed: 7,
      countFrame: 4,
      scale: 2,
    },
    attackAnimation: {
      sizeFrame: new Pointer(45, 45),
      leftShift: new Pointer(-31, -44),
      rightShift: new Pointer(-24, -44),
      speed: 17,
      countFrame: 10,
      scale: 2,
    },
    projectile: {
      sizeFrame: new Pointer(32, 16),
      leftShift: new Pointer(-4, -6),
      rightShift: new Pointer(-39, -6),
      speed: 8,
      countFrame: 4,
      scale: 2,
    },
  },
  earth: {
    idleAnimation: {
      sizeFrame: new Pointer(47, 43),
      leftShift: new Pointer(-31, -44),
      rightShift: new Pointer(-31, -44),
      speed: 7,
      countFrame: 4,
      scale: 2,
    },
    moveAnimation: {
      sizeFrame: new Pointer(47, 43),
      leftShift: new Pointer(-31, -44),
      rightShift: new Pointer(-31, -44),
      speed: 7,
      countFrame: 4,
      scale: 2,
    },
    attackAnimation: {
      sizeFrame: new Pointer(47, 43),
      leftShift: new Pointer(-31, -44),
      rightShift: new Pointer(-31, -44),
      speed: 17,
      countFrame: 10,
      scale: 2,
    },
    projectile: {
      sizeFrame: new Pointer(32, 16),
      leftShift: new Pointer(-8, -6),
      rightShift: new Pointer(-35, -6),
      speed: 8,
      countFrame: 4,
      scale: 2,
    },
  },
};

export const gameData = {
  player: {
    size: 32,
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
