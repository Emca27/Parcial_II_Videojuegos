import Scene from "./Scene";
import Engine from "./Engine";
import PlayingScene from "./PlayingScene";
import GameContext from "./GameContext";
import MainMenuScene from "./MainMenuScene";



class GameOverScene extends Scene {
  public enter: () => void;
  public render = () => {
    const context = GameContext.context;
    const width = context.canvas.width;
    const height = context.canvas.height;

    context.save();
    context.beginPath();
    context.textAlign = "center";
    context.fillStyle = "red";
    context.font = "50px sans-serif";
    context.strokeStyle = "gold";
    context.lineWidth = 2;

    context.fillText("GAME OVER ", 200,height/2);
    context.font = "25px sans-serif";
    context.fillText("Press ESC to exit, ",width/2,height/2 + 100);


    context.closePath();
    context.restore();
  };
  public update = () => {}  

public keyUpHandler = (event: KeyboardEvent) => {};
public keyDownHandler = (event: KeyboardEvent, engine: Engine) => {

  const key = event.key;

  if(key==="Escape"){
    engine.setCurrentScene(new MainMenuScene());
  }
  }
public  mouseDown = ( event:MouseEvent) => {}
public  mouseUp = (event:MouseEvent) => {}
public  mouseMove = (event:MouseEvent) => {}
public  mouseOut = (event:MouseEvent) => {}
};

export default GameOverScene;