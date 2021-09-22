import 'phaser';

import { AssetLoader } from './scenes/AssetLoader.js';

import { TitleScreen } from './scenes/TitleScreen.js';

import { GameEngine } from './scenes/GameEngine.js';

import { LevelEditor } from './scenes/LevelEditor.js';

const gameConfig = {
  backgroundColor: "#d46e33",
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    width: 960,
    height: 540,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: {y:1500},
      debug: false
    }
  },
  scene: [AssetLoader, TitleScreen, GameEngine, LevelEditor]

};

new Phaser.Game(gameConfig);
