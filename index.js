import { Menu } from './scenes/menu.js';

const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 800,
    backgroundColor: '#cf9c9cff',
    parent:'game',
    scene: [Menu]
}


const game = new Phaser.Game(config);