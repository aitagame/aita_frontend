import getPressedKeys from 'game/utils/useButtons';
import { images, mediaData, gameData } from '../gameData';
import { Background } from './background';
import { Platform } from './platform';
import { Player, Element } from './player';
import { Pointer } from './pointer';
import { Socket } from 'socket.io-client';

const translator = new Map<string, Element>([
  ['air', 'wind'],
  ['inferno', 'fire'],
  ['terrestrial', 'earth'],
  ['aqua', 'water'],
]);

interface Position {
  direction: -1 | 1;
  id: number;
  keys: Record<string, string>[];
  time: string;
  x: number;
  y: number;
}
interface PlayerProfile {
  class: string;
  id: number;
  is_my: boolean;
  name: string;
  rating: number | null;
  position: Position;
}

function minmax(n: number) {
  return Math.max(90, Math.min(n, 1200));
}
export class Game {
  background: Background;
  players: Player[];
  platforms: Platform[];
  lastFrameUpdate: number;
  pressedKeys: Map<string, boolean>;
  idRequestAnimationFrame: number;
  id: number;
  socket: Socket;
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  addPlayer(player: PlayerProfile) {
    if (player.is_my || this.id === player.id) {
      this.id = player.id;
      this.players[0] = new Player(
        new Pointer(minmax(player.position.x), player.position.y),
        this.pressedKeys,
        translator.get(player.class) as Element,
        player.id,
        player.position.direction === -1 ? 'left' : 'right'
      );
    } else {
      this.players.push(
        new Player(
          new Pointer(minmax(player.position.x), player.position.y),
          getPressedKeys(this.socket, true, player.id),
          translator.get(player.class) as Element,
          player.id,
          player.position.direction === -1 ? 'left' : 'right'
        )
      );
    }
  }
  removePlayer(id: number) {
    this.players = this.players.filter(player => player.id != id);
  }
  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    players: PlayerProfile[],
    socket: Socket
  ) {
    this.socket = socket;
    this.canvas = canvas;
    this.ctx = ctx;
    this.pressedKeys = getPressedKeys(this.socket, false);
    this.background = new Background(
      images.background,
      mediaData.background.size,
      mediaData.background.center
    );
    this.players = [
      new Player(gameData.player.startPosition.copy(), this.pressedKeys, 'fire', 0),
      new Player(new Pointer(900, 300), new Map(), 'water', 0),
      new Player(new Pointer(990, 300), new Map(), 'fire', 0),
      new Player(new Pointer(1080, 300), new Map(), 'wind', 0),
      new Player(new Pointer(1170, 300), new Map(), 'earth', 0),
    ];
    players?.forEach(player => {
      this.addPlayer(player);
    });
    this.platforms = gameData.platforms.map(
      platform => new Platform(platform.cords, platform.size, platform.type)
    );
    this.lastFrameUpdate = Date.now();
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  play() {
    const now = Date.now();
    const dt = (now - this.lastFrameUpdate) / 1000;
    this.update(dt);
    this.render(this.ctx, this.canvas);
    this.idRequestAnimationFrame = requestAnimationFrame(this.play.bind(this));
    this.lastFrameUpdate = now;
  }

  update(dt: number) {
    dt = Math.min(dt, 0.04);
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
              projectile.collide(platform.collider);
            }
          });
          this.players.forEach(player2 => {
            if (player2.state !== 'died' && player2 != player) {
              if (projectile.collider.isCollised(player2.collider)) {
                projectile.collide();
                player2.getDamage();
              }
            }
          });
        }
      });
    });
    this.players.forEach(player => {
      if (player.state == 'died') {
        player.die();
      }
    });
  }

  render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.background.render(ctx, canvas);
    this.platforms.forEach(platform => platform.render(ctx));
    this.players.forEach(player => player.render(ctx));
  }

  stopGame() {
    cancelAnimationFrame(this.idRequestAnimationFrame);
  }
}
