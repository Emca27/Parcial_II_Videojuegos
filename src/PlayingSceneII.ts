import Scene from "./Scene";
import GameContext from "./GameContext";
import Character from "./Character";
import Engine from "./Engine";
import MainMenuScene from "./MainMenuScene";
import GameOverScene from "./GameOverScene";
import Zombie from "./Zombie";
import Time from "./Time";
import audio from "/assets/battleThemeA.mp3" 
import audioMuerto from "/assets/2.mp3" 
import Score from "./Score";
import score from "./Score";
import End from "./End";



const sound = new Audio(audio);
const soundMuerto = new Audio(audioMuerto);


class PlayingSceneII extends Scene {
  private enemies:Zombie[] = [];
  private tiempoTotal = 0;
  private spawnTime = 5;
  private player:Character;
  private pause  = false;
  private gameover = false;
  private press: boolean = false;
  private iAux: number = 4;
  private multiplicador: number = 1;
  private win: boolean = false; 

  public render = () => {
    const context = GameContext.context;
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


  public  addMoreZombies (iAux: number) {
    if(Score.getScore() >= 500 * this.multiplicador&&iAux)
    {
        this.multiplicador+=1;
       return this.iAux+=1;
    }
    else  return this.iAux;
}

public  randomZombieSpeed () {
  return Math.floor(Math.random() * 2) + 1;  
}

  public update = () => {
    if(!this.pause&&!this.gameover)
    {
        
       this.iAux = this.addMoreZombies(this.iAux);
      this.player.update();
      sound.play();
      this.tiempoTotal+=Time.deltaTime;
      if(this.tiempoTotal>this.spawnTime){
        for (let i = 0; i <this.iAux; i++) {
          var speed = this.randomZombieSpeed();
          this.enemies.push(new Zombie(this.player,2,speed));
        }   
        this.tiempoTotal = 0;
      }
      
      for (let i = 0; i < this.enemies.length; i++) {
        this.enemies[i].update();
      }
    
      this.enemies = this.enemies.filter(Zombie=>!Zombie.zombieMuerto());

      if(this.player.cuantasVidas()<1){
        soundMuerto.play();
        this.gameover = true;
      }
    }
  };

  public enter = () => {
    this.player = new Character();
    for (let i = 0; i < 2; i++) {
      this.enemies.push(new Zombie(this.player,2));   
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
    } else if(Score.getNuke() && key === "f" && !this.pause){
    this.win = true;
     sound.pause();
     engine.setCurrentScene(new End());
   }

};
  public mouseDown = ( event:MouseEvent) => {
    this.press = true;
    let mouseX = event.offsetX;
    let mouseY = event.offsetY;
    for(let i = 0; i < 20; i++){
      if(mouseX > this.enemies[i].getPositionx() && mouseX < this.enemies[i].getPositionx() + 40 
      && mouseY > this.enemies[i].getPositiony() && mouseY < this.enemies[i].getPositiony() + 40 && this.press && !this.pause && !this.gameover){
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
  }

  public mouseOut = (event:MouseEvent) => {
    this.press = false;
  }
}

export default PlayingSceneII;
