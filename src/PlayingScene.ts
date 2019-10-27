import Scene from "./Scene";
import GameContext from "./GameContext";
import Character from "./Character";
import Engine from "./Engine";
import MainMenuScene from "./MainMenuScene";
import GameOverScene from "./GameOverScene";
import Zombie from "./Zombie";
import Time from "./Time";
import audio from "/assets/Recall of the Shadows.mp3" 
import audioMuerto from "/assets/2.mp3" 



const sound = new Audio(audio);
const soundMuerto = new Audio(audioMuerto);



class PlayingScene extends Scene {
  //private Zombie: Zombie = null;

  private enemies:Zombie[] = [];
  private tiempoTotal = 0;
  private spawnTime = 5;
  private player:Character;
  private pause  = false;
  private gameover = false;

  public render = () => {
    const context = GameContext.context;
    const width = context.canvas.width;
    const height = context.canvas.height;
    //this.Zombie.render();
    this.player.render();
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].render();
    }

    if(this.gameover)
    {
    context.save();
    context.beginPath();
    context.textAlign = "right";
    context.fillStyle = "green";
    context.font = "25px sans-serif";
    context.strokeStyle = "gold";
    context.lineWidth = 2;
    context.fillText("  U ded, press enter",width-10,height/2);
    context.closePath();
    context.restore();
    }
  
  };
  public update = () => {
    if(!this.pause&&!this.gameover)
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
      soundMuerto.play();
      //this.player.setColor("blue");
      this.gameover = true;
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

  else if (key==="Enter"&&this.gameover)
  {
    engine.setCurrentScene(new GameOverScene());
  }
};
  
}

export default PlayingScene;
