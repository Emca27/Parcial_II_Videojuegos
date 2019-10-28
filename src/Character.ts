import GameContext from "./GameContext";
//import Time from "./Time";
// @ts-ignore
import spritesheet from "/assets/spritesheet.png";

type coords = [number, number];

class Character {
  private position: coords = [0, 0];
  private characterWidth: number = 40; // Checar tamano 
  private characterHeight: number = 40;
  private lives: number = 0;
  private color = "white";
  private frameCounter = 0;
  private currentFrame = 0;
  private characterImage: HTMLImageElement = new Image();

  //private characterImage: HTMLImageElement = new Image(); //ActualizarImagen

  constructor() {
    const { context } = GameContext;
    const { width, height } = context.canvas;
    this.characterImage.src = spritesheet;

    this.position = [
      (width - this.characterWidth) / 2,
      (height - this.characterHeight)/2,
    ];
    this.lives = 3;
  }


  public restarVida = () => {

    this.lives = this.lives - 1; 
  }

  public cuantasVidas = () => {

    return this.lives; 
  }

  public setColor(newcolor)
  {
    this.color = newcolor;
  }



  public update = () => {
    if (this.frameCounter % 2 === 0) {
      this.currentFrame = (this.currentFrame + 1) % 15;
    }
    this.frameCounter += 1;
  };

  public render = () => {
    const { context } = GameContext;
    let [xPos, yPos] = this.position;
    xPos = context.canvas.width / 2;
    yPos = context.canvas.height / 2;
    const paddingY = 4;
    const paddingX = 56.8;
    const spriteHeight = 85;
    const spriteWidth = 52;

    context.save();
    context.beginPath();
    context.fillStyle = this.color;
    //context.fillRect(xPos, yPos, this.characterWidth, this.characterWidth);
    context.drawImage(
      this.characterImage,
      this.currentFrame * (spriteWidth + paddingX),
      paddingY,
      spriteWidth,
      spriteHeight,
      xPos,
      yPos,
      this.characterWidth,
      this.characterHeight
    );
    context.closePath();
    context.restore();
  };
}

export default Character;
