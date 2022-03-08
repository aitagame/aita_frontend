import loaderImages from '../utils/loaderImages';
import getPressedKeys from 'game/utils/useButtons';
import { images, mediaData, gameData } from '../gameData';
import { Background } from './background';
import { Platform } from './platform';
import { Player } from './player';
import { Pointer } from './pointer';
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
    this.players = [
      new Player(gameData.player.startPosition.copy(), this.pressedKeys, 'fire'),
      new Player(new Pointer(950, 300), new Map(), 'water'),
      new Player(new Pointer(1060, 300), new Map(), 'wind'),
      new Player(new Pointer(1170, 300), new Map(), 'earth'),
    ];
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
    this.players.forEach(player => player.update(dt));
    this.players.forEach(player => {
      this.platforms.forEach(platform => {
        if (platform.collider.isCollised(player.collider)) {
          player.collide(platform.collider);
        }
      });
      player.projectiles.forEach(projectile => {
        if (projectile.state === 'active') {
          this.platforms.forEach(platform => {
            if (projectile.collider.isCollised(platform.collider)) {
              projectile.collide();
            }
          });
          this.players.forEach(player2 => {
            if (player2 != player) {
              if (projectile.collider.isCollised(player2.collider)) {
                projectile.collide();
                player2.getDamage();
              }
            }
          });
        }
      });
    });
  }

  render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.background.render(ctx, canvas);
    this.platforms.forEach(platform => platform.render(ctx));
    this.players.forEach(player => player.render(ctx));
  }

  startGame(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    loaderImages(
      [this.background.img, this.players[0].animations.idle.img],
      this.play.bind(this),
      ctx,
      canvas
    );
  }

  stopGame() {
    cancelAnimationFrame(this.idRequestAnimationFrame);
  }
}
