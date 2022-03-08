import { Pointer } from './pointer';
import { Collider } from './collider';
export class Platform {
  cords: Pointer;
  size: Pointer;
  collider: Collider;
  constructor(cords: Pointer, size: Pointer) {
    this.cords = cords;
    this.size = size;
    this.collider = new Collider(cords, size);
  }
  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'orange';
    ctx.fillRect(this.cords.x, this.cords.y, this.size.x, this.size.y);
    // this.collider.render(ctx);
  }
}
