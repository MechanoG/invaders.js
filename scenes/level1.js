import { LEVELTEXT } from "./../components/text.js";
import {Enemy1} from "./../components/enemy.js"
import { Player } from "./../components/player.js";



export class Level1 extends Phaser.Scene{

  
    constructor(){
        
        super({ key : 'level1'});

    }
    
    preload(){
        this.load.atlas("sprites", "assets/images/sprites.png", "assets/atlas/spritesMap.json" )
    };

    create(){
        this.lives = 2;   
        this.stageName = this.add.text(50, 0, 'STAGE - 1', LEVELTEXT);
        this.add.text(1050, 0, 'x', LEVELTEXT);
        this.add.image(1000,29, "sprites","player0000").setDisplaySize(45,50);
        this.livesText = this.add.text(1100,0, this.lives, LEVELTEXT);


        this.input.once('pointerdown', function(){

            this.scene.start('level2tran');

        }, this)
     
        //Anims
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('sprites', {prefix:'alien100',start:1,
                 end:2}),
            frameRate:5,
            repeat: -1
        });

        this.anims.create({
            key: 'explotion',
            frames: this.anims.generateFrameNames('sprites', {prefix:'explot000', start:1, end:3}),
            frameRate: 10,
            repeat : 0
        })
      
        //Jugador
        
        this.player = new Player(this, 600, 750);

        //Enemigos
        this.enemies = this.physics.add.group({
            immovable: true,
        });

        this.enemiesVel = 100;
        
        for(let x = 2; x <= 12; x++){
            for(let y = 1.8; y <=5; y++){
                this.enemies.add(new Enemy1(this,x*70 -70, y*50)); 
            }
        } 

        this.enemies.children.each( enemy =>{
            enemy.play("walk");
            enemy.setCollideWorldBounds(true);
            enemy.body.onWorldBounds = true;
            enemy.setVelocityX(this.enemiesVel)
            enemy.forward = true;
            
        })

        //Colisiones        

        this.leftFlag;
        this.rigthFlag;

    };

    update(){
        
        console.log("Update executed")
        console.log(`Velocidad de enemigos: ${this.enemiesVel}`)
        
        this.rigthFlag = this.enemies.getChildren().some((enemie) => enemie.x >= 1170);
        this.leftFlag = this.enemies.getChildren().some((enemie) => enemie.x <= 30);
        
        if (this.leftFlag || this.rigthFlag){
            this.changeMovement(this.leftFlag, this.rigthFlag);     
        }
        

        

    };

    changeMovement(lFlag, rFlag){

        if(lFlag){
            
            this.enemies.children.each(enemy =>{
                enemy.setVelocityX(this.enemiesVel);
                enemy.forward = true;
                //enemy.y +=20;  
            })

        }else if(rFlag){
            
            this.enemies.children.each(enemy =>{
                enemy.setVelocityX(-this.enemiesVel);
                enemy.forward = false;
                //enemy.y +=20;  
            })
        }
         
    }

    runExplotion(enemiObject){
        enemiObject.play("explotion")
    }

    
}   