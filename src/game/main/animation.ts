import { Pointer } from './pointer';
import { IAnimation } from 'game/data/media';

export class Animation {
  img: HTMLImageElement;
  size: Pointer;
  leftShift: Pointer;
  rightShift: Pointer;
  countFrame: number;
  speed: number;
  scale: number;
  currentFrame: number;
  constructor(img: HTMLImageElement, params: IAnimation) {
    this.img = img;
    this.size = params.sizeFrame;
    this.leftShift = params.leftShift;
    this.rightShift = params.rightShift;
    this.countFrame = params.countFrame;
    this.speed = params.speed;
    this.scale = params.scale;
    this.currentFrame = 0;
  }
  reset() {
    this.currentFrame = 0;
  }
  update(dt: number) {
    this.currentFrame += this.speed * dt;
    return this.currentFrame >= this.countFrame;
  }
  render(ctx: CanvasRenderingContext2D, cords: Pointer, direction?: string) {
    if (direction == 'right') {
      cords = new Pointer(cords.x + this.rightShift.x, cords.y + this.rightShift.y);
    } else {
      cords = new Pointer(cords.x + this.leftShift.x, cords.y + this.leftShift.y);
    }

    if (direction === 'right') {
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(
        this.img,
        this.size.x * (Math.floor(this.currentFrame) % this.countFrame),
        0,
        this.size.x,
        this.size.y,
        -cords.x,
        cords.y,
        -this.size.x * this.scale,
        this.size.y * this.scale
      );
      ctx.restore();
    } else {
      ctx.drawImage(
        this.img,
        this.size.x * (Math.floor(this.currentFrame) % this.countFrame),
        0,
        this.size.x,
        this.size.y,
        cords.x,
        cords.y,
        this.size.x * this.scale,
        this.size.y * this.scale
      );
    }
  }
}
