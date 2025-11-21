import { TITTLETEXT } from "./../components/text.js";
import {Enemy1} from "./../components/enemy.js"
import { Player } from "./../components/player.js";
import { Bullet } from "./../components/bullet.js";


export class Level1 extends Phaser.Scene{

  
    constructor(){
        
        super({ key : 'level1'});

    }
    
    preload(){
        this.load.atlas("sprites", "assets/images/sprites.png", "assets/atlas/spritesMap.json" )
    };

    create(){   
        this.add.text(0, 1, 'Level 1', TITTLETEXT);

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
        
        this.player = new Player(this, 400,1100);

        //Enemigos
        this.enemies = this.physics.add.group();
        
        for(let x = 2; x <= 12; x++){
            for(let y = 1; y <=5; y++){
                this.enemies.add(new Enemy1(this,x*70 -70, y*50)); 
            }
        } 

        this.enemies.children.each( enemy =>{
            enemy.play("walk");
            enemy.setCollideWorldBounds(true);
            enemy.body.onWorldBounds = true;
            enemy.speed = 100;
            enemy.setVelocityX(enemy.speed);
            
        })

        //Colisiones        

        this.flag;

    };

    update(){
        
        console.log("Update executed")
        this.flag = this.enemies.getChildren().some((enemie) => enemie.x > 1140);

        if(this.flag){
            console.log(" Rigt Limit reach");
            this.changeMovement();
        }

       

    };

    changeMovement(){
        this.enemies.children.each(enemy =>{
            enemy.setVelocityX(-100);
            
        })
    }


}   