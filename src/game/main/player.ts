import { images, gameData, mediaData } from 'game/gameData';
import { Pointer } from './pointer';
import { Animation } from './animation';

class Projectile {
  element: string;
  cords: Pointer;
  direction: string;
  dx: number;
  isActive: boolean;
  creationTime: number;
  animation: Animation;
  constructor(element: string) {
    this.element = element;
    this.isActive = false;
    this.creationTime = Date.now();
    this.animation = new Animation(
      images[this.element].projectile,
      mediaData[this.element].projectile
    );
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
  element: string;
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
  timeLastChangeElement: number;
  timeLastAttack: number;
  projectiles: Projectile[];
  animations: Record<string, Animation>;
  constructor(cords: Pointer, pressedKeys: Map<string, boolean>, element: string) {
    this.element = element;
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
    this.timeLastChangeElement = 0;
    this.timeLastAttack = 0;
    this.attackInterval = gameData.player.attackInterval;
    this.attackDelay = gameData.player.attackDelay;
    this.animations = {
      idle: new Animation(
        images[this.element].idleAnimation,
        mediaData[this.element].idleAnimation
      ),
      move: new Animation(
        images[this.element].moveAnimation,
        mediaData[this.element].moveAnimation
      ),
      attack: new Animation(
        images[this.element].attackAnimation,
        mediaData[this.element].attackAnimation
      ),
    };
    this.projectiles = [];
  }
  changeElement(element: string) {
    this.element = element;
    this.animations = {
      idle: new Animation(
        images[this.element].idleAnimation,
        mediaData[this.element].idleAnimation
      ),
      move: new Animation(
        images[this.element].moveAnimation,
        mediaData[this.element].moveAnimation
      ),
      attack: new Animation(
        images[this.element].attackAnimation,
        mediaData[this.element].attackAnimation
      ),
    };
  }
  update(dt: number) {
    this.lastCords.x = this.cords.x;
    this.lastCords.y = this.cords.y;
    const left = !!(this.pressedKeys.get('KeyA') || this.pressedKeys.get('ArrowLeft'));
    const right = !!(this.pressedKeys.get('KeyD') || this.pressedKeys.get('ArrowRight'));
    const up = !!(this.pressedKeys.get('KeyW') || this.pressedKeys.get('ArrowUp'));
    const attack = !!(this.pressedKeys.get('KeyJ') || this.pressedKeys.get('KeyZ'));
    const changeElement = !!this.pressedKeys.get('KeyR');
    if (changeElement && Date.now() - this.timeLastChangeElement > 250) {
      //AITA -- Aqua Inferno Terra Airos
      if (this.element == 'water') this.changeElement('fire');
      else if (this.element == 'fire') this.changeElement('earth');
      else if (this.element == 'earth') this.changeElement('wind');
      else if (this.element == 'wind') this.changeElement('water');
      this.timeLastChangeElement = Date.now();
    }
    if (attack && (Date.now() - this.timeLastAttack) / 1000 > this.attackInterval) {
      this.timeLastAttack = Date.now();
      this.state = 'attack';
      this.projectiles.push(new Projectile(this.element));
    }
    this.projectiles.forEach(projectile => {
      //TODO: move attackAnimation.speed to gameData
      if (
        (Date.now() - projectile.creationTime) / 1000 >
        this.attackDelay / mediaData.fire.attackAnimation.speed
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
      this.animations.idle.update(dt);
    } else if (this.state === 'move') {
      this.animations.move.update(dt);
    } else if (this.state == 'attack') {
      if (this.animations.attack.update(dt)) {
        this.state = 'idle';
        this.animations.attack.reset();
      }
    }
  }

  render(ctx: CanvasRenderingContext2D) {
    this.projectiles.forEach(projectile => projectile.render(ctx));
    if (this.state === 'idle') {
      this.animations.idle.render(ctx, this.cords, this.direction);
    } else if (this.state === 'move') {
      this.animations.move.render(ctx, this.cords, this.direction);
    } else if (this.state == 'attack') {
      this.animations.attack.render(ctx, this.cords, this.direction);
    }
  }
}
