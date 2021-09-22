export function createNPC(scene, x, y, index){

  if(index == 1){

    new Coin(scene, x, y, 'coin', false);

  }

  if(index == 2){

    new Heart(scene, x, y, 'heart', false);

  }

  if(index == 3){

    new Chest(scene, x, y, 'chest')

  }

  if(index == 4){

    new CheckPoint(scene, x, y, 'checkPoint')

  }

  if(index == 5){

    new SpikeBlock(scene, x, y, 'spikeTrap')

  }

  if(index == 6){

    new SpikeBlock(scene, x, y, 'spikeSingle')

  }

  if(index == 7){

    new ArrowSign(scene, x, y, 'arrowX')

  }

  if(index == 8){

    new ArrowSign(scene, x, y, 'arrowY')

  }

  if(index == 9){

    new Slime(scene, x, y, 'slime')

  }

  if(index == 10){

    new Rocket(scene, x, y, 'rocket')

  }

}

export class Enity extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, key){

    super(scene, x, y, key);

    scene.add.existing(this);

    this.setOrigin(0, 0);

  }

  initPlayerCollision(scene, npc){

    scene.physics.add.overlap(npc, scene.playerGroup, function (obj, p) {
      p.playerDamage();
    }, function () {
      return (!npc.defeated)
    });

  }

  spawnReward(){

    if( this.scene.player.health < 3 && Math.floor(Math.random()*3 + 1) == 1){

      new Heart(this.scene, this.x, this.y, 'heart', true);

    }else{

      new Coin(this.scene, this.x, this.y, 'coin', true);

    }

  }

  defeatAnim(flipX){

    //this.setOrigin(0, 0);

    // this.rotation = Math.PI;
    //
    // this.body.velocity.x = flipX ? -200 : 200;
    //
    // this.body.setVelocityY(-300);

  }

}

export class Coin extends Enity {

  constructor(scene, x, y, key, collisionActive){

    super(scene, x, y, key);

    scene.physics.world.enableBody(this);

    scene.npcGroup.add(this);

    this.anims.play('coinIdle');

    this.body.allowGravity = collisionActive;

    if(collisionActive){

      scene.physics.add.collider(this, scene.layer);

      this.body.setVelocityY(-200);

    }

    this.collected = false;

    scene.physics.add.overlap(this, scene.playerGroup, function () {

      if(this.collected){
        return;
      }

      this.collected = true;
      this.y -= 32;

      this.scene.events.emit('addCoin');
      this.anims.play('collectCoinAnim', true);

    }, null, this);

    this.on('animationcomplete', () => {
      this.destroy(true, true);
    });

  }

}

class Heart extends Enity {

  constructor(scene, x, y, key, collisionActive){

    super(scene, x, y, key);

    scene.physics.world.enableBody(this);

    scene.npcGroup.add(this);

    this.body.allowGravity = collisionActive;

    if(collisionActive){

      scene.physics.add.collider(this, scene.layer);

      this.body.setVelocityY(-200);

    }

    scene.physics.add.overlap(scene.playerGroup, this, function (obj, p) {

      p.playerHeal();

      this.destroy(true, true);

    }, null, this);

  }

}

class Chest extends Enity {

  constructor(scene, x, y, key){

    super(scene, x, y, key);

    scene.physics.world.enableBody(this);

    scene.npcGroup.add(this);

    this.anims.play('chestShine');

    scene.physics.add.collider(scene.layer, this);

    //this.x += 16;

    this.body.setSize(58, 32);

  }

}

class CheckPoint extends Enity {

  constructor(scene, x, y, key){

    super(scene, x, y, key);

    const b = new Phaser.Physics.Arcade.StaticBody(scene.physics.world, this);

    this.body = b;

    scene.objectsGroup.add(this);

    scene.physics.add.collider(scene.playerGroup, this, this.playerSensing, null, this);

    this.body.setSize(64, 20);
    this.body.setOffset(0, 12);

    this.anims.play('spawnDeactive');

  }

  playerSensing(obj, p){

    if(this.body.touching.up){

      if(p.body.onFloor() && p.getBottomCenter().y < this.getCenter().y){

        this.scene.events.emit('checkpoint', {x: this.x, y: this.y});

      }

    }

  }

  checkpointActivated(){

    const pt = this.scene.checkpointSpawn;

    return (pt.x == this.x && pt.y == this.y);

  }

  preUpdate(time, delta){

    super.preUpdate(time, delta);

    if(this.checkpointActivated()){

      this.anims.play('spawnActive', true);

    }else{

      this.anims.play('spawnDeactive', true);

    }

  }

}

