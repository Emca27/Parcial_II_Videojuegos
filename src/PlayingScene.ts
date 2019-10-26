import Scene from "./Scene";
import Character from "./Character";
import Engine from "./Engine";
import MainMenuScene from "./MainMenuScene";
import Zombie from "./Zombie";
import Time from "./Time";


class PlayingScene extends Scene {
  //private Zombie: Zombie = null;

  private enemies:Zombie[] = [];
  private tiempoTotal = 0;
  private spawnTime = 5;
  private player:Character;

  public render = () => {
    //this.Zombie.render();
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].render();
      this.player.render();
    }
  
  };
  public update = () => {

    this.tiempoTotal+=Time.deltaTime;
    if(this.tiempoTotal>this.spawnTime)
      {
        this.enemies.push(new Zombie(this.player));
        this.tiempoTotal = 0;
      }


    //this.Zombie.update();
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].update();
    }
    this.player.update();

    //Ciclo para revisar si estan muertos
    
      this.enemies = this.enemies.filter(Zombie=>!Zombie.zombieMuerto());
      

    if(this.player.cuantasVidas()==0)
    {
     //delete(this.player);
     this.player.setColor("blue");
    }
  };

  public enter = () => {
    //this.Zombie = new Zombie();
    this.player = new Character();
    for (let i = 0; i < 2; i++) {
      this.enemies.push(new Zombie(this.player));   
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
