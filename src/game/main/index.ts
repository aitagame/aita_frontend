import loaderImages from '../utils/loaderImages';
import { gameData } from '../gameData';
import getPressedKeys from 'game/utils/useButtons';
import { dir } from 'console';
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

class Animation {
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

class Player {
  cords: Pointer;
  state: string;
  pressedKeys: Map<string, boolean>;
  dx: number;
  direction: string;
  static animations = {
    idle: new Animation(gameData.idleAnimationImage, 4, new Pointer(62, 43), 7),
    move: new Animation(gameData.moveAnimationImage, 4, new Pointer(62, 43), 7),
  };
  constructor(cords: Pointer, pressedKeys: Map<string, boolean>) {
    this.cords = cords;
    this.state = 'idle';
    this.direction = 'left';
    this.pressedKeys = pressedKeys;
    this.dx = 10;
  }
  update(dt: number) {
    const left = this.pressedKeys.get('KeyA') || this.pressedKeys.get('ArrowLeft');
    const right = this.pressedKeys.get('KeyD') || this.pressedKeys.get('ArrowRight');

    if (left) {
      this.cords.x -= this.dx * dt;
      this.state = 'move';
      if (!right) this.direction = 'left';
    }
    if (right) {
      this.cords.x += this.dx * dt;
      this.state = 'move';
      if (!left) this.direction = 'right';
    }
    if (!left && !right) {
      this.state = 'idle';
    }

    if (this.state === 'idle') {
      Player.animations.idle.update(dt);
    } else if (this.state === 'move') {
      Player.animations.move.update(dt);
    }
  }
  render(ctx: CanvasRenderingContext2D) {
    if (this.state === 'idle') {
      Player.animations.idle.render(ctx, this.cords, this.direction);
    } else if (this.state === 'move') {
      Player.animations.move.render(ctx, this.cords, this.direction);
    }
  }
}
export class Game {
  background: Background;
  players: Player[];
  lastFrameUpdate: number;
  pressedKeys: Map<string, boolean>;
  constructor(canvas: HTMLCanvasElement) {
    this.pressedKeys = getPressedKeys();
    this.background = new Background(1600, 844, gameData.backgroundImage, new Pointer(980, 400));
    this.players = [new Player(new Pointer(800, 400), this.pressedKeys)];
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
    this.players[0].update(dt);
  }

  render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.background.render(ctx, canvas);
    this.players[0].render(ctx);
  }

  startGame(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    loaderImages(
      [this.background.img, Player.animations.idle.img],
      this.play.bind(this),
      ctx,
      canvas
    );
  }
}
