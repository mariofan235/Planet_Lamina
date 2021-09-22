import {Player} from './scripts/Player.js';

import {Enity} from './scripts/npcs.js';
import {createNPC} from './scripts/npcs.js';

export class GameEngine extends Phaser.Scene {

  constructor(){

    super('mainGame');

  }

  init(){

    this.GAME_WIDTH = this.sys.game.canvas.width;
    this.GAME_HEIGHT = this.sys.game.canvas.height;

    this.levelSize = {width: this.GAME_WIDTH*3, height: this.GAME_HEIGHT*1};

    this.startPos = {x: 32, y: 128};

    this.gameMode = 'edit';

    this.coinCount = 0;

    this.checkpointSpawn = {x: null, y: null};

  }

  preload(){

    this.loadLevel();

  }

  create() {

    this.createLevelMap();

    this.mainCam = this.cameras.main.setSize(this.GAME_WIDTH, this.GAME_HEIGHT);

    this.cameras.main.fadeIn(1000);

    this.initControlScheme();

    this.playerGroup = this.physics.add.group();

    this.npcGroup = this.physics.add.group();

    // this.player = new Player(this, 16, 0, 'player');

    this.player = null;

    this.physics.add.collider(this.layer, this.playerGroup);

    this.physics.add.collider(this.npcLayer, this.playerGroup);

    //this.physics.add.collider(this.spikeLayer, this.player, this.player.playerDamage(), this.player);

    this.playerProjectiles = this.physics.add.group();

    this.npcProjectiles = this.physics.add.group();

    this.effectsGroup = this.physics.add.group();

    this.objectsGroup = this.add.group();

    this.editorGraphics = this.add.group();

    this.physics.add.collider(this.layer, this.playerProjectiles);

    this.physics.add.collider(this.layer, this.npcProjectiles);

    this.physics.add.collider(this.effectsGroup, this.layer);

    //this.mainCam.startFollow(this.player);

    this.physics.world.setBoundsCollision(true, true, false, false);

    this.cameras.main.setBounds(0, 0, this.levelSize.width, this.levelSize.height);

    this.mainCam.setDeadzone(0, 12);

    this.createBackgrounds();

    // var i = this.map.createFromTiles(49, 99, new Enity, this, this.mainCam, 'NPC Test');
    //
    // console.log(i);

    // this.map.createFromObjects('Enemies', {
    //   gid: 49,
    //   key: 'slime',
    //   scene: this
    //   //classType: Enity
    // });

    this.loadEditorConfig();

    this.events.on('addCoin', function () {
      this.coinCount++;
    }, this);

    this.events.on('checkpoint', function (pos) {

      this.checkpointSpawn.x = pos.x;
      this.checkpointSpawn.y = pos.y;

    }, this);

    this.events.on('playerDefeat', function (pos) {

      for(var i = 1; i <= 25; i++){

        var p = this.effectsGroup.create( pos.x, pos.y, 'pixels', Math.floor(Math.random()*5) );

        p.setVelocityX( Math.floor(Math.random()*1000 - 499) );

        p.setVelocityY( Math.floor(Math.random()*-600 - 200) );

        p.setBounceX(1);

      }

      // var p = this.add.particles('pixels').createEmitter({
      //   speed: { min: -800, max: 800 },
      //   angle: { min: 0, max: 360 },
      //   scale: { start: 1, end: 1.5 },
      //   blendMode: 'SCREEN',
      //    //active: false,
      //   gravityY: 800,
      //   x: pos.x,
      //   y: pos.y
      // });
      //
      // p.explode(100);

 }, this);

  }

  createBackgrounds(){

    this.backgroundMain = this.add.tileSprite(0, this.levelSize.height - 540, this.levelSize.width, 0, 'bg_main');

    this.backgroundMain.setOrigin(0, 0);

    this.backgroundMain.setDepth(-1);

    this.backgroundMain.setScrollFactor(0, 1);

    this.backgroundSky = this.add.tileSprite(0, this.levelSize.height - 660, this.levelSize.width, 0, 'bg_sky');

    this.backgroundSky.setOrigin(0, 0);

    this.backgroundSky.setDepth(-2);

    this.backgroundSky.setScrollFactor(0, 1);

  }

  updateBackgrounds(){

    //this.backgroundMain.setTilePosition(this.mainCam.scrollX*0.5, this.mainCam.scrollY*0.5);

    this.backgroundMain.tilePositionX = this.mainCam.scrollX*0.5;
    this.backgroundSky.tilePositionX = this.mainCam.scrollX*0.25;

  }

  loadEditorConfig(){

    this.events.on('activateGame', function () {

      this.initPlayer();

      this.beamEffect(this.player.x, this.player.y);

      if(this.gameMode == 'edit'){
        this.gameMode = 'test';
      }else{
        this.gameMode = 'player';
      }

      this.spawnEntities();

      this.scene.sleep('stageEditor');

    }, this);

    this.events.on('activateEditor', function () {

      this.resetLevel();
      this.mainCam.stopFollow();
      this.gameMode = 'edit';
      this.scene.wake('stageEditor');

    }, this);

  }

