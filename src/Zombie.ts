import GameContext from "./GameContext";
import Time from "./Time";

class Zombie {

    private position = [0,0];
    private zombieWidth: number = 4;
    private zombieHeight: number = 4;
    private color = "Green";
    private muerto = false;
    private touchPlayer = false;
    private speed = Time.deltaTime * 2;
    private tiempoAux = 0;

    constructor(){
        const { context } = GameContext;
        const { scale } = GameContext;
        const { width, height } = context.canvas;
       const rand = Math.floor(Math.random() * 4);
       this.muerto = false;
       this.touchPlayer = false;
        
       switch (rand){
            case 0:
                    this.position[0]=  (Math.floor(Math.random() * 10-1) + 1) * scale;
                    this.position[1]= 0;
                    break;
            
            case 1:
                    this.position[0]= width;
                    this.position[1]= (Math.floor(Math.random() * 10-1) + 1) * scale;
                    break;

            case 2:
                    this.position[0]= (Math.floor(Math.random() * 10-1) + 1) * scale;
                    this.position[1]= height;
                    break;

            case 3:
                    this.position[0]= 0;
                    this.position[1]= (Math.floor(Math.random() * 10-1) + 1) * scale;
                    break;
       };
    }

    public update = () =>{

       // const [positionX, positionY] = this.position;
       let x = this.position[0];
       let y = this.position[1];
        const { context } = GameContext;
        const { scale } = GameContext;
        const { width, height } = context.canvas;


        if(this.muerto!=true)
        {
            if(x == width/2)
            {
                x = x ;
            }else if (x > width/2)
            {
                x = x - (scale*this.speed);
            }else if (x < width/2)
            {
                x = (scale*this.speed) + x;
            }

            if(y == height/2)
            {
                y = y;
            }else if(y > height/2)
            {
                y = y - (scale*this.speed);
            }else if(y < height/2)
            {
                y = y + (scale*this.speed);
            }

            if((x== width/2) && (y == height/2))
            {
                this.touchPlayer = true;
            }

            this.position[0] = x;
            this.position[1] = y;
        }

    }

    public restarVida = () =>{
        return this.touchPlayer;
    }

    public zombieMuerto = () =>{
        return this.muerto;
    }

    public render = () => {
        const context = GameContext.context;
        const scale = GameContext.scale;
        const [x, y] = this.position;
        context.save();
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(x, y, scale, scale);
        context.closePath();
        context.restore();
    };

};

export default Zombie;