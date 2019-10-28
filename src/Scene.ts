import Engine from "./Engine";

abstract class Scene {
  public abstract render = () => {};
  public abstract update = () => {};
  public abstract enter = () => {};
  public abstract keyUpHandler = (event: KeyboardEvent) => {};
  public abstract keyDownHandler = (event: KeyboardEvent, engine: Engine) => {};
  public abstract mouseDown = ( event:MouseEvent) => {}
  public abstract mouseUp = (event:MouseEvent) => {}
  public abstract mouseMove = (event:MouseEvent) => {}
  public abstract mouseOut = (event:MouseEvent) => {}
}

export default Scene;
