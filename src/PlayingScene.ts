import Scene from "./Scene";
//import Character from "./Character";
import Engine from "./Engine";
import MainMenuScene from "./MainMenuScene";
import Zombie from "./Zombie";

class PlayingScene extends Scene {
  //private Zombie: Zombie = null;

  private enemies:Zombie[] = [];

  public render = () => {
    //this.Zombie.render();
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].render();
  }
  };
  public update = () => {
    //this.Zombie.update();
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].update();
  }
  };

  public enter = () => {
    //this.Zombie = new Zombie();
    for (let i = 0; i < 20; i++) {
      this.enemies.push(new Zombie);
  }
};

  public keyUpHandler = (event: KeyboardEvent) => {};
  public keyDownHandler = (event: KeyboardEvent, engine: Engine) => {const { key } = event;
  if(key==="Escape"){
    engine.setCurrentScene(new MainMenuScene());
  }
};
  
}

export default PlayingScene;
