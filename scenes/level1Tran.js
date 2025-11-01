import {TITTLETEXT} from "./../components/text.js"

export class Level1Tran extends Phaser.Scene{

    constructor(){

        super({key:'level1tran'});

    }

    preload(){}

    create(){

        this.add.text(300,400,"STAGE1\n MISSION START", TITTLETEXT);

    }
    
    update(){}



}