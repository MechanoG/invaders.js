import { Menu } from './scenes/menu.js';
import { LevelTran1 } from './scenes/level1Tran.js';
import { Level1 } from './scenes/Level1.js';
import { Level2Tran } from './scenes/level2Tran.js';
import { Level2 } from './scenes/levl2.js';
import { Level3Tran } from './scenes/level3Tran.js';
import { Level3 } from './scenes/level3.js';

const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    backgroundColor: '#000',
    parent:'game',
    scene: [Menu, LevelTran1, Level1, Level2Tran, Level2, Level3Tran, Level3]
}


const game = new Phaser.Game(config);