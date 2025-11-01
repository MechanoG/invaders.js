import {TITTLETEXT} from "./../components/text.js"

export class Level3Tran extends Phaser.Scene{

    constructor(){

        super({key:'level3tran'});

    }

    preload(){}

    create(){

        this.add.text(300,400,"STAGE3\n MISSION START", TITTLETEXT);

        this. input.once('pointerdown', function(){

            
            this.scene.start('level3' );

        }, this)


    }
    
    update(){}



}