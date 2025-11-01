import { TITTLETEXT } from "./../components/text.js";

export class Level1 extends Phaser.Scene{

    constructor(){
        
        super({ key : 'level1'});

    }
    
    preload(){};

    create(){

        this.add.text(200, 200, 'Level 1', TITTLETEXT);

        this. input.once('pointerdown', function(){

            this.scene.start('level2tran');

        }, this)
    };

    update(){};

} 