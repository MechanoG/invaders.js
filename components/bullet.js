// Proyectiles.
export class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x,y){
        super(scene, x, y, "sprites" ,"bullet0001" );
        this.scene.add.existing(this);
        this.setDisplaySize(50,50);
        this.body.setGravity(100)
    }

    

} 