function ball(x, y, width, height){
  this.posX = x;
  this.posY = y;
  this.width = width;
  this.height = height;
  this.speedX = 10;
  this.speedY = 10;

  this.draw = function(){
    ellipse(this.posX, this.posY, this.width, this.height);
  }

  this.checkBoardCollision = function(boardWidth, boardHeight){


    if (this.posX < 0 ){
      this.posX = 0;
      this.speedX = -this.speedX;
    }
    else if(this.posX > boardWidth){
      this.posX = boardWidth - this.width;
      this.speedX = -this.speedX;
    }
    if (this.posY < 0 || this.posY > boardHeight){
      this.speedY = -this.speedY;
    }
    //Update speed
    this.posX = this.posX + this.speedX;
    this.posY = this.posY + this.speedY;


  }

  this.checkPaddleCollision = function(paddle){
    if (this.posX < paddle.posX + paddle.width &&
        this.posX + this.width > paddle.posX &&
        this.posY < paddle.posY + paddle.height &&
        this.posY + this.height > paddle.posY){
      this.speedX = -this.speedX;
      console.log("Collision");
    }

  }

}
