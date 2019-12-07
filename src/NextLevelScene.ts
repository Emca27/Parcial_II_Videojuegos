import Scene from "./Scene";
import Engine from "./Engine";
import PlayingScene from "./PlayingScene";
import GameContext from "./GameContext";
import MainMenuScene from "./MainMenuScene";
import PlayingSceneII from "./PlayingSceneII";
import Score from "./Score";



class NextLevelScene extends Scene {
  public enter: () => void;
  public render = () => {
    const context = GameContext.context;
    const width = context.canvas.width;
    const height = context.canvas.height;

    Score.resetScore();
    Score.resetNuke();
    Score.resetVidas();
    context.save();
    context.beginPath();
    context.textAlign = "center";
    context.fillStyle = "green";
    context.font = "50px sans-serif";
    context.strokeStyle = "gold";
    context.lineWidth = 2;

    context.fillText("YOU SURVIVED ", 200,height/2);
    context.font = "20px sans-serif";
    context.fillText("Press ENTER to move to the next level, ",width/2,height/2 + 100);

    context.closePath();
    context.restore();
  };
  public update = () => {}  

public keyUpHandler = (event: KeyboardEvent) => {};
public keyDownHandler = (event: KeyboardEvent, engine: Engine) => {

  const key = event.key;

  if(key==="Enter"){
    engine.setCurrentScene(new PlayingSceneII());
  }
  }
public  mouseDown = ( event:MouseEvent) => {}
public  mouseUp = (event:MouseEvent) => {}
public  mouseMove = (event:MouseEvent) => {}
public  mouseOut = (event:MouseEvent) => {}
};

export default NextLevelScene;