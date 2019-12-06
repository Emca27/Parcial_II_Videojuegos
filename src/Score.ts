import GameContext from "./GameContext";

class Score {
  public static scorePlayer: number = 0;
  private static vidas: number = 3;
  private static readonly scoreIncrement: number = 20;
  private static nuke: boolean = false;

  public static restarVida = () => {
    if(Score.vidas != 0)
      Score.vidas = Score.vidas - 1;
  }

  public static resetNuke = () => {
    Score.nuke = false;
  }
  public static increaseScorePlayer = () => {
    Score.scorePlayer += Score.scoreIncrement;
  };

  public static getNuke = () => {
    return Score.nuke;
  }

  public static resetScore = () =>{
  Score.scorePlayer = 0;
  }

  public static getScore = () =>{
    return Score.scorePlayer;
  }

  public static resetVidas = () =>{
    Score.vidas = 3;
  }

    public static getScore = () =>{
      return Score.scorePlayer;
      }

  public static render = () => {
    const { context } = GameContext;
    if(Score.scorePlayer > 60){
      context.save();
      context.beginPath();
      context.fillStyle = "red";
      context.font = "25px Arial";
      context.fillText("Puntaje: ", 365, 50);
      context.fillText(Score.scorePlayer.toString(), 400, 50); 
      context.fillText("Vidas: ", 100, 50);   
      context.fillText(Score.vidas.toString(), 110, 50);  
      context.fillStyle = "yellow"
      context.font = "13px Arial";
      context.fillText(" Press F to get a NUKE",200,300);
      Score.nuke = true;
      context.closePath();
      context.restore();
    }
    else{
    context.save();
    context.beginPath();
    context.fillStyle = "red";
    context.font = "25px Arial";
    context.fillText("Puntaje: ", 365, 50);
    context.fillText(Score.scorePlayer.toString(), 400, 50); 
    context.fillText("Vidas: ", 100, 50);   
    context.fillText(Score.vidas.toString(), 110, 50);  
    context.closePath();
    context.restore();
    }
  };
}

export default Score;
