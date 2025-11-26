//Para objetos en pantalla se debo usar elprite
// Phaser.physics.arcade.sprite
import { Bullet, EnemyBullet } from "./bullet.js";

export class Enemy1 extends Phaser.Physics.Arcade.Sprite{
    ///Necesito que las balas salgan una 
    

    constructor(scene, x, y ){

        super(scene,x, y,"sprites", "alien1001");

        scene.add.existing(this);
        //Fundamental para que funcione setVelocity y similare
        scene.physics.add.existing(this);
       

        this.setDisplaySize(60,60);       

        
        
        this.shootEvent = this.scene.time.addEvent({
                            delay: Phaser.Math.Between(3000,6000),
                            callback: this.shoot,
                            callbackScope: this,
                            loop: true
                        }) 
 
    }


    preUpdate (time, delta)
    {   
         super.preUpdate(time, delta);
        
        
        
    }

    shoot(){
        console.log("Pium Pium");

        

        let bullet = new EnemyBullet(this.scene, this.x, this.y-10, 700);
        this.scene.physics.add.collider(
            bullet, 
            this.scene.player,            
            (bullet, player,)=>{
                
                
                player.body.enable = false;
                player.setVisible(false);
                
                
                player.hurt();
                bullet.destroy();
               

            },
            null,
            this.scene
        ); 
        
        
        


    }

    acceleration(){
        let iniVel=this.scene.enemiesVel
        this.scene.enemiesVel = iniVel * 1.05;
        this.scene.enemies.children.each( enemy =>{

            if(enemy.forward){
                enemy.setVelocityX(this.scene.enemiesVel)
            }else{
                enemy.setVelocityX(- this.scene.enemiesVel)
            }
            
            
        })
    
    }

    runEx(){
        this.scene.runExplotion(this);
    }

    selfDestruction(){
        this.scene.time.delayedCall(300,()=>{
            this.body.enable = false;
            this.setVisible(false);
            this.shootEvent.remove();
            this.acceleration();
        })
    }

    /*
    preload(){
        this.relatedScene.load.atlas("sprites", "assets/images/sprites.png", "assets/atlas/spritesMap.json" )
    }
    */

    
    
}