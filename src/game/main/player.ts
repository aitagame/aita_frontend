import { images, gameData, mediaData } from 'game/gameData';
import { Pointer } from './pointer';
import { Animation } from './animation';

class Projectile {
  cords: Pointer;
  direction: string;
  dx: number;
  isActive: boolean;
  creationTime: number;
  animation = new Animation(images.fireProjectile, mediaData.fireProjectile);
  constructor() {
    this.isActive = false;
    this.creationTime = Date.now();
  }

  activate(cords: Pointer, direction: string) {
    if (!this.isActive) {
      this.isActive = true;
      if (direction == 'left') {
        this.dx = -gameData.player.speedProjectile;
      } else {
        this.dx = gameData.player.speedProjectile;
      }
      this.cords = cords;
      this.direction = direction;
    }
  }
  update(dt: number) {
    if (this.isActive) {
      this.cords.x += this.dx * dt;
      this.animation.update(dt);
    }
  }

  render(ctx: CanvasRenderingContext2D) {
    if (this.isActive) {
      this.animation.render(ctx, this.cords, this.direction);
    }
  }
}
export class Player {
  cords: Pointer;
  lastCords: Pointer;
  size: number;
  state: string;
  pressedKeys: Map<string, boolean>;
  dx: number;
  dy: number;
  ddy: number;
  isJump: boolean;
  direction: string;
  attackInterval: number;
  attackDelay: number;
  timeLastAttack: number;
  projectiles: Projectile[];

  static animations = {
    idle: new Animation(images.idleAnimation, mediaData.idleAnimation),
    move: new Animation(images.moveAnimation, mediaData.moveAnimation),
    attack: new Animation(images.attackAnimation, mediaData.attackAnimation),
  };

  constructor(cords: Pointer, pressedKeys: Map<string, boolean>) {
    this.cords = cords;
    this.lastCords = new Pointer(cords.x, cords.y);
    this.size = gameData.player.size;
    this.state = 'idle';
    this.direction = 'left';
    this.pressedKeys = pressedKeys;
    this.dx = gameData.player.dx;
    this.ddy = gameData.player.ddy;
    this.dy = 0;
    this.isJump = false;
    this.timeLastAttack = 0;
    this.attackInterval = gameData.player.attackInterval;
    this.attackDelay = gameData.player.attackDelay;
    this.projectiles = [];
  }

  update(dt: number) {
    this.lastCords.x = this.cords.x;
    this.lastCords.y = this.cords.y;
    const left = !!(this.pressedKeys.get('KeyA') || this.pressedKeys.get('ArrowLeft'));
    const right = !!(this.pressedKeys.get('KeyD') || this.pressedKeys.get('ArrowRight'));
    const up = !!(this.pressedKeys.get('KeyW') || this.pressedKeys.get('ArrowUp'));
    const attack = !!(this.pressedKeys.get('KeyJ') || this.pressedKeys.get('KeyZ'));

    if (attack && (Date.now() - this.timeLastAttack) / 1000 > this.attackInterval) {
      this.timeLastAttack = Date.now();
      this.state = 'attack';
      this.projectiles.push(new Projectile());
    }
    this.projectiles.forEach(projectile => {
      //TODO: move attackAnimation.speed to gameData
      if (
        (Date.now() - projectile.creationTime) / 1000 >
        this.attackDelay / mediaData.attackAnimation.speed
      ) {
        projectile.activate(this.cords.copy(), this.direction);
      }
    });
    if (up && !this.isJump) {
      this.dy = -gameData.player.jumpPower;
      this.isJump = true;
    }
    if (left) {
      this.cords.x -= this.dx * dt;
      if (this.state != 'attack') this.state = 'move';
      if (!right) this.direction = 'left';
    }
    if (right) {
      this.cords.x += this.dx * dt;
      if (this.state != 'attack') this.state = 'move';
      if (!left) this.direction = 'right';
    }

    this.cords.y += this.dy * dt;
    this.dy += this.ddy * dt;
    this.dy = Math.min(this.dy, gameData.player.maxDy);
    this.isJump = true;

    if (left === right && this.state != 'attack') {
      this.state = 'idle';
    }
    this.projectiles.forEach(projectile => projectile.update(dt));
    if (this.state === 'idle') {
      Player.animations.idle.update(dt);
    } else if (this.state === 'move') {
      Player.animations.move.update(dt);
    } else if (this.state == 'attack') {
      if (Player.animations.attack.update(dt)) {
        this.state = 'idle';
        Player.animations.attack.reset();
      }
    }
  }

  render(ctx: CanvasRenderingContext2D) {
    this.projectiles.forEach(projectile => projectile.render(ctx));
    if (this.state === 'idle') {
      Player.animations.idle.render(ctx, this.cords, this.direction);
    } else if (this.state === 'move') {
      Player.animations.move.render(ctx, this.cords, this.direction);
    } else if (this.state == 'attack') {
      Player.animations.attack.render(ctx, this.cords, this.direction);
    }
  }
}
