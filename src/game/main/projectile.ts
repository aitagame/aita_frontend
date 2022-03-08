import { Pointer } from './pointer';
import { images, mediaData, gameData } from 'game/gameData';
import { Animation } from './animation';
import { Collider } from './collider';

type State = 'pending' | 'active' | 'deleted';

export class Projectile {
  collider: Collider;
  element: string;
  cords: Pointer;
  direction: string;
  dx: number;
  state: State;
  creationTime: number;
  animation: Animation;
  constructor(element: string) {
    this.element = element;
    this.state = 'pending';
    this.creationTime = Date.now();
    this.animation = new Animation(
      images[this.element].projectile,
      mediaData[this.element].projectile
    );
  }
  collide() {
    if (this.state == 'active') {
      this.state = 'deleted';
    }
  }
  activate(cords: Pointer, direction: string) {
    if (this.state === 'pending') {
      this.cords = cords;
      this.direction = direction;
      this.state = 'active';
      if (direction == 'left') {
        this.dx = -gameData.player.speedProjectile;
        this.collider = new Collider(cords, new Pointer(20, 20));
      } else {
        this.dx = gameData.player.speedProjectile;
        this.collider = new Collider(cords, new Pointer(20, 20));
      }
    }
  }
  update(dt: number) {
    if (this.state === 'active') {
      this.cords.x += this.dx * dt;
      this.animation.update(dt);
    }
  }
  render(ctx: CanvasRenderingContext2D) {
    if (this.state === 'active' || this.state === 'deleted') {
      this.animation.render(ctx, this.cords, this.direction);
      // this.collider.render(ctx);
    }
  }
}
