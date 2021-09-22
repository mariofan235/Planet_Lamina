export class Bullet extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y, key, speed){

    super(scene, x, y, key);

    scene.add.existing(this);

    scene.physics.world.enableBody(this);

    scene.playerProjectiles.add(this);

    this.body.allowGravity = false;

    this.startX = x;

    this.body.setVelocityX(speed);

    this.blastTimer = 1;

    this.fadeOut = this.scene.tweens.add({
          targets: this,
          scaleX: 5,
          scaleY: 5,
          alpha: 0,
          duration: 700,
          ease: 'Power2'
        }, this);

    //scene.physics.velocityFromRotation(angle, speed, this.body.velocity);

  //  this.deleteTimer = 0;


  }

  destroyBullet(){

    this.fadeOut.remove();

    this.destroy(true, true);

  }

  preUpdate(time, delta){

    super.preUpdate(time, delta);

    this.blastTimer++;

    if(this.body.onWall() || Math.abs(this.x - this.startX) >= 200){

      this.destroyBullet();

    }

  }

}
