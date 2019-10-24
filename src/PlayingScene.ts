import Scene from "./Scene";
//import Character from "./Character";
import Engine from "./Engine";
import MainMenuScene from "./MainMenuScene";
import Zombie from "./Zombie";

class PlayingScene extends Scene {
  private Zombie: Zombie = null;

  public render = () => {
    this.Zombie.render();
  };
  public update = () => {
    this.Zombie.update();
  };

  public enter = () => {
    this.Zombie = new Zombie();
  };

  public keyUpHandler = (event: KeyboardEvent) => {};
  public keyDownHandler = (event: KeyboardEvent, engine: Engine) => {const { key } = event;
  if(key==="Escape"){
    engine.setCurrentScene(new MainMenuScene());
  }
};
  
}

export default PlayingScene;
