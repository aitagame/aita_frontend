import { Player } from './player';
import { Pointer } from './pointer';

export class Platform {
  cords: Pointer;
  size: Pointer;
  constructor(cords: Pointer, size: Pointer) {
    this.cords = cords;
    this.size = size;
  }
  isCollised(obj: Player) {
    return (
      obj.cords.x - obj.size <= this.cords.x + this.size.x &&
      obj.cords.x + obj.size >= this.cords.x &&
      obj.cords.y + obj.size >= this.cords.y &&
      obj.cords.y - obj.size <= this.cords.y + this.size.y
    );
  }
  collide(obj: Player) {
    if (obj.lastCords.x + obj.size <= this.cords.x) {
      obj.cords.x = this.cords.x - obj.size;
    }
    if (obj.lastCords.x - obj.size >= this.cords.x + this.size.x) {
      obj.cords.x = this.cords.x + this.size.x + obj.size;
    }
    if (obj.lastCords.y + obj.size <= this.cords.y) {
      obj.cords.y = this.cords.y - obj.size;
      obj.isJump = false;
      obj.dy = 0;
    }
    if (obj.lastCords.y - obj.size >= this.cords.y + this.size.y) {
      obj.cords.y = this.cords.y + this.size.y + obj.size + 1;
      obj.dy = 0;
    }
  }
  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'orange';
    ctx.fillRect(this.cords.x, this.cords.y, this.size.x, this.size.y);
  }
}
