import getPressedKeys, { eventManager } from 'game/utils/useButtons';
import { gameData } from 'game/data/config';
import { mediaData } from 'game/data/media';
import { images } from 'game/data/images';
import { Background } from './background';
import { Platform } from './platform';
import { Player, Element, Direction } from './player';
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
  lastUpdateStateInServer: number;
  readyUpdateStateInServer: boolean;
  pressedKeys: Map<string, boolean>;
  idRequestAnimationFrame: number;
  id: number;
  socket: Socket;
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
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
    this.players = [];
    players?.forEach(player => {
      this.addPlayer(player);
    });
    this.platforms = gameData.platforms.map(
      platform => new Platform(platform.cords, platform.size, platform.type)
    );
    this.lastFrameUpdate = Date.now();
    this.lastUpdateStateInServer = Date.now();
    this.readyUpdateStateInServer = true;
    eventManager.add(window, 'resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    this.socket.on('broadcast.players.update', obj => {
      this.getUpdatedPlayerServerState(
        obj.id,
        new Pointer(obj.x, obj.y),
        obj.direction === -1 ? 'left' : 'right'
      );
    });
  }
  sendUpdatedPlayerServerState(id: number) {
    const player = this.players.find(player => player.id == id);
    this.socket.emit('players.update', {
      x: player?.cords.x,
      y: player?.cords.y,
      direction: player?.direction === 'left' ? -1 : 1,
      time: Date.now(),
      id: this.id,
    });
  }

  getUpdatedPlayerServerState(id: number, cords: Pointer, direction: Direction) {
    if (id == this.id) return;
    const player = this.players.find(player => player.id == id);
    player?.correctState(cords, direction);
    this.readyUpdateStateInServer = true;
  }

  addPlayer(player: PlayerProfile) {
    let pressedKeys;
    if (player.is_my || this.id === player.id) {
      this.id = player.id; //Отличие тут
      pressedKeys = this.pressedKeys;
    } else {
      pressedKeys = getPressedKeys(this.socket, true, player.id);
    }
    this.players.push(
      new Player(
        new Pointer(minmax(player.position.x), player.position.y),
        pressedKeys,
        translator.get(player.class) as Element,
        player.id,
        player.position.direction === -1 ? 'left' : 'right'
      )
    );
  }
  removePlayer(id: number) {
    // Не используется
    this.players = this.players.filter(player => player.id != id);
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
      // Обработка столкновений игрока с платформами
      this.platforms.forEach(platform => {
        if (platform.collider.isCollised(player.collider)) {
          player.collide(platform.collider);
        }
      });
      player.projectiles.forEach(projectile => {
        if (projectile.state === 'active') {
          // Обработка столкновений сфер игрока с флатформой
          this.platforms.forEach(platform => {
            if (projectile.collider.isCollised(platform.collider)) {
              projectile.collide(platform.collider);
            }
          });
          // Обработка столкновений сферер игрока с остальными игроками
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
    if (
      Date.now() - this.lastUpdateStateInServer >= 1000 ||
      (this.readyUpdateStateInServer && Date.now() - this.lastUpdateStateInServer >= 100)
    ) {
      this.sendUpdatedPlayerServerState(this.id);
      this.lastUpdateStateInServer = Date.now();
      this.readyUpdateStateInServer = false;
    }
  }

  render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.background.render(ctx, canvas);
    this.platforms.forEach(platform => platform.render(ctx));
    this.players.forEach(player => player.render(ctx));
  }

  stopGame() {
    cancelAnimationFrame(this.idRequestAnimationFrame);
    eventManager.removeAll();
  }
}
