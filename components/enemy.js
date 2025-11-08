//Para objetos en pantalla se debo usar elprite
// Phaser.physics.arcade.sprite

export class Enemy1 extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, ){

        super(scene,x, y,"sprites", "alien1001");

        scene.add.existing(this);
        //Fundamental para que funcione setVelocity y similare
        scene.physics.add.existing(this);
        

        this.setBounce(1);
        this.setCollideWorldBounds(true);
        this.setDisplaySize(50,50)
        
        this.body.onWorldBounds = true;
        
        this.setVelocityX(-400);

        this.scene.time.addEvent({
            delay: Phaser.Math.Between(2000,6000),
            callback: this.shoot,
            callbackScope: this,
            loop: true
        })

        /*
        this.anims.create({
            key:"alien",
            frames:scene.anims.generateFrameNames('sprites', {prefix:'alien', start:1, end:2}),
            frameRate: 2,
            repeat: -1
        });
        */




        
        /*       
        this.setTexture("alien1001")     
        
        scene.physics.add.sprite(500, 500, "sprites", "alien1001")
        */
               
        
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);
        this.play('pulse');

        
    }

    shoot(){
        console.log("Pium Pium");
    }

    /*
    preload(){
        this.relatedScene.load.atlas("sprites", "assets/images/sprites.png", "assets/atlas/spritesMap.json" )
    }

    create(){
        this.enemy = this.relatedScene.add.sprite(200, 200, "sprites", "alien2001");
    }
    */
}