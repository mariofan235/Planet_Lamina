!function(e){function t(t){for(var s,n,o=t[0],h=t[1],l=t[2],u=0,p=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(s in h)Object.prototype.hasOwnProperty.call(h,s)&&(e[s]=h[s]);for(c&&c(t);p.length;)p.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],s=!0,o=1;o<i.length;o++){var h=i[o];0!==a[h]&&(s=!1)}s&&(r.splice(t--,1),e=n(n.s=i[0]))}return e}var s={},a={1:0},r=[];function n(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=s,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window.webpackJsonp=window.webpackJsonp||[],h=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=h;r.push([1,0]),i()}([,function(e,t,i){"use strict";i(0);var s=i(2),a=i(3),r=i(4),n=i(8),o={backgroundColor:"#d46e33",pixelArt:!0,scale:{mode:Phaser.Scale.FIT,width:960,height:540,autoCenter:Phaser.Scale.CENTER_BOTH},physics:{default:"arcade",arcade:{gravity:{y:1500},debug:!1}},scene:[s.AssetLoader,a.TitleScreen,r.GameEngine,n.LevelEditor]};new Phaser.Game(o)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}();t.AssetLoader=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"loadGame"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Scene),s(t,[{key:"preload",value:function(){this.load.spritesheet("player","assets/Player.png",{frameWidth:66,frameHeight:36}),this.load.image("terrain-0","./assets/tilesets/Terrain_1.png"),this.load.image("terrain-1","./assets/tilesets/Terrain_2.png"),this.load.image("bg_main","./assets/backgrounds/bg_0.png"),this.load.image("bg_sky","./assets/backgrounds/bg_1.png"),this.load.image("bg_night","./assets/backgrounds/bg_2.png"),this.load.spritesheet("pixels","assets/effects/particles.png",{frameWidth:8,frameHeight:8}),this.load.spritesheet("beam","assets/effects/beam.png",{frameWidth:32,frameHeight:32}),this.load.spritesheet("collectCoin","assets/effects/coinAnim.png",{frameWidth:32,frameHeight:64}),this.load.spritesheet("slime","assets/enemies/slime (1).png",{frameWidth:32,frameHeight:48}),this.load.spritesheet("bat","assets/enemies/bat.png",{frameWidth:32,frameHeight:32}),this.load.spritesheet("shroom","assets/enemies/shroom.png",{frameWidth:32,frameHeight:32}),this.load.image("cannonX","assets/enemies/cannon_x.png"),this.load.image("cannonY","assets/enemies/cannon_y.png"),this.load.spritesheet("drone","assets/enemies/roboTroop.png",{frameWidth:55,frameHeight:52}),this.load.spritesheet("coin","assets/items and objects/Coin.png",{frameWidth:32,frameHeight:32}),this.load.spritesheet("chest","assets/items and objects/Chest.png",{frameWidth:64,frameHeight:32}),this.load.image("chestOpen","./assets/items and objects/ChestOpen.png"),this.load.image("bullet","./assets/items and objects/Bullet_0.png"),this.load.image("chargeBullet","./assets/items and objects/Bullet_1.png"),this.load.spritesheet("laser","assets/items and objects/Laser.png",{frameWidth:15,frameHeight:11}),this.load.image("heart","assets/items and objects/Heart.png"),this.load.spritesheet("arrowX","assets/items and objects/ArrowSignX.png",{frameWidth:40,frameHeight:32}),this.load.spritesheet("arrowY","assets/items and objects/ArrowSignY.png",{frameWidth:20,frameHeight:48}),this.load.spritesheet("portal","assets/items and objects/Portal.png",{frameWidth:370,frameHeight:340}),this.load.spritesheet("checkPoint","assets/items and objects/SpawnPoint.png",{frameWidth:64,frameHeight:32}),this.load.spritesheet("spikeSingle","assets/items and objects/SpikeSide.png",{frameWidth:32,frameHeight:32}),this.load.spritesheet("spikeTrap","assets/items and objects/SpikeBlock.png",{frameWidth:32,frameHeight:32}),this.load.spritesheet("rocket","assets/items and objects/RocketGoal.png",{frameWidth:72,frameHeight:72})}},{key:"create",value:function(){this.createNPCAnim(),this.createPlayerAnim(),this.scene.launch("titleScreen")}},{key:"createPlayerAnim",value:function(){this.anims.create({key:"idle",frames:this.anims.generateFrameNumbers("player",{start:0,end:1}),frameRate:6,repeat:-1}),this.anims.create({key:"walk",frames:this.anims.generateFrameNumbers("player",{start:6,end:8}),frameRate:6,repeat:-1}),this.anims.create({key:"shoot_walk",frames:this.anims.generateFrameNumbers("player",{start:9,end:11}),frameRate:6,repeat:-1}),this.anims.create({key:"tiredIdle",frames:this.anims.generateFrameNumbers("player",{start:12,end:13}),frameRate:3,repeat:-1}),this.anims.create({key:"shoot_idle",frames:[{key:"player",frame:2}],frameRate:20}),this.anims.create({key:"jump",frames:[{key:"player",frame:3}],frameRate:20}),this.anims.create({key:"shoot_jump",frames:[{key:"player",frame:4}],frameRate:20}),this.anims.create({key:"fall",frames:[{key:"player",frame:5}],frameRate:20}),this.anims.create({key:"hurt",frames:[{key:"player",frame:14}],frameRate:20})}},{key:"createNPCAnim",value:function(){this.anims.create({key:"slimeIdle",frames:this.anims.generateFrameNumbers("slime",{start:0,end:4}),frameRate:6,repeat:-1}),this.anims.create({key:"slimeJump",frames:this.anims.generateFrameNumbers("slime",{start:5,end:19}),frameRate:12,repeat:-1}),this.anims.create({key:"batFront",frames:this.anims.generateFrameNumbers("bat",{start:1,end:3}),frameRate:6,repeat:-1}),this.anims.create({key:"batSide",frames:this.anims.generateFrameNumbers("bat",{start:4,end:7}),frameRate:6,repeat:-1}),this.anims.create({key:"shroomWalk",frames:this.anims.generateFrameNumbers("shroom",{start:0,end:7}),frameRate:6,repeat:-1}),this.anims.create({key:"shroomStomp",frames:this.anims.generateFrameNumbers("shroom",{start:8,end:13}),frameRate:6,repeat:-1}),this.anims.create({key:"droneIdle",frames:[{key:"drone",frame:0}],frameRate:20}),this.anims.create({key:"droneFlip",frames:this.anims.generateFrameNumbers("drone",{start:1,end:4}),frameRate:6,repeat:-1}),this.anims.create({key:"chestShine",frames:this.anims.generateFrameNumbers("chest",{start:0,end:6}),frameRate:12,repeat:-1,repeatDelay:500}),this.anims.create({key:"chestOpen",frames:[{key:"chestOpen",frame:0}],frameRate:20}),this.anims.create({key:"portalInactive",frames:this.anims.generateFrameNumbers("portal",{start:0,end:1}),frameRate:6,repeat:-1}),this.anims.create({key:"portalActive",frames:this.anims.generateFrameNumbers("portal",{start:2,end:6}),frameRate:6,repeat:-1}),this.anims.create({key:"spikeIdle",frames:this.anims.generateFrameNumbers("spikeTrap",{start:0,end:1}),frameRate:6,repeat:-1}),this.anims.create({key:"coinIdle",frames:this.anims.generateFrameNumbers("coin",{start:0,end:5}),frameRate:12,repeat:-1}),this.anims.create({key:"spawnDeactive",frames:this.anims.generateFrameNumbers("checkPoint",{start:0,end:1}),frameRate:6,repeat:-1}),this.anims.create({key:"spawnActive",frames:this.anims.generateFrameNumbers("checkPoint",{start:2,end:3}),frameRate:6,repeat:-1}),this.anims.create({key:"beamAnim",frames:this.anims.generateFrameNumbers("beam",{start:0,end:7}),frameRate:18,repeat:0}),this.anims.create({key:"laserAnim",frames:this.anims.generateFrameNumbers("laser",{start:0,end:2}),frameRate:12,repeat:-1}),this.anims.create({key:"collectCoinAnim",frames:this.anims.generateFrameNumbers("collectCoin",{start:0,end:5}),frameRate:12,repeat:0})}}]),t}()},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}();t.TitleScreen=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"titleScreen"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Scene),s(t,[{key:"preload",value:function(){this.load.image("logo","./assets/ui/logo.png"),this.load.image("btn","./assets/ui/btn.png")}},{key:"create",value:function(){this.createBackgrounds();var e=this.add.image(480,100,"logo");e.setScale(.5),e.setScrollFactor(0,0);var t=this.add.image(480,400,"btn").setInteractive();t.setScrollFactor(0,0),t.once("pointerdown",(function(){this.cameras.main.fadeOut(1e3)}),this),t.on("pointerover",(function(){this.setScale(1.5)}),t),t.on("pointerout",(function(){this.setScale(1)}),t),this.cameras.main.once("camerafadeoutcomplete",(function(){this.scene.launch("mainGame"),this.scene.launch("stageEditor")}),this)}},{key:"update",value:function(){this.cameras.main.scrollX+=1,this.updateBackgrounds()}},{key:"createBackgrounds",value:function(){this.backgroundMain=this.add.tileSprite(0,0,Number.MAX_VALUE,0,"bg_main"),this.backgroundMain.setOrigin(0,0),this.backgroundMain.setDepth(-1),this.backgroundMain.setScrollFactor(0,1),this.backgroundSky=this.add.tileSprite(0,-120,Number.MAX_VALUE,0,"bg_sky"),this.backgroundSky.setOrigin(0,0),this.backgroundSky.setDepth(-2),this.backgroundSky.setScrollFactor(0,1)}},{key:"updateBackgrounds",value:function(){this.backgroundMain.tilePositionX=.5*this.cameras.main.scrollX,this.backgroundSky.tilePositionX=.25*this.cameras.main.scrollX}}]),t}()},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GameEngine=void 0;var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),a=i(5),r=i(7);t.GameEngine=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"mainGame"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Scene),s(t,[{key:"init",value:function(){this.GAME_WIDTH=this.sys.game.canvas.width,this.GAME_HEIGHT=this.sys.game.canvas.height,this.levelSize={width:3*this.GAME_WIDTH,height:1*this.GAME_HEIGHT},this.startPos={x:32,y:128},this.gameMode="edit",this.coinCount=0,this.checkpointSpawn={x:null,y:null}}},{key:"preload",value:function(){this.loadLevel()}},{key:"create",value:function(){this.createLevelMap(),this.mainCam=this.cameras.main.setSize(this.GAME_WIDTH,this.GAME_HEIGHT),this.cameras.main.fadeIn(1e3),this.initControlScheme(),this.playerGroup=this.physics.add.group(),this.npcGroup=this.physics.add.group(),this.player=null,this.physics.add.collider(this.layer,this.playerGroup),this.physics.add.collider(this.npcLayer,this.playerGroup),this.playerProjectiles=this.physics.add.group(),this.npcProjectiles=this.physics.add.group(),this.effectsGroup=this.physics.add.group(),this.objectsGroup=this.add.group(),this.editorGraphics=this.add.group(),this.physics.add.collider(this.layer,this.playerProjectiles),this.physics.add.collider(this.layer,this.npcProjectiles),this.physics.add.collider(this.effectsGroup,this.layer),this.physics.world.setBoundsCollision(!0,!0,!1,!1),this.cameras.main.setBounds(0,0,this.levelSize.width,this.levelSize.height),this.mainCam.setDeadzone(0,12),this.createBackgrounds(),this.loadEditorConfig(),this.events.on("addCoin",(function(){this.coinCount++}),this),this.events.on("checkpoint",(function(e){this.checkpointSpawn.x=e.x,this.checkpointSpawn.y=e.y}),this),this.events.on("playerDefeat",(function(e){for(var t=1;t<=25;t++){var i=this.effectsGroup.create(e.x,e.y,"pixels",Math.floor(5*Math.random()));i.setVelocityX(Math.floor(1e3*Math.random()-499)),i.setVelocityY(Math.floor(-600*Math.random()-200)),i.setBounceX(1)}}),this)}},{key:"createBackgrounds",value:function(){this.backgroundMain=this.add.tileSprite(0,this.levelSize.height-540,this.levelSize.width,0,"bg_main"),this.backgroundMain.setOrigin(0,0),this.backgroundMain.setDepth(-1),this.backgroundMain.setScrollFactor(0,1),this.backgroundSky=this.add.tileSprite(0,this.levelSize.height-660,this.levelSize.width,0,"bg_sky"),this.backgroundSky.setOrigin(0,0),this.backgroundSky.setDepth(-2),this.backgroundSky.setScrollFactor(0,1)}},{key:"updateBackgrounds",value:function(){this.backgroundMain.tilePositionX=.5*this.mainCam.scrollX,this.backgroundSky.tilePositionX=.25*this.mainCam.scrollX}},{key:"loadEditorConfig",value:function(){this.events.on("activateGame",(function(){this.initPlayer(),this.beamEffect(this.player.x,this.player.y),"edit"==this.gameMode?this.gameMode="test":this.gameMode="player",this.spawnEntities(),this.scene.sleep("stageEditor")}),this),this.events.on("activateEditor",(function(){this.resetLevel(),this.mainCam.stopFollow(),this.gameMode="edit",this.scene.wake("stageEditor")}),this)}},{key:"resetLevel",value:function(){this.playerGroup.clear(!0,!0),this.playerProjectiles.clear(!0,!0),this.npcGroup.clear(!0,!0),this.objectsGroup.clear(!0,!0),this.npcProjectiles.clear(!0,!0),this.effectsGroup.clear(!0,!0),this.coinCount=0,this.checkpointSpawn={x:null,y:null}}},{key:"initPlayer",value:function(){this.player=new a.Player(this,this.startPos.x,this.startPos.y,"player"),this.mainCam.startFollow(this.player)}},{key:"spawnEntities",value:function(){var e=this;this.npcLayer.forEachTile((function(t){-1!=t.index&&(0,r.createNPC)(e,t.getLeft(),t.getTop(),t.index)}))}},{key:"update",value:function(){this.updateControls(),this.updateBackgrounds(),Phaser.Input.Keyboard.JustDown(this.keyEnter)&&("edit"==this.gameMode?this.events.emit("activateGame"):this.events.emit("activateEditor"))}},{key:"loadLevel",value:function(){}},{key:"createLevelMap",value:function(){this.map=this.make.tilemap({tileWidth:32,tileHeight:32,width:Math.floor(this.levelSize.width/32),height:Math.floor(this.levelSize.height/32)+1});this.map.addTilesetImage("terrain-0",null,32,32);this.layer=this.map.createBlankLayer("terrain","terrain-0"),this.npcLayer=this.map.createBlankLayer("npcs"),this.layer.setCollisionByExclusion(-1,!0),this.npcLayer.setCollisionByExclusion(-1,!0)}},{key:"initControlScheme",value:function(){this.cursors=this.input.keyboard.createCursorKeys(),this.pointer=this.input.activePointer,this.controls={LEFT:!1,RIGHT:!1,UP:!1,DOWN:!1,ACTION:!1},this.keyW=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),this.keyA=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),this.keyS=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),this.keyD=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),this.keyEnter=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)}},{key:"updateControls",value:function(){this.controls.LEFT=this.cursors.left.isDown||this.keyA.isDown,this.controls.RIGHT=this.cursors.right.isDown||this.keyD.isDown,this.controls.UP=this.cursors.up.isDown||this.keyW.isDown,this.controls.DOWN=this.cursors.down.isDown||this.keyS.isDown,this.controls.ACTION=this.cursors.space.isDown}},{key:"editor_moveCam",value:function(){this.updateControls();var e=5;this.cursors.shift.isDown&&(e=10),this.controls.LEFT&&(this.mainCam.scrollX-=e,this.mainCam.scrollX<0&&(this.mainCam.scrollX=0)),this.controls.RIGHT&&(this.mainCam.scrollX+=e,this.mainCam.scrollX>this.levelSize.width-this.GAME_WIDTH&&(this.mainCam.scrollX=this.levelSize.width-this.GAME_WIDTH)),this.controls.UP&&(this.mainCam.scrollY-=e,this.mainCam.scrollY<0&&(this.mainCam.scrollY=0)),this.controls.DOWN&&(this.mainCam.scrollY+=e,this.mainCam.scrollY>this.levelSize.height&&(this.mainCam.scrollY=this.levelSize.height))}},{key:"beamEffect",value:function(e,t){for(var i=[],s=0;s<=6;s++)i.push(this.effectsGroup.create(e,t-32*s,"beam"));i.forEach((function(e,t){e.body.allowGravity=!1,e.anims.play("beamAnim"),e.on("animationcomplete",(function(){e.destroy(!0,!0)}))}))}}]),t}()},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Player=void 0;var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),a=i(6);t.Player=function(e){function t(e,i,s,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,s,a));return e.add.existing(r),e.physics.world.enableBody(r),e.playerGroup.add(r),r.body.allowGravity=!0,r.setCollideWorldBounds(!0),r.controls=e.controls,r.jumpTimer=0,r.jumpHeight=160,r.status="none",r.setDepth(1),r.setSpeed=25,r.kickbackForce=!1,r.momentumLockTimer=0,r.overheatTimer=0,r.leafBlower_force=0,r.launchCharged=!1,r.shooting=!1,r.setScale(1.5),r.body.setSize(22,0),r.animDelay=0,r.health=3,r.recoveryTimer=0,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Physics.Arcade.Sprite),s(t,[{key:"preUpdate",value:function(e,i){(function e(t,i,s){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,i);if(void 0===a){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,i,s)}if("value"in a)return a.value;var n=a.get;return void 0!==n?n.call(s):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"preUpdate",this).call(this,e,i),this.recoveryTimer>0&&(this.recoveryTimer++,this.recoveryTimer>=120&&(this.recoveryTimer=0,this.setAlpha(1,1,1,1))),"none"==this.status?(this.movement(),this.jumpConfig(),this.blowerGunConfig()):this.kickback(),this.body.velocity.y>=800&&this.body.setVelocityY(800),this.momentumLockTimer>0&&(this.momentumLockTimer++,(this.momentumLockTimer>=19||this.body.onFloor())&&(this.momentumLockTimer=0)),this.bottomPitCheck(this.scene.levelSize.height)}},{key:"bottomPitCheck",value:function(e){this.y>e+32&&this.defeat()}},{key:"defeat",value:function(){this.scene.events.emit("playerDefeat",{x:this.getCenter().x,y:this.getCenter().y}),this.destroy(!0,!0)}},{key:"kickback",value:function(){"kickback"==this.status&&(this.anims.play("hurt",!0),this.kickbackForce?(this.kickbackForce=!1,this.body.setVelocityX(-this.body.velocity.x),this.body.setVelocityY(-300)):this.body.onFloor()&&this.body.velocity.y>=0&&(this.status="none"))}},{key:"playerHeal",value:function(){if(this.health<3)this.health++;else for(var e=1;e<=5;e++)this.scene.events.emit("addCoin")}},{key:"playerDamage",value:function(){0==this.recoveryTimer&&(this.setAlpha(.5,.5,.5,.5),this.recoveryTimer=1,this.health--,this.health<1?this.defeat():(this.status="kickback",this.kickbackForce=!0))}},{key:"blowerGunConfig",value:function(){this.shooting&&(this.animDelay++,this.animDelay>=20&&(this.animDelay=0,this.shooting=!1));var e=this.scene.cursors.space;this.keyJustDown(e)?this.launchBullet(this.getCenter().x,this.getCenter().y):this.controls.ACTION&&e.getDuration()>=500&&(this.launchCharged=!0),e.isUp&&this.launchCharged&&this.launchBullet(this.getCenter().x,this.getCenter().y)}},{key:"launchBullet",value:function(e,t){var i=700,s="bullet";this.launchCharged&&(i=1e3,s="chargeBullet",this.body.setVelocityY(-300),this.flipX?this.body.setVelocityX(400):this.body.setVelocityX(-400),this.launchCharged=!1),this.flipX?new a.Bullet(this.scene,e-58,t+7,s,-i):new a.Bullet(this.scene,e+48,t+7,s,i),this.shooting=!0,this.animDelay=0}},{key:"movement",value:function(){var e="";this.shooting&&(e="shoot_"),this.controls.LEFT?(this.flipX=!0,this.body.onFloor()?this.body.velocity.x>-400&&(this.body.velocity.x-=this.setSpeed):0==this.momentumLockTimer&&this.body.velocity.x>-400&&(this.body.velocity.x-=this.setSpeed)):this.controls.RIGHT?(this.flipX=!1,this.body.onFloor()?this.body.velocity.x<400&&(this.body.velocity.x+=this.setSpeed):0==this.momentumLockTimer&&this.body.velocity.x<400&&(this.body.velocity.x+=this.setSpeed)):this.body.onFloor()&&(this.body.velocity.x<0?(this.body.velocity.x+=20,this.body.velocity.x>=0&&this.body.setVelocityX(0)):this.body.velocity.x>0&&(this.body.velocity.x-=20,this.body.velocity.x<=0&&this.body.setVelocityX(0))),this.body.onFloor()?0==Math.floor(this.body.velocity.x)?1!=this.health||this.shooting?this.anims.play(e+"idle",!0):this.anims.play("tiredIdle",!0):this.anims.play(e+"walk",!0):this.body.velocity.y<0||this.shooting?this.anims.play(e+"jump",!0):this.anims.play("fall",!0)}},{key:"keyJustDown",value:function(e){return Phaser.Input.Keyboard.JustDown(e)}},{key:"jumpConfig",value:function(){this.controls.UP?this.body.onFloor()?(this.keyJustDown(this.scene.cursors.up)||this.keyJustDown(this.scene.keyW))&&(this.body.setVelocityY(-this.jumpHeight-Math.abs(.25*this.body.velocity.x)),this.jumpTimer=1):this.jumpTimer>0&&(this.jumpTimer>=15||this.body.velocity.y>0?this.jumpTimer=0:(this.body.velocity.y-=this.jumpHeight/this.jumpTimer,this.jumpTimer++)):this.jumpTimer=0}},{key:"wallJump",value:function(){}}]),t}()},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}();t.Bullet=function(e){function t(e,i,s,a,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,s,a));return e.add.existing(n),e.physics.world.enableBody(n),e.playerProjectiles.add(n),n.body.allowGravity=!1,n.startX=i,n.body.setVelocityX(r),n.blastTimer=1,n.fadeOut=n.scene.tweens.add({targets:n,scaleX:5,scaleY:5,alpha:0,duration:700,ease:"Power2"},n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.GameObjects.Sprite),s(t,[{key:"destroyBullet",value:function(){this.fadeOut.remove(),this.destroy(!0,!0)}},{key:"preUpdate",value:function(e,i){(function e(t,i,s){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,i);if(void 0===a){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,i,s)}if("value"in a)return a.value;var n=a.get;return void 0!==n?n.call(s):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"preUpdate",this).call(this,e,i),this.blastTimer++,(this.body.onWall()||Math.abs(this.x-this.startX)>=200)&&this.destroyBullet()}}]),t}()},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function e(t,i,s){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,i);if(void 0===a){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,i,s)}if("value"in a)return a.value;var n=a.get;return void 0!==n?n.call(s):void 0},a=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.createNPC=function(e,t,i,s){1==s&&new l(e,t,i,"coin",!1);2==s&&new c(e,t,i,"heart",!1);3==s&&new u(e,t,i,"chest");4==s&&new p(e,t,i,"checkPoint");5==s&&new y(e,t,i,"spikeTrap");6==s&&new y(e,t,i,"spikeSingle");7==s&&new d(e,t,i,"arrowX");8==s&&new d(e,t,i,"arrowY");9==s&&new f(e,t,i,"slime");10==s&&new m(e,t,i,"rocket")};var h=t.Enity=function(e){function t(e,i,s,a){r(this,t);var o=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,s,a));return e.add.existing(o),o.setOrigin(0,0),o}return o(t,Phaser.GameObjects.Sprite),a(t,[{key:"initPlayerCollision",value:function(e,t){e.physics.add.overlap(t,e.playerGroup,(function(e,t){t.playerDamage()}),(function(){return!t.defeated}))}},{key:"spawnReward",value:function(){this.scene.player.health<3&&1==Math.floor(3*Math.random()+1)?new c(this.scene,this.x,this.y,"heart",!0):new l(this.scene,this.x,this.y,"coin",!0)}},{key:"defeatAnim",value:function(e){}}]),t}(),l=t.Coin=function(e){function t(e,i,s,a,o){r(this,t);var h=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,s,a));return e.physics.world.enableBody(h),e.npcGroup.add(h),h.anims.play("coinIdle"),h.body.allowGravity=o,o&&(e.physics.add.collider(h,e.layer),h.body.setVelocityY(-200)),h.collected=!1,e.physics.add.overlap(h,e.playerGroup,(function(){this.collected||(this.collected=!0,this.y-=32,this.scene.events.emit("addCoin"),this.anims.play("collectCoinAnim",!0))}),null,h),h.on("animationcomplete",(function(){h.destroy(!0,!0)})),h}return o(t,e),t}(h),c=function(e){function t(e,i,s,a,o){r(this,t);var h=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,s,a));return e.physics.world.enableBody(h),e.npcGroup.add(h),h.body.allowGravity=o,o&&(e.physics.add.collider(h,e.layer),h.body.setVelocityY(-200)),e.physics.add.overlap(e.playerGroup,h,(function(e,t){t.playerHeal(),this.destroy(!0,!0)}),null,h),h}return o(t,e),t}(h),u=function(e){function t(e,i,s,a){r(this,t);var o=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,s,a));return e.physics.world.enableBody(o),e.npcGroup.add(o),o.anims.play("chestShine"),e.physics.add.collider(e.layer,o),o.body.setSize(58,32),o}return o(t,e),t}(h),p=function(e){function t(e,i,s,a){r(this,t);var o=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,s,a)),h=new Phaser.Physics.Arcade.StaticBody(e.physics.world,o);return o.body=h,e.objectsGroup.add(o),e.physics.add.collider(e.playerGroup,o,o.playerSensing,null,o),o.body.setSize(64,20),o.body.setOffset(0,12),o.anims.play("spawnDeactive"),o}return o(t,e),a(t,[{key:"playerSensing",value:function(e,t){this.body.touching.up&&t.body.onFloor()&&t.getBottomCenter().y<this.getCenter().y&&this.scene.events.emit("checkpoint",{x:this.x,y:this.y})}},{key:"checkpointActivated",value:function(){var e=this.scene.checkpointSpawn;return e.x==this.x&&e.y==this.y}},{key:"preUpdate",value:function(e,i){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"preUpdate",this).call(this,e,i),this.checkpointActivated()?this.anims.play("spawnActive",!0):this.anims.play("spawnDeactive",!0)}}]),t}(h),y=function(e){function t(e,i,s,a){r(this,t);var o=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,s,a));return e.objectsGroup.add(o),o.initCollision(a),o}return o(t,e),a(t,[{key:"initCollision",value:function(e){var t=this,i=this.scene.npcLayer.worldToTileXY(this.x,this.y),s=this.scene.npcLayer.getTileAt(i.x,i.y);if(s.setCollision(!0,!0,!0,!0),"spikeTrap"==e)this.anims.play("spikeIdle"),s.setCollisionCallback((function(e){t.scene.playerGroup.contains(e)&&e.playerDamage()}),this);else{this.setFrame(s.alt);var a=new Phaser.Physics.Arcade.StaticBody(this.scene.physics.world,this);this.body=a,this.adjustHitbox(s.alt),this.scene.physics.add.overlap(this.scene.playerGroup,this,(function(e,t){t.playerDamage()}),null,this)}}},{key:"adjustHitbox",value:function(e){0==e&&(this.body.setSize(32,20),this.body.setOffset(0,-5)),1==e&&(this.body.setSize(20,28),this.body.setOffset(-5,2)),2==e&&(this.body.setSize(32,20),this.body.setOffset(0,17)),3==e&&(this.body.setSize(20,28),this.body.setOffset(17,2))}}]),t}(h),d=function(e){function t(e,i,s,a){r(this,t);var o=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,s,a));e.objectsGroup.add(o),o.setDepth(0);var h=o.scene.npcLayer.worldToTileXY(o.x,o.y),l=o.scene.npcLayer.getTileAt(h.x,h.y).alt;return o.setFrame(l),o}return o(t,e),t}(h),f=function(e){function t(e,i,a,o){r(this,t);var h=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,a,o));return h.health=15,h.defeated=!1,h.hopTimer=0,h.flash=!1,h.flashDelay=0,e.npcGroup.add(h),e.physics.add.collider(h,e.layer,null,(function(){return!this.defeated}),h),s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"initPlayerCollision",h).call(h,e,h),e.physics.add.collider(h,e.playerProjectiles,h.npcHit,(function(){return!this.defeated}),h),h.anims.play("slimeIdle"),h.body.useDamping=!0,h.body.setDrag(.001),h.setOrigin(0,.25),h}return o(t,e),a(t,[{key:"npcHit",value:function(e,i){var a=Math.abs(Math.floor(i.body.velocity.x/i.blastTimer/100));a<1&&(a=1),i.destroyBullet(),this.health-=a,this.health<=0?(s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"spawnReward",this).call(this),this.destroy(!0,!0)):(this.flash=!0,this.flashDelay=0,this.setTintFill())}},{key:"trackPlayer",value:function(){var e=this.scene.player;this.flipX=e.x>this.x,this.body.onFloor()&&(this.anims.play("slimeIdle",!0),this.hopTimer++,this.hopTimer>=60&&(this.hopTimer=0,this.anims.play("slimeJump",!0),this.body.setVelocityY(-550),e.x<this.x?this.body.setVelocityX(-500):this.body.setVelocityX(500)))}},{key:"flashConfig",value:function(){this.flash&&(this.flashDelay+=1,this.flashDelay>=10&&(this.clearTint(),this.flash=!1))}},{key:"preUpdate",value:function(e,i){s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"preUpdate",this).call(this,e,i),this.trackPlayer(),this.flashConfig()}}]),t}(h),m=function(e){function t(e,i,s,a){r(this,t);var o=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i,s,a));return e.objectsGroup.add(o),o.setDepth(0),o}return o(t,e),t}(h)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}();t.LevelEditor=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"stageEditor"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Phaser.Scene),s(t,[{key:"init",value:function(){this.gameEngine=this.scene.get("mainGame"),this.spawnItem=0,this.altTile=0,this.pointerMode="place",this.editorMenu="main",this.pointer=this.input.activePointer,this.tileArrangement=[["0110 0100","0111 0101 0010","0011 0001","1110","1111 1010","1011","1100","1101 1000","1001","10111111","11111110","11101111","11111011","0000"]],this.npcList=["","coin","heart","chest","checkPoint","spikeTrap","spikeSingle","arrowX","arrowY","slime","rocket"]}},{key:"create",value:function(){this.keyE=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),this.keyT=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T),this.keyEnter=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER),this.gameEngine.events.on("activateGame",(function(){this.gameEngine.editorGraphics.setVisible(!1)}),this),this.gameEngine.events.on("activateEditor",(function(){this.pointerMode="place",this.gameEngine.editorGraphics.setVisible(!0)}),this)}},{key:"update",value:function(){this.gameEngine.editor_moveCam(),Phaser.Input.Keyboard.JustDown(this.keyE)&&(this.pointerMode="place"==this.pointerMode?"erase":"place"),Phaser.Input.Keyboard.JustDown(this.keyT)&&(this.spawnItem++,this.spawnItem>10&&(this.spawnItem=0)),this.pointer.isDown&&("place"==this.pointerMode&&this.placeTile(),"erase"==this.pointerMode&&this.eraseTile())}},{key:"pointInBounds",value:function(e,t){return e>=0&&e<this.gameEngine.map.width&&t>=0&&t<this.gameEngine.map.height}},{key:"getPointerTileXY",value:function(){var e={x:0,y:0},t=this.pointer.positionToCamera(this.gameEngine.mainCam);return e.x=Math.floor(t.x/32),e.y=Math.floor(t.y/32),e}},{key:"placeTile",value:function(){var e=this.getPointerTileXY();this.pointInBounds(e.x,e.y)&&(0==this.spawnItem?this.createTerrain(e.x,e.y):this.createEnity(e.x,e.y))}},{key:"createEnity",value:function(e,t){if(!this.gameEngine.map.hasTileAt(e,t,1)){this.gameEngine.npcLayer.putTileAt(this.spawnItem,e,t).alt=this.altTile;var i=this.gameEngine.editorGraphics.create(32*e,32*t,this.npcList[this.spawnItem]);"coin"==this.npcList[this.spawnItem]?i.setFrame(2):i.setFrame(this.altTile),i.setOrigin(0,0),"slime"==this.npcList[this.spawnItem]&&i.setOrigin(0,.25)}}},{key:"eraseTile",value:function(){var e=this,t=this.getPointerTileXY();if(this.pointInBounds(t.x,t.y)){var i=this.gameEngine.map;i.removeTileAt(t.x,t.y,!1,!0,0),this.autoTileConfig(i),i.removeTileAt(t.x,t.y,!1,!0,1),this.gameEngine.editorGraphics.getChildren().forEach((function(i){i.x!=32*t.x||i.y!=32*t.y||e.gameEngine.editorGraphics.remove(i,!0,!0)}))}}},{key:"createTerrain",value:function(e,t){if(!this.gameEngine.map.hasTileAt(e,t,0)){var i=null;i=this.gameEngine.layer.putTileAt(this.spawnItem,e,t),this.autoTileConfig(this.gameEngine.map),i.setCollision(!0,!0,!0,!0)}}},{key:"autoTileConfig",value:function(e){for(var t,i=0;i<e.width;i++)for(var s=0;s<e.height;s++)null!=(t=this.gameEngine.layer.getTileAt(i,s))&&t.index<30&&this.autoTile_setBuild(i,s,t)}},{key:"autoTile_setBuild",value:function(e,t,i){this.buildString="";var s=0;this.autoTile_findTile(e,t-1),this.autoTile_findTile(e+1,t),this.autoTile_findTile(e,t+1),this.autoTile_findTile(e-1,t);for(var a=0;a<this.tileArrangement[0].length;a++)this.tileArrangement[0][a].includes(this.buildString)&&(s=a,a=this.tileArrangement[0].length);i.index=s,4==i.index&&"1111"==this.buildString&&this.autoTile_Corner(e,t,i)}},{key:"autoTile_Corner",value:function(e,t,i){this.buildString="",this.autoTile_findTile(e,t-1),this.autoTile_findTile(e+1,t-1),this.autoTile_findTile(e+1,t),this.autoTile_findTile(e+1,t+1),this.autoTile_findTile(e,t+1),this.autoTile_findTile(e-1,t+1),this.autoTile_findTile(e-1,t),this.autoTile_findTile(e-1,t-1),-1!=this.tileArrangement[0].indexOf(this.buildString)&&(i.index=this.tileArrangement[0].indexOf(this.buildString))}},{key:"autoTile_findTile",value:function(e,t){var i=this.gameEngine.map.getTileAt(e,t,!0,0);null==i||-1!=i.index?this.buildString+="1":this.buildString+="0"}}]),t}()}]);