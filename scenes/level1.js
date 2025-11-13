import { TITTLETEXT } from "./../components/text.js";
import {Enemy1} from "./../components/enemy.js"
import { Bullet } from "./../components/bullet.js";
import { Player } from "./../components/player.js";

export class Level1 extends Phaser.Scene{

    constructor(){
        
        super({ key : 'level1'});

    }
    
    preload(){
        this.load.atlas("sprites", "assets/images/sprites.png", "assets/atlas/spritesMap.json" )
    };

    create(){   
        this.add.text(0, 1, 'Level 1', TITTLETEXT);

        this.input.once('pointerdown', function(){

            this.scene.start('level2tran');

        }, this)

        this.enemy = new Enemy1(this, 600, 100);       

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('sprites', {prefix:'alien100',start:1,
                 end:2}),
            frameRate:5,
            repeat: -1
        });

        this.enemy.play('walk');

        let alienTexture = this.textures.get("sprite");
        let backgroundFrames = alienTexture.getFrameNames()

        for (let frame of backgroundFrames){
            window.alert(frame);
        }
        
        this.player = new Player(this, 600 , 750)
        
        this.cursor = this.input.keyboard.createCursorKeys()

    };

    update(time){
        this.player.preUpdate(time);
    };

}   