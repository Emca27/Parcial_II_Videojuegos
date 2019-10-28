import GameContext from "./GameContext";

class Score {
  private static scorePlayer: number = 0;
  private static vidas: number = 3;
  private static readonly scoreIncrement: number = 20;

  public static restarVida = () => {
    Score.vidas = Score.vidas - 1;
  }
  public static increaseScorePlayer = () => {
    Score.scorePlayer += Score.scoreIncrement;
  };

  public static resetScore = () =>{
  Score.scorePlayer = 0;
  }

  public static resetVidas = () =>{
    Score.vidas = 3;
    }

  public static render = () => {
    const { context } = GameContext;

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
  };
}

export default Score;
