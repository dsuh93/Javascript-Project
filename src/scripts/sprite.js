class Sprite {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    // this.sprite = document.getElementById("sprite-standing-2");
    this.width = 100;
    this.height = 100;
    this.direction = "left";
    this.jumping = false;
    this.maxSpeed = 7;
    this.speed = 0;
    this.vertical = 0;
    this.constants = {
      gravity: 0.7,
      jumpSpeed: -15
    }

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height,
    }
  }

  jump() {
    if (this.jumping) {
      this.vertical = this.constants.jumpSpeed;
    }
  }

  fall() {
    if (this.jumping) {
      this.vertical += this.constants.gravity;
    }
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }


  draw(ctx, frames) {
    let sprite;
    if (this.direction === "left") {
      if (frames < 15 || (frames >= 30 && frames < 45)) {
        sprite = document.getElementById("lt-sprite-standing-1");
      } else {
        sprite = document.getElementById("lt-sprite-standing-2");
      }
    } else if (this.direction === "right") {
      if (frames < 15 || (frames >= 30 && frames < 45)) {
        sprite = document.getElementById("rt-sprite-standing-1")
      } else {
        sprite = document.getElementById("rt-sprite-standing-2")
      }
    }
    ctx.drawImage(sprite, this.position.x, this.position.y, 100, 100)
  }

  update(deltaTime) {
    if(!deltaTime) return;
    this.position.x += this.speed;
    this.position.y += this.vertical;
    if (this.position.x + 30 < 0) {
      this.position.x = -30;
    }
    if (this.position.x + 75 > this.gameWidth) {
      this.position.x = this.gameWidth - 75;
    }
    if (this.position.y < this.gameHeight - this.height - 10) {
      this.vertical += this.constants.gravity;
    }
    if (this.position.y > this.gameHeight - this.height - 10) {
      this.position.y = this.gameHeight - this.height - 10;
      this.jumping = false;
    }
  }

}

export default Sprite;