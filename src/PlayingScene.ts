import Scene from "./Scene";
import Character from "./Character";
import Engine from "./Engine";
import MainMenuScene from "./MainMenuScene";
import Zombie from "./Zombie";
import Time from "./Time";
import audio from "/assets/Recall of the Shadows.mp3" 

const sound = new Audio(audio);



class PlayingScene extends Scene {
  //private Zombie: Zombie = null;

  private enemies:Zombie[] = [];
  private tiempoTotal = 0;
  private spawnTime = 5;
  private player:Character;
  private pause  = false;

  public render = () => {
    //this.Zombie.render();
    this.player.render();
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].render();
    }
  
  };
  public update = () => {
    if(!this.pause)
    {
      sound.play();
     this.tiempoTotal+=Time.deltaTime;
      if(this.tiempoTotal>this.spawnTime)
        {
          for (let i = 0; i < 4; i++) {
            this.enemies.push(new Zombie(this.player));
          }   
          this.tiempoTotal = 0;
        }


      //this.Zombie.update();
      for (let i = 0; i < this.enemies.length; i++) {
        this.enemies[i].update();
      }
      this.player.update();

     //Ciclo para revisar si estan muertos
    
        this.enemies = this.enemies.filter(Zombie=>!Zombie.zombieMuerto());
      

      if(this.player.cuantasVidas()<1)
      {
      //delete(this.player);
      this.player.setColor("blue");
      }
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
  else if(key==="p")
  {
    this.pause = !this.pause;
    sound.pause();
  }
};
  
}

export default PlayingScene;
