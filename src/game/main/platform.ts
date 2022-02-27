import { Player } from './player';

export class Platform {
  x: number;
  y: number;
  sizeX: number;
  sizeY: number;
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.sizeX = width || 150;
    this.sizeY = height || 20;
  }
  isCollised(obj: Player) {
    return (
      obj.cords.x - obj.size <= this.x + this.sizeX &&
      obj.cords.x + obj.size >= this.x &&
      obj.cords.y + obj.size >= this.y &&
      obj.cords.y - obj.size <= this.y + this.sizeY
    );
  }
  collide(obj: Player) {
    if (obj.lastCords.x + obj.size <= this.x) {
      obj.cords.x = this.x - obj.size;
    }
    if (obj.lastCords.x - obj.size >= this.x + this.sizeX) {
      obj.cords.x = this.x + this.sizeX + obj.size;
    }
    if (obj.lastCords.y + obj.size <= this.y) {
      obj.cords.y = this.y - obj.size;
      obj.isJump = false;
      obj.dy = 0;
    }
    if (obj.lastCords.y - obj.size >= this.y + this.sizeY) {
      obj.cords.y = this.y + this.sizeY + obj.size + 1;
      obj.dy = 0;
    }
  }
  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'orange';
    ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
  }
}
