import backgroundImage from "../assets/backgrounds/background2.png";
import loaderImages from "../utils/loaderImages";

const background = new Image(800, 600);
let last = Date.now();

function play(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
  const dt = Date.now() - last;
  update(dt);
  render(ctx, canvas);
}

function update(dt: number){

}

function render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
  ctx.fillStyle = "yellow";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

export default function startGame(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  background.src = backgroundImage;
  loaderImages([background], play, ctx, canvas);
}
