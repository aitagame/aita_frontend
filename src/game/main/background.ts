import { Pointer } from './pointer';

export class Background {
  width: number;
  height: number;
  center: Pointer;
  img: HTMLImageElement;
  constructor(width: number, height: number, src: string, center?: Pointer) {
    this.width = width;
    this.height = height;
    this.img = new Image(width, height);
    this.img.src = src;
    if (center) this.center = center;
    else this.center = new Pointer(width / 2, height / 2);
  }
  render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    let sizeFactor = 1;
    if (this.width / this.height < canvas.width / canvas.height) {
      sizeFactor = canvas.width / this.width;
    } else {
      sizeFactor = canvas.height / this.height;
    }
    let dxCenter = this.center.x - this.width / 2;
    let dyCenter = this.center.y - this.height / 2;
    const sizeEdgeW = (this.width * sizeFactor) / 2 - canvas.width / 2;
    const sizeEdgeH = (this.height * sizeFactor) / 2 - canvas.height / 2;
    dxCenter = Math.min(Math.abs(dxCenter), sizeEdgeW) * Math.sign(dxCenter);
    dyCenter = Math.min(Math.abs(dyCenter), sizeEdgeH) * Math.sign(dyCenter);

    ctx.save();
    ctx.translate(canvas.width / 2 - dxCenter, canvas.height / 2 - dyCenter);
    ctx.drawImage(
      this.img,
      (-this.width * sizeFactor) / 2,
      (-this.height * sizeFactor) / 2,
      this.width * sizeFactor,
      this.height * sizeFactor
    );
    ctx.restore();
  }
}
