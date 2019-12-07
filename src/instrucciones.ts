import Scene from "./Scene";
import Engine from "./Engine";
import GameContext from "./GameContext";
import MainMenuScene from "./MainMenuScene";



class instrucciones extends Scene {
    public  render = () => {
        const context = GameContext.context;
        const canvas = context.canvas;
        context.fillStyle = "yellow";
        context.font = "25px sans-serif";
        context.strokeStyle = "gold";
        context.lineWidth = 2;
        context.fillText("Manual de Juego",50, 50);

        context.textAlign = "left";
        context.fillStyle = "red";
        context.font = "17x sans-serif";
        context.fillText(" Cuidado los Zombies te atacan!",10 , 100);
        context.fillText(" Para defenderte, da click", 10, 150)
        context.fillText(" en los Zombies", 10, 175);
        context.fillText(" Cuando hayas despejado el area ", 10, 225);
        context.fillText(" podras avanzar  al siguiente nivel",10, 250);
        context.fillStyle = "yellow";
        context.fillText("MODO SUPERVIVENCIA", 10, 300);
        context.fillStyle = "red";
        context.fillText(" Eres el ultimo humano",10,330);
        context.fillText(" Sobrevive... si puedes",10,360);
    };

    public update = () => {};

    public  enter = () => {};

    public  keyUpHandler = (event: KeyboardEvent) => {};

    public keyDownHandler = (event: KeyboardEvent, engine: Engine) => {
        const {key} = event;
        if( key === "Escape"){
            engine.setCurrentScene(new MainMenuScene);
        }
    };

    public  mouseDown = ( event:MouseEvent) => {}

    public  mouseUp = (event:MouseEvent) => {}

    public  mouseMove = (event:MouseEvent) => {}

    public  mouseOut = (event:MouseEvent) => {}
};

export default instrucciones;