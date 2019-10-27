import Scene from "./Scene";
import Engine from "./Engine";
import PlayingScene from "./PlayingScene";
import GameContext from "./GameContext";
class MainMenuScene extends Scene {
  public enter: () => void;
  public render = () => {
    const context = GameContext.context;
    const width = context.canvas.width;
    const height = context.canvas.height;

    context.save();
    context.beginPath();
    context.textAlign = "right";
    context.fillStyle = "green";
    context.font = "25px sans-serif";
    context.strokeStyle = "gold";
    context.lineWidth = 2;

    context.fillText("Whac-A-Zombie",width/2,height/2);

    for (let i = 0 ; i < this.options.length; i++){
      if(i === this.currentOption){
        context.strokeText(this.options[i], width * 0.9, height / 2 + i * 35);
      }

      context.fillText(this.options[i], width * 0.9, height / 2 + i * 35);
    
    }

    context.closePath();
    context.restore();
  };
  public update = () => {};

  private currentOption = 0;
  private options = ["Jugar", "Ajustes", "Salir"];

  




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
      engine.setCurrentScene(new PlayingScene());
      }
      break;
  };
}
};

export default MainMenuScene;
