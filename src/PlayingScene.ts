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
import score from "./Score";
import Score from "./Score";



const sound = new Audio(audio);
const soundMuerto = new Audio(audioMuerto);



class PlayingScene extends Scene {
  private enemies:Zombie[] = [];
  private tiempoTotal = 0;
  private spawnTime = 5;
  private player:Character;
  private pause  = false;
  private gameover = false;
  private press: boolean = false;

  public render = () => {
    const context = GameContext.context;
    //this.Zombie.render();
    this.player.render();
    Score.render();

    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].render();
    }

    if(this.gameover){
      sound.pause();
      context.save();
      context.beginPath();
      context.textAlign = "center";
      context.fillStyle = "red";
      context.font = "25px sans-serif";
      context.strokeStyle = "gold";
      context.lineWidth = 2;
      context.fillText("  U ded",200,100);
      context.fillText(" Press enter", 200, 350);
      context.closePath();
      context.restore();
    }

    if(this.pause){
      sound.pause();
      context.save();
      context.beginPath();
      context.textAlign = "center";
      context.fillStyle = "red";
      context.font = "25px sans-serif";
      context.strokeStyle = "gold";
      context.lineWidth = 2;
      context.fillText("  Pause",200,100);
      context.fillText(" Press P to continue", 200, 350);
      context.closePath();
      context.restore();
    }

  
  };
  public update = () => {
    if(!this.pause&&!this.gameover)
    {
      this.player.update();
      sound.play();
      this.tiempoTotal+=Time.deltaTime;
      if(this.tiempoTotal>this.spawnTime){
        for (let i = 0; i < 4; i++) {
          this.enemies.push(new Zombie(this.player));
        }   
        this.tiempoTotal = 0;
      }
      
      for (let i = 0; i < this.enemies.length; i++) {
        this.enemies[i].update();
      }
    
      this.enemies = this.enemies.filter(Zombie=>!Zombie.zombieMuerto());

      if(this.player.cuantasVidas()<1){
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
  public keyDownHandler = (event: KeyboardEvent, engine: Engine) => {
    const { key } = event;
    if(key==="Escape"){
      sound.pause();
      score.resetScore();
      Score.resetVidas();
      engine.setCurrentScene(new MainMenuScene());
    }
    else if(key==="p"){
      this.pause = !this.pause;
      sound.pause();
    }else if (key==="Enter"&&this.gameover){
      engine.setCurrentScene(new GameOverScene());
    }


};
  public mouseDown = ( event:MouseEvent) => {
    this.press = true;
    let mouseX = event.offsetX;
    let mouseY = event.offsetY;
    for(let i = 0; i < 4; i++){
      if(mouseX > this.enemies[i].getPositionx() && mouseX < this.enemies[i].getPositionx() + 40 
      && mouseY > this.enemies[i].getPositiony() && mouseY < this.enemies[i].getPositiony() + 40 && this.press && !this.pause){
        this.enemies[i].cambiarMuerto(true);
        this.enemies = this.enemies.filter(Zombie => !Zombie.zombieMuerto());
        score.increaseScorePlayer();
      }
    }
  }

  public mouseUp = (event:MouseEvent) => {
    this.press = false;
  }

  public mouseMove = (event:MouseEvent) => {
    //mazo
  }

  public mouseOut = (event:MouseEvent) => {
    this.press = false;
  }
}

export default PlayingScene;
