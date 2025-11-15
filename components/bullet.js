// Proyectiles.
class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x,y, speed){
        super(scene, x, y, "sprites" ,"bullet0001" );
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this)
        this.setVelocityY(speed);

        this.setDisplaySize(50,50);
        
    }

    preUpdate(time, delta){
        if (this.y < 5 ){
            this.destroy();
            console.log("Destroyed")
        }
    }

} 

class EnemyBullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x,y, speed){
        super(scene, x, y, "sprites" ,"bullet0001" );
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this)
        this.setVelocityY(speed);

        this.setDisplaySize(50,50);
        
    }

    preUpdate(time, delta){
        if (this.y > 795 ){
            this.destroy();
            console.log("Destroyed")
        }
    }


} 

export {
    Bullet, EnemyBullet
}