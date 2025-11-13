//Objeto de jugador

import { Bullet } from "./bullet.js";

export class Player extends Phaser.Physics.Arcade.Image{
    constructor(scene, x, y){

        super(scene, x, y, "sprites","player0000");

        

        scene.add.existing(this)
        //Fundamental para que funcione setVelocity y similare
        scene.physics.add.existing(this);

        this.setDisplaySize(60,60);

        this.setCollideWorldBounds(true);

        this.cooldown = 500;
        this.lastShot = 0;

        this.cursor = this.scene.input.keyboard.createCursorKeys();

        
        


    }

    preUpdate(time){

        
        if(this.cursor.left.isDown){
            this.setVelocityX(-400);
        }else if(this.cursor.right.isDown){
            this.setVelocityX(400);
        }else if(this.cursor.space.isDown &&  time > this.lastShot + this.cooldown){
            this.shoot(time);
            
        }else{
            this.setVelocityX(0);
        } 
        

    }

    shoot(time){
        new Bullet (this.scene, this.x, this.y-10, -700 )
        this.lastShot = time;
    }

    
    


}
