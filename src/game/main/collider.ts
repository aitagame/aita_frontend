import { Pointer } from './pointer';

export class Collider {
  cords: Pointer;
  size: Pointer;
  constructor(cords: Pointer, size: Pointer) {
    this.cords = cords;
    this.size = size;
  }
  isCollised(obj: Collider) {
    return (
      obj.cords.x <= this.cords.x + this.size.x &&
      obj.cords.x + obj.size.x >= this.cords.x &&
      obj.cords.y + obj.size.y >= this.cords.y &&
      obj.cords.y <= this.cords.y + this.size.y
    );
  }
  render(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 2;
    ctx.strokeRect(this.cords.x, this.cords.y, this.size.x, this.size.y);
  }
}
