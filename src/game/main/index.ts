import loaderImages from '../utils/loaderImages'
import { IGameData } from '../gameData'
class Pointer {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  distance(ptr: Pointer): number {
    return Math.hypot(Math.abs(this.x - ptr.x), Math.abs(this.y - ptr.y))
  }
}

class Background {
  width: number
  height: number
  center: Pointer
  img: HTMLImageElement
  constructor(width: number, height: number, src: string, center?: Pointer) {
    this.width = width
    this.height = height
    this.img = new Image(width, height)
    this.img.src = src
    if (center) this.center = center
    else this.center = new Pointer(width / 2, height / 2)
  }
  render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height)
  }
}

class Player {
  cords: Pointer
  constructor(cords: Pointer) {
    this.cords = cords
  }
}
export class Game {
  background: Background
  players: Player[]
  lastFrameUpdate: number

  constructor(gameData: IGameData) {
    this.background = new Background(800, 600, gameData.backgroundImage)
    this.players = []
    this.lastFrameUpdate = Date.now()
    window.addEventListener('resize', () => {
      console.log('handeResize')
    })
  }

  play(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    const now = Date.now()
    const dt = (now - this.lastFrameUpdate) / 1000
    this.update(dt)
    this.render(ctx, canvas)
    requestAnimationFrame(() => this.play(ctx, canvas))
    this.lastFrameUpdate = now
  }

  update(dt: number) {
    console.log(dt)
  }

  render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    this.background.render(ctx, canvas)
  }

  startGame(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    loaderImages([this.background.img], this.play.bind(this), ctx, canvas)
  }
}