class SpikeBlock extends Enity {

  constructor(scene, x, y, key){

    super(scene, x, y, key);

    scene.objectsGroup.add(this);

    this.initCollision(key);

  }

  initCollision(type){

    const tileXY = this.scene.npcLayer.worldToTileXY(this.x, this.y);

    const tile = this.scene.npcLayer.getTileAt(tileXY.x, tileXY.y);

    tile.setCollision(true, true, true, true);

    if(type == 'spikeTrap'){

      this.anims.play('spikeIdle');

      tile.setCollisionCallback((p) => {

        if(this.scene.playerGroup.contains(p)){

          p.playerDamage();

        }

      }, this);

    }else{

      this.setFrame(tile.alt);

      const b = new Phaser.Physics.Arcade.StaticBody(this.scene.physics.world, this);

      this.body = b;

      this.adjustHitbox(tile.alt);

      this.scene.physics.add.overlap(this.scene.playerGroup, this, function (b, p) {

        p.playerDamage();

      }, null, this);

      // tile.setCollisionCallback((p) => {
      //
      //   if(this.scene.playerGroup.contains(p)){
      //
      //     if(p.body.velocity.y >= 0){
      //
      //       p.playerDamage();
      //
      //     }
      //
      //   }
      //
      // }, this);

    }

  }

  adjustHitbox(dir){

    if(dir == 0){

      this.body.setSize(32, 20);

      this.body.setOffset(0, -5);

    }

    if(dir == 1){

      this.body.setSize(20, 28);

      this.body.setOffset(-5, 2);

    }

    if(dir == 2){

      this.body.setSize(32, 20);

      this.body.setOffset(0, 17);

    }

    if(dir == 3){

      this.body.setSize(20, 28);

      this.body.setOffset(17, 2);

    }

  }

}

class ArrowSign extends Enity {

  constructor(scene, x, y, key){

    super(scene, x, y, key);

    scene.objectsGroup.add(this);

    this.setDepth(0);

    const tileXY = this.scene.npcLayer.worldToTileXY(this.x, this.y);

    const type = this.scene.npcLayer.getTileAt(tileXY.x, tileXY.y).alt;

    this.setFrame(type);

  }

}

class Slime extends Enity {

  constructor(scene, x, y, key){

    super(scene, x, y, key);

    this.health = 15;

    this.defeated = false;

    this.hopTimer = 0;

    this.flash = false;

    this.flashDelay = 0;

    scene.npcGroup.add(this);

    scene.physics.add.collider(this, scene.layer, null, function () {
      return (!this.defeated)
    }, this);

    super.initPlayerCollision(scene, this);

    scene.physics.add.collider(this, scene.playerProjectiles, this.npcHit, function () {
      return (!this.defeated);
    }, this);

    this.anims.play('slimeIdle');

    this.body.useDamping = true;

    this.body.setDrag(0.001);

    //this.body.allowGravity = false;

    this.setOrigin(0, 0.25);

  }

  npcHit(npc, obj){

    //super.defeatAnim(obj.x > this.x);

    var damage = Math.abs(Math.floor(obj.body.velocity.x/obj.blastTimer/100));

    if(damage < 1){
      damage = 1;
    }

    //this.body.setVelocityX(this.body.velocity.x/obj.blastTimer);

    obj.destroyBullet();

    this.health -= damage;

    if(this.health <= 0){

      super.spawnReward();

      this.destroy(true, true);

    }else{

      this.flash = true;
      this.flashDelay = 0;
      this.setTintFill();

    }

  }

  trackPlayer(){

    const player = this.scene.player;

    this.flipX = player.x > this.x;

    if(this.body.onFloor()){

      this.anims.play('slimeIdle', true);

      this.hopTimer++;

      if(this.hopTimer >= 60){

        this.hopTimer = 0;

        this.anims.play('slimeJump', true);

        this.body.setVelocityY(-550);

        if(player.x < this.x){

          this.body.setVelocityX(-500);

        }else{

          this.body.setVelocityX(500);

        }

      }

    }

  }

  flashConfig(){

    if(this.flash){

      this.flashDelay += 1;

      if(this.flashDelay >= 10){

        this.clearTint();
        this.flash = false;

      }

    }

  }

  preUpdate(time, delta){

    super.preUpdate(time, delta);

    this.trackPlayer();

    this.flashConfig();

  }

}

class Rocket extends Enity {

  constructor(scene, x, y, key){

    super(scene, x, y, key);

    scene.objectsGroup.add(this);

    this.setDepth(0);

  }

}
