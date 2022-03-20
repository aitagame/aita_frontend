import { Pointer } from './pointer';
import { Collider } from './collider';
import { mediaData } from 'game/data/media';
import { images } from 'game/data/images';
export class Platform {
  cords: Pointer;
  size: Pointer;
  type?: string;
  texture: HTMLImageElement;
  collider: Collider;
  constructor(cords: Pointer, size: Pointer, type?: string) {
    this.cords = cords;
    this.size = size;
    this.type = type;
    if (type && type !== 'invisible') {
      this.texture = images.platforms[type];
    }
    this.collider = new Collider(cords, size);
  }
  render(ctx: CanvasRenderingContext2D) {
    if (this.type && this.type !== 'invisible') {
      ctx.drawImage(
        this.texture,
        this.cords.x + mediaData.platforms[this.type].shift.x,
        this.cords.y + mediaData.platforms[this.type].shift.y,
        mediaData.platforms[this.type].size.x,
        mediaData.platforms[this.type].size.y
      );
    } else if (this.type !== 'invisible') {
      ctx.fillStyle = 'orange';
      ctx.fillRect(this.cords.x, this.cords.y, this.size.x, this.size.y);
    }
    // this.collider.render(ctx);
  }
}
