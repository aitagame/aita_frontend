import loaderImages from '../utils/loaderImages';
import getPressedKeys from 'game/utils/useButtons';
import { gameData } from '../gameData';
import { Pointer } from './pointer';
import { Background } from './background';
import { Platform } from './platform';
import { Player } from './player';
export class Game {
  background: Background;
  players: Player[];
  platforms: Platform[];
  lastFrameUpdate: number;
  pressedKeys: Map<string, boolean>;
  idRequestAnimationFrame: number;
  constructor(canvas: HTMLCanvasElement) {
    this.pressedKeys = getPressedKeys();
    this.background = new Background(1600, 844, gameData.backgroundImage, new Pointer(980, 400));
    this.players = [new Player(new Pointer(800, 400), this.pressedKeys)];
    this.platforms = [
      new Platform(80, 500, 150, 20),
      new Platform(500, 309, 150, 20),
      new Platform(900, 250, 150, 20),
      new Platform(1050, 120, 20, 150),
      new Platform(900, 410, 170 + 150, 20),
      new Platform(1070, 250, 150, 20),
      new Platform(80, 600, 1500, 20),
    ];
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
    this.idRequestAnimationFrame = requestAnimationFrame(() => this.play(ctx, canvas));
    this.lastFrameUpdate = now;
  }

  update(dt: number) {
    this.players[0].update(dt);
    this.platforms.forEach(platform => {
      if (platform.isCollised(this.players[0])) {
        platform.collide(this.players[0]);
      }
    });
  }

  render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.background.render(ctx, canvas);
    this.players[0].render(ctx);
    this.platforms.forEach(platform => platform.render(ctx));
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

  stopGame() {
    console.log('test');
    cancelAnimationFrame(this.idRequestAnimationFrame);
  }
}
