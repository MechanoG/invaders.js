//Para objetos en pantalla se debo usar elprite
// Phaser.physics.arcade.sprite

export class Enemy1 extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, ){

        super(scene,x,y);

        scene.add.sprite(x, y, "sprite", "alien1001")       
               
        
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