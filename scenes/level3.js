import { TITTLETEXT } from "./../components/text.js";

export class Level3 extends Phaser.Scene{

    constructor(){
        
        super({ key : 'level3'});

    }
    
    preload(){};

    create(){
        this.add.text(200, 200, 'Level 3', TITTLETEXT);

        this. input.once('pointerdown', function(){
           
            this.scene.start('menu' );

        }, this)


    };

    update(){};

} 