import loaderImages from '../utils/loaderImages';
import getPressedKeys from 'game/utils/useButtons';
import { images, mediaData, gameData } from '../gameData';
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
    this.background = new Background(
      images.background,
      mediaData.background.size,
      mediaData.background.center
    );
    this.players = [new Player(gameData.player.startPosition, this.pressedKeys)];
    this.platforms = gameData.platforms.map(
      platform => new Platform(platform.cords, platform.size)
    );
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
    cancelAnimationFrame(this.idRequestAnimationFrame);
  }
}
