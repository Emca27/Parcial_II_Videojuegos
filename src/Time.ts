class Time {
  // diferencia de tiempo entre último update y update actual
  public static deltaTime: number = 0;
  // Número de milisegundos que han pasado desde 1970
  private static previousTime: number = Date.now();

  public static update() {
    const currentTime = Date.now();
    Time.deltaTime = (currentTime - Time.previousTime) / 1000;
    Time.previousTime = currentTime;
  }
}

export default Time;
