import {TITTLETEXT} from "./../components/text.js"
import {Enemy1} from "./../components/enemy.js"

export class Menu extends Phaser.Scene{
    constructor ()
    {
        super({ key: 'menu'});
        
    }

    preload(){
        this.load.atlas("sprites", "assets/images/sprites.png", "assets/atlas/spritesMap.json" )
        
        
    }

    create(){
        this.add.text(600,400,"INVADERS", TITTLETEXT);
       
        this. input.once('pointerdown', function(){

            this.scene.start('level1tran');

        }, this)

        this.physics.add.sprite(100, 100, "sprites", "alien1001")

        


        this.add.existing(new Enemy1(this, 300, 100,"sprites","alien2001"));
        

    }

    update(){
    }


}