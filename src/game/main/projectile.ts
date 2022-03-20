import { Pointer } from './pointer';
import { gameData } from 'game/data/config';
import { mediaData } from 'game/data/media';
import { images } from 'game/data/images';
import { Animation } from './animation';
import { Collider } from './collider';

type State = 'pending' | 'active' | 'collide' | 'deleted';

export class Projectile {
  collider: Collider;
  element: string;
  cords: Pointer;
  lastCords: Pointer;
  size: Pointer;
  direction: string;
  dx: number;
  state: State;
  creationTime: number;
  animations: {
    move: Animation;
    collide: Animation;
  };
  constructor(element: string) {
    this.element = element;
    this.state = 'pending';
    this.creationTime = Date.now();
    this.animations = {
      move: new Animation(images[this.element].projectile, mediaData[this.element].projectile),
      collide: new Animation(
        images[this.element].projectileCollide,
        mediaData[this.element].projectileCollide
      ),
    };
  }
  collide(obj?: Collider) {
    if (obj) {
      if (this.state === 'active') {
        this.state = 'collide';
      }
      if (this.lastCords.x + this.size.x <= obj.cords.x) {
        this.cords.x = obj.cords.x - this.size.x;
      }
      if (this.lastCords.x >= obj.cords.x + obj.size.x) {
        this.cords.x = obj.cords.x + obj.size.x;
      }
      if (this.lastCords.y + this.size.x <= obj.cords.y) {
        this.cords.y = obj.cords.y - this.size.x;
      }
      if (this.lastCords.y >= obj.cords.y + obj.size.y) {
        this.cords.y = obj.cords.y + obj.size.y + 1;
      }
    } else if (this.state === 'active') {
      this.state = 'deleted';
    }
  }
  activate(cords: Pointer, direction: string) {
    if (this.state === 'pending') {
      this.cords = cords;
      this.lastCords = this.cords.copy();
      this.size = new Pointer(20, 20);
      this.direction = direction;
      this.state = 'active';
      this.collider = new Collider(cords, this.size);
      if (direction === 'left') {
        this.dx = -gameData.player.speedProjectile;
      } else {
        this.dx = gameData.player.speedProjectile;
      }
    }
  }
  update(dt: number) {
    if (this.state === 'active') {
      this.lastCords = this.cords.copy();
      this.cords.x += this.dx * dt;
      this.animations.move.update(dt);
    } else if (this.state === 'collide') {
      if (this.animations.collide.update(dt * 4)) {
        this.state = 'deleted';
      }
    }
  }
  render(ctx: CanvasRenderingContext2D) {
    if (this.state === 'active') {
      this.animations.move.render(ctx, this.cords, this.direction);
      // this.collider.render(ctx);
    } else if (this.state === 'collide') {
      this.animations.collide.render(ctx, this.cords, this.direction);
    }
  }
}
