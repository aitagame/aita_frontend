export class Pointer {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  distance(ptr: Pointer): number {
    return Math.hypot(Math.abs(this.x - ptr.x), Math.abs(this.y - ptr.y));
  }
}
