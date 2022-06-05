import { gameData } from 'game/data/config';
import { mediaData } from 'game/data/media';
import { images } from 'game/data/images';
import { Pointer } from './pointer';
import { Animation } from './animation';
import { Collider } from './collider';
import { Projectile } from './projectile';

export type Element = 'fire' | 'water' | 'earth' | 'wind'; //AITA -- Aqua Inferno Terra Aer
export type Direction = 'left' | 'right';
type State = 'idle' | 'move' | 'attack' | 'hurt' | 'die' | 'died';
export class Player {
  collider: Collider;
  element: Element;
  cords: Pointer;
  lastCords: Pointer;
  size: Pointer;
  state: State;
  pressedKeys: Map<string, boolean>;
  hp: number;
  dx: number;
  dy: number;
  ddy: number;
  jumps: number;
  maxJumps: number;
  direction: Direction;
  attackInterval: number;
  attackDelay: number;
  timeLastChangeElement: number;
  timeLastAttack: number;
  id: number;
  projectiles: Projectile[];
  animations: Record<string, Animation>;
  constructor(
    cords: Pointer,
    pressedKeys: Map<string, boolean>,
    element: Element,
    id: number,
    direction?: Direction
  ) {
    this.id = id;
    this.element = element;
    this.cords = cords;
    this.lastCords = new Pointer(cords.x, cords.y);
    this.size = new Pointer(gameData.player.size, gameData.player.size);
    this.collider = new Collider(this.cords, this.size);
    this.state = 'idle';
    this.direction = direction || 'left';
    this.pressedKeys = pressedKeys;
    this.hp = 100;
    this.dx = gameData.player.dx;
    this.ddy = gameData.player.ddy;
    this.dy = 0;
    this.maxJumps = gameData.player.maxJumps;
    this.jumps = this.maxJumps;
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
      hurt: new Animation(
        images[this.element].hurtAnimation,
        mediaData[this.element].hurtAnimation
      ),
      die: new Animation(images[this.element].dieAnimation, mediaData[this.element].dieAnimation),
    };
    this.projectiles = [];
  }

  getDamage() {
    this.hp -= 35;
    if (this.hp <= 0 && this.state !== 'died') this.state = 'die';
    else this.state = 'hurt';
  }

  collide(obj: Collider) {
    if (this.lastCords.x + this.size.x <= obj.cords.x) {
      this.cords.x = obj.cords.x - this.size.x;
    }
    if (this.lastCords.x >= obj.cords.x + obj.size.x) {
      this.cords.x = obj.cords.x + obj.size.x;
    }
    if (this.lastCords.y + this.size.x <= obj.cords.y) {
      this.cords.y = obj.cords.y - this.size.x;
      this.jumps = this.maxJumps;
      this.dy = 0;
    }
    if (this.lastCords.y >= obj.cords.y + obj.size.y) {
      this.cords.y = obj.cords.y + obj.size.y + 1;
      this.dy = 0;
    }
  }
  die() {
    this.hp = 100;
    this.state = 'idle';
    this.cords.x = 200;
    this.cords.y = -200;
    this.dy = 0;
    // this.cords = new Pointer(200, -200);
  }
  changeElement(element: Element) {
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
      hurt: new Animation(
        images[this.element].hurtAnimation,
        mediaData[this.element].hurtAnimation
      ),
      die: new Animation(images[this.element].dieAnimation, mediaData[this.element].dieAnimation),
    };
  }
  nextElement() {
    if (this.element == 'water') this.changeElement('fire');
    else if (this.element == 'fire') this.changeElement('earth');
    else if (this.element == 'earth') this.changeElement('wind');
    else if (this.element == 'wind') this.changeElement('water');
    this.timeLastChangeElement = Date.now();
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
      this.nextElement();
    }
    if (this.state !== 'die' && this.state !== 'died') {
      // Create projectile
      if (attack && (Date.now() - this.timeLastAttack) / 1000 > this.attackInterval) {
        this.timeLastAttack = Date.now();
        this.state = 'attack';
        this.projectiles.push(new Projectile(this.element));
      }
      // Activate projectile
      this.projectiles.forEach(projectile => {
        //TODO: move attackAnimation.speed to gameData
        if (
          (Date.now() - projectile.creationTime) / 1000 >
          this.attackDelay / mediaData.fire.attackAnimation.speed
        ) {
          if (this.direction === 'left') {
            projectile.activate(new Pointer(this.cords.x - 10, this.cords.y + 2), this.direction);
          } else if (this.direction === 'right') {
            projectile.activate(new Pointer(this.cords.x + 26, this.cords.y + 2), this.direction);
          }
        }
      });
      // Delete projectile
      this.projectiles = this.projectiles.filter(projectile => {
        return (
          projectile.state === 'pending' ||
          projectile.state === 'collide' ||
          (projectile.state === 'active' && projectile.cords.x > -100 && projectile.cords.x < 3000)
        );
      });
      if (up && this.jumps) {
        this.pressedKeys.set('KeyW', false);
        this.pressedKeys.set('ArrowUp', false);
        this.dy = -gameData.player.jumpPower;
        this.jumps--;
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

      if (left === right && this.state != 'attack' && this.state != 'hurt') {
        this.state = 'idle';
      }
      if (this.cords.y > 1000) {
        this.state = 'died';
      }
    }
    this.projectiles.forEach(projectile => projectile.update(dt));
    if (this.state === 'idle') {
      this.animations.idle.update(dt);
    } else if (this.state === 'move') {
      this.animations.move.update(dt);
    } else if (this.state === 'attack') {
      if (this.animations.attack.update(dt)) {
        this.state = 'idle';
        this.animations.attack.reset();
      }
    } else if (this.state === 'hurt') {
      if (this.animations.hurt.update(dt)) {
        this.state = 'idle';
        this.animations.hurt.reset();
      }
    } else if (this.state === 'die') {
      if (this.animations.die.update(dt)) {
        this.state = 'died';
        this.animations.die.reset();
      }
    }
    this.jumps = Math.min(this.jumps, this.maxJumps - 1);
  }
  correctState(cords: Pointer, direction: Direction) {
    this.cords.x = cords.x;
    this.cords.y = cords.y;
    this.direction = direction;
  }
  render(ctx: CanvasRenderingContext2D) {
    this.projectiles.forEach(projectile => projectile.render(ctx));
    if (this.state === 'idle') {
      this.animations.idle.render(ctx, this.cords, this.direction);
    } else if (this.state === 'move') {
      this.animations.move.render(ctx, this.cords, this.direction);
    } else if (this.state === 'attack') {
      this.animations.attack.render(ctx, this.cords, this.direction);
    } else if (this.state === 'hurt') {
      this.animations.hurt.render(ctx, this.cords, this.direction);
    } else if (this.state === 'die') {
      this.animations.die.render(ctx, this.cords, this.direction);
    }
    // this.collider.render(ctx);
  }
}
