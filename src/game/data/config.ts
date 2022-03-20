import { Pointer } from '../main/pointer';

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
