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

        new Enemy1(this, 500,490);
        new Enemy1(this, 500,480);
        new Enemy1(this, 500,500);
        new Enemy1(this, 500,510);
        new Enemy1(this, 500,520);
        new Enemy1(this, 500,530);
        
        

        

    }

    update(){
    }


}