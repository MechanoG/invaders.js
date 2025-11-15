import { TITTLETEXT } from "./../components/text.js";
import {Enemy1} from "./../components/enemy.js"
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
     

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('sprites', {prefix:'alien100',start:1,
                 end:2}),
            frameRate:5,
            repeat: -1
        });


        let alienTexture = this.textures.get("sprite");
        let backgroundFrames = alienTexture.getFrameNames()

        for (let frame of backgroundFrames){
            window.alert(frame);
        }
        
        this.player = new Player(this, 400,1100);

        this.enemies = this.physics.add.group({
            classType : Enemy1,
            runChildUpdate : true
        })

        
        for(let x = 5; x <= 15; x++){
            for(let y = 1; y <=5; y++){
                let enemy = this.enemies.create(x*70, y*50)
                enemy.play('walk'); 
            }

        }

        /*
        this.group= this.add.group(this.enemy, this.config)

        console.log("Enemies = " + this.group.getLength());
        */




    };

    update(time){
        this.player.preUpdate(time);
    };

}   