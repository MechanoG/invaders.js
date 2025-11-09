//Para objetos en pantalla se debo usar elprite
// Phaser.physics.arcade.sprite

export class Enemy1 extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y ){

        super(scene,x, y,"sprites", "alien1001");

        scene.add.existing(this);
        //Fundamental para que funcione setVelocity y similare
        scene.physics.add.existing(this);
        

        this.setBounce(1);
        this.setCollideWorldBounds(true);
        this.setDisplaySize(60,60)
        
        this.body.onWorldBounds = true;
        
        this.setVelocityX(-400);

        this.scene.time.addEvent({
            delay: Phaser.Math.Between(500,6000),
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
    }

    /*
    preload(){
        this.relatedScene.load.atlas("sprites", "assets/images/sprites.png", "assets/atlas/spritesMap.json" )
    }
    */

    create(){
        
    }
    
}