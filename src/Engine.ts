import GameContext from "./GameContext";
import Time from "./Time";
import Scene from "./Scene";
import PlayingScene from "./PlayingScene";
import MainMenuScene from "./MainMenuScene";

class Engine {
  private currentScene: Scene = null;

  public setCurrentScene = (scene: Scene) => {
    this.currentScene = scene;
    this.currentScene.enter();
  }

  // Iniciar el motor del juego.
  public start = () => {
    this.init();
    requestAnimationFrame(this.tick);
  };

  public keydownHandler = (event: KeyboardEvent) => {
    this.currentScene.keyDownHandler(event, this);
  };

  public keyupHandler = (event: KeyboardEvent) => {
    this.currentScene.keyUpHandler(event);
  };

  // Limpiar pantalla y dibujar fondo.
  private clearScreen = () => {
    const context = GameContext.context;
    const canvas = context.canvas;
    const width = canvas.width;
    const height = canvas.height;

    context.save();
    context.beginPath();
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    context.closePath();
    context.restore();
  };

  public init = () => {
    this.currentScene = new MainMenuScene();
    this.currentScene.enter();
  };

  // Método que se ejecuta en cada frame del juego.
  public tick = () => {
    this.clearScreen();
    Time.update();

    this.currentScene.update();
    this.currentScene.render();

    requestAnimationFrame(this.tick);
  };
}

export default Engine;
