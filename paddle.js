function paddle(x, y, width, height){
  this.posX = x;
  this.posY = y;
  this.width = width;
  this.height = height;
  this.velocity = 0;
  this.speed = 5;
  this.score = 0;
  
  this.draw = function(){
    this.posY = this.posY + this.velocity;
    rect(this.posX, this.posY, this.width, this.height);
  }

}
