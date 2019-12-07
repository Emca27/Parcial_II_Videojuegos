import GameContext from "./GameContext";

class ScoreInfi {
  public static scorePlayer: number = 0;
  private static vidas: number = 1;
  private static readonly scoreIncrement: number = 20;

  public static restarVida = () => {
    if(ScoreInfi.vidas != 0)
      ScoreInfi.vidas = ScoreInfi.vidas--;
  }


  public static increaseScorePlayer = () => {
    ScoreInfi.scorePlayer += ScoreInfi.scoreIncrement;
  };


  public static resetScore = () =>{
  ScoreInfi.scorePlayer = 0;
  }

  public static getScore = () =>{
    return ScoreInfi.scorePlayer;
  }

  public static resetVidas = () =>{
    ScoreInfi.vidas = 1;
  }

  public static render = () => {
    const { context } = GameContext;
    
    context.save();
    context.beginPath();
    context.fillStyle = "red";
    context.font = "25px Arial";
    context.fillText("Puntaje: ", 350, 50);
    context.fillText(ScoreInfi.scorePlayer.toString(), 400, 50); 
    context.fillText("Vidas: ", 100, 50);   
    context.fillText(ScoreInfi.vidas.toString(), 110, 50);  
    context.closePath();
    context.restore();
  };
}

export default ScoreInfi;
