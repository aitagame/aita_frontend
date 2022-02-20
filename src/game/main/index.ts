import loaderImages from '../utils/loaderImages';
import { IGameData } from '../gameData';

class Pointer {
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

class Background {
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

class Player {
  cords: Pointer;
  constructor(cords: Pointer) {
    this.cords = cords;
  }
}
export class Game {
  background: Background;
  players: Player[];
  lastFrameUpdate: number;

  constructor(gameData: IGameData, canvas: HTMLCanvasElement) {
    this.background = new Background(1600, 844, gameData.backgroundImage, new Pointer(980, 400));
    this.players = [];
    this.lastFrameUpdate = Date.now();
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  play(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    const now = Date.now();
    const dt = (now - this.lastFrameUpdate) / 1000;
    this.update(dt);
    this.render(ctx, canvas);
    requestAnimationFrame(() => this.play(ctx, canvas));
    this.lastFrameUpdate = now;
  }

  update(dt: number) {
    //console.log(dt)
  }

  render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.background.render(ctx, canvas);
  }

  startGame(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    loaderImages([this.background.img], this.play.bind(this), ctx, canvas);
  }
}
