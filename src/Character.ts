import GameContext from "./GameContext";
//import Time from "./Time";
// @ts-ignore
import spritesheet from "/assets/spritesheet.png";
import ssjugador from "/assets/jugador.jpg";


type coords = [number, number];

class Character {
  private position: coords = [0, 0];
  private characterWidth: number = 100; // Checar tamano 
  private characterHeight: number = 100;
  private lives: number = 0;
  private frameCounter = 0;
  private currentFrame = 0;
  private characterImage: HTMLImageElement = new Image();

  constructor(cantvidas:number) {
    const { context } = GameContext;
    const { width, height } = context.canvas;
    //this.characterImage.src = spritesheet;
    this.characterImage.src = ssjugador;


    this.position = [
      (width - this.characterWidth) / 2,
      (height - this.characterHeight)/2,
    ];
    if(cantvidas===3)
    {                
      this.lives = 3;
    }
    else if(cantvidas===1)
    {
      this.lives = 1;
    }
    
  }


  public restarVida = () => {

    this.lives = this.lives - 1; 
  }

  public cuantasVidas = () => {

    return this.lives; 
  }


  public update = () => {
    if (this.frameCounter % 2 === 0) {
      this.currentFrame = (this.currentFrame + 1) % 5;
    }
    this.frameCounter += 1;
  };

  public render = () => {
    const { context } = GameContext;
    let [xPos, yPos] = this.position;
    
    
    xPos =(context.canvas.width ) / 2;
    yPos = context.canvas.height / 2;
    const paddingY = 4;
    const paddingX = 8;
    const spriteHeight = 100;
    const spriteWidth = 55;

    context.save();
    context.beginPath();
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