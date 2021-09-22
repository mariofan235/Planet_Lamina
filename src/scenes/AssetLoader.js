export class AssetLoader extends Phaser.Scene {

  constructor(){

    super('loadGame');

  }

  preload(){

    this.load.spritesheet('player', 'assets/Player.png', {
      frameWidth: 66,
      frameHeight: 36
    });

    this.load.image('terrain-0', './assets/tilesets/Terrain_1.png');

    this.load.image('terrain-1', './assets/tilesets/Terrain_2.png');

    //Backgrounds

    this.load.image('bg_main', './assets/backgrounds/bg_0.png');

    this.load.image('bg_sky', './assets/backgrounds/bg_1.png');

    this.load.image('bg_night', './assets/backgrounds/bg_2.png');

    //Effects

    this.load.spritesheet('pixels', 'assets/effects/particles.png', {
      frameWidth: 8,
      frameHeight: 8
    });

    this.load.spritesheet('beam', 'assets/effects/beam.png', {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet('collectCoin', 'assets/effects/coinAnim.png', {
      frameWidth: 32,
      frameHeight: 64
    });

    //Enemies

    this.load.spritesheet('slime', 'assets/enemies/slime (1).png', {
      frameWidth: 32,
      frameHeight: 48
    });

    this.load.spritesheet('bat', 'assets/enemies/bat.png', {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet('shroom', 'assets/enemies/shroom.png', {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.image('cannonX', 'assets/enemies/cannon_x.png');

    this.load.image('cannonY', 'assets/enemies/cannon_y.png');

    this.load.spritesheet('drone', 'assets/enemies/roboTroop.png', {
      frameWidth: 55,
      frameHeight: 52
    });

    //Objects

    this.load.spritesheet('coin', 'assets/items and objects/Coin.png', {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet('chest', 'assets/items and objects/Chest.png', {
      frameWidth: 64,
      frameHeight: 32
    });

    this.load.image('chestOpen', './assets/items and objects/ChestOpen.png');

    this.load.image('bullet', './assets/items and objects/Bullet_0.png');

    this.load.image('chargeBullet', './assets/items and objects/Bullet_1.png');

    this.load.spritesheet('laser', 'assets/items and objects/Laser.png', {
      frameWidth: 15,
      frameHeight: 11
    });

    this.load.image('heart', 'assets/items and objects/Heart.png');

    this.load.spritesheet('arrowX', 'assets/items and objects/ArrowSignX.png', {
      frameWidth: 40,
      frameHeight: 32
    });

    this.load.spritesheet('arrowY', 'assets/items and objects/ArrowSignY.png', {
      frameWidth: 20,
      frameHeight: 48
    });

    this.load.spritesheet('portal', 'assets/items and objects/Portal.png', {
      frameWidth: 370,
      frameHeight: 340
    });

    this.load.spritesheet('checkPoint', 'assets/items and objects/SpawnPoint.png', {
      frameWidth: 64,
      frameHeight: 32
    });

    this.load.spritesheet('spikeSingle', 'assets/items and objects/SpikeSide.png', {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet('spikeTrap', 'assets/items and objects/SpikeBlock.png', {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet('rocket', 'assets/items and objects/RocketGoal.png', {
      frameWidth: 72,
      frameHeight: 72
    });


  }

  create(){

    this.createNPCAnim();

    this.createPlayerAnim();

    this.scene.launch('titleScreen');

    // this.scene.launch('mainGame');
    // this.scene.launch('stageEditor');

  }

  createPlayerAnim(){

    this.anims.create({

      key: "idle",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 1
      }),
      frameRate: 6,
      repeat: -1

    });

    this.anims.create({

      key: "walk",
      frames: this.anims.generateFrameNumbers("player", {
        start: 6,
        end: 8
      }),
      frameRate: 6,
      repeat: -1

    });

    this.anims.create({

      key: "shoot_walk",
      frames: this.anims.generateFrameNumbers("player", {
        start: 9,
        end: 11
      }),
      frameRate: 6,
      repeat: -1

    });

    this.anims.create({

      key: "tiredIdle",
      frames: this.anims.generateFrameNumbers("player", {
        start: 12,
        end: 13
      }),
      frameRate: 3,
      repeat: -1

    });

    this.anims.create({
      key: 'shoot_idle',
      frames: [ { key: 'player', frame: 2 } ],
      frameRate: 20
    });

    this.anims.create({
      key: 'jump',
      frames: [ { key: 'player', frame: 3 } ],
      frameRate: 20
    });

    this.anims.create({
      key: 'shoot_jump',
      frames: [ { key: 'player', frame: 4 } ],
      frameRate: 20
    });

    this.anims.create({
      key: 'fall',
      frames: [ { key: 'player', frame: 5 } ],
      frameRate: 20
    });

    this.anims.create({
      key: 'hurt',
      frames: [ { key: 'player', frame: 14 } ],
      frameRate: 20
    });

  }

  createNPCAnim(){

    //Slime

    this.anims.create({
      key: "slimeIdle",
      frames: this.anims.generateFrameNumbers("slime", {
        start: 0,
        end: 4
      }),
      frameRate: 6,
      repeat: -1
    });

    this.anims.create({
      key: "slimeJump",
      frames: this.anims.generateFrameNumbers("slime", {
        start: 5,
        end: 19
      }),
      frameRate: 12,
      repeat: -1
    });

    //Bat

    this.anims.create({
      key: "batFront",
      frames: this.anims.generateFrameNumbers("bat", {
        start: 1,
        end: 3
      }),
      frameRate: 6,
      repeat: -1
    });

    this.anims.create({
      key: "batSide",
      frames: this.anims.generateFrameNumbers("bat", {
        start: 4,
        end: 7
      }),
      frameRate: 6,
      repeat: -1
    });

    //Shroom

    this.anims.create({
      key: "shroomWalk",
      frames: this.anims.generateFrameNumbers("shroom", {
        start: 0,
        end: 7
      }),
      frameRate: 6,
      repeat: -1
    });

    this.anims.create({
      key: "shroomStomp",
      frames: this.anims.generateFrameNumbers("shroom", {
        start: 8,
        end: 13
      }),
      frameRate: 6,
      repeat: -1
    });

    //Drone

    this.anims.create({
      key: 'droneIdle',
      frames: [ { key: 'drone', frame: 0 } ],
      frameRate: 20
    });

    this.anims.create({
      key: "droneFlip",
      frames: this.anims.generateFrameNumbers("drone", {
        start: 1,
        end: 4
      }),
      frameRate: 6,
      repeat: -1
    });

    //Chest

    this.anims.create({
      key: "chestShine",
      frames: this.anims.generateFrameNumbers("chest", {
        start: 0,
        end: 6
      }),
      frameRate: 12,
      repeat: -1,
      repeatDelay: 500
    });

    this.anims.create({
      key: 'chestOpen',
      frames: [ { key: 'chestOpen', frame: 0 } ],
      frameRate: 20
    });

    //Portal

    this.anims.create({
      key: 'portalInactive',
      frames: this.anims.generateFrameNumbers("portal", {
        start: 0,
        end: 1
      }),
      frameRate: 6,
      repeat: -1
    });

    this.anims.create({
      key: 'portalActive',
      frames: this.anims.generateFrameNumbers("portal", {
        start: 2,
        end: 6
      }),
      frameRate: 6,
      repeat: -1
    });

    //Miscellaneous

    this.anims.create({
      key: 'spikeIdle',
      frames: this.anims.generateFrameNumbers("spikeTrap", {
        start: 0,
        end: 1
      }),
      frameRate: 6,
      repeat: -1
    });

    this.anims.create({
      key: 'coinIdle',
      frames: this.anims.generateFrameNumbers("coin", {
        start: 0,
        end: 5
      }),
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: 'spawnDeactive',
      frames: this.anims.generateFrameNumbers("checkPoint", {
        start: 0,
        end: 1
      }),
      frameRate: 6,
      repeat: -1
    });

    this.anims.create({
      key: 'spawnActive',
      frames: this.anims.generateFrameNumbers("checkPoint", {
        start: 2,
        end: 3
      }),
      frameRate: 6,
      repeat: -1
    });

    this.anims.create({
      key: 'beamAnim',
      frames: this.anims.generateFrameNumbers("beam", {
        start: 0,
        end: 7
      }),
      frameRate: 18,
      repeat: 0
    });

    this.anims.create({
      key: 'laserAnim',
      frames: this.anims.generateFrameNumbers("laser", {
        start: 0,
        end: 2
      }),
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: 'collectCoinAnim',
      frames: this.anims.generateFrameNumbers("collectCoin", {
        start: 0,
        end: 5
      }),
      frameRate: 12,
      repeat: 0
    });

  }

}
