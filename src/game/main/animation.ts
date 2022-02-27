import { Pointer } from './pointer';

export class Animation {
  img: HTMLImageElement;
  count: number;
  sizeFrame: Pointer;
  currentFrame: number;
  speed: number;
  scale = 2;
  constructor(src: string, count: number, sizeFrame: Pointer, speed: number) {
    this.img = new Image(sizeFrame.x, sizeFrame.y);
    this.img.src = src;
    this.count = count;
    this.sizeFrame = sizeFrame;
    this.currentFrame = 0;
    this.speed = speed;
    this.scale = 2;
  }
  update(dt: number) {
    this.currentFrame += this.speed * dt;
  }
  render(ctx: CanvasRenderingContext2D, cords: Pointer, direction?: string) {
    cords = new Pointer(cords.x - 60, cords.y - 60);
    if (direction === 'right') {
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(
        this.img,
        this.sizeFrame.x * (Math.round(this.currentFrame) % this.count),
        0,
        this.sizeFrame.x,
        this.sizeFrame.y,
        -cords.x,
        cords.y,
        -this.sizeFrame.x * this.scale,
        this.sizeFrame.y * this.scale
      );
      ctx.restore();
    } else {
      ctx.drawImage(
        this.img,
        this.sizeFrame.x * (Math.round(this.currentFrame) % this.count),
        0,
        this.sizeFrame.x,
        this.sizeFrame.y,
        cords.x,
        cords.y,
        this.sizeFrame.x * this.scale,
        this.sizeFrame.y * this.scale
      );
    }
  }
}
