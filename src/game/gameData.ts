/* eslint-disable @typescript-eslint/no-explicit-any */
import backgroundImage from './assets/backgrounds/background2.png';
import downPlatform from './assets/platforms/down_light.png';
import firstSmall from './assets/platforms/left_down_light.png';
import secondSmall from './assets/platforms/top_light.png';
import middlePlatform from './assets/platforms/short_right.png';
import tPlatform from './assets/platforms/T_light.png';

import fireIdleAnimationImage from './assets/character/fire/idle.png';
import fireMoveAnimationImage from './assets/character/fire/move.png';
import fireAttackAnimation from './assets/character/fire/attack.png';
import fireHurtAnimation from './assets/character/fire/hurt.png';
import fireDieAnimation from './assets/character/fire/die.png';
import fireProjectile from './assets/character/fire/projectile.png';
import fireProjectileCollide from './assets/character/fire/projectile-collide.png';

import waterIdleAnimationImage from './assets/character/water/idle.png';
import waterMoveAnimationImage from './assets/character/water/move.png';
import waterAttackAnimation from './assets/character/water/attack.png';
import waterHurtAnimation from './assets/character/water/hurt.png';
import waterDieAnimation from './assets/character/water/die.png';
import waterProjectile from './assets/character/water/projectile.png';
import waterProjectileCollide from './assets/character/water/projectile-collide.png';

import windIdleAnimationImage from './assets/character/wind/idle.png';
import windMoveAnimationImage from './assets/character/wind/move.png';
import windAttackAnimation from './assets/character/wind/attack.png';
import windHurtAnimation from './assets/character/wind/hurt.png';
import windDieAnimation from './assets/character/wind/die.png';
import windProjectile from './assets/character/wind/projectile.png';
import windProjectileCollide from './assets/character/wind/projectile-collide.png';

import earthIdleAnimationImage from './assets/character/earth/idle.png';
import earthMoveAnimationImage from './assets/character/earth/move.png';
import earthAttackAnimation from './assets/character/earth/attack.png';
import earthHurtAnimation from './assets/character/earth/hurt.png';
import earthDieAnimation from './assets/character/earth/die.png';
import earthProjectile from './assets/character/earth/projectile.png';
import earthProjectileCollide from './assets/character/earth/projectile-collide.png';
import { Pointer } from './main/pointer';

