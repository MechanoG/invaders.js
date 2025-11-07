import { TITTLETEXT } from "./../components/text.js";
import {Enemy1} from "./../components/enemy.js"
import { Bullet } from "./../components/bullet.js";

export class Level1 extends Phaser.Scene{

    constructor(){
        
        super({ key : 'level1'});

    }
    
    preload(){
        this.load.atlas("sprites", "assets/images/sprites.png", "assets/atlas/spritesMap.json" )
    };

    create(){

        this.add.text(0, 1, 'Level 1', TITTLETEXT);

        this. input.once('pointerdown', function(){

            this.scene.start('level2tran');

        }, this)

        new Enemy1(this, 600, 100);

        new Bullet(this, 620, 100);
    };

    update(){

        

        
    };

}   