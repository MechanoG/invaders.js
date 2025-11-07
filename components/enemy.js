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

        this.anims.create



        
        /*       
        this.setTexture("alien1001")     
        
        scene.physics.add.sprite(500, 500, "sprites", "alien1001")
        */
               
        
    }

    preUpdate (time, delta)
    {
        super.preUpdate(time, delta);

        

        this.rotation += 0.05;
        
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