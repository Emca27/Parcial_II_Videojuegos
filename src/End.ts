import Scene from "./Scene";
import Engine from "./Engine";
import PlayingScene from "./PlayingScene";
import GameContext from "./GameContext";
import MainMenuScene from "./MainMenuScene";
import Score from "./Score";



class GameOverScene extends Scene {
  public enter: () => void;
  public render = () => {
    const context = GameContext.context;
    const width = context.canvas.width;
    const height = context.canvas.height;

    context.save();
    context.beginPath();
    context.fillStyle = "red";
    context.font = "30px sans-serif";
    context.strokeStyle = "gold";
    context.textAlign = "center";
    context.fillText( " You survive the ZOMBIES ", width/ 2,height / 4);
    context.font = "20px sans-serif";
    context.fillText( " You kill:  ", width / 2,height/3);
    context.fillText((Score.getScore() / 20).toString(), width / 2, height / 3 + 25);
    context.fillText(" Zombies", width / 2, height / 3 + 50);
    context.font = "20px sans-serif";
    context.textAlign = "center";
    context.fillText("Press ESC ",width/2,height/3 + 200);


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