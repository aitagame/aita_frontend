import { Pointer } from './pointer';
import { IAnimation } from 'game/gameData';

export class Animation {
  img: HTMLImageElement;
  size: Pointer;
  shift: Pointer;
  countFrame: number;
  speed: number;
  scale: number;
  currentFrame: number;
  constructor(src: string, params: IAnimation) {
    this.img = new Image(params.sizeFrame.x, params.sizeFrame.y);
    this.img.src = src;
    this.size = params.sizeFrame;
    this.shift = params.shift;
    this.countFrame = params.countFrame;
    this.speed = params.speed;
    this.scale = params.scale;
    this.currentFrame = 0;
  }
  update(dt: number) {
    this.currentFrame += this.speed * dt;
  }
  render(ctx: CanvasRenderingContext2D, cords: Pointer, direction?: string) {
    cords = new Pointer(cords.x + this.shift.x, cords.y + this.shift.y);
    if (direction === 'right') {
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(
        this.img,
        this.size.x * (Math.round(this.currentFrame) % this.countFrame),
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
        this.size.x * (Math.round(this.currentFrame) % this.countFrame),
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
