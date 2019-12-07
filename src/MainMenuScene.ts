import Scene from "./Scene";
import Engine from "./Engine";
import PlayingScene from "./PlayingScene";
import GameContext from "./GameContext";
import score from "./Score";
import audio from "/assets/mainMenu.mp3"; 
import instrucciones from "./instrucciones";

const sound = new Audio(audio);

class MainMenuScene extends Scene {
  public enter: () => void;
  

  public render = () => {
    const context = GameContext.context;
    const width = context.canvas.width;
    const height = context.canvas.height;
    score.resetScore();
    score.resetVidas();
    context.save();
    context.beginPath();
    context.textAlign = "right"
    context.fillStyle = "red";
    context.font = "40px sans-serif";
    context.strokeStyle = "gold";
    context.lineWidth = 2;
    context.fillText("Whac-A-Zombie",350,100);

    for(let i = 0; i < this.options.length; i++){
      context.save();
      
      if(i === this.currentOption){
        context.textAlign = "center"
        context.font = "25px sans-serif";
        context.fillStyle = "red";
        context.fillText(this.options[i], width / 2, height/ 2 + i * 35);
      }else {
        context.font = "25px sans-serif";
        context.textAlign = "left"
        context.fillStyle = "White";
        context.fillText(this.options[i], width / 2, height/ 2 + i * 35);
      }

    context.closePath();
    context.restore();
  }
  };


  



  private currentOption = 0;
  private options = ["Oleadas", "Modo Infinito", "Manual de Juego"];

  public keyUpHandler = (event: KeyboardEvent) => {};
  public keyDownHandler = (event: KeyboardEvent, engine: Engine) => {

  const key = event.key;

  switch(key){
    case "ArrowUp":
        this.currentOption = (this.currentOption - 1 + this.options.length) % this.options.length;
      break;

    case "ArrowDown":
      this.currentOption = (this.currentOption + 1) % this.options.length;
      break;

    case "Enter":
      if(this.currentOption===0){
        sound.pause();
      engine.setCurrentScene(new PlayingScene());
      }else if(this.currentOption === 1){

      }else if(this.currentOption === 2){
        engine.setCurrentScene(new instrucciones)
      }
      break;
  };
}

public update = () => {
  sound.play();
};

public mouseDown = ( event:MouseEvent) => {}

public mouseUp = (event:MouseEvent) => {}

public mouseMove = (event:MouseEvent) => {}

public mouseOut = (event:MouseEvent) => {}

};

export default MainMenuScene;
