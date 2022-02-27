import { gameData } from 'game/gameData';
import { Pointer } from './pointer';
import { Animation } from './animation';

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
  static animations = {
    idle: new Animation(gameData.idleAnimationImage, 4, new Pointer(62, 43), 7),
    move: new Animation(gameData.moveAnimationImage, 4, new Pointer(62, 43), 7),
  };
  constructor(cords: Pointer, pressedKeys: Map<string, boolean>) {
    this.cords = cords;
    this.lastCords = new Pointer(cords.x, cords.y);
    this.size = 16;
    this.state = 'idle';
    this.direction = 'left';
    this.pressedKeys = pressedKeys;
    this.dx = 400;
    this.ddy = 600 * 1.5;
    this.dy = 0;
    this.isJump = false;
  }
  update(dt: number) {
    this.lastCords.x = this.cords.x;
    this.lastCords.y = this.cords.y;
    const left = !!(this.pressedKeys.get('KeyA') || this.pressedKeys.get('ArrowLeft'));
    const right = !!(this.pressedKeys.get('KeyD') || this.pressedKeys.get('ArrowRight'));
    if (this.pressedKeys.get('KeyW') && !this.isJump) {
      this.dy = -580;
      this.isJump = true;
    }
    this.cords.y += this.dy * dt;
    this.dy += this.ddy * dt;
    if (this.dy > 900 * 1.5) {
      this.dy = 900 * 1.5;
    }
    if (left) {
      this.cords.x -= this.dx * dt;
      this.state = 'move';
      if (!right) this.direction = 'left';
    }
    if (right) {
      this.cords.x += this.dx * dt;
      this.state = 'move';
      if (!left) this.direction = 'right';
    }
    this.isJump = true;
    if (left === right) {
      this.state = 'idle';
    }
    if (this.state === 'idle') {
      Player.animations.idle.update(dt);
    } else if (this.state === 'move') {
      Player.animations.move.update(dt);
    }
  }
  render(ctx: CanvasRenderingContext2D) {
    if (this.state === 'idle') {
      Player.animations.idle.render(ctx, this.cords, this.direction);
    } else if (this.state === 'move') {
      Player.animations.move.render(ctx, this.cords, this.direction);
    }
  }
}
