boardWidth = 500;
boardHeight = 500;
paddle1X = 20;
paddle1Y = 40;
paddle2X = 460
paddle2Y = 40;
paddleWidth = 20;
paddleHeight = 80;
paddle1Velocity = 0;
paddle2Velocity = 0;
paddleSpeed = 5;
ballX = 200;
ballY = 250;
ballWidth = 20;
ballHeight = 20;
ballXSpeed = 5;
ballYSpeed = 5;
function setup(){
  //createCanvas(windowWidth, windowHeight);
  createCanvas(boardWidth,boardHeight);
  paddle1 = new paddle(20, 40, 20, 80);
  paddle2 = new paddle(460, 40, 20, 80);
  ball = new ball(200, 250, 20, 20);
}

function draw(){
  background(0);
  // Set color
  //fill(204, 101, 192, 127);
  stroke(255, 255, 255);

  paddle1.draw();

  paddle2.draw();

  //Ball movement
  ball.checkBoardCollision(boardWidth, boardHeight);
  ball.checkPaddleCollision(paddle1);
  ball.checkPaddleCollision(paddle2);
  ball.draw();

}

function keyReleased(){
  if (keyCode == UP_ARROW){
    paddle1.velocity = 0 ;
  }
  if (keyCode == DOWN_ARROW){
    paddle1.velocity = 0;
  }
  if (key == 'W' || key == 'w'){
    paddle2.velocity = 0 ;
  }
  if (key == 'S' || key == 's'){
    paddle2.velocity = 0;
  }

}

function keyPressed(){

  if (keyCode == UP_ARROW){
    paddle1.velocity = -paddle1.speed ;
  }
  if (keyCode == DOWN_ARROW){
    paddle1.velocity = paddle1.speed;
  }

  if (key =='W' || key == 'w'){
    paddle2.velocity = -paddle1.speed;
  }
  if (key == 'S' || key == 's'){
    paddle2.velocity = paddle1.speed;
  }



  }
