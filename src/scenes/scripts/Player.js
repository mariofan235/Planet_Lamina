import {Bullet} from './Projectile.js';

export class Player extends Phaser.Physics.Arcade.Sprite {

  constructor(scene, x, y, key){

    super(scene, x, y, key);

    scene.add.existing(this);

    scene.physics.world.enableBody(this);

    scene.playerGroup.add(this);

    this.body.allowGravity = true;

    this.setCollideWorldBounds(true);
    //
    // this.body.onWorldBounds = true;

    this.controls = scene.controls;

    this.jumpTimer = 0;
    this.jumpHeight = 160;

    this.status = 'none';

    this.setDepth(1);

    this.setSpeed = 25;

    this.kickbackForce = false;

    this.momentumLockTimer = 0;

    this.overheatTimer = 0;

    this.leafBlower_force = 0;

    this.launchCharged = false;

    this.shooting = false;

    this.setScale(1.5);

    this.body.setSize(22, 0);

    this.animDelay = 0;

    this.health = 3;

    this.recoveryTimer = 0;

    // scene.physics.add.overlap(this, scene.map.getLayer(1).tilemapLayer, this.playerDamage, function (a, tile) {
    //
    //   return (tile.index != -1);
    //
    // }, this);

  }

  preUpdate(time, delta){

    super.preUpdate(time, delta);

    if(this.recoveryTimer > 0){

      this.recoveryTimer++;

      if(this.recoveryTimer >= 120){

        this.recoveryTimer = 0;

        this.setAlpha(1, 1, 1, 1);

      }

    }

    if(this.status == 'none'){

      this.movement();

      this.jumpConfig();

      this.blowerGunConfig();

    }else{

      this.kickback();

    }

    if(this.body.velocity.y >= 800){
      this.body.setVelocityY(800);
    }

    if(this.momentumLockTimer > 0){

      this.momentumLockTimer++;

      if(this.momentumLockTimer >= 19 || this.body.onFloor()){

        this.momentumLockTimer = 0;

      }

    }

    this.bottomPitCheck(this.scene.levelSize.height);

  }

  bottomPitCheck(height){

  //  this.defeat();

    if(this.y > height + 32){

      this.defeat();

    }

  }

  defeat(){

    this.scene.events.emit('playerDefeat', {x: this.getCenter().x, y: this.getCenter().y});

    this.destroy(true, true);

  }

  kickback(){

    if(this.status == 'kickback'){

      this.anims.play('hurt', true);

      if(this.kickbackForce){

        this.kickbackForce = false;

        this.body.setVelocityX(-this.body.velocity.x)

        this.body.setVelocityY(-300);

      }else if(this.body.onFloor() && this.body.velocity.y >= 0){

        this.status = 'none';

      }

    }

  }

  playerHeal(){

    if(this.health < 3){

      this.health++;

    }else{

      for(var i = 1; i <= 5; i++){

        this.scene.events.emit('addCoin');

      }

    }

  }

  playerDamage(){

    if(this.recoveryTimer == 0){

      this.setAlpha(0.5, 0.5, 0.5, 0.5);

      this.recoveryTimer = 1;

      this.health--;

      if(this.health < 1){

        this.defeat();

      }else{

        this.status = 'kickback';

        this.kickbackForce = true;

      }

    }

  }

  blowerGunConfig(){

    if(this.shooting){

      this.animDelay++;

      if(this.animDelay >= 20){
        this.animDelay = 0;
        this.shooting = false;
      }

    }

    var spaceKey = this.scene.cursors.space;

    if(this.keyJustDown(spaceKey)){

      this.launchBullet(this.getCenter().x, this.getCenter().y);

    }else if(this.controls.ACTION){

      if(spaceKey.getDuration() >= 500){

        this.launchCharged = true;

      }

    }

    if(spaceKey.isUp && this.launchCharged){

      this.launchBullet(this.getCenter().x, this.getCenter().y);

    }

  }

  launchBullet(x, y){

    var speedX = 700;

    var key = 'bullet';

    if(this.launchCharged){

      speedX = 1000;

      key = 'chargeBullet';

      //Kickback

      this.body.setVelocityY(-300);

      if(!this.flipX){

        this.body.setVelocityX(-400);

      }else{

        this.body.setVelocityX(400);

      }

      this.launchCharged = false;

    }

    if(!this.flipX){

      new Bullet(this.scene, x + 48, y + 7, key, speedX);

    }else{

      new Bullet(this.scene, x - 58, y + 7, key, -speedX);

    }

    this.shooting = true;

    this.animDelay = 0;

  }

