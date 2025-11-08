//Objeto de jugador

export class Player extends Phaser.Physics.Arcade.Image{
    constructor(scene, x, y){

        super(scene, x, y, "sprites","player0000");

        scene.add.existing(this)
        //Fundamental para que funcione setVelocity y similare
        scene.physics.add.existing(this);

        this.setDisplaySize(60,60);

        this.setCollideWorldBounds(true);

        this.setInteractive();

        this.on('keyup', ()=> {window.alert("m")})
        
        
    }

}
