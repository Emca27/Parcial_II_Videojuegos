import GameContext from "./GameContext";
import Time from "./Time";
import Character from "./Character";
import spritesheet from "/assets/zombie-SWEN.png";
import audio from "/assets/qubodupRatAttack.flac" 
import Score from "./Score";


const sound = new Audio(audio);


class Zombie {

    private position = [0,0];
    private zombieWidth: number = 60;
    private zombieHeight: number = 60;
    private color = "Green";
    private muerto = false;
    //private touchPlayer = false;
    private refJugador:Character = null;
    //private speed = Time.deltaTime * 1.5;
    private speed = 1.5;


    private tiempoAux = 0;
    private frameCounter = 0;
    private currentFrame = 0;
    private characterImage: HTMLImageElement = new Image();

    constructor(refJugador:Character){
        this.refJugador = refJugador;
        const { context } = GameContext;
        const { scale } = GameContext;
        const { width, height } = context.canvas;
       const rand = Math.floor(Math.random() * 4);
       this.muerto = false;
       this.characterImage.src = spritesheet;
       //this.touchPlayer = false;
        
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
                x = x - (scale*this.speed*Time.deltaTime);
            }else if (x < width/2)
            {
                x = (scale*this.speed*Time.deltaTime) + x;
            }

            if(y == height/2)
            {
                y = y;
            }else if(y > height/2)
            {
                y = y - (scale*this.speed*Time.deltaTime);
            }else if(y < height/2)
            {
                y = y + (scale*this.speed*Time.deltaTime);
            }

            //x >  pos[0] && x < pos[0] + 100 && y > pos[1] && y < pos[1] + 100)
            //if(playerx < edx + scale && playerx + scale > edx
            //&& playery > edy - scale && playery - scale < edy) {
              let jx = (width-40) / 2;  
              let jy = (height-40) /2;
            if(x < jx + scale && x + scale > jx &&
             y > jy - scale && y - scale < jy)
            {
               // this.refJugador.setColor("blue");
                this.refJugador.restarVida();
                Score.restarVida();
                this.muerto = true;
                sound.play();
            }

            this.position[0] = x;
            this.position[1] = y;
        }

        if (this.frameCounter % 2 === 0) {
            this.currentFrame = (this.currentFrame + 1) % 3;
          }
          this.frameCounter += 1;

    }

    public restarVida = () =>{
        //return this.touchPlayer;
        this.refJugador.restarVida();
       
    }

    public zombieMuerto = () =>{
        return this.muerto;
    }

    public render = () => {
        const context = GameContext.context;
        const scale = GameContext.scale;
        const [x, y] = this.position;
        const paddingY = 4;
        const paddingX = 50;
        const spriteHeight = 70;
        const spriteWidth = 52;
        context.save();
        context.beginPath();
        context.fillStyle = this.color;
       // context.fillRect(x, y, scale, scale);
       context.drawImage(
        this.characterImage,
        this.currentFrame * (spriteWidth + paddingX),
        paddingY,
        spriteWidth,
        spriteHeight,
        x,
        y,
        this.zombieWidth,
        this.zombieHeight
      );
        context.closePath();
        context.restore();
    };

    
    public getPositionx = () => {
        return this.position[0];
    }

    public getPositiony = () =>{
        return this.position[1];
    }

    public cambiarMuerto = (dead:boolean) =>{
        this.muerto = dead;
    }

};

export default Zombie;