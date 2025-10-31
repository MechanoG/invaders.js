import { Menu } from './scenes/menu.js';

const confing = {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    backgroundColor: '#000000',
    parent:'game',
    scene: {Menu}
}

const game = new Phaser.Game(confing);