  movement(){

    var string = '';

    if(this.shooting){
      string = 'shoot_';
    }

    if(this.controls.LEFT){

      this.flipX = true;

      if(this.body.onFloor()){

        if(this.body.velocity.x > -400){

          this.body.velocity.x-= this.setSpeed;

        }

      }else if(this.momentumLockTimer == 0){

        if(this.body.velocity.x > -400){

          this.body.velocity.x-= this.setSpeed;

        }

      }

    }else if(this.controls.RIGHT){

      this.flipX = false;

      if(this.body.onFloor()){

        if(this.body.velocity.x < 400){

          this.body.velocity.x+= this.setSpeed;

        }

      }else if(this.momentumLockTimer == 0){

        if(this.body.velocity.x < 400){

          this.body.velocity.x+= this.setSpeed;

        }

      }

    } else {

      if(this.body.onFloor()){

        if(this.body.velocity.x < 0){

          this.body.velocity.x += 20;

          if(this.body.velocity.x >= 0){

            this.body.setVelocityX(0);

          }

        }else if(this.body.velocity.x > 0){

          this.body.velocity.x -= 20;

          if(this.body.velocity.x <= 0){

            this.body.setVelocityX(0);

          }

        }

      }


    }

    if(this.body.onFloor()){

      if(Math.floor(this.body.velocity.x) == 0){

        if(this.health == 1 && !this.shooting){

          this.anims.play('tiredIdle', true);

        }else{

          this.anims.play(string + 'idle', true);
          //this.anims.play('shoot_idle', true);

        }

      }else {
        this.anims.play(string + 'walk', true);
      }

    }else{

      if(this.body.velocity.y < 0 || this.shooting){

        this.anims.play(string + 'jump', true);

      }else {
        this.anims.play('fall', true);
      }

    }


  }

  // leafBlowerConfig(){
  //
  //   var pointer = this.scene.pointer;
  //
  //   if(pointer.isDown){
  //
  //     const point = new Phaser.Geom.Point(this.getCenter().x, this.getCenter().y);
  //
  //     var pointerAngle = Phaser.Math.Angle.Between(point.x, point.y, pointer.worldX + this.scene.mainCam.scrollX, pointer.worldY + this.scene.mainCam.scrollY);
  //
  //     if(this.leafBlower_force < 50){
  //
  //       this.leafBlower_force+=10;
  //
  //     }
  //
  //     this.blowWindForce(point.x, point.y, pointerAngle, 500);
  //
  //     //this.scene.physics.velocityFromRotation(pointerAngle - Math.PI, this.leafBlower_force, this.body.velocity);
  //
  //     var newForce = this.scene.physics.velocityFromRotation(pointerAngle - Math.PI, this.leafBlower_force);
  //
  //     if(Math.abs(this.body.velocity.x) <= 500){
  //
  //       this.body.setVelocityX(this.body.velocity.x + newForce.x);
  //
  //     }
  //
  //     if(Math.abs(this.body.velocity.y) > -500){
  //
  //       this.body.setVelocityY(this.body.velocity.y + newForce.y);
  //
  //     }
  //
  //     // this.body.setVelocity(this.body.velocity.x + newForce.x, this.body.velocity.y + newForce.y);
  //
  //
  //   }else{
  //
  //     this.leafBlower_force -= 10;
  //
  //     if(this.leafBlower_force <= 0){
  //
  //       this.leafBlower_force = 0;
  //
  //     }
  //
  //   }
  //
  // }

  // blowWindForce(x, y, launchAngle, speed){
  //
  //   var w = new WindParticle(this.scene, x, y, launchAngle, speed);
  //
  // }

  keyJustDown(key){

    return Phaser.Input.Keyboard.JustDown(key);

  }

  jumpConfig(){

    if(this.controls.UP){

      if(this.body.onFloor()){

        const jumpBtn = this.keyJustDown(this.scene.cursors.up) || this.keyJustDown(this.scene.keyW);

        if(jumpBtn){

          this.body.setVelocityY(-this.jumpHeight - Math.abs(this.body.velocity.x*0.25));

          this.jumpTimer = 1;

        }


      }else if(this.jumpTimer > 0){

        if(this.jumpTimer >= 15 || this.body.velocity.y > 0){

          this.jumpTimer = 0;

        }else{

          this.body.velocity.y -= this.jumpHeight/this.jumpTimer;
          this.jumpTimer++;

        }

      }

    }else{

      this.jumpTimer = 0;

    }

  }

  wallJump(){

    // if(this.body.onWall() && this.body.velocity.y > 0){
    //
    //   var jumpBtn = this.keyJustDown(this.scene.cursors.up) || this.keyJustDown(this.scene.keyW);
    //
    //   if(!jumpBtn){
    //
    //     return;
    //
    //   }
    //
    //   if(this.body.blocked.right && this.controls.RIGHT){
    //
    //     this.body.setVelocityY(-125);
    //     this.jumpTimer = 1;
    //
    //     this.body.setVelocityX(-300);
    //
    //     this.momentumLockTimer = 1;
    //
    //   }
    //
    // }

  }

  // updateGunPos(g){
  //
  //   g.setPosition(this.getCenter().x, this.getCenter().y);
  //
  //   g.setVelocity(this.body.velocity.x, this.body.velocity.y);
  //
  //   const point = new Phaser.Geom.Point(g.x, g.y);
  //
  //   var pointer = this.scene.pointer;
  //
  //   var pointerAngle = Phaser.Math.Angle.Between(point.x, point.y, pointer.worldX + this.scene.mainCam.scrollX, pointer.worldY + this.scene.mainCam.scrollY);
  //
  //   Phaser.Actions.RotateAroundDistance([g], point, pointerAngle, 100);
  //
  // }

}
