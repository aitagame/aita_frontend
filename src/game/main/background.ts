import { Pointer } from './pointer';

export class Background {
  size: Pointer;
  center: Pointer;
  img: HTMLImageElement;
  constructor(img: HTMLImageElement, size: Pointer, center?: Pointer) {
    this.size = size;
    this.img = img;
    if (center) this.center = center;
    else this.center = new Pointer(size.x / 2, size.y / 2);
  }
  render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    let sizeFactor = 1;
    if (this.size.x / this.size.y < canvas.width / canvas.height) {
      sizeFactor = canvas.width / this.size.x;
    } else {
      sizeFactor = canvas.height / this.size.y;
    }
    let dxCenter = this.center.x - this.size.x / 2;
    let dyCenter = this.center.y - this.size.y / 2;
    const sizeEdgeW = (this.size.x * sizeFactor) / 2 - canvas.width / 2;
    const sizeEdgeH = (this.size.y * sizeFactor) / 2 - canvas.height / 2;
    dxCenter = Math.min(Math.abs(dxCenter), sizeEdgeW) * Math.sign(dxCenter);
    dyCenter = Math.min(Math.abs(dyCenter), sizeEdgeH) * Math.sign(dyCenter);

    ctx.save();
    ctx.translate(canvas.width / 2 - dxCenter, canvas.height / 2 - dyCenter);
    ctx.drawImage(
      this.img,
      (-this.size.x * sizeFactor) / 2,
      (-this.size.y * sizeFactor) / 2,
      this.size.x * sizeFactor,
      this.size.y * sizeFactor
    );
    ctx.restore();
  }
}
