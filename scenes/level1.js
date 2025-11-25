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
        this.add.text(0, 0, 'STAGE - 1', LEVELTEXT);
        this.add.text(1050, 0, 'x', LEVELTEXT);
        this.add.image(1000,29, "sprites","player0000").setDisplaySize(45,50);
        this.add.text(1100,0, this.lives, LEVELTEXT);


        this.input.once('pointerdown', function(){

            this.scene.start('level2tran');

        }, this)
     

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('sprites', {prefix:'alien100',start:1,
                 end:2}),
            frameRate:5,
            repeat: -1
        });
      
        //Jugador
        
        this.player = new Player(this, 0, 750);

        //Enemigos
        this.enemies = this.physics.add.group({
            immovable: true,
        });

        this.enemiesVel = 50;
        
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
            
        })

        //Colisiones        

        this.leftFlag;
        this.rigthFlag;

    };

    update(){
        
        console.log("Update executed")
        this.rigthFlag = this.enemies.getChildren().some((enemie) => enemie.x >= 1170);
        this.leftFlag = this.enemies.getChildren().some((enemie) => enemie.x <= 30);


        console.log(`Enemies velocity = ${this.enemiesVel}`)
        if(this.rigthFlag){
            console.log(" Rigt Limit reach");
        }

        if(this.leftFlag){
            console.log(" Left Limit reach");
        }

        this.changeMovement(this.leftFlag, this.rigthFlag);

    };

    changeMovement(lFlag, rFlag){

        if(lFlag){
            this.enemies.children.each(enemy =>{
                enemy.setVelocityX(this.enemiesVel);
                enemy.y +=30;  
            })
        }else if(rFlag){
            this.enemies.children.each(enemy =>{
                enemy.setVelocityX(-this.enemiesVel);
                enemy.y +=30;  
            })
        }
         
    }


}   