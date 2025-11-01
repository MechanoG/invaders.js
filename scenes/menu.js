import {TITTLETEXT} from "./../components/text.js"


export class Menu extends Phaser.Scene{
    constructor ()
    {
        super({ key: 'menu'});
    }

    preload(){
        
    }

    create(){
        this.add.text(600,400,"INVADERS", TITTLETEXT);
       
    }

    update(){

    }


}