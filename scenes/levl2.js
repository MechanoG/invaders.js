import { TITTLETEXT } from "../components/text.js";

export class Level2 extends Phaser.Scene{

    constructor(){
        
        super({ key : 'level2'});

    }
    
    preload(){};

    create(){
        this.add.text(200, 200, 'Level 2', TITTLETEXT);


    };

    update(){};

} 