  resetLevel(){

    this.playerGroup.clear(true, true);
    this.playerProjectiles.clear(true, true);
    this.npcGroup.clear(true, true);
    this.objectsGroup.clear(true, true);
    this.npcProjectiles.clear(true, true);
    this.effectsGroup.clear(true, true);

    //Reset Data
    this.coinCount = 0;

    this.checkpointSpawn = {x: null, y: null};

  }

  initPlayer(){

    this.player = new Player(this, this.startPos.x, this.startPos.y, 'player');

    //this.playerGroup.add(this.player);

    this.mainCam.startFollow(this.player);

  }

  spawnEntities(){

    this.npcLayer.forEachTile((tile) => {

      if(tile.index != -1){

        createNPC(this, tile.getLeft(), tile.getTop(), tile.index);

      }

    });

  }

  update(){

    this.updateControls();

    this.updateBackgrounds();

    if(Phaser.Input.Keyboard.JustDown(this.keyEnter)){

      if(this.gameMode == 'edit'){
        this.events.emit('activateGame');
      }else{
        this.events.emit('activateEditor');
      }

    }

    //this.gun.setPosition(this.player.getCenter().x, this.player.getCenter().y);

    // var pointerAngle = Phaser.Math.Angle.Between(this.player.getCenter().x, this.player.getCenter().y, this.pointer.worldX, this.pointer.worldY);
    //
    // this.gun.rotation = pointerAngle;
    //
    // this.gun.setPosition(this.player.getCenter().x, this.player.getCenter().y);

    }

  loadLevel(){

    //this.load.tilemapTiledJSON('map', './assets/levels/Level1.json');

  }

  createLevelMap(){

    this.map = this.make.tilemap({
      tileWidth: 32,
      tileHeight: 32,
      width: Math.floor(this.levelSize.width/32),
      height:Math.floor(this.levelSize.height/32) + 1
    });

    const tileset = this.map.addTilesetImage('terrain-0', null, 32, 32);

    this.layer = this.map.createBlankLayer('terrain', 'terrain-0');

    this.npcLayer = this.map.createBlankLayer('npcs');

    //const tileset = this.map.addTilesetImage('Terrain', 'terrain-0');

    // this.layer = this.map.createLayer(0, tileset, 0, -166);
    //
    this.layer.setCollisionByExclusion(-1, true);

    this.npcLayer.setCollisionByExclusion(-1, true);
    //
    // this.map.addTilesetImage('Spike', 'spike');

    //const spikeLayer = this.map.createLayer(1, 'Spike', 0, -166);

    //var a = this.map.createLayer('NPC Test', 'Spike', 0, -166);

    //console.log(this.map.getTileAt(2, 19));

    //spikeLayer.setCollisionByExclusion(-1, true);

  }

  initControlScheme(){

    this.cursors = this.input.keyboard.createCursorKeys();

    this.pointer = this.input.activePointer;

    this.controls = {

      LEFT: false,
      RIGHT: false,
      UP: false,
      DOWN: false,
      ACTION: false

    }

    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);


  }

  updateControls(){

    this.controls.LEFT = this.cursors.left.isDown || this.keyA.isDown;
    this.controls.RIGHT = this.cursors.right.isDown || this.keyD.isDown;
    this.controls.UP = this.cursors.up.isDown || this.keyW.isDown;
    this.controls.DOWN = this.cursors.down.isDown || this.keyS.isDown;
    this.controls.ACTION = this.cursors.space.isDown;

  }

  editor_moveCam(){

    this.updateControls();

    var speed = 5;

    if(this.cursors.shift.isDown){

      speed = 10;

    }

    if(this.controls.LEFT){

      this.mainCam.scrollX -= speed;

      if(this.mainCam.scrollX < 0){

        this.mainCam.scrollX = 0;

      }

    }

    if(this.controls.RIGHT){

      this.mainCam.scrollX += speed;

      if(this.mainCam.scrollX > this.levelSize.width - this.GAME_WIDTH){

        this.mainCam.scrollX = this.levelSize.width - this.GAME_WIDTH;

      }

    }

    if(this.controls.UP){

      this.mainCam.scrollY -= speed;

      if(this.mainCam.scrollY < 0){

        this.mainCam.scrollY = 0;

      }

    }

    if(this.controls.DOWN){

      this.mainCam.scrollY += speed;

      if(this.mainCam.scrollY > this.levelSize.height){

        this.mainCam.scrollY = this.levelSize.height;

      }

    }

  }

  beamEffect(x, y){

    const sprites = [];

    for(var i = 0; i <= 6; i++){

      sprites.push(this.effectsGroup.create(x, y - (i*32), 'beam'));

    }


    // sprites.push(this.effectsGroup.create(x, y - 32, 'beam'));
    // sprites.push(this.effectsGroup.create(x, y - 64, 'beam'));

    sprites.forEach((item, i) => {

      item.body.allowGravity = false;
      item.anims.play('beamAnim');

      item.on('animationcomplete', () => {
        item.destroy(true, true);
      });

    });


  }

}
