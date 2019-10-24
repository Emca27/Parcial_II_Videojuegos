/*import GameContext from "./GameContext";
import Time from "./Time";
// @ts-ignore
import spritesheet from "/assets/spritesheet.png";

type coords = [number, number];

class Character {
  private position: coords = [0, 0];
  private characterWidth: number = 4; // Checar tamano 
  private characterHeight: number = 4;
  private lives: number;
 //private frameCounter = 0;
  //private currentFrame = 0;
  //private speed = 200;
  //private direction: CharacterDirection = CharacterDirection.None;

  private characterImage: HTMLImageElement = new Image(); //ActualizarImagen
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

  public keydownHandler = (key: string) => {
    switch (key) {
      case "ArrowRight":
        this.direction = CharacterDirection.Right;
        break;
      case "ArrowLeft":
        this.direction = CharacterDirection.Left;
        break;
    }
  };



  public update = () => {
    const { context } = GameContext;
    const { width } = context.canvas;

    let [xPos, yPos] = this.position;
    if (xPos > width) {
      xPos = -this.characterWidth;
    }

    if (xPos < -this.characterWidth) {
      xPos = width;
    }

    xPos = xPos + this.speed * this.direction * Time.deltaTime;
    this.position = [xPos, yPos];
    if (this.frameCounter % 2 === 0) {
      this.currentFrame = (this.currentFrame + 1) % 15;
    }
    this.frameCounter += 1;
  };

  public render = () => {
    const { context } = GameContext;
    let [xPos, yPos] = this.position;
    const paddingY = 4;
    const paddingX = 56.8;
    const spriteHeight = 85;
    const spriteWidth = 52;

    context.save();
    context.beginPath();
    context.fillStyle = "lime";
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
*/
