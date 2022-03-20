/* eslint-disable @typescript-eslint/no-explicit-any */
import backgroundImage from '../assets/backgrounds/background2.png';
import downPlatform from '../assets/platforms/down_light.png';
import firstSmall from '../assets/platforms/left_down_light.png';
import secondSmall from '../assets/platforms/top_light.png';
import middlePlatform from '../assets/platforms/short_right.png';
import tPlatform from '../assets/platforms/T_light.png';

import fireIdleAnimationImage from '../assets/character/fire/idle.png';
import fireMoveAnimationImage from '../assets/character/fire/move.png';
import fireAttackAnimation from '../assets/character/fire/attack.png';
import fireHurtAnimation from '../assets/character/fire/hurt.png';
import fireDieAnimation from '../assets/character/fire/die.png';
import fireProjectile from '../assets/character/fire/projectile.png';
import fireProjectileCollide from '../assets/character/fire/projectile-collide.png';

import waterIdleAnimationImage from '../assets/character/water/idle.png';
import waterMoveAnimationImage from '../assets/character/water/move.png';
import waterAttackAnimation from '../assets/character/water/attack.png';
import waterHurtAnimation from '../assets/character/water/hurt.png';
import waterDieAnimation from '../assets/character/water/die.png';
import waterProjectile from '../assets/character/water/projectile.png';
import waterProjectileCollide from '../assets/character/water/projectile-collide.png';

import windIdleAnimationImage from '../assets/character/wind/idle.png';
import windMoveAnimationImage from '../assets/character/wind/move.png';
import windAttackAnimation from '../assets/character/wind/attack.png';
import windHurtAnimation from '../assets/character/wind/hurt.png';
import windDieAnimation from '../assets/character/wind/die.png';
import windProjectile from '../assets/character/wind/projectile.png';
import windProjectileCollide from '../assets/character/wind/projectile-collide.png';

import earthIdleAnimationImage from '../assets/character/earth/idle.png';
import earthMoveAnimationImage from '../assets/character/earth/move.png';
import earthAttackAnimation from '../assets/character/earth/attack.png';
import earthHurtAnimation from '../assets/character/earth/hurt.png';
import earthDieAnimation from '../assets/character/earth/die.png';
import earthProjectile from '../assets/character/earth/projectile.png';
import earthProjectileCollide from '../assets/character/earth/projectile-collide.png';

import { Loader } from '../utils/loader';
import { createImage } from '../utils/createImage';
import { Pointer } from '../main/pointer';

export const loader = new Loader();

function create(src: string) {
  return createImage(new Pointer(0, 0), src, loader);
}

export const images: Record<string, any> = {
  background: create(backgroundImage),
  /* background: create(
    'https://images.wallpaperscraft.ru/image/single/devushka_koshka_zont_266981_3840x2160.jpg'
    ),
  */
  platforms: {
    down: create(downPlatform),
    firstSmall: create(firstSmall),
    secondSmall: create(secondSmall),
    middle: create(middlePlatform),
    t: create(tPlatform),
  },
  fire: {
    idleAnimation: create(fireIdleAnimationImage),
    moveAnimation: create(fireMoveAnimationImage),
    attackAnimation: create(fireAttackAnimation),
    hurtAnimation: create(fireHurtAnimation),
    dieAnimation: create(fireDieAnimation),
    projectile: create(fireProjectile),
    projectileCollide: create(fireProjectileCollide),
  },
  water: {
    idleAnimation: create(waterIdleAnimationImage),
    moveAnimation: create(waterMoveAnimationImage),
    attackAnimation: create(waterAttackAnimation),
    hurtAnimation: create(waterHurtAnimation),
    dieAnimation: create(waterDieAnimation),
    projectile: create(waterProjectile),
    projectileCollide: create(waterProjectileCollide),
  },
  wind: {
    idleAnimation: create(windIdleAnimationImage),
    moveAnimation: create(windMoveAnimationImage),
    attackAnimation: create(windAttackAnimation),
    hurtAnimation: create(windHurtAnimation),
    dieAnimation: create(windDieAnimation),
    projectile: create(windProjectile),
    projectileCollide: create(windProjectileCollide),
  },
  earth: {
    idleAnimation: create(earthIdleAnimationImage),
    moveAnimation: create(earthMoveAnimationImage),
    attackAnimation: create(earthAttackAnimation),
    hurtAnimation: create(earthHurtAnimation),
    dieAnimation: create(earthDieAnimation),
    projectile: create(earthProjectile),
    projectileCollide: create(earthProjectileCollide),
  },
};