export const images: Record<string, any> = {
  background: backgroundImage,
  platforms: {
    down: downPlatform,
    firstSmall: firstSmall,
    secondSmall: secondSmall,
    middle: middlePlatform,
    t: tPlatform,
  },
  fire: {
    idleAnimation: fireIdleAnimationImage,
    moveAnimation: fireMoveAnimationImage,
    attackAnimation: fireAttackAnimation,
    hurtAnimation: fireHurtAnimation,
    dieAnimation: fireDieAnimation,
    projectile: fireProjectile,
    projectileCollide: fireProjectileCollide,
  },
  water: {
    idleAnimation: waterIdleAnimationImage,
    moveAnimation: waterMoveAnimationImage,
    attackAnimation: waterAttackAnimation,
    hurtAnimation: waterHurtAnimation,
    dieAnimation: waterDieAnimation,
    projectile: waterProjectile,
    projectileCollide: waterProjectileCollide,
  },
  wind: {
    idleAnimation: windIdleAnimationImage,
    moveAnimation: windMoveAnimationImage,
    attackAnimation: windAttackAnimation,
    hurtAnimation: windHurtAnimation,
    dieAnimation: windDieAnimation,
    projectile: windProjectile,
    projectileCollide: windProjectileCollide,
  },
  earth: {
    idleAnimation: earthIdleAnimationImage,
    moveAnimation: earthMoveAnimationImage,
    attackAnimation: earthAttackAnimation,
    hurtAnimation: earthHurtAnimation,
    dieAnimation: earthDieAnimation,
    projectile: earthProjectile,
    projectileCollide: earthProjectileCollide,
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
  platforms: {
    down: {
      size: new Pointer(1145, 60),
      shift: new Pointer(0, -15),
    },
    firstSmall: {
      size: new Pointer(154, 45),
      shift: new Pointer(0, -15),
    },
    secondSmall: {
      size: new Pointer(154, 45),
      shift: new Pointer(0, -15),
    },
    middle: {
      size: new Pointer(320, 45),
      shift: new Pointer(0, -10),
    },
    t: {
      size: new Pointer(326, 170),
      shift: new Pointer(-3, -125),
    },
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
    hurtAnimation: {
      sizeFrame: new Pointer(62, 43),
      leftShift: new Pointer(-44, -44),
      rightShift: new Pointer(-44, -44),
      speed: 17,
      countFrame: 3,
      scale: 2,
    },
    dieAnimation: {
      sizeFrame: new Pointer(62, 43),
      leftShift: new Pointer(-44, -44),
      rightShift: new Pointer(-44, -44),
      speed: 17,
      countFrame: 8,
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
    projectileCollide: {
      sizeFrame: new Pointer(32, 26),
      leftShift: new Pointer(-4, -6 - 5 - 1),
      rightShift: new Pointer(-39, -6 - 5 - 1),
      speed: 8,
      countFrame: 6,
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
    hurtAnimation: {
      sizeFrame: new Pointer(41, 32),
      leftShift: new Pointer(-33, -21),
      rightShift: new Pointer(-14, -21),
      speed: 17,
      countFrame: 3,
      scale: 2,
    },
    dieAnimation: {
      sizeFrame: new Pointer(41, 32),
      leftShift: new Pointer(-33, -21),
      rightShift: new Pointer(-14, -21),
      speed: 17,
      countFrame: 8,
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
    projectileCollide: {
      sizeFrame: new Pointer(32, 26),
      leftShift: new Pointer(-12, -13 - 5),
      rightShift: new Pointer(-33, -13 - 5),
      speed: 8,
      countFrame: 6,
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
    hurtAnimation: {
      sizeFrame: new Pointer(45, 45),
      leftShift: new Pointer(-31, -44),
      rightShift: new Pointer(-24, -44),
      speed: 17,
      countFrame: 3,
      scale: 2,
    },
    dieAnimation: {
      sizeFrame: new Pointer(45, 45),
      leftShift: new Pointer(-31, -44),
      rightShift: new Pointer(-24, -44),
      speed: 17,
      countFrame: 8,
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
    projectileCollide: {
      sizeFrame: new Pointer(32, 26),
      leftShift: new Pointer(-4, -6 - 5 - 5),
      rightShift: new Pointer(-39, -6 - 5 - 5),
      speed: 8,
      countFrame: 6,
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
    hurtAnimation: {
      sizeFrame: new Pointer(47, 43),
      leftShift: new Pointer(-31, -44),
      rightShift: new Pointer(-31, -44),
      speed: 17,
      countFrame: 3,
      scale: 2,
    },
    dieAnimation: {
      sizeFrame: new Pointer(47, 43),
      leftShift: new Pointer(-31, -44),
      rightShift: new Pointer(-31, -44),
      speed: 17,
      countFrame: 8,
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
    projectileCollide: {
      sizeFrame: new Pointer(32, 26),
      leftShift: new Pointer(-8, -6 - 5 - 5),
      rightShift: new Pointer(-35, -6 - 5 - 5),
      speed: 8,
      countFrame: 6,
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
    jumpPower: 580 / 1.4,
    maxJumps: 2,
    attackInterval: 0.7,
    attackDelay: 6.5,
    speedProjectile: 600,
    startPosition: new Pointer(800, 400),
  },
  platforms: [
    {
      cords: new Pointer(80, 520),
      size: new Pointer(150, 20),
      type: 'firstSmall',
    },
    {
      cords: new Pointer(480, 329),
      size: new Pointer(150, 20),
      type: 'secondSmall',
    },
    {
      cords: new Pointer(900, 250),
      size: new Pointer(157, 20),
      type: 't',
    },
    {
      cords: new Pointer(1057, 126),
      size: new Pointer(20, 144),
      type: 'invisible',
    },
    {
      cords: new Pointer(1077, 250),
      size: new Pointer(143, 20),
      type: 'invisible',
    },
    {
      cords: new Pointer(900, 410),
      size: new Pointer(320, 20),
      type: 'middle',
    },
    {
      cords: new Pointer(80, 600),
      size: new Pointer(1140, 20),
      type: 'down',
    },
  ],
};
