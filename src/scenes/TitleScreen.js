export class TitleScreen extends Phaser.Scene {

  constructor(){

    super('titleScreen');

  }

  preload(){

    this.load.image('logo', './assets/ui/logo.png');

    this.load.image('btn', './assets/ui/btn.png');

  }

  create(){

    this.createBackgrounds();

    const logo = this.add.image(480, 100, 'logo');

    logo.setScale(0.5);

    logo.setScrollFactor(0, 0);

    const btn = this.add.image(480, 400, 'btn').setInteractive();

    btn.setScrollFactor(0, 0);

    btn.once('pointerdown', function () {

      this.cameras.main.fadeOut(1000);

    }, this);

    btn.on('pointerover', function () {

      this.setScale(1.5);

    }, btn);

    btn.on('pointerout', function () {

      this.setScale(1);

    }, btn);

    this.cameras.main.once('camerafadeoutcomplete', function () {

      this.scene.launch('mainGame');
      this.scene.launch('stageEditor');

    }, this);

  }

  update(){

    this.cameras.main.scrollX += 1;

    this.updateBackgrounds();

  }

  createBackgrounds(){

    this.backgroundMain = this.add.tileSprite(0, 540 - 540, Number.MAX_VALUE, 0, 'bg_main');

    this.backgroundMain.setOrigin(0, 0);

    this.backgroundMain.setDepth(-1);

    this.backgroundMain.setScrollFactor(0, 1);

    this.backgroundSky = this.add.tileSprite(0, 540 - 660, Number.MAX_VALUE, 0, 'bg_sky');

    this.backgroundSky.setOrigin(0, 0);

    this.backgroundSky.setDepth(-2);

    this.backgroundSky.setScrollFactor(0, 1);

  }

  updateBackgrounds(){

    //this.backgroundMain.setTilePosition(this.cameras.main.scrollX*0.5, this.cameras.main.scrollY*0.5);

    this.backgroundMain.tilePositionX = this.cameras.main.scrollX*0.5;
    this.backgroundSky.tilePositionX = this.cameras.main.scrollX*0.25;

  }

}
