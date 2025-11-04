//Para objetos en pantalla se debo usar elprite
// Phaser.physics.arcade.sprite

export class Enemy1 extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, ){

        super(scene,x, y,"sprites", "alien1001");

        this.scene.add.existing(this);
        this.setDisplaySize(50,50);

        /*       
        this.setTexture("alien1001")     
        
        scene.physics.add.sprite(500, 500, "sprites", "alien1001")
        */
               
        
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